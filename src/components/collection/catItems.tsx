import React from 'react'
import Image from 'next/image'
let categoryItems=[
  {
    id:1,
    img:"/images/1.jpg",
    text:"lorem item"
  },
  {
    id:2,
    img:"/images/6.png",
    text:"lorem item"
  },
  {
    id:3,
    img:"/images/2.jpg",
    text:"lorem item"
  },
  {
    id:4,
    img:"/images/3.jpg",
    text:"lorem item"
  },
  {
    id:5,
    img:"/images/5.jpg",
    text:"lorem item"
  },
  {
    id:1,
    img:"/images/1.jpg",
    text:"lorem item"
  },
  {
    id:2,
    img:"/images/6.png",
    text:"lorem item"
  },
  {
    id:3,
    img:"/images/2.jpg",
    text:"lorem item"
  },
  {
    id:4,
    img:"/images/3.jpg",
    text:"lorem item"
  },
  {
    id:5,
    img:"/images/5.jpg",
    text:"lorem item"
  },
  {
    id:3,
    img:"/images/2.jpg",
    text:"lorem item"
  },
  {
    id:4,
    img:"/images/3.jpg",
    text:"lorem item"
  },
  {
    id:5,
    img:"/images/5.jpg",
    text:"lorem item"
  },
]
export default function catItems() {
  return (
    <div className='p-2 w-full h-auto flex justify-evenly items-center gap-2 flex-wrap '>
        {
          categoryItems.map((item,index)=>(
            <div className=" relative card md:w-64 sm:w-40 md:h-72 sm:h-56 w-full h-[35vh]  rounded-2xl" key={item.id}>
              <div className="relative  rounded-2xl  md:h-60 sm:h-48  h-[30vh] ">
            <Image src={item.img} fill alt='' className='absolute rounded-t-2xl'/>
              </div>
              <div className="text bg-slate-200 w-full py-3 absolute bottom-0 rounded-b-2xl md:text-lg text-xs text-center font-bold">{item.text}</div>
            </div>
          ))
        }
    </div>
  )
}
