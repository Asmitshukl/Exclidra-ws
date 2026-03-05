import  Express  from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {CreateRoomSchema, CreateUserSchema, SigninSchema} from "@repo/common/types"
import {client} from "@repo/db/client";
import { jwt_secret } from "@repo/config/config";
import authmiddleware from "./middleware/authmiddleware";
import cors from "cors";

const app=Express();
app.use(Express.json());
app.use(cors());
 
app.post("/signup",async(req,res)=>{
    const parseddata=CreateUserSchema.safeParse(req.body);
    const hashpassword=await bcrypt.hash(parseddata.data?.password || "",5);
    if(!parseddata.success){
        return res.json({
            message:"data entry is wrong"
        })
    }
    try{
        const user =await client.user.create({
            data:{
                email:parseddata.data.email,
                password:hashpassword,
                name:parseddata.data.name
            }
        })
        res.json({
            userid:user.id
        })

    }catch(e){
        console.log(e);
        res.json({
            message:"there is some error please check"
        })
    }
})


app.post("/signin",async(req,res)=>{
    const parseddata = SigninSchema.safeParse(req.body);
    if(!parseddata.success){
        return res.json({
            message:"the input is not correct"
        })
    }
    const password=parseddata.data.password;
    const user =await client.user.findFirst({
        where:{
            email:parseddata.data.email,
        }
    })
    if(!user){
        return res.json({
            message:"user not found"
        })
    }
    const hashpassword=user?.password;
    const passwordverify=await bcrypt.compare(password,hashpassword || "");
    if(!passwordverify){
        return res.json({
            message:"user not found"
        })
    }
    const token=jwt.sign({
        userid:user?.id
    },jwt_secret)
    return res.json({
        token:token
    })
})

app.post("/room",authmiddleware,async(req,res)=>{
    const parseddata=CreateRoomSchema.safeParse(req.body);
    if(!parseddata.success){
        return res.json({
            message:"not the right credintials"
        })
    }
    try{
        //@ts-ignore
    const userId=req.userId;
    console.log(userId);
    const room=await client.room.create({
        data:{
            slug:parseddata.data.name,
            adminId:userId as string
        }
    })
    return res.json({
        roomid:room.id
    })
    }catch(e){
        return res.json({
            message:"there is some error"
        })
    }
})

app.get("/chats/:roomid" , async(req,res)=>{
    try{
        const roomid=Number(req.params.roomid);
        const messages=await client.chat.findMany({
            where:{
                roomId:roomid
            },orderBy:{
                id:"desc"
            },
            take:1000
        });
        console.log(messages);
        res.json({messages})
        }catch(e){
            console.log(e);
            res.json({
                messages:"Couldnt get the messges"
            })
        }
})

app.get("/room/:slug" , async(req,res)=>{
    const slug=req.params.slug;
    const room=await client.room.findFirst({
        where:{
            slug
        }
    });

    res.json({
        room
    })
})

app.listen(3002);