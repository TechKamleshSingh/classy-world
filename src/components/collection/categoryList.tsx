"use client"
import React from 'react'
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';
// import required modules
import { Pagination } from 'swiper/modules';
let categoryItem = [
    {
        id: 1,
        pic: "/images/1.jpg",
        title: "lorem ipsum"
    },
    {
        id: 2,
        pic: "/images/2.jpg",
        title: "lorem ipsum"
    },
    {
        id: 3,
        pic: "/images/3.jpg",
        title: "lorem ipsum"
    },
    {
        id: 4,
        pic: "/images/5.jpg",
        title: "lorem ipsum"
    },
    {
        id: 5,
        pic: "/images/6.png",
        title: "lorem ipsum"
    },
    {
        id: 5,
        pic: "/images/6.png",
        title: "lorem ipsum"
    },
    {
        id: 5,
        pic: "/images/6.png",
        title: "lorem ipsum"
    },
    {
        id: 5,
        pic: "/images/6.png",
        title: "lorem ipsum"
    },
];
export default function categoryList() {
    return (
        <div className='p-2'>
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
                spaceBetween={5}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                className="mySwiper"
            >

                {
                    categoryItem.map((item,i) => (
                        <SwiperSlide key={item.id} className=''>
                            <div className="p-2  w-full h-auto flex justify-center items-center flex-col space-y-2">
                                <div className="logo relative md:w-28 md:h-28 w-20 h-20 rounded-full">

                                    <Image src={item.pic} className="absolute rounded-full" fill alt="" />
                                </div>
                                <div className="text  text-center md:font-xl font-xs">{item.title}</div>
                            </div>

                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </div>
    )
}
