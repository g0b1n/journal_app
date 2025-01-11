"use client"

import Link from 'next/link';
import React from 'react';

function NavBar() {

    return (
        <nav className='bg-gray-100 text-gray-900 fixed top-0 left-0 w-full z-50 shadow-md'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between h-16 items-center'>
                    {/* logo section  */}
                    <div className='flex items-center'>
                        <Link href='/' className='text-2xl font-black'>Journal App</Link>
                    </div>

                    <div className='hidden md:flex space-x-6'>
                        <Link href="/" className='px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-200'>
                            Home
                        </Link>
                        <Link href="/about" className='px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-200'>
                            About
                        </Link>
                        <Link href="/about" className='px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-200'>
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;