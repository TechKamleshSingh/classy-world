"use client"
import Image from "next/image";
import React from 'react'
import { Swiper,SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';
// import required modules
import { Pagination } from 'swiper/modules';
import { Key } from "lucide-react";
let list=[
  {
    id:1,
    url:"/images/1.jpg"
  },
  {
    id:2,
    url:"/images/2.jpg"
  },
  {
    id:3,
    url:"/images/3.jpg"
  },
  {
    id:4,
    url:"/images/5.jpg"
  },
  {
    id:5,
    url:"/images/6.png"
  },
];

export default function CatBanner() {
  return (
    <div className="py-2">
      <Swiper
          spaceBetween={5}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper  w-full h-full"
        >
          {
            list.map((img,i)=>(
              <SwiperSlide key={img.id}>
            <Image src={img.url} alt='not found' className='w-full md:h-[500px] h-44' width={500} height={0} />
                
              </SwiperSlide>
            ))
          }
        </Swiper>
    </div>
  )
}
