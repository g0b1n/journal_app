"use client"

import React, { useState } from 'react'
import Image from 'next/image';
import { ChevronRight, ToggleLeft, ToggleRight } from 'lucide-react';
import EditProfileDialog from '../Dialogue_Box/editDialog';

function Settings() {
    const profilePic = "/images/AchyutPic.jpg"

    const [isPrivate, setIsPrivate] = useState(false);
    const [isNotification, setIsNotification] = useState(false);
    const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
    const [isEditOpen, setIsEditOpen] = useState(false);

    const togglePrivate = () => {
        setIsPrivate(!isPrivate)
    }

    const toggleNotification = () => {
        setIsNotification(!isNotification)
    }

  return (
    <div className='flex flex-col items-center justify-center mt-10'>
        <div className='flex flex-col items-center'>
            <div className='relative w-24 h-24 rounded-full overflow-hidden border-4 border-blue-500'>
                <Image 
                    src={profilePic}
                    alt='Profile Picture'
                    layout='fill'
                    objectFit='cover'
                />
            </div>
            
            <h3 className="flex justify-center mt-2 font-bold">20acuti03</h3>
            <p className="flex justify-center font-normal text-xs text-gray-500">Joined 2025</p>
        </div>

        <div className="w-full max-w-md">
            <h2 className="mt-5 font-bold text-gray-900 mb-2">Settings</h2>
        </div>
        
        <div className="w-full max-w-md p-3 bg-gray-100 rounded-lg shadow-lg border border-gray-200">
            <div className='flex justify-between w-full max-w-md'>
                <div>
                    <h2 className="text-sm font-normal text-gray-500 mb-4">Account</h2>
                </div>
                <div>
                    <h2 className='cursor-pointer text-blue-500 font-normal hover:font-bold' onClick={() => setIsEditOpen(true)}>Edit</h2>
                </div>
            </div>

            <dialog open={isEditOpen} onClose={() => setIsEditOpen(false)}
            className='bg-gray-100 p-5 rounded-md text-gray-900'>
                <div>
                    <h2>Edit Profile</h2>
                    <form>
                        <div>
              <label htmlFor="email" className='block text-sm/6 font-medium text-gray-900'>Email</label>
            </div>
              <div className='mt-2'>
                <input 
                  type='email'
                  name='email'
                  placeholder='example@email.com'
                  required
                  className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-2 focus:outline-blue-500'
                /> 
              </div>

                    </form>
                </div>
                <button onClick={() => setIsEditOpen(false)}
                className='justify-center bg-blue-400 p-2 rounded-md text-gray-100 mt-2'
            >Save</button>
                
            </dialog>
            

            {/* Username  */}
            <div className='flex justify-between w-full max-w-md bg-gray-200 p-2 rounded-lg mb-2'>
                <div>
                    <p className='font-bold'>Username</p>
                </div>
                <div>
                    <p className='text-blue-500'>userName</p>
                </div>
            </div>

            {/* Email  */}
            <div className='flex justify-between w-full max-w-md bg-gray-200 p-2 rounded-lg mb-2'>
                <div>
                    <p className='font-bold'>Email<span className='text-xs font-light p-1 mr-1 text-green-500'>verified</span></p>
                </div>
                
                <div>
                    <p className='text-blue-500'>example@email.com</p>
                </div>
            </div>

            {/* Phone  */}
            <div className='flex justify-between w-full max-w-md bg-gray-200 p-2 rounded-lg mb-2'>
                <div>
                    <p className='font-bold'>Phone<span className='text-xs font-light p-1 mr-1 text-green-500'>verified</span></p>
                </div>
                
                <div>
                    <p className='text-blue-500'>(123) 456-7890</p>
                </div>
            </div>
            
            {/* Password  */}
            <div className='flex justify-between w-full max-w-md bg-gray-200 p-2 rounded-lg mb-2'>
                <div>
                    <p className='font-bold'>Password</p>
                </div>
                <div>
                    <p className='text-blue-500'>************</p>
                </div>
            </div>

            <h2 className="mt-5 text-sm font-normal text-gray-500 mb-4">Notification</h2>

            {/* account private/public  */}
            <div className='flex justify-between w-full max-w-md bg-gray-200 p-2 rounded-lg'>
                <div>
                    <p className='font-bold'>Notifications</p>
                </div>
                <div>
                    <div className='cursor-pointer hover:text-blue-500'
                        onClick={togglePrivate}
                        
                    >
                        {isPrivate ? <ToggleRight size={30}/> : <ToggleLeft size={30}/>}
                    </div>
                </div>
            </div>
            <p className='flex justify-end text-xs font-light text-gray-500 mt-1 mb-2'>Turn on notifications to get daily reminders</p>


            <h2 className="mt-5 text-sm font-normal text-gray-500 mb-4">Privacy</h2>

            {/* account private/public  */}
            <div className='flex justify-between w-full max-w-md bg-gray-200 p-2 rounded-lg'>
                <div>
                    <p className='font-bold'>Private</p>
                </div>
                <div>
                    <div className='cursor-pointer hover:text-blue-500'
                        onClick={toggleNotification}
                        
                    >
                        {isNotification ? <ToggleRight size={30}/> : <ToggleLeft size={30}/>}
                    </div>
                </div>
            </div>
            <p className='flex justify-end text-xs font-light text-gray-500 mt-1 mb-2'>Your account is private</p>

            {/* privacy policy  */}
        <div className='flex justify-between w-full max-w-md bg-gray-200 p-2 rounded-lg mb-2 cursor-pointer hover:bg-gray-300'
            onClick={() => setIsPrivacyOpen(true)}
        >
            <div>
                <p className='font-bold'>Privacy Policy</p>
            </div>
            <div>
                <p className='text-blue-500'><ChevronRight /></p>
            </div>
        </div>
        </div>

        <dialog open={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)}
            className='bg-gray-100 p-5 rounded-md text-gray-900'
        >
            <h2 className='text-center font-bold'>Privacy Policy</h2>
            <p>This is where we will have our privacy policy.</p>
            <button onClick={() => setIsPrivacyOpen(false)}
                className='justify-center bg-red-400 p-2 rounded-md text-gray-100'
            >Close</button>
        </dialog>
        <EditProfileDialog isOpen={isEditOpen} onClose={() => setIsEditOpen(false)} />
        


    </div>
  )
}
export default Settings