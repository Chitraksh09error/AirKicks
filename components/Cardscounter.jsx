"use client";
import Image from "next/image"
import React from 'react'
import "./cardcouter.css";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { TextAnimate } from "@/components/ui/text-animate";

const Cardscounter = () => {
    return (

        <div className="mt-10 ">


            <div className=" text-center   font-black lg:px-16 px-1 ">
                <div  className="lg:text-5xl text-3xl my-6 font-sans font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-gray-500 to-black text-center">
                    Unveiling Excellence: The Latest Premium Air Jordan Release
                </div>
                    <h2 className='lg:text-xl text-base my-2 text-center text-black font-bold'>Explore the latest premium Air Jordan release, where style meets innovation.</h2>
            </div>

            <div
                className="flex flex-wrap lg:gap-8 lg:mt-16 mt-10 justify-center  ">


                    <CardContainer className="w-80   ">

                        <CardBody className="bg-gradient-to-t from-cyan-300 via-white to-cyan-300 clip-diagonal flex flex-col  justify-center items-center  group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1]  sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                            <CardItem
                                translateZ="50"
                                className="text-xl font-bold text-black"
                            >
                                Air Jordan 1 Mid
                            </CardItem>
                            <CardItem
                                as="p"
                                translateZ="60"
                                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                            >
                                Hover over this card to unleash the power of CSS perspective
                            </CardItem>
                            <CardItem translateZ="100" className=" mt-4">
                                <img
                                    src="/assets/cyanair.png"
                                    height=""
                                    width=""
                                    className="shado  cursor-pointer  lg:w-44 mt-16 w-36   object-cover rounded-xl group-hover:card:shadow-xl"
                                    alt="thumbnail"
                                />

                            </CardItem>

                        </CardBody>
                    </CardContainer>
 


                    <CardContainer className="w-80  ">
                        <CardBody className="bg-gradient-to-t from-black via-white to-black group/card flex flex-col justify-center items-center  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1]  sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                            <CardItem
                                translateZ="50"
                                className="text-xl font-bold text-white"
                            >
                                Air Jordan 1 High OG
                            </CardItem>
                            <CardItem
                                as="p"
                                translateZ="60"
                                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                            >
                                Hover over this card to unleash the power of CSS perspective
                            </CardItem>
                            <CardItem translateZ="100" className=" mt-4">
                                <img
                                    src="/assets/blackair.png"
                                    height=""
                                    width=""
                                    className=" shado cursor-pointer  lg:w-44 mt-16 w-36   object-cover rounded-xl group-hover:card:shadow-xl"
                                    alt="thumbnail"
                                />

                            </CardItem>

                        </CardBody>
                    </CardContainer>

                    <CardContainer className="w-80 ">
                        <CardBody className="bg-gradient-to-t from-[#ca9464] via-white to-[#ca9464] group/card flex flex-col justify-center items-center dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1]  sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                            <CardItem
                                translateZ="50"
                                className="text-xl font-bold text-black"
                            >
                                Air Jordan 1 XC
                            </CardItem>
                            <CardItem
                                as="p"
                                translateZ="60"
                                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                            >
                                Hover over this card to unleash the power of CSS perspective
                            </CardItem>
                            <CardItem translateZ="100" className=" mt-4">
                                <img
                                    src="/assets/brownair.png"
                                    height=""
                                    width=""
                                    className=" shado cursor-pointer  lg:w-44 mt-16 w-36   object-cover rounded-xl group-hover:card:shadow-xl"
                                    alt="thumbnail"
                                />

                            </CardItem>

                        </CardBody>
                    </CardContainer>
            </div>
        </div>
    )
}

export default Cardscounter
