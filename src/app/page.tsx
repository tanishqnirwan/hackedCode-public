"use client";
import About from "@/components/About";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Previous } from "@/components/Previous";
import Sponsors from "@/components/Sponsors";
import Tracks from "@/components/Tracks";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div className="w-full dark:bg-black dark:bg-grid-white/[0.2] bg-grid-white/[0.06] bg-black overflow-hidden">
      <Navbar />
      <div className="rounded-2xl text-white flex flex-col justify-center items-center overflow-hidden -z-1 shadow-lg shadow-black bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-transparent via-gray-600/5 to-transparent">
        <div className="flex relative justify-end flex-col">

        </div>
        <div className="grid grid-cols-1  xl:place-items-center place-items-center mt-2">



          <Image
            src="/finalhack.png"
            alt="HackEDCode"
            width={5000}
            height={300}
            className="w-[5000px] xl:w-[1100px] mb-4 xl:mb-2"
          />
        </div>

        <div className="relative w-full grid place-content-center z-2">
          <div className="absolute top-30 left-20 w-72 h-72 bg-purple-300/90 rounded-full mix-blend-soft-light filter blur-3xl opacity-100 animate-accordion-down"></div>
          <div className="absolute bottom-1 right-10 w-72 h-72 bg-yellow-300/90 rounded-full mix-blend-soft-light filter blur-3xl opacity-100 animate-accordion-up"></div>
          <div className="absolute top-40 left-0 w-72 h-72 bg-pink-300/90 rounded-full mix-blend-soft-light filter blur-3xl opacity-100 animate-accordion-down"></div>
        </div>





        <h1 className="font-mono bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-center font-bold text-sm text-mono sm:text-2xl md:text-4xl lg:text-4xl">
          Build Ideas into Existence
        </h1>
        <div className="p-4 mt-4 hidden md:block z-20">
          <div
            className="apply-button w-fit rounded-2xl my-8 hidden md:block z-20"
            data-hackathon-slug="hackedcode-2"
            data-button-theme="dark"
          ></div>
        </div>
        <Link
          href="https://hackedcode-2.devfolio.co/"
          target="_blank"
          className="m-4 font-mono font-bold text-xl mx-4 block sm:hidden z-20"
        >
          <Button className="bg-white/10 hover:bg-indigo-500/20 px-10 z-20">
            <h1 className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text">
              Register Now
            </h1>
          </Button>
        </Link>
        <Link
          href="https://linktr.ee/hackedcode2.0"
          target="_blank"
          className="m-4 font-mono font-bold text-xl mx-4 z-20"
        >
          <Button className="bg-white/10 hover:bg-indigo-500/20 z-20">
            <h1 className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text">
              Join our community
            </h1>
          </Button>
        </Link>
      </div>
      <About />
      <Tracks />
      <Sponsors />
      <Previous />
      <Faq />
      <Footer />
    </div>
  );
};

export default HomePage;
