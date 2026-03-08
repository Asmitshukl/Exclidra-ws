import { NextAuthOptions } from "next-auth";
import Credentials, { CredentialsProvider } from "next-auth/providers/credentials";
import bcrypt from "bcrypt"


export const authOptions:NextAuthOptions={
    providers:[
        CredentialsProvider({
            id:"Credentials",
            name:"Credentials",
            Credentials:{
                email:{label:"Email",type:"text"},
                password:{label:"Password", type:"password"}
            },
            async authorize(credentials:any):Promise<any>{
                
            }
        })
    ]
}