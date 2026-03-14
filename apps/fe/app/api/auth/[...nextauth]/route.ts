import NextAuth, { DefaultSession } from "next-auth";
import GoogleProvider  from "next-auth/providers/google";
import { HTTP_BACKEND } from "@repo/config/config";
import axios from "axios";

declare module "next-auth" {
  interface Session {
    user: {
      backendToken?: string;
    } & DefaultSession["user"];
  }
  interface User {
    backendToken?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    backendToken?: string;
  }
}

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks:{
    async signIn({user,account}){
      if(account?.provider === "google"){
        try{
          const res=await axios.post(`${HTTP_BACKEND}/auth/google`,{
            email:user.email,
            name:user.name
          });
          user.backendToken = res.data.token
        }catch(e){
          console.error("google auth failed",e);
          return false;
        }
      }
      return true;
    },
    async jwt({token,user}){
      if(user?.backendToken){
        token.backendToken=user.backendToken
      }
      return token
    },
    async  session({session,token}) {
      session.user.name = token.backendToken as string;
      return session;
    },
  },
  pages: {
    signIn: "/signin",   // your existing login page
    signOut:"/"
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };