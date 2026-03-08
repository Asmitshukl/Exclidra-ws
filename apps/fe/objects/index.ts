import { HTTP_BACKEND } from "@repo/config/config";
import axios from "axios";

type shape={
    type:"Rectangle";
    x:number;
    y:number;
    width:number;
    height:number;
} | {
    type:"Cicle";
    centrex:number;
    centrey:number;
    radius:number;
}


export async function initdraw(canvas :HTMLCanvasElement , roomId:string,socket:WebSocket){
    
    const ctx=canvas.getContext("2d");


    let existingshape : shape[]=await getexistingshapes(roomId);

    if(!ctx)return 
    // ctx.fillStyle="rgba(0,0,0)";
    // ctx.fillRect(0,0,canvas.width,canvas.height);

    socket.onmessage=(event)=>{
        const message=JSON.parse(event.data);
        if(message.type == "chat"){
            const parsedshape=JSON.parse(message.message);
            existingshape.push(parsedshape.shape);
            redrawcanvas(existingshape,ctx,canvas);
        }
    }

    redrawcanvas(existingshape,ctx,canvas);
    let startX=0;
    let startY=0;

    let clicked=false;
    
    canvas.addEventListener("mousedown",(e)=>{
    clicked=true;
    startX=e.clientX;
    startY=e.clientY
    })
    canvas.addEventListener("mouseup",(e)=>{
        clicked=false;
        const width=e.clientX - startX;
        const height=e.clientY- startY;
        const shape: shape=({
            type:"Rectangle",
            x:startX,
            y:startY,
            height,
            width
        })
        existingshape.push(shape);

        socket.send(JSON.stringify({
            type: "chat",
            message: JSON.stringify({
                shape
            }),
            roomId
        }))
    })
    canvas.addEventListener("mousemove",(e)=>{
        if(clicked){ 
            const width=e.clientX - startX;
            const height=e.clientY- startY;
            redrawcanvas(existingshape,ctx,canvas);
            ctx.strokeStyle="rgba(255,255,255)";
            ctx.strokeRect(startX,startY,width,height);
        }
    })
    
}

function redrawcanvas(existingshape :shape[],ctx:CanvasRenderingContext2D,canvas:HTMLCanvasElement){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle="rgba(0,0,0)";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    existingshape.map((shape)=>{
        if(shape.type === "Rectangle"){
            ctx.strokeStyle="rgba(255,255,255)";
            ctx.strokeRect(shape.x,shape.y,shape.width,shape.height);
        }
    })
}

async function getexistingshapes(roomId:string){
    const res=await axios.get(`${HTTP_BACKEND}/chats/${roomId}`);
    console.log(res);
    const messages=res.data.messages || [];
    console.log(messages)
    const shapes=messages.map((x :{message:string})=>{
        const messagedata=JSON.parse(x.message);
        return messagedata.shape;
    })

    return shapes;
}