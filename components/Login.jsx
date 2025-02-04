'use client';
import React, { useState } from 'react';
import {supabase} from '../utils/client'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTheme } from "next-themes";
import { useEffect} from "react";
import { Particles } from "@/components/ui/particles";

const Login = () => {
  const [state, setState] = useState('signup');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passShow, setPassShow] = useState(false);
  const [type, setType] = useState('password');
  const router = useRouter();
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");
 
  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  }, [resolvedTheme]);
 

  const onSubmitHandler = async (e) => {
    try {
        e.preventDefault();

        let data, error;

        if (state === 'signup') {
            ({ data, error } = await supabase.auth.signUp({
                email: email,
                password: password,
                options: {
                    data: {
                        name: name,
                    }
                }
            }));

            if (error) {
                alert('Signup failed: ' + error.message);
                return;
            }

            if (data?.user) {
                alert("Signup successful! Please check your email to verify your account and Please go to Login Page");
                setEmail('') ;
                setName('');
                setPassword('');            
                   return;
            }
        } else {
            ({ data, error } = await supabase.auth.signInWithPassword({ email, password }));

            if (error) {
                alert('Authentication failed: ' + error.message);
                return;
            }

            if (data?.session) {
                setState('login');
                router.push('/landingpage');
            } else {
                alert('Invalid email or password');
            }
        }
    } catch (error) {
        alert('Error: ' + error.message);
    }
};
  return (
    <div className='h-screen bg-no-repeat lg:bg-[length:500px_400px] lg:bg-right-bottom bg-bottom bg-[length:400px_300px] bg-[#ffffff] flex items-center justify-center px-6'>
      <div className='bg-gray-100 z-50 p-10 flex flex-col items-center rounded-xl shadow-xl w-full sm:w-96'>
        <Link  href="/">
        
        <img className='h-16 w-64 ' src="/assets/airkicksb.png" alt="" />
        </Link>

        <div className='mt-10 w-full'>
        <p className='text-center mb-6 font-semibold text-sm'>{state === 'signup' ? 'Create your account' : 'Login to your account'}</p>

        <form onSubmit={onSubmitHandler}>
          {state === 'signup' && (
            <div className='flex mb-3 gap-4 w-full px-5 py-2 rounded-full bg-[#dce0e2] items-center'>
              <input className='outline-none bg-transparent' onChange={(e) => setName(e.target.value)} value={name} type='text' placeholder='Full Name' required />
            </div>
          )}

          <div className='flex gap-4 mb-3 w-full px-5 py-2 items-center rounded-full bg-[#dce0e2]'>
            <input className='outline-none bg-transparent' autoComplete='new-email' onChange={(e) => setEmail(e.target.value)} value={email} type='email' placeholder='Email' required />
          </div>

          <div className='flex gap-4 mb-3 w-full px-5 py-2 items-center rounded-full bg-[#dce0e2]'>
            <input className='outline-none bg-transparent' onChange={(e) => setPassword(e.target.value)} value={password} type={type} placeholder='Password' required />
          
          </div>

          <button className='rounded-full bg-black w-full px-4 py-2 mb-3 text-white'>{state}</button>
        </form>

        {state === 'signup' ? (
          <p className='text-xs text-center text-gray-500'>Already have an account?{' '}
            <span className='underline cursor-pointer text-black' onClick={() => setState('login')}>Login</span>
          </p>
        ) : (
          <p className='text-xs text-center text-gray-500'>Don't have an account?{' '}
            <span className='underline cursor-pointer text-black' onClick={() => setState('signup')}>Sign Up</span>
          </p>
        )}
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
