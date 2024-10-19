import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import * as z from 'zod';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormField, FormItem, FormControl, FormMessage } from '@/components/ui/form';
import { DottedSeparator } from '@/components/Dotted-Separator';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

import { signUpSchema } from '../Schemas';


export const SignUpCard = () => {

    const form = useForm<z.infer<typeof signUpSchema>>({
        resolver: zodResolver(signUpSchema),
        defaultValues: ({
            name: '',
            email: '',
            password: ''
        })
    });

    const onSubmit = (values: z.infer<typeof signUpSchema>) => {
        console.log(values);
    };

    return (
        <Card className='w-full h-full md:w-[486px] border-none shadow-none'>
            <CardHeader className='flex items-center justify-center text-center p-7'>
                <CardTitle className='text-2xl'>
                    Sign up
                </CardTitle>
                <CardDescription className='mt-2'>
                    By signing up, you agree to our{" "}
                    <Link href={'/privacy'}>
                        <span className='text-blue-700'>Privacy Policy</span>
                    </Link>{" "}and{" "}
                    <Link href={'/terms'}>
                        <span className='text-blue-700'>Terms of services</span>
                    </Link>
                </CardDescription>
            </CardHeader>
            <div className='px-7'>
                <DottedSeparator />
            </div>
            <CardContent className='p-7'>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
                        <FormField
                            name='name'
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            type='text'
                                            placeholder='Enter your name'
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            name='email'
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            type='email'
                                            placeholder='Enter email address'
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            name='password'
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            type='password'
                                            placeholder='Enter password'
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button disabled={false} size="lg" className='w-full'>
                            Login
                        </Button>
                    </form>
                </Form>
            </CardContent>
            <div className='px-7'>
                <DottedSeparator />
            </div>
            <CardContent className='p-7 flex flex-col gap-y-4'>
                <Button variant={"secondary"} size={"lg"} className='w-full' disabled={false}>
                    <FcGoogle className='size-5 mr-2' />
                    Login with google
                </Button>
            </CardContent>
            <div className='px-7'>
                <DottedSeparator />
            </div>
            <CardContent className='p-7 flex items-center justify-center'>
                <p>Already have an account?</p>
                <Link href='/sign-in'>
                    <span className='text-blue-700'>&nbsp;Sign In</span>
                </Link>
            </CardContent>
        </Card>
    )
};