"use client"

import React from 'react'
import Navbar from '@/components/Navbar/navbar';
import { useDarkMode } from '@/context/DarkModeContext';
import Footer from '@/components/Footer/footer';

const HomePageLayout = ({ children } : { children: React.ReactNode}) => {
    const { isDarkMode } = useDarkMode();

    return (
        <div className={`${isDarkMode ? "dark" : "light"} pt-16 bg-gray-50 text-gray-900 mt-5`}>
            <main className='flex flex-col min-h-screen w-full'>
                <Navbar />
                { children }
                <Footer />
            </main>
        </div>
    )
}

const HomePageWrapper = ({ children } : { children: React.ReactNode}) => {
    return (
        <HomePageLayout>{ children }</HomePageLayout>
    )
}

export default HomePageWrapper;