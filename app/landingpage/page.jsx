'use client';
import Cardscounter from '@/components/Cardscounter';
import Dashborad from '@/components/Dashborad';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Threebox from '@/components/Threebox';
import Services from '@/components/Services';
import Growth from '@/components/Growth';
import Company from '@/components/Company';
import React from 'react';

const Page = () => {
  return (
    <div>
      <Navbar />
      <div className="lg:mx-44 mx-1">
        <Hero />
        <Threebox />
        <Dashborad />
        <Services />
        <Cardscounter />
        <Growth />
        <Company />
      </div>
    </div>
  );
};

export default Page;
