import * as z from 'zod'

export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(1, 'password is Required')
});


export const signUpSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email(),
    password: z.string().min(1, "Password is required")
});