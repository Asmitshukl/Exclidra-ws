import  Express  from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {CreateRoomSchema, CreateUserSchema, SigninSchema} from "@repo/common/types"
import {client} from "@repo/db/client";

const app=Express();
app.use(Express.json());
 
app.post("/signup",async(req,res)=>{
    // const data=CreateUserSchema.safeParse(req.body);
    const username=req.body.username;
    const password=req.body.password;
    const name=req.body.name;
    const email=req.body.email;
    await client.user.create({
        data:{
            email,
            password,
            name:username,
        }
    })
    return res.json({
        message:"u are done"
    })
})


app.post("/signin",async(req,res)=>{
    const username=req.body.username;
    const password =req.body.password;

    
})

app.post("/room",(req,res)=>{

})

app.listen(3002);