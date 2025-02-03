'use client';
import React from 'react'
import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/ui/dot-pattern";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import Image from "next/image";
import { Cover } from "@/components/ui/cover";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import "./Hero.css";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { motion } from 'framer-motion'
function Hero() {
    return (

        <div className=" lg:mt-16 mt-10">


            <div className='flex  flex-wrap-reverse flex-row-reverse'>
                <div  
                className='flex  justify-center items-center w-full lg:w-1/2 '>
                    <div className='flex justify-center'>

                        <img className='shabox cursor-pointer z-40 lg:w-80 md:w-64 mt-16 w-36 min-w-[16rem] ' src="/assets/rednike.png"
                        />
                    </div>

                </div>

                <div className='flex justify-center z-40 items-center w-full lg:w-1/2 lg:p-5 p-1'>
                    <div className='flex justify-center items-start flex-col lg:mx-9 mx-1 '>
                        <div
     
                            className={cn(
                                "group rounded-full lg:w-72 w-60 border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
                            )}
                        >
                            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-black hover:duration-300 hover:dark:text-neutral-400">
                                <span>✨ Build for the Future</span>
                                <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                            </AnimatedShinyText>
                        </div>
                        <div 
                        className="lg:text-6xl flex flex-col  justify-between lg:text-start text-center space-y-2 text-4xl mt-6 font-sans font-extrabold ">
                            Transforming Kicks: Your Ultimate  Air Jordan at Marketplace 
                        </div>
                    </div>

                </div>

            </div>
                <div

                className='mt-10 px-10 flex lg:justify-start justify-center '>
                        <RainbowButton className="bg-white text-white lg:text-base text-xs font-medium" >Get Unlimited Access To Premium Packages</RainbowButton>
                    
                    </div>
            <DotPattern
                className={cn(
                    "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)] z-0 ",
                )}
            />
        </div>

    )
}

export default Hero
