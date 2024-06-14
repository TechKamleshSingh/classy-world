import Image from "next/image";
import { MdCollections } from "react-icons/md";
import { faLandMineOn } from "@fortawesome/free-solid-svg-icons";
import { FaGift, FaHeart, FaVoicemail } from "react-icons/fa";
import { LiaGiftsSolid } from "react-icons/lia";
import { GoGift } from "react-icons/go";
import { SiHomeassistantcommunitystore } from "react-icons/si";

import { faHandHoldingHeart, faHandHoldingHand, faBirthdayCake } from "@fortawesome/free-solid-svg-icons";
// import { FaFacebook,MdCollections,FaGift, FaHandHoldingHear,FaLandMineOn, GoGift, SiHomeassistantcommunitystore,LiaGiftsSolid ,FaBirthdayCake } from 'react-icons/fa';
import { faMagicWandSparkles, faMagnifyingGlass, faGift } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


//slider components added below
import HomeSlider from "@/components/slider/homeSlider";
import TredingSlider from "@/components/slider/tredingSlider";
import NewArrival from "@/components/slider/newArrival";
import Relation from "@/components/slider/relation";
import Personalize from "@/components/slider/personalize";
import Banner from "@/components/slider/banner";
import ProBanner from "@/components/slider/proBanner";
import RelBanner from "@/components/slider/relBanner";
import NewBanner from "@/components/slider/newBanner";
import TrendBanner from "@/components/slider/trendBanner";
import Link from "next/link";
export default function Home() {
  return (
    <>

      
      <hr />
      <div className="service-box w-full mt-1 px-1 py-2 md:px-5">
        <div className=" grid md:grid-flow-col grid-cols-4 gap-5 bg-zinc-100 md:p-3 p-3 w-full h-32 place-content-center place-items-center rounded-md ring ring-blue-200">
        <Link href='/allcollection'>
          <div className="hover:bg-slate-300 cursor-pointer rounded-md item w-16 md:w-32 md:h-20 p-1 flex justify-center items-center flex-col gap-2 md:gap-3 shadow shadow-xs">
            <MdCollections />
            <div className="title text-red-500 md:text-xl text-xs capitalize">lorem</div>
          </div>
          </Link>
          <div className="hover:bg-slate-300 cursor-pointer rounded-md item w-16 md:w-32 md:h-20 p-1 flex justify-center items-center flex-col gap-2 md:gap-3 shadow shadow-xs">
            <FaGift />
            <div className="title text-red-500 md:text-xl text-xs capitalize">lorem</div>
          </div>
          <div className="hover:bg-slate-300 cursor-pointer rounded-md item border-solid border-red-600 w-16 md:w-32 md:h-20 p-1 flex justify-center items-center flex-col gap-2 md:gap-3 shadow shadow-xs">
            <FontAwesomeIcon icon={faHandHoldingHand} />
            <div className="title text-red-500 md:text-xl text-xs capitalize">lorem</div>
          </div>
          <div className="hover:bg-slate-300 cursor-pointer rounded-md item w-16 md:w-32 md:h-20 p-1 flex justify-center items-center flex-col gap-2 md:gap-3 shadow shadow-xs">
            <FontAwesomeIcon icon={faLandMineOn} />
            <div className="title text-red-500 md:text-xl text-xs capitalize">lorem</div>
          </div>
          <div className="hover:bg-slate-300 cursor-pointer rounded-md item w-16 md:w-32 md:h-20 p-1 flex justify-center items-center flex-col gap-2 md:gap-3 shadow shadow-xs">
            < GoGift />
            <div className="title text-red-500 md:text-xl text-xs capitalize">lorem</div>
          </div>
          <div className="hover:bg-slate-300 cursor-pointer rounded-md item w-16 md:w-32 md:h-20 p-1 flex justify-center items-center flex-col gap-2 md:gap-3 shadow shadow-xs">
            < SiHomeassistantcommunitystore />
            <div className="title text-red-500 md:text-xl text-xs capitalize">lorem</div>
          </div>
          <div className="hover:bg-slate-300 cursor-pointer rounded-md item w-16 md:w-32 md:h-20 p-1 flex justify-center items-center flex-col gap-2 md:gap-3 shadow shadow-xs">
            <LiaGiftsSolid />
            <div className="title text-red-500 md:text-xl text-xs capitalize">lorem</div>
          </div>
          <div className="hover:bg-slate-300 cursor-pointer rounded-md item w-16 md:w-32 md:h-20 p-1 flex justify-center items-center flex-col gap-2 md:gap-3 shadow shadow-xs">
            <FontAwesomeIcon icon={faBirthdayCake} className="si" />
            <div className="title text-red-500 md:text-xl text-xs capitalize">lorem</div>
          </div>
        </div>
      </div>

      <HomeSlider />

     <TredingSlider />

    <NewArrival />

    <Relation />

    


      {/* ours sels */}

      <div className="ours-sels py-3">
        <Image src='/images/6.png' alt='' width={500} height={0} className='w-full md:h-[500px] h-[300px] ' />
      </div>


     <Personalize />

<Banner />

      <div className="title p-2 text-xl font-bold">Gifts For</div>
      <hr />

      <div className="gifts-for w-full h-auto flex flex-wrap justify-center items-center gap-3 md:gap-2  p-3">
        <div className="gift-box w-[47.7%] md:w-[23%] h-52 sm:h-64 md:h-96  rounded-xl bg-red-500 relative">
          <Image src='/images/5.jpg' alt='' width={300} height={0} className="absolute w-full  rounded-t-xl h-[90%]" />
          <div className="text text-center w-full  font-bold text-xl absolute bg-slate-500 py-3 bottom-0 rounded-b-xl">lorem ipsum</div>
        </div>
        <div className="gift-box w-[47.7%] md:w-[23%] h-52 sm:h-64 md:h-96  rounded-xl bg-red-500 relative">
          <Image src='/images/5.jpg' alt='' width={300} height={0} className="absolute w-full  rounded-t-xl h-[90%]" />
          <div className="text text-center w-full  font-bold text-xl absolute bg-slate-500 py-3 bottom-0 rounded-b-xl">lorem ipsum</div>
        </div>
        <div className="gift-box w-[47.7%] md:w-[23%] h-52 sm:h-64 md:h-96  rounded-xl bg-red-500 relative">
          <Image src='/images/5.jpg' alt='' width={300} height={0} className="absolute w-full  rounded-t-xl h-[90%]" />
          <div className="text text-center w-full  font-bold text-xl absolute bg-slate-500 py-3 bottom-0 rounded-b-xl">lorem ipsum</div>
        </div>
        <div className="gift-box w-[47.7%] md:w-[23%] h-52 sm:h-64 md:h-96  rounded-xl bg-red-500 relative">
          <Image src='/images/5.jpg' alt='' width={300} height={0} className="absolute w-full  rounded-t-xl h-[90%]" />
          <div className="text text-center w-full  font-bold text-xl absolute bg-slate-500 py-3 bottom-0 rounded-b-xl">lorem ipsum</div>
        </div>
     
      </div>

    <ProBanner />

      <h3 className="font-bold text-xl ml-4 p-2">Personalized</h3>
      <hr />

      <div className="by-personalized p-3  flex flex-wrap justify-center items-center gap-3 w-full md:h-[550px] ">
        <div className="p-left  w-full md:w-[320px] flex justify-center md:flex-nowrap flex-wrap items-center   gap-3">
          <div className="box flex flex-1 justify-center items-center  gap-3 md:flex-col">
            <div className="relative">
              <Image src='/images/2.jpg' alt="" width={500} height={0} className="w-[320px] h-40 md:h-64 rounded-2xl" />
              <h5 className="absolute bottom-0 bg-slate-100 w-full p-2 rounded-b-2xl text-center">lorem ipsum</h5>
            </div>
            <div className="relative">
              <Image src='/images/2.jpg' alt="" width={500} height={0} className="w-[320px] h-40 md:h-64 rounded-2xl" />
              <h5 className="absolute bottom-0 bg-slate-100 w-full p-2 rounded-b-2xl text-center">lorem ipsum</h5>
            </div>
          </div>

        </div>
        <div className="p-center flex-1 p-1 w-full  flex md:flex-nowrap justify-center items-center flex-wrap gap-3 ">
          <div className="box w-full h-auto relative ">
            <Image src='/images/2.jpg' alt="" width={300} height={0} className="w-full h-44 sm:h-52 md:h-[530px] rounded-2xl" />
            <h5 className="absolute bottom-0 bg-slate-100 w-full p-2 rounded-b-2xl text-center">lorem ipsum</h5>
          </div>
          <div className="box w-full relative h-auto ">
            <Image src='/images/2.jpg' alt="" width={300} height={0} className="w-full h-44 sm:h-52 md:h-[530px] rounded-2xl" />
            <h5 className="absolute bottom-0 bg-slate-100 w-full p-2 rounded-b-2xl text-center">lorem ipsum</h5>
          </div>
        </div>

        <div className="p-right w-full  md:w-[320px] flex justify-center md:flex-nowrap flex-wrap items-center  gap-3">
          <div className="box flex  justify-center items-center  gap-3 md:flex-col p-2">
            <div className="relative">
              <Image src='/images/2.jpg' alt="" width={500} height={0} className="w-[320px] h-40 md:h-64 rounded-2xl" />
              <h5 className="absolute bottom-0 bg-slate-100 w-full p-2 rounded-b-2xl text-center">lorem ipsum</h5>
            </div>
            <div className="relative">
              <Image src='/images/2.jpg' alt="" width={500} height={0} className="w-[320px] h-40 md:h-64 rounded-2xl" />
              <h5 className="absolute bottom-0 bg-slate-100 w-full p-2 rounded-b-2xl text-center">lorem ipsum</h5>
            </div>
          </div>

        </div>
      </div>

      <h3 className=" p-1 ml-4 text-xl font-bold">Collaboration</h3>
      <hr />
      <hr className="p-2" />
      <div className="collaboration w-full h-auto p-3 flex-wrap md:flex-nowrap flex gap-3 justify-center items-center">
        <div className="image-box w-full md:w-96 h-40 sm:h-52 md:h-96  rounded-2xl relative">
          <Image src='/images/5.jpg' fill={true} alt='gg' className="absolute rounded-2xl" />
        </div>
        <div className="image-box w-full md:w-96 h-40 sm:h-52 md:h-96  rounded-2xl relative">
          <Image src='/images/5.jpg' fill={true} alt='gg' className="absolute rounded-2xl" />
        </div>
        <div className="image-box w-full md:w-96 h-40 sm:h-52 md:h-96  rounded-2xl relative">
          <Image src='/images/5.jpg' fill={true} alt='gg' className="absolute rounded-2xl" />
        </div>
        <div className="image-box w-full md:w-96 h-40 sm:h-52 md:h-96  rounded-2xl relative">
          <Image src='/images/5.jpg' fill={true} alt='gg' className="absolute rounded-2xl" />
        </div>
      </div>

      <h3 className=" p-3 ml-4 text-2xl font-bold">Personalized</h3>
      <hr />

      <div className="personalized  w-full   h-auto flex flex-wrap justify-center items-center gap-5 p-3 relative">
        <div className="gift-box w-4/1 md:w-[23%] h-[50%]  rounded-t-xl relative">
          <Image src='/images/5.jpg' alt='' width={300} height={0} className="rounded-t-xl w-full md:h-64" />
          <div className="text text-center w-full  font-bold text-sm md:text-xl relative bg-slate-500 py-0 md:py-1 rounded-b-xl">lorem ipsum</div>
        </div>
        <div className="gift-box w-[45%] sm:w-[47%] md:w-[23%] h-[50%] rounded-t-xl relative">
          <Image src='/images/5.jpg' alt='' width={300} height={0} className="rounded-t-xl w-full md:h-64" />
          <div className="text text-center w-full  font-bold text-sm md:text-xl relative bg-slate-500 py-0 md:py-1 rounded-b-xl">lorem ipsum</div>
        </div>
        <div className="gift-box w-[45%] sm:w-[47%] md:w-[23%] h-[50%]  rounded-t-xl relative">
          <Image src='/images/5.jpg' alt='' width={300} height={0} className="rounded-t-xl w-full md:h-64" />
          <div className="text text-center w-full  font-bold text-sm md:text-xl relative bg-slate-500 py-0 md:py-1 rounded-b-xl">lorem ipsum</div>
        </div>
        <div className="gift-box w-1/1 md:w-[23%] h-[50%]  rounded-t-xl relative">
          <Image src='/images/5.jpg' alt='' width={300} height={0} className="rounded-t-xl w-full md:h-64" />
          <div className="text text-center w-full  font-bold text-sm md:text-xl relative bg-slate-500 py-0 md:py-1 rounded-b-xl">lorem ipsum</div>
        </div>
      
      </div>
<RelBanner />

      <h3 className="font-bold text-xl ml-4 p-2">Personalized</h3>
      <hr />

      <div className="by-personalized p-3  flex flex-wrap justify-center items-center gap-3 w-full md:h-[550px] ">
        <div className="p-left  w-full md:w-[320px] flex justify-center md:flex-nowrap flex-wrap items-center   gap-3">
          <div className="box flex flex-1 justify-center items-center  gap-3 md:flex-col">
            <div className="relative">
              <Image src='/images/2.jpg' alt="" width={500} height={0} className="w-[320px] h-40 md:h-64 rounded-2xl" />
              <h5 className="absolute bottom-0 bg-slate-100 w-full p-2 rounded-b-2xl text-center">lorem ipsum</h5>
            </div>
            <div className="relative">
              <Image src='/images/2.jpg' alt="" width={500} height={0} className="w-[320px] h-40 md:h-64 rounded-2xl" />
              <h5 className="absolute bottom-0 bg-slate-100 w-full p-2 rounded-b-2xl text-center">lorem ipsum</h5>
            </div>
          </div>

        </div>
        <div className="p-center flex-1 p-1 w-full  flex md:flex-nowrap justify-center items-center flex-wrap gap-3 ">
          <div className="box w-full h-auto relative ">
            <Image src='/images/2.jpg' alt="" width={300} height={0} className="w-full h-44 sm:h-52 md:h-[530px] rounded-2xl" />
            <h5 className="absolute bottom-0 bg-slate-100 w-full p-2 rounded-b-2xl text-center">lorem ipsum</h5>
          </div>
          <div className="box w-full relative h-auto ">
            <Image src='/images/2.jpg' alt="" width={300} height={0} className="w-full h-44 sm:h-52 md:h-[530px] rounded-2xl" />
            <h5 className="absolute bottom-0 bg-slate-100 w-full p-2 rounded-b-2xl text-center">lorem ipsum</h5>
          </div>
        </div>

        <div className="p-right w-full  md:w-[320px] flex justify-center md:flex-nowrap flex-wrap items-center  gap-3">
          <div className="box flex  justify-center items-center  gap-3 md:flex-col p-2">
            <div className="relative">
              <Image src='/images/2.jpg' alt="" width={500} height={0} className="w-[320px] h-40 md:h-64 rounded-2xl" />
              <h5 className="absolute bottom-0 bg-slate-100 w-full p-2 rounded-b-2xl text-center">lorem ipsum</h5>
            </div>
            <div className="relative">
              <Image src='/images/2.jpg' alt="" width={500} height={0} className="w-[320px] h-40 md:h-64 rounded-2xl" />
              <h5 className="absolute bottom-0 bg-slate-100 w-full p-2 rounded-b-2xl text-center">lorem ipsum</h5>
            </div>
          </div>

        </div>
      </div>

      <h3 className="font-bold text-xl ml-4 p-2">Trending</h3>
      <hr />

      <div className="personalized  w-full   h-auto flex flex-wrap justify-center items-center gap-5 p-3 relative">
        <div className="gift-box w-4/1 md:w-[23%]   rounded-t-xl relative">
          <Image src='/images/5.jpg' alt='' width={300} height={0} className="rounded-t-xl w-full md:h-72" />
          <div className="text text-center w-full  font-bold text-sm md:text-xl relative py-0 md:py-1 rounded-b-xl">lorem ipsum</div>
        </div>
        <div className="gift-box w-[45%] sm:w-[47%] md:w-[23%]  rounded-t-xl relative">
          <Image src='/images/5.jpg' alt='' width={300} height={0} className="rounded-t-xl w-full md:h-72" />
          <div className="text text-center w-full  font-bold text-sm md:text-xl relative py-0 md:py-1 rounded-b-xl">lorem ipsum</div>
        </div>
        <div className="gift-box w-[45%] sm:w-[47%] md:w-[23%]   rounded-t-xl relative">
          <Image src='/images/5.jpg' alt='' width={300} height={0} className="rounded-t-xl w-full md:h-72" />
          <div className="text text-center w-full  font-bold text-sm md:text-xl relative py-0 md:py-1 rounded-b-xl">lorem ipsum</div>
        </div>
        <div className="gift-box w-1/1 md:w-[23%]    rounded-t-xl relative">
          <Image src='/images/5.jpg' alt='' width={300} height={0} className="rounded-t-xl w-full md:h-72" />
          <div className="text text-center w-full  font-bold text-sm md:text-xl relative py-0 md:py-1 rounded-b-xl">lorem ipsum</div>
        </div>

      </div>

      <h3 className="font-bold text-xl ml-4 p-2">Personalized</h3>
      <hr />

      <div className="w-full h-auto flex flex-wrap justify-center items-center gap-5 p-3">
        <div className="item-box w-10/12 sm:w-[45%] md:w-[23%] h-52 md:h-64 relative rounded-2xl">
          <Image src='/images/3.jpg' width={300} height={0} alt='' className="absolute rounded-t-2xl w-full h-44 md:h-52" />
          <div className="text absolute bottom-0  md:p-3 text-center w-full md:font-bold bg-slate-300 rounded-b-2xl">Lorem ipsum</div>
        </div>
        <div className="item-box w-10/12 sm:w-[45%] md:w-[23%] h-52 md:h-64 relative rounded-2xl">
          <Image src='/images/3.jpg' width={300} height={0} alt='' className="absolute rounded-t-2xl w-full h-44 md:h-52" />
          <div className="text absolute bottom-0 md:p-3 text-center w-full bg-slate-300 rounded-b-2xl md:font-bold">Lorem ipsum</div>
        </div>
        <div className="item-box w-10/12 sm:w-[45%] md:w-[23%] h-52 md:h-64 relative rounded-2xl">
          <Image src='/images/3.jpg' width={300} height={0} alt='' className="absolute rounded-t-2xl w-full h-44 md:h-52" />
          <div className="text absolute bottom-0 md:p-3 text-center w-full bg-slate-300 rounded-b-2xl md:font-bold">Lorem ipsum</div>
        </div>
        <div className="item-box w-10/12 sm:w-[45%] md:w-[23%] h-52 md:h-64 relative rounded-2xl">
          <Image src='/images/3.jpg' width={300} height={0} alt='' className="absolute rounded-t-2xl w-full h-44 md:h-52" />
          <div className="text absolute bottom-0 md:p-3 text-center w-full bg-slate-300 rounded-b-2xl md:font-bold">Lorem ipsum</div>
        </div>
        <div className="item-box w-10/12 sm:w-[45%] md:w-[23%] h-52 md:h-64 relative rounded-2xl">
          <Image src='/images/3.jpg' width={300} height={0} alt='' className="absolute rounded-t-2xl w-full h-44 md:h-52" />
          <div className="text absolute bottom-0 md:p-3 text-center w-full bg-slate-300 rounded-b-2xl md:font-bold">Lorem ipsum</div>
        </div>
        <div className="item-box w-10/12 sm:w-[45%] md:w-[23%] h-52 md:h-64 relative rounded-2xl">
          <Image src='/images/3.jpg' width={300} height={0} alt='' className="absolute rounded-t-2xl w-full h-44 md:h-52" />
          <div className="text absolute bottom-0 md:p-3 text-center w-full bg-slate-300 rounded-b-2xl md:font-bold">Lorem ipsum</div>
        </div>
        <div className="item-box w-10/12 sm:w-[45%] md:w-[23%] h-52 md:h-64 relative rounded-2xl">
          <Image src='/images/3.jpg' width={300} height={0} alt='' className="absolute rounded-t-2xl w-full h-44 md:h-52" />
          <div className="text absolute bottom-0 md:p-3 text-center w-full bg-slate-300 rounded-b-2xl md:font-bold">Lorem ipsum</div>
        </div>
        <div className="item-box w-10/12 sm:w-[45%] md:w-[23%] h-52 md:h-64 relative rounded-2xl">
          <Image src='/images/3.jpg' width={300} height={0} alt='' className="absolute rounded-t-2xl w-full h-44 md:h-52" />
          <div className="text absolute bottom-0 md:p-3 text-center w-full bg-slate-300 rounded-b-2xl md:font-bold">Lorem ipsum</div>
        </div>
      </div>

    <NewBanner />

      <h3 className="font-bold text-xl ml-4 p-2">Personalized</h3>
      <hr />

      <div className="p-3  flex flex-wrap justify-center items-center gap-3 w-full md:h-[550px] ">
        <div className="p-left  w-full md:w-[320px] flex justify-center md:flex-nowrap flex-wrap items-center   gap-3">
          <div className="box flex flex-1 justify-center items-center  gap-3 md:flex-col">
            <div className="relative">
              <Image src='/images/2.jpg' alt="" width={500} height={0} className="w-[320px] h-40 md:h-64 rounded-2xl" />
              <h5 className="absolute bottom-0 bg-slate-100 w-full p-2 rounded-b-2xl text-center">lorem ipsum</h5>
            </div>
            <div className="relative">
              <Image src='/images/2.jpg' alt="" width={500} height={0} className="w-[320px] h-40 md:h-64 rounded-2xl" />
              <h5 className="absolute bottom-0 bg-slate-100 w-full p-2 rounded-b-2xl text-center">lorem ipsum</h5>
            </div>
          </div>

        </div>
        <div className="p-center flex-1 p-1 w-full  flex md:flex-nowrap justify-center items-center flex-wrap gap-3 ">
          <div className="box w-full h-auto relative ">
            <Image src='/images/2.jpg' alt="" width={300} height={0} className="w-full h-44 sm:h-52 md:h-[530px] rounded-2xl" />
            <h5 className="absolute bottom-0 bg-slate-100 w-full p-2 rounded-b-2xl text-center">lorem ipsum</h5>
          </div>
          <div className="box w-full relative h-auto ">
            <Image src='/images/2.jpg' alt="" width={300} height={0} className="w-full h-44 sm:h-52 md:h-[530px] rounded-2xl" />
            <h5 className="absolute bottom-0 bg-slate-100 w-full p-2 rounded-b-2xl text-center">lorem ipsum</h5>
          </div>
        </div>

        <div className="p-right w-full  md:w-[320px] flex justify-center md:flex-nowrap flex-wrap items-center  gap-3">
          <div className="box flex  justify-center items-center  gap-3 md:flex-col p-2">
            <div className="relative">
              <Image src='/images/2.jpg' alt="" width={500} height={0} className="w-[320px] h-40 md:h-64 rounded-2xl" />
              <h5 className="absolute bottom-0 bg-slate-100 w-full p-2 rounded-b-2xl text-center">lorem ipsum</h5>
            </div>
            <div className="relative">
              <Image src='/images/2.jpg' alt="" width={500} height={0} className="w-[320px] h-40 md:h-64 rounded-2xl" />
              <h5 className="absolute bottom-0 bg-slate-100 w-full p-2 rounded-b-2xl text-center">lorem ipsum</h5>
            </div>
          </div>

        </div>
      </div>
        <TrendBanner />
     
      <section>

        <div className="faq w-full h-auto space-y-5 p-3 bg-fuchsia-300">
          <div className="title text-center text-white-300 font-bold text-lg bg-orange-200">FAQ<sub>s</sub></div>
          <ul className="list list-disc space-y-2">
            <li className="list list-outside w-auto bg-neutral-200 py-1 px-2 md:text-left text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quis ut fuga, accusantium natus recusandae.</li>
            <li className="list   bg-neutral-200 py-1 px-2 md:text-left text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quis ut fuga, accusantium natus recusandae.</li>
            <li className="list   bg-neutral-200 py-1 px-2 md:text-left text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quis ut fuga, accusantium natus recusandae.</li>
            <li className="list   bg-neutral-200 py-1 px-2 md:text-left text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quis ut fuga, accusantium natus recusandae.</li>
            <li className="list  bg-neutral-200 py-1 px-2 md:text-left text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quis ut fuga, accusantium natus recusandae.</li>
          </ul>
        </div>
      </section>
    </>
  );
}
