"use client"
import React from 'react'

function Login() {
  return (
    <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
        <h2 className='mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900'>Login to your account</h2>
      </div>

      <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
        <form className='space-y-6' action='#' method='POST'>
          <div>
            <label htmlFor="username" className='block text-sm/6 font-medium text-gray-900'>Username</label>
            <div className='mt-2'>
              <input 
                type='text'
                name='username'
                placeholder='Username'
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

        <p className='mt-5 text-center text-sm/6 text-gray-600'>
        Don&apos;t have an account?{' '}
        <a href='/signup' className='font-semibold text-blue-600 hover:text-blue-400'>
          Sign Up
        </a>
        </p>
      </div>
    </div>
  )
}

export default Login;
