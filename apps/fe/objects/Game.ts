import {Tool} from "@/components/Canvas"
import { getexistingshapes } from "./http";


type Shape= {
    type:"Rectangle";
    x:number;
    y:number;
    width:number;
    height:number;
} | {
    type:"circle";
    centerX:number;
    centerY:number;
    radius:number;
}| {
    type:"pencil";
    points:{x:number; y:number}[];
}

export class Game{
    private canvas:HTMLCanvasElement;
    private ctx:CanvasRenderingContext2D;
    private existingShapes:Shape[];
    private roomId: string;
    private clicked:boolean;
    private startX = 0;
    private startY = 0;
    private slectedTool:Tool="circle";
    socket :WebSocket;
    private rect :any;
    private currentPath: {x:number; y:number}[] = [];

    constructor(canvas:HTMLCanvasElement , roomId : string ,socket :WebSocket){
        this.canvas=canvas;
        this.ctx=canvas.getContext("2d")!;
        this.existingShapes=[];
        this.roomId=roomId;
        this.socket=socket;
        this.clicked=false;
        this.init();
        this.initHandlers();
        this.initMousehandlers();
    }

    destroy(){
        this.canvas.removeEventListener("mousedown",this.mouseDownHandler)
        this.canvas.removeEventListener("mouseup",this.mouseUpHandler);
        this.canvas.removeEventListener("mousemove",this.mouseMoveHandler);
    }

    setTool(tool : Tool){
        this.slectedTool=tool;
        console.log(tool);
    }
    async init(){
        this.existingShapes=await getexistingshapes(this.roomId);
        // console.log(`this is shape  ${this.existingShapes}`)
        this.clearCanvas();
    }

    initHandlers(){
        this.socket.onmessage=(event)=>{
            const message=JSON.parse(event.data);
            console.log("message")
            console.log(message);
            if(message.type == "chat"){
                const parsedShape=JSON.parse(message.message);
                this.existingShapes.push(parsedShape.shape)
                this.clearCanvas();
            }
        }
    }

    clearCanvas(){
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
        this.ctx.fillStyle="rgba(0,0,0)";
        this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);

        this.existingShapes.map((shape)=>{
            console.log(shape.type)
            if(shape.type === "Rectangle"){
                this.ctx.strokeStyle = "rgba(255,255,255)";
                this.ctx.strokeRect(shape.x,shape.y,shape.width,shape.height);
            }else if(shape.type === "circle"){
                this.ctx.beginPath();
                this.ctx.arc(shape.centerX,shape.centerY,Math.abs(shape.radius),0,Math.PI *2);
                this.ctx.stroke();
                this.ctx.closePath();
            }else if(shape.type === "pencil"){
                if(!shape.points || shape.points.length === 0) return;
                this.ctx.beginPath();
                this.ctx.moveTo(shape.points[0].x, shape.points[0].y);
                shape.points.forEach(p => this.ctx.lineTo(p.x, p.y));
                this.ctx.stroke();
                this.ctx.closePath();
            }
        })
    }
    mouseDownHandler=(e)=>{
        this.clicked=true;
        if(this.slectedTool !== "pencil"){
            this.startX=e.clientX
            this.startY=e.clientY;
        }else{
            this.rect = this.canvas.getBoundingClientRect();
            this.startX = e.clientX - this.rect.left;  
            this.startY = e.clientY - this.rect.top;
            this.currentPath = [{x: this.startX, y: this.startY}];
            this.ctx.beginPath();
            this.ctx.moveTo(this.startX, this.startY);
        }
    }
    mouseUpHandler=(e)=>{
        this.clicked = false
        const width = e.clientX - this .startX;
        const height = e.clientY - this.startY;

        const selectedTool = this.slectedTool;
        let shape : Shape | null = null;
        if(selectedTool === "Rectangle"){
            shape = {
                type :"Rectangle",
                x:this.startX,
                y:this.startY,
                height,
                width
            }
        }else if(selectedTool === "circle"){
            const radius=Math.max(width,height)/2;
            shape={
                type:"circle",
                radius:radius,
                centerX:this.startX + radius,
                centerY:this.startY + radius
            }
        }
        else if(selectedTool === "pencil"){
            shape={
                type:"pencil",
                points: this.currentPath
            }
        }

        if(!shape)return ;
        this.existingShapes.push(shape);
        
        this.socket.send(JSON.stringify({
            type:"chat",
            message:JSON.stringify({
                shape
            }),
            roomId: this.roomId
        }))
    }
    mouseMoveHandler=(e)=>{
        if(this.clicked){
            const width=e.clientX - this.startX;
            const height=e.clientY - this.startY;
            // this.clearCanvas();
            this.ctx.strokeStyle="rgba(255,255,255)"
            const selectedTool=this.slectedTool;
            
            if(this.slectedTool === "Rectangle"){
                this.clearCanvas();
                this.ctx.strokeRect(this.startX,this.startY,width,height);
            }else if(selectedTool === "circle"){
                this.clearCanvas();
                const radius = Math.max(width,height)/2;
                const centerX = this.startX + radius;
                const centerY = this.startY + radius;
                this.ctx.beginPath();
                this.ctx.arc(centerX,centerY,Math.abs(radius),0,Math.PI *2);
                this.ctx.stroke();
                this.ctx.closePath();
            }else if(selectedTool === "pencil"){
                const x = e.clientX - this.rect.left;
                const y = e.clientY - this.rect.top;
                this.currentPath.push({x, y});
                this.ctx.lineTo(x, y);
                this.ctx.stroke();
            }
        }
    }

    initMousehandlers(){
        this.canvas.addEventListener("mousedown",this.mouseDownHandler);
        this.canvas.addEventListener("mouseup",this.mouseUpHandler);
        this.canvas.addEventListener("mousemove",this.mouseMoveHandler)
    }
}