"use client"
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
export default function register() {
  return (
    <div>
             <form action="" className='form-black w-full h-auto p-5 flex justify-center items-center flex-col gap-3 '>
        <h3 className=' text-white w-[97%] md:w-[50%] text-center p-3'>Register An Account</h3>
        <input type="text" name="username" placeholder="Enter UserName Here"   className='w-[97%] md:w-[50%] p-2 outline-none font-bold border-solid focus:border-b-2 border-black'/>
        <input type="email" name="email" placeholder='Enter Your Email'  className='w-[97%] md:w-[50%] p-2  font-bold outline-none border-solid focus:border-b-2 border-black'/>
      <input type="password" placeholder='Enter Your Password ' className='w-[97%] md:w-[50%] p-2  font-bold outline-none border-solid focus:border-b-2 border-black'/>
      <Button>Create Now</Button>
      <h3 className='md:text-lg text-xs text-center text-red-300 w-full md:w-[50%]'>Already An Account Just SignIn <Link href='/login'>Click Here</Link></h3>
        </form>
    </div>
  )
}
