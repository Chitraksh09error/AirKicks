import React from 'react'
import { FaShippingFast } from "react-icons/fa";
import { Ri24HoursLine } from "react-icons/ri";
import { TbTruckReturn } from "react-icons/tb";
import { MdOutlineVerified } from "react-icons/md";
import { motion } from 'framer-motion';
function Services() {
    return (
        <div className='lg:mt-28 mt-20'>
            <div className='lg:px-24 px-1 flex flex-wrap items-center justify-center  '>
                <h1 className='lg:text-5xl text-3xl my-6 font-sans font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-gray-500 to-black text-center'>

                    Experience Our Service: Unmatched Innovation in Every Pair
                </h1>
                <h1 className='lg:text-xl text-base my-2 text-center text-black font-bold'>Enjoy personalized service, expert care, and exclusive Air Jordan releases</h1>
            </div>

            <div className="flex flex-wrap justify-center lg:mt-6 mt-2 gap-6 lg:p-4 p-12">
                {/* Card 1 */}
                <motion.div
                initial={{y:100 , opacity : 0}}
                whileInView ={{y:0 , opacity : 1}}
                transition={ {duration : 1, delay : 0.5}} 
                className="w-full sm:w-[48%] lg:w-[23%] bg-gray-300 text-black p-6 rounded-xl shadow-md text-center">
                    <div className='flex items-center text-xl gap-3 justify-center'>
                    <h3 className="font-bold">Fast Delivery</h3>
                    <FaShippingFast className='text-3xl' />

                    </div>

                    <p className="mt-2 text-sm text-justify text-gray-900 font-medium p-3">Get your Air Jordans delivered quickly and securely with our fast and reliable shipping Experience hassle-free service and timely arrivals on every order</p>
                </motion.div>

                {/* Card 2 */}
                <motion.div 
                initial={{y:100 , opacity : 0}}
                whileInView ={{y:0 , opacity : 1}}
                transition={ {duration : 1, delay : 0.5}} 
                className="w-full sm:w-[48%] lg:w-[23%] bg-gray-300 text-black p-6 rounded-xl shadow-md text-center">
                    
                    <div className='flex items-center text-xl gap-3 justify-center'>
                    <h3 className="text-xl font-bold">24/7 Serives</h3>
                    <Ri24HoursLine className='text-3xl' />
                    </div>
                    <p className="mt-2 text-sm text-gray-900 text-justify font-medium p-3">Our 24/7 customer service is always here to assist you. Get support anytime for a seamless shopping experience</p>
                </motion.div>

                {/* Card 3 */}
                <motion.div
                initial={{y:100 , opacity : 0}}
                whileInView ={{y:0 , opacity : 1}}
                transition={ {duration : 1, delay : 0.5}} 
                className="w-full sm:w-[48%] lg:w-[23%] bg-gray-300 text-black p-6 rounded-xl shadow-md text-center">
                    
                    <div className='flex items-center text-xl gap-3 justify-center'>
                    <h3 className="text-xl font-bold">100% Warranty</h3>
                    <TbTruckReturn  className='text-3xl'/>
                    </div>
                    <p className="mt-2 text-sm text-gray-900 text-justify font-medium p-3">Enjoy peace of mind with our 100% warranty, ensuring authenticity and quality in every Air Jordan purchase</p>
                </motion.div>

                {/* Card 4 */}
                <motion.div
                initial={{y:100 , opacity : 0}}
                whileInView ={{y:0 , opacity : 1}}
                transition={ {duration : 1, delay : 0.5}} 
                className="w-full sm:w-[48%] lg:w-[23%] bg-gray-300 text-black p-6 rounded-xl shadow-md text-center">
                    
                    <div className='flex items-center text-xl gap-3 justify-center'>
                    <h3 className="text-xl font-bold">Verified</h3>
                    <MdOutlineVerified  className='text-3xl'/>

                    </div>
                    <p className="mt-2 text-sm text-gray-900 text-justify font-medium p-3">Shop with confidence—our Air Jordans are 100% verified for authenticity and quality</p>
                </motion.div>
            </div>

        </div>
    )
}

export default Services
