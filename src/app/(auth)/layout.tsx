"use client";

import { Button } from '@/components/ui/button'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

interface AuthLayoutProps {
    children: React.ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {

    const pathName = usePathname();
    const isSignIn = pathName === '/sign-in'

    return (
        <main className='bg-neutral-100 min-h-screen'>
            <div className='mx-auto max-w-screen-2xl p-4'>
                <nav className='h-[75px] px-6 rounded-md flex justify-between items-center sticky top-0 '>
                    <h2>Gira clone</h2>
                    <Button asChild variant="secondary">
                        <Link href={isSignIn ? "/sign-up" : "/sign-in"}>
                            {isSignIn ? "Sign Up" : "Login"}
                        </Link>
                    </Button>
                </nav>
                <div className='flex flex-col items-center justify-center pt-4 md:pt-10'>
                    {children}
                </div>
            </div>
        </main>
    )
}

export default AuthLayout