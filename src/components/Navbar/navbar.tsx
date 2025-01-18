"use client"

import Link from 'next/link';
import React from 'react';
import { Sun, Moon } from "lucide-react";
import { useDarkMode } from '@/context/DarkModeContext';


function NavBar() {

    const { isDarkMode, toggleDarkMode } = useDarkMode();

    return (
        <nav className='bg-gray-100 text-gray-900 fixed top-0 left-0 w-full z-50 shadow-md'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between h-16 items-center'>
                    {/* logo section  */}
                    <div className='flex items-center'>
                        <Link href='/' className='text-2xl font-black hover:text-blue-500'>Journal App</Link>
                    </div>

                    <div className='hidden md:flex space-x-6'>
                        <Link href="/" className='px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-200'>
                            Home
                        </Link>

                        <Link href="/profile" className='px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-200'>
                            My Profile
                        </Link>
                        
                        {/* Need to conditionally render if logged in show Log Out btn if not loggedin show log-in and Sign-up btn  */}
                        <Link href="/login" className='px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-200'>
                            Log In
                        </Link>
                        <Link href="/signup" className='px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-200'>
                            Sign Up
                        </Link>

                        {/* toggle darkMode  */}
                        <button onClick={toggleDarkMode} className='ml-4'>
                            {isDarkMode ? (
                                <Moon className='cursor-pointer text-gray-900 hover:bg-blue-200 rounded-md px-1 py-1' size={30} />
                            ) : (
                                <Sun className='cursor-pointer text-gray-900 hover:bg-blue-200 rounded-md px-1 py-1' size={30} />
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;