'use client';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { ShinyButton } from "@/components/ui/shiny-button.jsx";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    router.push('/login');
  };

  return (
    <header className="bg-black mt-2 lg:px-8 px-4 lg:mx-52 md:mx-10 mx-2 rounded-2xl">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between py-3 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img alt="" src="/assets/airkicks.png" className="h-6 w-auto" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-10">
          <a href="#" className="text-sm/6 font-semibold text-white">
            Product
          </a>
          <a href="#" className="text-sm/6 font-semibold text-white">
            Features
          </a>
          <a href="#company" className="text-sm/6 font-semibold text-white">
            Company
          </a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <ShinyButton onClick={handleLogout} className="text-black bg-white px-4 py-2 rounded-full">
            Login
          </ShinyButton>
        </div>
      </nav>
      <div className={`fixed inset-0 z-50 bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white ${mobileMenuOpen ? '' : 'hidden'}`}>
        <div className="flex items-center justify-between">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img alt="" src="/assets/airkicksb.png" className="h-6 w-auto" />
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="-m-2.5 rounded-md p-2.5 text-black"
          >
            <span className="sr-only">Close menu</span>
            <XMarkIcon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              <a href="#" className="block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                Product
              </a>
              <a href="#" className="block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                Features
              </a>
              <a href="#" className="block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                Company
              </a>
            </div>
            <div className="py-6">
              <ShinyButton onClick={handleLogout} className="text-black bg-white px-4 py-2 rounded-full">
                Logout
              </ShinyButton>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
