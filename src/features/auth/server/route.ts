import { Hono } from 'hono';
import { zValidator } from '@hono/zod-validator';
import { loginSchema, signUpSchema } from '../Schemas';


const app = new Hono()
    .post('/login', zValidator("json", loginSchema), async (c) => {

        const { email, password } = c.req.valid('json');

        console.log(email, password)

        return c.json({ email, password})
    })
 


export default app;