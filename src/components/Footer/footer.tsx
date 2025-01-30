import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
    <div className='bg-blue-300 text-gray-800 py-6 px-4 mt-auto'>
        <div className='flex justify-between'>
          
          <div>
              <Link href='/' className='text-2xl font-black'>Journal App</Link>
              <h1>Contact</h1>
          </div>

            <div className='flex'>
              <p className='pl-1'>Twitter</p>
              <p className='pl-1'>Instagram</p>
            </div>
        </div>
        <div className='container mx-auto text-center'>
            <p>&copy; {new Date().getFullYear()} Journal App. All Rights Reserved.</p>
          </div>
    </div>
  )
}

export default Footer
