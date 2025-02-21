"use client"

import React, { useState } from 'react'
import { useRouter } from "next/navigation";
import bcrypt from 'bcryptjs';


function Signup() {

  const [email, setEmail] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('');
  const router = useRouter();

  
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // pwd must contain
    const pwdValidationRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
    console.log(pwdValidationRegex.test('Journal@12'));
    if (!pwdValidationRegex.test(password)) {
      setError("Password does not meet the requirements");
      return
    }

    // check if pwd = confirm pwd
    if (password !== confirmPassword) {
      setError("Password does not match!");
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const res = await fetch('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify({ email, phoneNum, username, password: hashedPassword }),
      headers: { 'Content-Type': 'application/json'},
    })

    // parse the response to JSON
    const data = await res.json();

  if (res.ok) {
    setError(`Registration successful! Welcome ${username}`)
    setTimeout(() => {
      router.push('/')
    }, 2000)
    

  } else {
    console.error('Frontend registration error response:', data)
    setError(data.error || 'Registration failed(Frontend)');
  }

  }

  return (
    <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
        <h2 className='mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900'>Create an account</h2>
      </div>

      

      <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
        <form className='space-y-6' action='#' method='POST' onSubmit={handleSubmit}>

          <div>
            <div>
              <label htmlFor="email" className='block text-sm/6 font-medium text-gray-900'>Email</label>
            </div>
              <div className='mt-2'>
                <input 
                  type='email'
                  name='email'
                  placeholder='example@email.com'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-2 focus:outline-blue-500'
                /> 
              </div>
              <div className='mt-2 justify text-center'>
                <p>or</p>
              </div>

              <div>
                <div>
                  <label htmlFor="phoneNumber" className='block text-sm/6 font-medium text-gray-900'>Phone <span className='text-xs text-thin text-gray-500'>Optional</span></label>
                </div>

                <div className='mt-2'>
                <input 
                  type='tel'
                  name='phoneNumber'
                  placeholder='(123)-456-7890'
                  value={phoneNum}
                  onChange={(e) => setPhoneNum(e.target.value)}
                  className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-2 focus:outline-blue-500'
                /> 
              </div>
              </div>
          </div>

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
            <div>
              <label htmlFor="password" className='block text-sm/6 font-medium text-gray-900'>Password</label>
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
              <div className='mt-1 text-xs font-light text-gray-500'>
                <p>Must contain: Min 8 Characters, 1 uppercase, 1 number and 1 special Characters: !@#$%^&*</p>
              </div>
          </div>

          <div>
            <div>
              <label htmlFor="confirmPassword" className='block text-sm/6 font-medium text-gray-900'>Confirm Password</label>
            </div>
              <div className='mt-2'>
                <input 
                  type='password'
                  name='confirmPassword'
                  placeholder='Confirm Password'
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-2 focus:outline-blue-500'
                /> 
              </div>
          </div>

          <div>
            <button 
              type='submit'
              className='flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm/6 font-semibold text-gray-100 hover:bg-blue-400'>
              Sign up
            </button>
          </div>
        </form>
        {error && <p className='mt-2 text-center text-red-500'>{error}</p>}

        <p className='mt-5 text-center text-sm/6 text-gray-600'>
        Already have an account?{' '}
        <a href='/auth/signin' className='font-semibold text-blue-600 hover:text-blue-400'>
          Log in
        </a>
        </p>
      </div>
    </div>
  )
}

export default Signup;
