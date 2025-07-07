'use client';
import Link from 'next/link';
import React from 'react';
import { ChevronDown } from 'lucide-react';
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/magicui/terminal";
import { AvatarCircles } from "@/components/magicui/avatar-circles";
import { BoxReveal } from "@/components/magicui/box-reveal";

const avatars = [ 
  {
    imageUrl: "https://avatars.githubusercontent.com/u/16860528",
    profileUrl: "https://github.com/dillionverma",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/20110627",
    profileUrl: "https://github.com/tomonarifeehan",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/106103625",
    profileUrl: "https://github.com/BankkRoll",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/59228569",
    profileUrl: "https://github.com/safethecode",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/59442788",
    profileUrl: "https://github.com/sanjay-mali",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/89768406",
    profileUrl: "https://github.com/itsarghyadas",
  },
];


const Bar = () => {
  return (
    <div className="flex px-20 flex-col items-center justify-center py-4 mt-8">
      {/* <button className='bg-black  rounded-lg lg:px-8 lg:py-2 px-6 py-1 hover:bg-gray-400 '>

      <Link href="/login">
      <h1 className='lg:text-lg text-base text-white font-bold hover:text-black'>LOGIN</h1>
      
      </Link>

      </button> */}
      <div className="w-full mt-3 h-1 bg-black"></div>

      <h1  className="text-gray-700 mt-2  flex font-bold items-center gap-2">
        <Link href="/login" className="text-blue-400 underline hover:text-xl transition ease-in-out duration-500">
          Login
        </Link>


        <p>
          to scroll down
        </p>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </h1>
        
      


    </div>
  );
};

export default Bar;
