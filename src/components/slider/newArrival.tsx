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
export default function newArrival() {
  return (
    <div>
          <div className="new-arrival w-full md:h-auto  bg-slate-100">
        <h3 className="ml-3 font-bold text-md p-2">New Arrival</h3>
        <hr />
        <div className="product px-4 w-full md:h-[550px] flex justify-center items-center">
          <Swiper
            slidesPerView={1}
            breakpoints={{
              740: {
                slidesPerView: 2
              },
            }}

            spaceBetween={10}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            className="mySwiper"
          >
{
            list.map((item,i)=>(
              <SwiperSlide key={item.id}>
                <div className="box w-[100%]  h-[250px] md:h-[450px] relative">

              <Image src={item.url} alt="" fill className="absolute rounded-xl" />
                </div>
     
              </SwiperSlide>
            ))
          }

          </Swiper>
        </div>
      </div>
    </div>
  )
}
