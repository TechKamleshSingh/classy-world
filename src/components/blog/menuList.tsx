"use client"
import React from 'react'
import { FaArrowDown } from 'react-icons/fa'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from 'next/image';

let allItems:{
  id:(number | string)
  title:string,
  img:string,
  time:any,
  name:string
}[]=[
  {
    id:1,
    title:'lorem ipsum dolor',
    img:"/images/1.jpg",
    time:"time goes here",
    name:"lorem "
  },
  {
    id:2,
    title:'lorem ipsum dolor',
    img:"/images/2.jpg",
    time:"time goes here",
    name:"lorem "
  },
  { id:3,
    title:'lorem ipsum dolor',
    img:"/images/3.jpg",
    time:"time goes here",
    name:"lorem "
  },
  {
    id:4,
    title:'lorem ipsum dolor',
    img:"/images/1.jpg",
    time:"time goes here",
    name:"lorem "
  },
  { id:5,
    title:'lorem ipsum dolor',
    img:"/images/5.jpg",
    time:"time goes here",
    name:"lorem "
  },
]

export default function menuList() {
  return (
    <>

      <div className="dropdownmenu bg-red-100 w-full py-2 px-10">

        <DropdownMenu>
          <DropdownMenuTrigger>All Items</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuSeparator />
            <DropdownMenuItem>New Year</DropdownMenuItem>
            <DropdownMenuItem>Love</DropdownMenuItem>
            <DropdownMenuItem>Gift</DropdownMenuItem>
            <DropdownMenuItem>New Year</DropdownMenuItem>
            <DropdownMenuItem>Love</DropdownMenuItem>
            <DropdownMenuItem>Gift</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="items-box bg-lime-200 w-full h-auto- p-2 flex justify-evenly items-center flex-wrap gap-3">

      {
        allItems.map((item)=>(

      <div className="relative item md:w-[32%] w-full shadow-md" key={item.id}>
        <div className="title bg-red-300 p-1">{item.title}</div>
        <div className="relative topic-img w-full h-60">
          <Image src={item.img} alt=' ' fill className='absolute ' />
        </div>
        <div className="item-info w-full p-2 flex items-center justify-between">
          <div className="time">{item.time}</div>
          <div className="name">{item.name}</div>
        </div>
      </div>
        ))
      }
      </div>
    
    </>
  )
}
