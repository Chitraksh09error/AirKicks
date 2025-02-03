
import Bar from "@/components/Bar";
import Dashborad from "@/components/Dashborad";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Threebox from "@/components/Threebox";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
       <Navbar/>
       <div className="lg:mx-52 mx-1">
       <Hero/>
       <Bar/>
       </div>
    </main>
  );
}
