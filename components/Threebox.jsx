'use client';
import React, { useEffect, useState } from 'react'
import { useTheme } from "next-themes";
import { WobbleCard } from "../components/ui/wobble-card";
import { HyperText } from "@/components/ui/hyper-text";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { MagicCard } from "@/components/ui/magic-card";
import { Background } from '@tsparticles/engine';
import { motion } from 'framer-motion'
import "./card.css";

function Threebox() {
    const [theme, setTheme] = useState("light");

    // Example: Toggle theme on page load (could be based on user preference or a toggle button)
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light"; // Get saved theme
        setTheme(savedTheme);
    }, []);
    return (
        <div className='lg:mt-20 mt-8 mb-10 p-3 '>

            <div className='lg:px-24 px-1 flex flex-wrap items-center justify-center  '>
                <h1 className='lg:text-5xl text-3xl my-6 font-sans font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-gray-500 to-black text-center'>

                Unmatched Features of Air Jordans: A Inheritance of Innovation
                </h1>
                <h1 className='lg:text-xl text-base my-2 text-center text-black font-bold'>Air Jordans embody a legacy of unmatched design and innovation, continuously redefining performance and style</h1>
                </div>


            <div className="flex flex-col justify-center h-auto lg:flex-row lg:gap-6 gap-1 mt-10">
                <div  className="shad h-full flex justify-center   mb-10 w-full lg:w-1/2 rounded-2xl">
                    <img className=" mt-10 rounded-2xl w-full border-2 border-zinc-300 shadow-lg lg:h-full   object-cover" src="/assets/airblue.jpg" alt="" />
                </div>

                <div className="flex flex-col gap-7 lg:w-1/2 w-full">
                    <div 
                   
                    className="h-1/2 w-full p-2 shad flex-col rounded-2xl border-2 border-zinc-300 shadow-lg bg-gradient-to-t from-[#e2e2e2] via-white to-[#e2e2e2] flex items-center justify-center">
                        <h1 className="p-5 text-center text-base lg:text-2xl font-bold text-black">
                            New Arrivals: Stay Ahead with the Latest Air Jordans
                        </h1>
                        <InteractiveHoverButton className="">
                            Buy now
                        </InteractiveHoverButton>
                    </div>
                    <div
                    className="bg-gradient-to-t from-[#e2e2e2] via-white to-[#e2e2e2] shad w-full flex items-center  h-1/2 rounded-2xl border-2 border-zinc-300 shadow-lg">
                        <h1 className='px-9 py-3 text-base lg:text-xl text-gray-900 text-start font-semibold '>Air Jordan isn’t just a sneaker; it’s a legacy of excellence, a symbol of perseverance, and a statement of unstoppable ambition that takes you from the streets to the skies.   __AIRKICKS</h1>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Threebox
