"use client"
import Image from "next/image";
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';
// import required modules
import { Pagination } from 'swiper/modules';
let birth=[
  {
    id:1,
    pic:"/images/1.jpg",
    title:"lorem ipsum"
  },
  {
    id:2,
    pic:"/images/2.jpg",
    title:"lorem ipsum"
  },
  {
    id:3,
    pic:"/images/3.jpg",
    title:"lorem ipsum"
  },
  {
    id:4,
    pic:"/images/5.jpg",
    title:"lorem ipsum"
  },
  {
    id:5,
    pic:"/images/6.png",
    title:"lorem ipsum"
  },
  {
    id:5,
    pic:"/images/6.png",
    title:"lorem ipsum"
  },
  {
    id:5,
    pic:"/images/6.png",
    title:"lorem ipsum"
  },
  {
    id:5,
    pic:"/images/6.png",
    title:"lorem ipsum"
  },
];

let personalize=[
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
  {
    id:4,
    pic:"/images/6.png",
  },
  {
    id:5,
    pic:"/images/6.png",
  },
  {
    id:6,
    pic:"/images/6.png",
  },
]
export default function tredingSlider() {
  return (
    <div>
      <div className="new-treding h-auto w-full p-3">
        <Swiper
          slidesPerView={3}

          breakpoints={{
            740: {
              slidesPerView: 7
            },
            360: {
              slidesPerView: 2
            }
          }}
          spaceBetween={10}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >

{
            birth.map((item,i)=>(
              <SwiperSlide key={item.id}>
             <div className="card w-40 h-40  p-2 flex justify-center items-center flex-col space-y-2">

<Image src={item.pic} className="" width={500} height={0} alt="" />
<div className="text">{item.title}</div>
</div>
                
              </SwiperSlide>
            ))
          }

        </Swiper>


        <div className="personalized">
          <h3 className="ml-3 font-bold text-lg p-3">Personalized</h3>
          <Swiper

            slidesPerView={2}
            breakpoints={{
              740: {
                slidesPerView: 5
              },
            }}
            centeredSlides={false}
            spaceBetween={10}
            freeMode={true}
            className="myswiper"
          >
            
           
              {
            personalize.map((item,i)=>(
              <SwiperSlide key={item.id}>
          <div className="box md:w-96 w-44 md:h-96 h-32 ">
                <Image src={item.pic} alt="" width={300} height={0} className=" " />
            </div>
              </SwiperSlide>
            ))
          }
           
          </Swiper>

        </div>

      </div >
    </div>
  )
}
