"use client"
import React, { useState } from 'react'
import { Button } from '../ui/button'
import Link from 'next/link';
export default function login() {
    let [resetPassword,setResetPassword]=useState(false);
  return (
    <div>
        {
            !resetPassword && 
           <form action="" className='form-black w-full h-auto p-5 flex justify-center items-center flex-col gap-3 '>
        <h3 className=' text-white w-[97%] md:w-[50%] text-center p-3'>Login Your Exits Account</h3>
        <input type="email" name="email" placeholder='Enter Your Register Email'  className='w-[97%] md:w-[50%] p-2  font-bold outline-none border-solid focus:border-b-2 border-black'/>
      <input type="password" placeholder='Enter Your Created Password ' className='w-[97%] md:w-[50%] p-2  font-bold outline-none border-solid focus:border-b-2 border-black'/>
      <Button>Login Now</Button>
      <div className='md:w-[50%] w-[97%]'>

      <h3 className='text-red-500 text:left font-bold cursor-pointer hover:underline' onClick={()=>setResetPassword((prev)=>!prev)}>Forgot Password</h3>
      </div>
      <h3 className='md:text-lg text-xs text-center text-red-300 w-full md:w-[50%]'>You Haven't any  Account Just SignUp <Link href='/register'>Click Here</Link></h3>
        </form>
        }
{
    resetPassword &&
        <form action="" className='h-[316px] bg-gray-400 flex justify-center items-center flex-col gap-4 p-3'>
          <h3 className='md:w-[50%] w-[97%] p-2 text-white bg-red-500'>Reset Your Password</h3>
          <label htmlFor="email" className='md:w-[50%] w-[97%] p-2 bg-black text-green-300 from-neutral-600'>Enter Your Exits Email ID</label>
        <input type="email" placeholder='Enter Your Email Here' className='w-[97%] md:w-[50%] p-2  font-bold outline-none border-solid focus:border-b-2 border-black'/>
        <Button>Submit Now</Button>
      <h3 className='text-red-500 text:left font-bold cursor-pointer hover:underline' onClick={()=>setResetPassword((prev)=>!prev)}>Cancel</h3>
        
        </form>
}
    </div>
  )
}
