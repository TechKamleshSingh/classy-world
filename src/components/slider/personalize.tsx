"use client"
import React from 'react'
import { Swiper,SwiperSlide } from 'swiper/react'
import Image from "next/image";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';
// import required modules
import { Pagination } from 'swiper/modules';

export default function personalize() {
  return (
    <div>
         <h3 className="font-bold text-xl ml-4 p-2">Personalized</h3>
      <hr />

      <div className="by-personalized p-3  flex flex-wrap justify-center items-center gap-3 w-full md:h-[550px] ">
        <div className="p-left  w-full md:w-[320px] flex justify-center md:flex-nowrap flex-wrap items-center   gap-3">
          <div className="box flex flex-1 justify-center items-center  gap-3 md:flex-col">
            <div className="relative">
              <Image src='/images/2.jpg' alt="" width={500} height={0} className="w-[320px] h-40 md:h-64 rounded-2xl" />
              <h5 className="absolute bottom-0 bg-slate-100 w-full p-2 rounded-b-2xl text-center">lorem ipsum</h5>
            </div>
            <div className="relative">
              <Image src='/images/2.jpg' alt="" width={500} height={0} className="w-[320px] h-40 md:h-64 rounded-2xl" />
              <h5 className="absolute bottom-0 bg-slate-100 w-full p-2 rounded-b-2xl text-center">lorem ipsum</h5>
            </div>
          </div>

        </div>
        <div className="p-center flex-1 p-1 w-full  flex md:flex-nowrap justify-center items-center flex-wrap gap-3 ">
          <div className="box w-full h-auto relative ">
            <Image src='/images/2.jpg' alt="" width={300} height={0} className="w-full h-44 sm:h-52 md:h-[530px] rounded-2xl" />
            <h5 className="absolute bottom-0 bg-slate-100 w-full p-2 rounded-b-2xl text-center">lorem ipsum</h5>
          </div>
          <div className="box w-full relative h-auto ">
            <Image src='/images/2.jpg' alt="" width={300} height={0} className="w-full h-44 sm:h-52 md:h-[530px] rounded-2xl" />
            <h5 className="absolute bottom-0 bg-slate-100 w-full p-2 rounded-b-2xl text-center">lorem ipsum</h5>
          </div>
        </div>

        <div className="p-right w-full  md:w-[320px] flex justify-center md:flex-nowrap flex-wrap items-center  gap-3">
          <div className="box flex  justify-center items-center  gap-3 md:flex-col p-2">
            <div className="relative">
              <Image src='/images/2.jpg' alt="" width={500} height={0} className="w-[320px] h-40 md:h-64 rounded-2xl" />
              <h5 className="absolute bottom-0 bg-slate-100 w-full p-2 rounded-b-2xl text-center">lorem ipsum</h5>
            </div>
            <div className="relative">
              <Image src='/images/2.jpg' alt="" width={500} height={0} className="w-[320px] h-40 md:h-64 rounded-2xl" />
              <h5 className="absolute bottom-0 bg-slate-100 w-full p-2 rounded-b-2xl text-center">lorem ipsum</h5>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
