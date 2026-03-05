"use client"

import { WS_URL } from "@repo/config/config"
import { useEffect, useState } from "react"
import { Canvas } from "./Canvas";


export function Roomcanvas({roomId}:{roomId:string}){
    const [socket,setsocket]=useState<WebSocket | null>(null);
    useEffect(()=>{
        const ws=new WebSocket(`${WS_URL}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI0NWQ0NzVmMS00YTc2LTRmYzUtYTkxZi0xZDlkM2FlMzk3NGMiLCJpYXQiOjE3NzI3MTEwODl9.e1o16szFQpdQS0PthFZ9mZp_3ODJqIJ4JTo4F4c78pw`)
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