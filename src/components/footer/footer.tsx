
import React from 'react'
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaSearchengin, FaLock } from 'react-icons/fa6';
import { Button } from '../ui/button';
export default function footer() {
  return (
    <div className='bg-neutral-500 w-full md:h-56 flex flex-wrap justify-between gap-2 items-center p-1' >
      <div className="logo w-full h-auto  md:flex-1 p-2">
        <Image src='/rose.gif' alt='not found' className='md:h-12 h-7 w-96' width={300} height={100} />
        <div className="p-2 md:text-md text-xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
        <h3 className=' font-extrabold w-full px-3 uppercase text-red-700 md:text-md text-xs'>Follow Us</h3>
        <div className="icons w-full flex justify-center items-center gap-3 bg-slate-500 mt-5">
          <FaFacebook className='cursor-pointer text-white font-extrabold' /><FaTwitter className='cursor-pointer text-white font-extrabold' /><FaInstagram className='cursor-pointer text-white font-extrabold' /><FaYoutube className='cursor-pointer text-white font-extrabold' />
        </div>
      </div>
      <div className="w-full md:flex-1 md:h-56 flex justify-start items-center flex-col py-2  space-y-2">
      
        <h3 className='md:text-md text-xs bg-black w-full text-center text-white py-1 '>Menu</h3>
        <ul className='text-white space-y-2'>
          <li className='bg-neutral-500 text-center px-5 md:text-md text-xs'>Search</li>
          <li className='text-center px-5 md:text-md text-xs'>About Us</li>
          <li className='text-center px-5 md:text-md text-xs'>Contact Us</li>
          <li className='text-center px-5 md:text-md text-xs'>Blog</li>
        </ul>
      </div>
      <div className="w-full md:flex-1 md:h-56   flex justify-start items-center flex-col py-2  space-y-2">

        <h3 className=' font-extrabold w-full px-3 py-1 uppercase bg-black text-red-700 md:text-md text-xs text-center'>Secured Links</h3>
        <ul className='text-white md:space-y-2 space-y-1'>
          <li className=' text-center px-5  md:text-md text-xs'>Privacy Policy</li>
          <li className='text-center px-5  md:text-md text-xs'>Terms & Conditions</li>
          <li className='text-center px-5  md:text-md text-xs'>Refund Policy</li>
          <li className='text-center px-5  md:text-md text-xs'>Shipping Policy</li>
          <li className='text-center px-5  md:text-md text-xs'>Track Order</li>
        </ul>
      </div>
      <div className="w-full md:h-56 md:flex-1 flex justify-start items-center flex-col py-2 space-y-2">
        <h3 className=' font-extrabold w-full px-3 py-1 uppercase bg-gray-950 text-red-700  md:text-md text-xs text-center'>For Your Serve</h3>
        <div className="email-box w-auto space-x-2">
          <input type="email" placeholder='Enter Your Email' className='px-2 outline-none w-52 md:w-56 h-9 rounded-lg' />
          <Button>Send</Button>
        </div>
        <h5 className='self-end  p-2 rounded-2xl md:text-md text-xs md:text-right text-center bg-slate-500 w-full'>newest@gmail.com</h5>
        <h6 className='text-center w-[90%] md:text-md text-xs '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, quod!</h6>
      </div>
    </div>
  )
}
