"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaSearchengin, FaLock} from 'react-icons/fa6';
import { FaSearch } from 'react-icons/fa';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../ui/button';
import Searchbar from '../searchbar';
import Link from 'next/link';
export default function header() {
  let [searchBar, setSearchBar] = useState(false);
  function homeBurger() {
    let ul = document.querySelector('.ul-left');
    ul?.classList.remove('hidden');
    //  ul.style.display="block";
  }
  function closeBar() {
    let ul = document.querySelector('.ul-left');
    ul?.classList.add('hidden');
  }


  return (
    <>
      <div className='bg-red-300 nav flex  2xl:bg-slate-500 lg:bg-green-300 xl:bg-neutral-500 md:bg-amber-300'>
        <div className=" left flex-1   justify-center items-center gap-5 bg-red-400 hidden md:flex">

          <FaFacebook className='text-white' />
          <FaTwitter />
          <FaInstagram />
          <FaYoutube />

        </div>
        <div className="center flex-1 p-1 bg-gray-500 flex justify-around items-center text-cyan-200 ">
          <div className="contact text-xs md-text-lg">Call/Whatsapp </div>
          <span className='text-xs md:text-lg text-orange-200'>9000000000</span><span className='text-xs md:text-xl'>Mon-Sat 09AM-5PM</span>
        </div>
        <div className="hidden md:flex right flex-1 justify-evenly items-center bg-gray-300 ">
          <div className="contect">900000000</div>
          <div className="email">temp@gmail.com</div>
        </div>
      </div>
      <nav className='relative flex container p-2 '>
      

        <div className="left  ul-left hidden  md:flex md:relative absolute left-0 top-0 w-full md:w-3/5">
          <div className="close-box md:hidden block  bg-zinc-300">

            <FontAwesomeIcon icon={faClose} className='ml-5 mt-3 cursor-pointer text-fuchsia-600' onClick={closeBar} />
          </div>
          <ul className=' md:flex uppercase text-sm space-y-1 justify-center items-center gap-5 p-3'>
          <li className='cursor-pointer bg-orange-100 text-cyan-600 py-1 px-2  relative w-full md:w-32 h-7 text-center'  onClick={closeBar}> <Link href='/' className='absolute p-1 w-full top-0 left-0'>Home</Link></li>
          <li className='cursor-pointer bg-orange-100 text-cyan-600 py-1 px-2 relative w-full md:w-36 h-7 text-center'   onClick={closeBar}> <Link href='/allcollection' className='absolute p-1 w-full top-0 left-0'>All Collection</Link></li>
            <li className='cursor-pointer bg-orange-100 text-cyan-600 py-1 px-2 relative w-full md:w-32 h-7 text-center'  onClick={closeBar}> <Link href='/contact' className='absolute p-1 w-full top-0 left-0'>Contact Us</Link></li>
             <li className='cursor-pointer bg-orange-100 text-cyan-600 py-1 px-2 relative w-full md:w-32 h-7 text-center'  onClick={closeBar}><Link href='/order' className='absolute p-1 w-full top-0 left-0'>Track Order</Link></li>
           <li className='cursor-pointer bg-orange-100 text-cyan-600 py-1 px-2 relative w-full md:w-32 h-7 text-center'  onClick={closeBar}> <Link href='/blog' className='absolute p-1 w-full top-0 left-0'>Blog</Link></li>
          </ul>
        </div>
        <div className="center flex-1  bg-zinc-200">
          {/* <img src="rose.gif" alt="" className='w-full h-10'/> */}
          <Image src='/rose.gif' alt='not found' className='h-10' width={300} height={40} />

        </div>
        <div className="right flex-1  flex justify-end px-2  items-center gap-5">
          <FaSearch className='cursor-pointer text-2xl' onClick={e=>setSearchBar((prev)=>!prev)} />
          <Link href='/login' className='text-lg bg-none border-2 p-1'>SignIn</Link>
          <FaLock />

          <div className='w-10 md:hidden cursor-pointer flex-col space-y-2 flex justify-center items-center d h-10 right-0 top-30' onClick={homeBurger}>
            <div className="burger w-10 h-1 bg-black"></div>
            <div className="burger w-10 h-1 bg-black"></div>
            <div className="burger w-10 h-1 bg-black"></div>
          </div>
        </div>
      </nav>
      {
          searchBar && 
      <Searchbar />
        }
    </>
  )
}
