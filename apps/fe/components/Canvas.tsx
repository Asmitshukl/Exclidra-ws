"use client"
import { initdraw } from "@/objects";
import { useEffect, useRef } from "react";

export function Canvas({roomId ,socket}:{
        roomId:string,
        socket:WebSocket
    }
){
     const canvasref=useRef<HTMLCanvasElement>(null);
    
    useEffect(()=>{
        if(canvasref.current){
            console.log("hi there")
            initdraw(canvasref.current,roomId,socket);
        }
    },[canvasref])

    return (
        <div>
            <canvas ref={canvasref} width={1080}  height={1080} ></canvas>
            
        </div>
    )
}