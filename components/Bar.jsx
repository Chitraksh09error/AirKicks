'use client';
import Link from 'next/link';
import React from 'react';
import { ChevronDown } from 'lucide-react';

const Bar = () => {
  return (
    <div className="flex px-20 flex-col items-center justify-center py-4 mt-8">
      {/* <button className='bg-black  rounded-lg lg:px-8 lg:py-2 px-6 py-1 hover:bg-gray-400 '>

      <Link href="/login">
      <h1 className='lg:text-lg text-base text-white font-bold hover:text-black'>LOGIN</h1>
      
      </Link>

      </button> */}
      <div className="w-full mt-3 h-1 bg-black"></div>

      <p className="text-gray-700 mt-2  flex font-bold items-center gap-2">
        <Link href="/login" className="text-blue-400 underline hover:text-xl transition ease-in-out duration-500">
          Login
        </Link>


        <h1>
          to scroll down
        </h1>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </p>
    </div>
  );
};

export default Bar;
