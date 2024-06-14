import { Button } from '@/components/ui/button'
import React from 'react'

export default function page() {
  return (
    <div className='w-full md:h-80 py-5 flex items-center flex-col'>
      <h2 className='uppercase w-full shadow-outer text-center font-extrabold py-5 text-2xl text-green-500'>Track Order</h2>
    <form action="" className='md:w-[50%] w-[95%] shadow-lg p-3 ring-1'>
      <input type="search" placeholder='Enter Order Number/ Tracking Number' className='w-full md:p-2 p-1 md:text-xl text-sm  border-0 outline-none ring-1 rounded-sm'/>
      <Button className='w-full mt-3'>Search Now</Button>
    </form>
    </div>
  )
}
