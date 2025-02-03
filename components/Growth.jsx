import React from 'react'
import { FaShippingFast } from "react-icons/fa";
import { Ri24HoursLine } from "react-icons/ri";
import { TbTruckReturn } from "react-icons/tb";
import { MdOutlineVerified } from "react-icons/md";
import { IoPeople } from "react-icons/io5";
import { NumberTicker } from "@/components/ui/number-ticker";
import { GiWorld } from "react-icons/gi";
import { PiSneakerFill } from "react-icons/pi";
import { motion } from 'framer-motion';
function Growth() {
    return (
        <div className='lg:mt-28 mt-20'>
            <div className='lg:px-24 px-1 flex flex-wrap items-center justify-center  '>
                <h1 className='lg:text-5xl text-3xl my-6 font-sans font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-gray-500 to-black text-center'>

                Leading the Air Jordan Revolution: Trusted by Sneaker Enthusiasts Worldwide
                </h1>
                <h1 className='lg:text-xl text-base my-2 text-center text-black font-bold'>Trusted by sneaker lovers worldwide for authentic Air Jordans, exclusive drops, and seamless shopping</h1>
            </div>

            <div className="flex flex-wrap justify-center lg:mt-6 mt-2 gap-6 lg:p-4 p-12">
                {/* Card 1 */}
                <motion.div
                initial={{y:100 , opacity : 0}}
                whileInView ={{y:0 , opacity : 1}}
                transition={ {duration : 1, delay : 0.5}} 
                className="w-full sm:w-[48%] lg:w-[23%] bg-gray-300 text-black p-6 rounded-xl shadow-md text-center">
                    <div className='flex items-center text-xl gap-3 justify-center'>
                    <NumberTicker
                        value={25000}
                        className="whitespace-pre-wrap text-3xl font-medium tracking-tighter text-black dark:text-white"
                    />
                    <span className='text-2xl font-bold'>+</span>
                        <IoPeople className='text-3xl' />

                    </div>

                        <h3 className="font-bold text-xl">Customers</h3>
                    <p className="mt-2 text-sm text-justify text-gray-900 font-medium p-3">Join thousands of satisfied sneaker lovers who trust us for fast, secure, and hassle-free Air Jordan deliveries. Experience seamless shopping with timely arrivals every time</p>
                </motion.div>

                {/* Card 2 */}
                <motion.div
                initial={{y:100 , opacity : 0}}
                whileInView ={{y:0 , opacity : 1}}
                transition={ {duration : 1, delay : 0.5}} 
                className="w-full sm:w-[48%] lg:w-[23%] bg-gray-300 text-black p-6 rounded-xl shadow-md text-center">
                    
                    <div className='flex items-center text-xl gap-3 justify-center'>
                <NumberTicker
                        value={500}
                        className="whitespace-pre-wrap text-3xl font-medium tracking-tighter text-black dark:text-white"
                    />
                    <span className='text-2xl font-bold'>+</span>
                        <GiWorld  className='text-3xl' />
                    </div>
                        <h3 className="text-xl font-bold">Global Investors</h3>
                    <p className="mt-2 text-sm text-gray-900 text-justify font-medium p-3">Backed by a strong network of investors, we continue to expand and innovate, bringing you the best in Air Jordan retail</p>
                </motion.div>

                {/* Card 3 */}
                <motion.div
                initial={{y:100 , opacity : 0}}
                whileInView ={{y:0 , opacity : 1}}
                transition={ {duration : 1, delay : 0.5}} 
                className="w-full sm:w-[48%] lg:w-[23%] bg-gray-300 text-black p-6 rounded-xl shadow-md text-center">
                    <div className='flex items-center text-xl gap-3 justify-center'>
                <NumberTicker
                        value={10000}
                        className="whitespace-pre-wrap text-3xl font-medium tracking-tighter text-black dark:text-white"
                    />
                    <span className='text-2xl font-bold'>+</span>
                        <PiSneakerFill className='text-3xl' />
                    </div>
                        <h3 className="text-xl font-bold">Premium Sneaker Drops</h3>
                    <p className="mt-2 text-sm text-gray-900 text-justify font-medium p-3">Stay ahead with exclusive Air Jordan releases, limited editions, and rare sneaker drops curated just for you</p>
                </motion.div>

                {/* Card 4 */}
                <motion.div
                
                initial={{y:100 , opacity : 0}}
      whileInView ={{y:0 , opacity : 1}}
      transition={ {duration : 1, delay : 0.5}} 
                className="w-full sm:w-[48%] lg:w-[23%] bg-gray-300 text-black p-6 rounded-xl shadow-md text-center">

                    <div className='flex items-center text-xl gap-3 justify-center'>
                <NumberTicker
                        value={98}
                        className="whitespace-pre-wrap text-3xl font-medium tracking-tighter text-black dark:text-white"
                    />
                    <span className='text-2xl font-bold'>+</span>
                        <MdOutlineVerified className='text-3xl' />

                    </div>
                        <h3 className="text-xl font-bold">Customer Satisfaction</h3>
                    <p className="mt-2 text-sm text-gray-900 text-justify font-medium p-3">Our commitment to authenticity and quality has earned the trust of sneakerheads worldwide—shop with confidence</p>
                </motion.div>
            </div>

        </div>
    )
}

export default Growth
