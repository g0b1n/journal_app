"use client"

import Link from 'next/link';
import React, { useEffect} from 'react';
import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Sun, Moon } from "lucide-react";
import { useDarkMode } from '@/context/DarkModeContext';


function NavBar() {

    const { isDarkMode, toggleDarkMode } = useDarkMode();
    const { data: session, status } = useSession();
    const router = useRouter();

     // redirect to login page if not authenticated
        useEffect(() => {
            if (status === 'unauthenticated') {
                router.push("/auth/signin")
            }
        }, [status, router])
    
        if (status === 'loading') {
            return <div>Loading...</div>
        }

        const handleLogout = async () => {
            // signs out immediately without redirecting
            await signOut({ redirect: false});
            router.push("/auth/signin");
        }


    return (
        <nav className='bg-gray-100 text-gray-900 fixed top-0 left-0 w-full z-50 shadow-md'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between h-16 items-center'>
                    {/* logo section  */}
                    <div className='flex items-center'>
                        <Link href='/' className='text-2xl font-black hover:text-blue-500'>Journal App</Link>
                    </div>

                    <div className='hidden md:flex space-x-6'>    
                        {/* Need to conditionally render if logged in show Log Out btn if not loggedin show log-in and Sign-up btn  */}
                        {session ?(
                            <div>
                                <div className='flex items-center space-x-3'>
                                    <Link href="/" className='px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-200'>
                                        Home
                                    </Link>

                                    <Link href="/profile" className='px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-200'>
                                        My Profile
                                    </Link>
                                    <Link href="/setting" className='px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-200'>
                                        Setting
                                    </Link>
                                    <p className='text-blue-500'>{session.user.username}</p>
                                    <Link onClick={handleLogout} href="/auth/signin" className='px-3 py-2 rounded-md text-sm font-medium hover:bg-red-200'>
                                        Log out
                                    </Link>
                                </div>
                            </div>
                        ) : (
                            <div>
                            <Link href="/auth/signin" className='px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-200'>
                                Log In
                            </Link>
                            <Link href="/auth/register" className='px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-200'>
                                Sign up
                            </Link>
                            </div>
                        )}

                        
                        
                       

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