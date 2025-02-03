'use client';
import Cardscounter from '@/components/Cardscounter';
import Dashborad from '@/components/Dashborad';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Threebox from '@/components/Threebox';
import { supabase } from '@/utils/client';
import { useRouter } from 'next/navigation';
import { useTheme } from "next-themes";
import React, { useEffect, useState } from 'react';
import { Particles } from "@/components/ui/particles";
import Services from '@/components/Services';
import Growth from '@/components/Growth';
import Company from '@/components/Company';

const Page = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); 
  const router = useRouter();
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");
 
  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  }, [resolvedTheme]);
 
  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getSession();
      if (!data?.session?.user) {
        router.replace("/"); // ✅ Redirect if no user
      } else {
        setUser(data.session.user);
      }
      setLoading(false); // ✅ Set loading false after check
    };

    checkUser();
  }, []);

  return (
    <div >
      <Navbar />
      <div className="lg:mx-44 mx-1">
        <Hero />
        <Threebox />
        <Dashborad />
        <Services/>
        <Cardscounter />
        <Growth/>
        <Company/>
      </div>
    </div>
  );
};

export default Page;
