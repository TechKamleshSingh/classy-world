import { Button } from '@/components/ui/button'
import Image from 'next/image'
export default function page() {
  return (
    <div className='py-2 w-full h-auto '>
      <div className="relative banner w-full h-44 md:h-72 -z-10">
        <Image src='/images/contact.jpg' fill alt='' className='z-0 absolute opacity-[0.7]' />
      </div>
      <div className="info w-full flex justify-center items-center flex-col space-y-4">
        <h2 className='w-[75%]  p-2 uppercase text-red-600 font-bold '>get in touch</h2>
        <div className="address w-[75%]">

          <h4 className='  p-2 uppercase text-cyan-700 font-bold '>ADDRESS</h4>
          <h5>lorem ipsum some dolor sit amet</h5>
        </div>

        <div className="phone w-[75%]">
          <h4 className=''>phone</h4>
          <span>900000000000</span>
        </div>
        <div className="email w-[75%]">
          <h4>Email</h4>
          <span>yourEmail@gmail.com</span>
        </div>
        <div className="call-time w-[75%] space-5">
          <h5>Call Timing</h5>
          <span>Time Goes Here</span>
        </div>
      <form action="" className='md:w-[75%] w-[95%] h-auto flex flex-col gap-2'>
    <caption className='w-52 bg-slate-400 font-bold text-sm text-blue-600 py-2 '>Fill Your Details & Message</caption>
    <label htmlFor="name" className=' bg-slate-300 p-1 text-green-700 ' >Name</label>
    <input type="text" placeholder='Enter Your Name' className='w-full p-2 text-blue-500 font-bold outline-none border-0 rounded-sm  ring-1' id='name' />
    <label htmlFor="name" className=' bg-slate-300 p-1 text-green-700 '>Email</label>
    <input type="email" placeholder='Enter Your Email' className='w-full p-2 text-blue-500 font-bold outline-none border-0 rounded-sm  ring-1' id='name'/>
    <label htmlFor="name" className=' bg-slate-300 p-1 text-green-700 '>Contact Number</label>
    <input type="number" placeholder='Enter Contact Number' className='w-full p-2 text-blue-500 font-bold outline-none border-0 rounded-sm  ring-1' id='name'/>
    <label htmlFor="message" className=' bg-slate-300 p-1 text-green-700'>Message</label>
    <textarea placeholder='Write Your Message Here' id="message"  className='w-full  outline-none border-0 p-2 resize rounded-sm  ring-1' rows="7" ></textarea>
     <Button className='md:text-xl'>Send Details</Button>
      </form>
      </div>
    </div>
  )
}
