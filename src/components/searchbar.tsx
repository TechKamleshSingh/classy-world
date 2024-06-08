import React from 'react'
import { Button } from './ui/button'

export default function searchbar() {
  return (
    <div className='mt-2 w-full h-16 p-2  flex justify-center items-center gap-2  bg-gray-400'>
        <input type="search" placeholder='Search Your Wish' className='  rounded-sm w-full p-2 outline-none border-none text-xl font-bold'/>
        <Button>Search</Button>
    </div>
  )
}
