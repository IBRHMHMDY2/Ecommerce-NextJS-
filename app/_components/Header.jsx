'use client'
import { UserButton, useUser } from '@clerk/nextjs'
import { ShoppingCart } from 'lucide-react';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

function Header() {
    const [LoggedIn, setLoggedIn] = useState(false);
    useEffect(()=>{
        setLoggedIn(window.location.href.toString().includes('sign-in'));
    }, [])
    const {user} = useUser();
  return !LoggedIn && (
    <header className="bg-white dark:bg-gray-900">
        <div className="mx-auto flex h-16 items-center justify-between gap-8 px-4 sm:px-6 lg:px-8 shadow-md">
            <Image className='logo' src='/logo.svg' width={50} height={50} alt='logo image ecommerce nextjs'/>
            <div className='flex flex-1 items-center justify-end md:justify-between'>
                <nav aria-label="Global" className="hidden md:block">
                    <ul className="flex items-center gap-6 text-sm">
                        <li>
                            <a
                                className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                href="/"
                            >Home</a>
                        </li>

                        <li>
                            <a
                                className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                href="#explore"
                            >
                                Explore
                            </a>
                        </li>

                        <li>
                            <a
                                className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                href="#projects"
                            >
                                Projects
                            </a>
                        </li>

                        <li>
                            <a
                                className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                href="#aboutus"
                            >
                                About Us
                            </a>
                        </li>

                        <li>
                            <a
                                className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                href="#contactus"
                            >
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="flex items-center gap-4">
                {!user ? 
                    <div className="sm:flex sm:gap-4">
                    <a
                        className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow dark:hover:bg-teal-500"
                        href="/sign-in"
                    >
                        Login
                    </a>

                    <div className="hidden sm:flex">
                        <a
                        className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                        href="/sign-up"
                        >
                        Register
                        </a>
                    </div>
                </div> 
                :
                
                <div className='flex items-center gap-4'>
                    <div className='relative flex items-center gap-6 hover:cursor-pointer'>
                        <span className='absolute right-[-12px] top-[-15px] text-center w-6 h-6 rounded-full text-sm bg-slate-200 flex items-center justify-center'>0</span>
                        <ShoppingCart size={32} className='text-primary '/>
                    </div>
                    <UserButton afterSignOutUrl='/'/>
                </div>
                    
                }

                {/* <div className="block md:hidden">
                    <button
                        className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                    >
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div> */}
            </div>
        </div>
    </header>
  )
}

export default Header