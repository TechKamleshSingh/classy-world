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

export default function relation() {
  return (
    <div>
           <h3 className="font-bold text-xl ml-4 p-2">By Relation</h3>
      <hr />
      <div className="by-relation flex flex-wrap justify-center items-center gap-3 w-full md:h-[500px]">
        <div className="r-left w-full md:flex-1 flex justify-center md:flex-nowrap flex-wrap items-center  gap-3">
          <div className="box flex flex-rows justify-center items-center  gap-3 md:flex-col p-2  w-full">
            <Image src='/images/2.jpg' alt="" width={500} height={0} className="w-1/2  md:w-96  h-32 md:h-52 rounded-2xl" />
            <Image src='/images/3.jpg' alt="" width={500} height={0} className="w-1/2  md:w-96 h-32 md:h-52 rounded-2xl" />
          </div>
          <div className="box flex flex-rows justify-center items-center  gap-3 md:flex-col p-2  w-full">
            <Image src='/images/2.jpg' alt="" width={500} height={0} className="w-1/2  md:w-96  h-32 md:h-52 rounded-2xl" />
            <Image src='/images/3.jpg' alt="" width={500} height={0} className="w-1/2  md:w-96 h-32 md:h-52 rounded-2xl" />
          </div>

        </div>
        <div className="r-right md:flex-1 flex justify-center md:flex-nowrap flex-wrap gap-3">
          <div className="box p-2 ">
            <Image src='/images/2.jpg' alt="" width={500} height={0} className="w-1/1 md:w-96 h-44 md:h-[430px] rounded-2xl" />
          </div>
          <div className="box p-2 ">
            <Image src='/images/2.jpg' alt="" width={500} height={0} className="w-1/1 md:w-96 h-44 md:h-[430px] rounded-2xl" />
          </div>
        </div>
      </div>

    </div>
  )
}
