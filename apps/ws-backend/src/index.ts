import { WebSocketServer } from "ws";
import jwt, { JwtPayload } from "jsonwebtoken"

import {jwt_secret} from "@repo/config/jwt";

const wss=new WebSocketServer({port:8080});

wss.on('connection',function connection(ws,request){


    const url =request.url;
    if(!url)return;

    const quereyparams=new URLSearchParams(url.split('?')[1]);
    const token=quereyparams.get('token') as string;
    const decoded=jwt.verify(token,jwt_secret) 

    if(!decoded || !(decoded as JwtPayload).userId){
        ws.close();
        return;
    }

    ws.on('message',function message(data){
        console.log(data);
        ws.send("recieved something")
    })

    
});