"use client"
import Rect from "@/objects/rect";
import { useEffect, useRef } from "react"

export default function Canvas(){
    const canvasref=useRef<HTMLCanvasElement>(null);

    useEffect(()=>{
        if(canvasref.current){
            Rect(canvasref.current);
        }
    },[canvasref])

    return (
        <div>
            <canvas ref={canvasref} width={1080}  height={1080} ></canvas>
        </div>
    )
}