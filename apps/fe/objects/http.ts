import { HTTP_BACKEND } from "@repo/config/config";
import axios from "axios";

export async function getexistingshapes(roomId:string){
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