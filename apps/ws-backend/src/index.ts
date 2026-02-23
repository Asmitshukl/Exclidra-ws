import { WebSocketServer ,WebSocket} from "ws";
import jwt, { JwtPayload } from "jsonwebtoken"
import {client} from "@repo/db/client"
import {jwt_secret} from "@repo/config/jwt";

const wss=new WebSocketServer({port:8080});

let usermap=new Map<WebSocket,String>();
let websmap=new Map<String,WebSocket>();
let roommap=new Map<String,String[]>();


function getuserid(token:String):string | null{

    try{
    const decoded=jwt.verify(token as string,jwt_secret);
    console.log(decoded);
    if(!decoded || !(decoded as JwtPayload).userid){
        return null;
    }
    return (decoded as JwtPayload).userid;
    }catch(e){
        return null;
    }

}

wss.on('connection',function connection(ws,request){


    const url =request.url;
    if(!url)return;

    const quereyparams=new URLSearchParams(url.split('?')[1]);
    const token=quereyparams.get('token') as string;
    console.log(token);
    const userid=getuserid(token);

    if(userid === null){
        ws.close();
        return null;
    }

    usermap.set(ws,userid);
    websmap.set(userid,ws);
    roommap.set(userid,[]),

    ws.on('message',async function message(data){
        let parseddata;
        if(typeof data != "string"){
            parseddata=JSON.parse(data.toString());
        }else{
            parseddata=JSON.parse(data);
        }
        if(parseddata.type === "join_room"){
            const user= usermap.get(ws);
            roommap.set(user as string,[parseddata.roomid])
        }
        if(parseddata.type === "leave_room"){
            const user=usermap.get(ws);
            if(!user)return;
            roommap.delete(user);
        }
        console.log("message recieved");
        console.log(parseddata);

        if(parseddata.type === "chat"){
            const roomid=parseddata.roomid;
            const message=parseddata.message;

            try{
            await client.chat.create({
                data:{
                    roomId:Number(roomid),
                    message,
                    userId:userid
                }
            });

            for(const [userid,rooms] of roommap){
                if(rooms.includes(roomid)){
                    websmap.get(userid)?.send(JSON.stringify({
                        type:"chat",
                        message:message,
                        roomid
                    }))
                }
            }
        }catch(e){
            return ;
        }

        }
    });

    
});