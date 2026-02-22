import {Request,Response, NextFunction } from "express";
import jwt, { JwtPayload }  from "jsonwebtoken";

import {jwt_secret} from "@repo/config/jwt"

export default function authmiddleware(req:Request,res:Response,next:NextFunction){
    const token =req.headers["authorization"] ?? "";

    const decoded=jwt.verify(token,jwt_secret);

    if(!(decoded as JwtPayload).userId){

    }else{
        res.status(403).json({
            message:"unauthorised user"
        })
    }
}