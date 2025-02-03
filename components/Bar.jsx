'use client';

import React from 'react';
import { ChevronDown } from 'lucide-react';

const Bar = () => {
  return (
    <div className="flex px-20 flex-col items-center justify-center py-4 mt-8">
      <div className="w-full  h-1 bg-black"></div>
      <p className="text-gray-700 mt-2 flex font-bold items-center gap-2">
        Login to scroll down
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </p>
    </div>
  );
};

export default Bar;
