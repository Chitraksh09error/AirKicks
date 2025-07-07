'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTheme } from "next-themes";
import { Particles } from "@/components/ui/particles";

const Login = () => {
  const [state, setState] = useState('login');  // Only login now
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");
 
  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  }, [resolvedTheme]);
 

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // No validation or authentication; direct login
    router.push('/landingpage');
  };
  
  return (
    <div className='h-screen bg-no-repeat lg:bg-[length:500px_400px] lg:bg-right-bottom bg-bottom bg-[length:400px_300px] bg-[#ffffff] flex items-center justify-center px-6'>
      <div className='bg-gray-100 z-50 p-10 flex flex-col items-center rounded-xl shadow-xl w-full sm:w-96'>
        <Link href="/">
          <img className='h-16 w-64' src="/assets/airkicksb.png" alt="Logo" />
        </Link>

        <div className='mt-10 w-full'>
          <p className='text-center mb-6 font-semibold text-sm'>Login to your account</p>

          <form onSubmit={onSubmitHandler}>
            <div className='flex gap-4 mb-3 w-full px-5 py-2 items-center rounded-full bg-[#dce0e2]'>
              <input className='outline-none bg-transparent' autoComplete='new-email' onChange={(e) => setEmail(e.target.value)} value={email} type='email' placeholder='Email' required />
            </div>

            <div className='flex gap-4 mb-3 w-full px-5 py-2 items-center rounded-full bg-[#dce0e2]'>
              <input className='outline-none bg-transparent' onChange={(e) => setPassword(e.target.value)} value={password} type='password' placeholder='Password' required />
            </div>

            <button className='rounded-full bg-black w-full px-4 py-2 mb-3 text-white'>Login</button>
          </form>
        </div>
      </div>
      <Particles
        className="absolute inset-0 z-0 overflow-hidden"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
    </div>
  );
};

export default Login;
