"use client"
import React from 'react'

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from 'react'

function Login() {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  
      const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      const result = await signIn('credentials', {
        redirect: false,
        username,
        password,
      });
  
      if (result?.error) {
        setError('Invalid email or password');
      } else {
        setError(`Login successful! Welcome back, ${username}`)
        setTimeout(() => {
          router.push('/')
        }, 2000)
      }
  }

  return (
    <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
        <h2 className='mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900'>Login to your account</h2>
      </div>

      <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
        <form className='space-y-6' action='#' method='POST' onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" className='block text-sm/6 font-medium text-gray-900'>Username</label>
            <div className='mt-2'>
              <input 
                type='text'
                name='username'
                placeholder='Username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-2 focus:outline-blue-500'
              /> 
            </div>
              
          </div>

          <div>
            <div className='flex items-center justify-between'>
              <label htmlFor="password" className='block text-sm/6 font-medium text-gray-900'>Password</label>
                <div className='text-sm'>
                  <a href='#' className='font-light text-blue-500 hover:text-blue-300'>Forgot password?</a>
                </div>
            </div>
              <div className='mt-2'>
                <input 
                  type='password'
                  name='password'
                  placeholder='Password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-2 focus:outline-blue-500'
                /> 
              </div>
          </div>

          <div>
            <button 
              type='submit'
              className='flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm/6 font-semibold text-gray-100 hover:bg-blue-400'>
              Log in
            </button>
          </div>
        </form>
        
        {/* Login success message before redirecting to main page  */}
        {error && <p className='mt-2 text-center text-green-500'>{error}</p>}

        <p className='mt-5 text-center text-sm/6 text-gray-600'>
        Don&apos;t have an account?{' '}
        <a href='/auth/register' className='font-semibold text-blue-600 hover:text-blue-400'>
          Sign Up
        </a>
        </p>
      </div>
    </div>
  )
}

export default Login;
