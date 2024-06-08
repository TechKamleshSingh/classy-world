
import React from 'react'
import Image from 'next/image';
import { FaFacebook ,FaTwitter,FaInstagram,FaYoutube,FaSearchengin,FaLock} from 'react-icons/fa6';
import { Button } from '../ui/button';
export default function footer() {
  return (
    <div className='bg-neutral-500 w-full h-auto flex flex-wrap justify-between gap-2 items-center p-1'>
        <div className="logo w-full h-56  md:flex-1 p-2">
            {/* <img src="rose.gif" alt="" className='h-20 w-96'/> */}
            <Image src='/rose.gif' alt='not found' className='h-20 w-96' width={300} height={100}/>
            <div className="text p-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Ratione enim porro aliquam nostrum delectus beatae.
            </div>
        </div>
        <div className="w-full md:flex-1 h-56 flex justify-start items-center flex-col py-2  space-y-2">
            <h3 className=' font-extrabold w-full px-3 uppercase text-red-700'>Follow Us</h3>
            <div className="icons w-full flex justify-center items-center gap-3">
                <FaFacebook  className='cursor-pointer text-white font-extrabold'/><FaTwitter className='cursor-pointer text-white font-extrabold'/><FaInstagram className='cursor-pointer text-white font-extrabold'/><FaYoutube className='cursor-pointer text-white font-extrabold'/>
            </div>
           <h3>Menu</h3>
           <ul className='text-white space-y-2'>
            <li className='bg-neutral-500 text-center'>Search</li>
            <li className='text-center bg-neutral-700 px-5'>About Us</li>
            <li className='text-center bg-neutral-700 px-5'>Contact Us</li>
            <li className='text-center bg-neutral-700 px-5'>Blog</li>
           </ul>
        </div>
        <div className="w-full md:flex-1 h-56   flex justify-start items-center flex-col py-2  space-y-2">
        
           <h3 className=' font-extrabold w-full px-3 uppercase text-red-700'>Secured Links</h3>
           <ul className='text-white space-y-2'>
            <li className='bg-black text-center'>Privacy Policy</li>
            <li className='text-center bg-neutral-700 px-5'>Terms & Conditions</li>
            <li className='text-center bg-neutral-700 px-5'>Refund Policy</li>
            <li className='text-center bg-neutral-700 px-5'>Shipping Policy</li>
            <li className='text-center bg-neutral-700 px-5'>Track Order</li>
           </ul>
        </div>
        <div className="w-full h-56 md:flex-1 flex justify-start items-center flex-col py-2 space-y-2">
   <h3 className=' font-extrabold w-full px-3 uppercase text-red-700'>For Your Serve</h3>
   <div className="email-box w-auto space-x-2">
    <input type="email" placeholder='Enter Your Email' className='px-2 outline-none w-52 md:w-56 h-9 rounded-lg'/>
    <Button>Send</Button>
   </div>
   <h5 className='self-end  p-2 rounded-2xl'>newest@gmail.com</h5>
   <h6 className='text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, quod!</h6>
     </div>
    </div>
  )
}
