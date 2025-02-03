"use client";
import React from 'react'
import { BorderBeam } from "@/components/ui/border-beam";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { motion } from 'framer-motion'
const Dashborad = () => {
    return (
        <div className='lg:mt-20 mt-3 mb-10 p-3'>


        <div  
        className='lg:p-4 p-0'>
            <ContainerScroll>
            <div className="relative flex h w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
                <img className='h-full w-full object-contain' src="/assets/airdash.jpg" alt="" />
                <BorderBeam size={250} duration={12} delay={9} />
            </div>
            </ContainerScroll>

        </div>
            </div>
    )
}

export default Dashborad
