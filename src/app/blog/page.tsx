import React from 'react'
import MenuList from '@/components/blog/menuList'
export default function page() {
  return (
    <>
      <div className="fixed top-0 left-0  w-full bg-center bg-top md:bg-cover bg-no-repeat bg-[url('/images/blog.jpg')] h-[100vh] -z-20"></div>
      <div className="w-full  h-auto">
        <div className="blog w-full h-44 md:h-56 "></div>
        <MenuList />
      </div>
    </>
  )
}
