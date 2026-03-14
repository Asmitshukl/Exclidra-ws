"use client"

import { WS_URL } from "@repo/config/config"
import { useEffect, useState } from "react"
import { Canvas } from "./Canvas";


export function Roomcanvas({roomId}:{roomId:string}){
    const [socket,setsocket]=useState<WebSocket | null>(null);
    const token=localStorage.getItem("token")
    useEffect(()=>{
        const ws=new WebSocket(`${WS_URL}?token=${token}`)
        ws.onopen=()=>{
            setsocket(ws)
            const data=JSON.stringify({
                type:"join_room",
                roomid:roomId
            })
            console.log(data);
            ws.send(data);
        }
    },[])
    if(!socket){
        return <div>
            connecting to server .. 
        </div>
    }
    return <div>
        <Canvas roomId={roomId} socket={socket}></Canvas>
    </div>
}