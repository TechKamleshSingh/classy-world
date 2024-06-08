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
let banner=[
  {
    id:5,
    pic:"/images/6.png",
  },
  {
    id:2,
    pic:"/images/6.png",
  },
  {
    id:3,
    pic:"/images/6.png",
  },
]
export default function proBanner() {
  return (
    <div>
          <div className="production-banner w-full h-auto md:h-[550px] ">
        <Swiper
          slidesPerView={1}
          modules={[Pagination]}
          spaceBetween={3}
          pagination={{
            clickable: true,
          }}
          className="mySwiper w-full h-32 md:h-[550px]"
        >
          {
            banner.map((item,i)=>(
              <SwiperSlide key={item.id}>
                      <Image alt={item.pic} src='/images/1.jpg' fill={true} />
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </div>
  )
}
