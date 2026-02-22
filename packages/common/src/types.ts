import {z}  from "zod";

export const CreateUserSchema=z.object({
    username:z.string().min(3).max(20),
    password:z.string(),
    name:z.string(),
    email: z.string().min(1, { message: "This field has to be filled." }).email("This is not a valid email."),
})

export const SigninSchema=z.object({
    email: z.string().min(1, { message: "This field has to be filled." }).email("This is not a valid email."),
    password:z.string(),
})

export const CreateRoomSchema=z.object({
    name:z.string().min(3).max(20)
})