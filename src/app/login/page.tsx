import React from 'react'
import Image from "next/image";
import Slider from '@/components/slider/slider';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Login from '@/components/auth/login';
export default function page() {

  return (
    <div className="register w-full h-auto ">
<Login />
      </div>
  )
}
