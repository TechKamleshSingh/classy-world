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

 

export default function homeSlider() {
  return (
    <div>
             <section className="w-full relative md:h-[550px] h-300px">
               
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
            <Image src={img.url} alt='not found' className='w-full h-full' width={500} height={0} />
                
              </SwiperSlide>
            ))
          }
        </Swiper>
      </section>
      <div className="tag w-full py-5 border-solid border-b-1 border-cyan-300 flex justify-between p-5 items-center">
        <div className="title font-bold text-lg">New Trending</div>

        <button>View All</button>
      </div>
      <hr />
    </div>
  )
}
