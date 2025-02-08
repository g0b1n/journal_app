import React from 'react'
import Link from 'next/link'
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div className='bg-blue-300 text-gray-800 py-6 px-4 mt-auto'>
        <div className='flex justify-between'>
          
          <div>
              <Link href='/' className='text-2xl font-black'>Journal App</Link>
              <h1>Contact</h1>
          </div>

            <div className='flex'>
              <FaFacebookF size={24}/>
              <FaInstagram size={24}/>
              <FaXTwitter size={24}/>
            </div>
        </div>
        <div className='container mx-auto text-center'>
            <p>&copy; {new Date().getFullYear()} Journal App. All Rights Reserved.</p>
          </div>
    </div>
  )
}

export default Footer;
