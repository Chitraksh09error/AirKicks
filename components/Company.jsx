import React from 'react';
import { FloatingDock } from "@/components/ui/floating-dock";
import {
    IconBrandInstagram,
    IconBrandLinkedin,
    IconBrandFacebook,
    IconBrandTwitter,
} from "@tabler/icons-react";

const Company = () => {

    const links = [
        {
            title: "Instagram",
            icon: (
                <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "LinkedIn",
            icon: (
                <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "Facebook",
            icon: (
                <IconBrandFacebook className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "Twitter",
            icon: (
                <IconBrandTwitter className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
    ];
    return (
        <div id='company' className="flex justify-center items-center py-10 px-7 bg-[#f7f7f7] overflow-x-hidden">
            <div className="bg-white p-8 w-full rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-gray-500 to-black text-center mb-6">Company Information</h2>

                <div className="flex flex-col lg:flex-row mb-6">
                    {/* Left Column - Company Details */}
                    <div className="w-full lg:w-1/2 pr-4 mb-6 lg:mb-0">
                        <div className="mb-4">
                            <h3 className="text-xl font-semibold mb-2">Company Name</h3>
                            <p className="text-gray-600">AirKicks</p>
                        </div>

                        <div className="mb-4">
                            <h3 className="text-xl font-semibold mb-2">Physical Address</h3>
                            <p className="text-gray-600">1234 Street Name, City, State, Zip Code</p>
                        </div>

                        <div className="mb-4">
                            <h3 className="text-xl font-semibold mb-2">Phone Number</h3>
                            <p className="text-gray-600">91+ 7276250722</p>
                        </div>

                        <div className="mb-4">
                            <h3 className="text-xl font-semibold mb-2">Email Address</h3>
                            <p className="text-gray-600">support@airkicks.com</p>
                        </div>

                        <div className="mb-4">
                            <h3 className="text-xl font-semibold mb-2">Business Hours</h3>
                            <p className="text-gray-600">
                                Monday - Friday: 9:00 AM - 6:00 PM
                                <br />
                                Saturday: 10:00 AM - 4:00 PM
                                <br />
                                Sunday: Closed
                            </p>
                        </div>



                    </div>
                    {/* Right Column - Map */}
                    <div className="w-full lg:w-1/2 pl-4">
                        <h3 className="text-xl font-semibold mb-2">Find Us on the Map</h3>
                        <div className="w-full h-64 bg-gray-300 rounded-lg">
                            {/* Embed Google Map iframe here */}
                            <iframe
                                src="https://www.google.com/maps/embed?pb=..."
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                style={{ border: '0' }}
                                allowFullScreen=""
                                aria-hidden="false"
                                tabIndex="0"
                                title="Company Location"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex mt-3 items-center justify-center w-full">
                    <FloatingDock
                        className="fixed bottom-4 w-full max-w-md mx-auto" // Ensures centered floating dock
                        mobileClassName="bottom-4" // Keeps it the same on mobile
                        items={links}
                    />
                </div>

                {/* Bottom Line Divider */}
                <div className="border-t-2 border-gray-300 mt-6"></div>

                {/* Footer Links */}
                <div className="mt-6 text-center">
                    <a href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</a> |
                    <a href="/terms-and-conditions" className="text-blue-600 hover:underline"> Terms & Conditions</a>
                </div>
                <h1 className='text-center font-bold mt-3'>Made by Chitraksh</h1>
            </div>
        </div>
    );
};

export default Company;
