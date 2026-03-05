import { Roomcanvas } from "@/components/RoomCanvas";

export default async function Canvaspage({params}:{
    params:{
        roomid:string
    }
}){
    const roomId=(await params).roomid;
    console.log(roomId);
    
    return (
        <div>
            <Roomcanvas roomId={roomId} />
        </div>
    )
}