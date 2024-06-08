"use client"
import React from 'react'
import { Swiper,SwiperSlide } from 'swiper/react'
import Image from "next/image";
import { MdCollections } from "react-icons/md";
import { faLandMineOn } from "@fortawesome/free-solid-svg-icons";
import { FaGift, FaHeart, FaVoicemail } from "react-icons/fa";
import { LiaGiftsSolid } from "react-icons/lia";
import { GoGift } from "react-icons/go";
import { Button } from "@/components/ui/button";

import { SiHomeassistantcommunitystore } from "react-icons/si";

import { faHandHoldingHeart, faHandHoldingHand, faBirthdayCake } from "@fortawesome/free-solid-svg-icons";
// import { FaFacebook,MdCollections,FaGift, FaHandHoldingHear,FaLandMineOn, GoGift, SiHomeassistantcommunitystore,LiaGiftsSolid ,FaBirthdayCake } from 'react-icons/fa';
import { faMagicWandSparkles, faMagnifyingGlass, faGift } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';
// import required modules
import { Pagination } from 'swiper/modules';
let Banner=[
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
export default function trendBanner() {
  return (
    <div>
         <section className="bg-gray-300 w-full h-auto mt-1 md:mt-7">
        <Swiper
          spaceBetween={5}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper w-full h-[500px]"
        >
       {
            Banner.map((item,i)=>(
              <SwiperSlide key={item.id}>
                      <Image alt={item.pic} src='/images/1.jpg' fill={true} />
              </SwiperSlide>
            ))
          }
        </Swiper>
        <div className="info bg-stone-600 w-full h-auto md:h-[200px] gap-2 p-3 flex flex-wrap justify-between items-center">
          <div className="md:flex-1 hover:text-purple-500 hover:bg-gray-400 bg-slate-500 duration-500 rounded-md p-2 text-blue-200 font-bold flex justify-center items-center flex-col">
            <GoGift />
            <div className="des p-1 text-center font-medium ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Hic dolorum voluptate quam magni labore facilis quibusdam, modi suscipit sequi ducimus!
            </div>
          </div>
          <div className="md:flex-1  hover:text-purple-500 hover:bg-gray-400 bg-slate-500 rounded-md p-2 text-blue-200 font-bold flex justify-center items-center flex-col">
            <FaVoicemail />
            <div className="des p-1 text-center font-medium">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Hic dolorum voluptate quam magni labore facilis quibusdam, modi suscipit sequi ducimus!
            </div>
          </div>
          <div className="md:flex-1  hover:text-purple-500 hover:bg-gray-400 bg-slate-500 duration-500 rounded-md p-2 text-blue-200 font-bold flex justify-center items-center flex-col">
            <FaHeart />
            <div className="des p-1 text-center font-medium">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Hic dolorum voluptate quam magni labore facilis quibusdam, modi suscipit sequi ducimus!
            </div>
          </div>
          <div className="md:flex-1  hover:text-purple-500 hover:bg-gray-400 bg-slate-500 duration-500 rounded-md p-2 text-blue-200 font-bold flex justify-center items-center flex-col">
            <GoGift />
            <div className="des p-1 text-center font-medium">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Hic dolorum voluptate quam magni labore facilis quibusdam, modi suscipit sequi ducimus!
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
