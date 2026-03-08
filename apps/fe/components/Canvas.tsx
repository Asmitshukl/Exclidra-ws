"use client"
import { initdraw } from "@/objects";
import { Game } from "@/objects/Game";
import { useEffect, useRef, useState } from "react";
import { IconButton } from "./IconButton";
import { Circle, Pencil, RectangleHorizontalIcon } from "lucide-react"

export type Tool="circle" | "Rectangle" | "pencil";



export function Canvas({roomId ,socket}:{
        roomId:string,
        socket:WebSocket
    }
){
     const canvasref=useRef<HTMLCanvasElement>(null);
     const [game,setGame]=useState<Game>();
     const [selectedTool,setSelectedTool]=useState<Tool>("circle");

    useEffect(()=>{
        game?.setTool(selectedTool)
    },[selectedTool,game])
     
    useEffect(()=>{
        if(canvasref.current){
            const g=new Game(canvasref.current,roomId,socket);
            setGame(g);
            return ()=>{
            g.destroy();
            }
        }
    },[canvasref])

    return (
        <div style={{
            height : "100vh",
            overflow: "hidden"
        }}>
            <canvas ref={canvasref} width={window.innerWidth}  height={window.innerHeight} ></canvas>
            <Topbar  selectedTool={selectedTool} setSelectedTool={setSelectedTool}/> 
        </div>
    )
}

function Topbar({selectedTool,setSelectedTool}:{
    selectedTool:Tool,
    setSelectedTool:(s:Tool)=>void
}){
    return <div style={{
        position:"fixed",
        top:10,
        left:10
    }}>
        <div>
            <IconButton
              onClick={()=>setSelectedTool("pencil")}
              activated={selectedTool === "pencil"}
              icon={<Pencil/>}
            />
            <IconButton
            onClick={()=>setSelectedTool("Rectangle")}
            activated={selectedTool==="Rectangle"}
            icon={<RectangleHorizontalIcon/>}
            />
            <IconButton
            onClick={()=>setSelectedTool("circle")}
            activated={selectedTool === "circle"}
            icon={<Circle/>}
            />
        </div>
    </div>
}