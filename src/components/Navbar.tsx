import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="grid bg-none mx-12 my-2 p-4 mb-4 rounded-2xl font-bold text-xl tracking-wider shadow-stone-800/20 shadow-sm backdrop-opacity-90 font-montserratalt" id="Navbar Container">
      <div className="grid grid-flow-col backdrop-blur-xl shadow-black h-full shadow-2xl" id="Navbar">
        <div className="text-white divide-x-2 gap-2 divide-white/20 flex content-center items-center flex-row mr-auto" id="Logo">
          <Link href="/" className="hover:text-[#631fe3]/80 transition-all text-sm lg:text-xl">

          <div className="aspect-square bg-white rounded-[1000px] w-[70%] xl:w-[100%] p-1 mr-4">
        <Image src="/ipu.png" alt="University Logo" width={50} height={50} />
      </div>


          </Link>
          <div className="w-[40%]  xl:w-[100%]">
          <Image
            src="/elysian logo.png"
            alt="Elysian"
            width={80}
            height={60}
            className="w-fit my-auto pl-2"
          >

          </Image>
          </div>
        </div>
        <div className="hidden md:grid grid-flow-col items-center ml-auto font-josefin bg-white/10 rounded-2xl px-2 pr-4" id="Elements">
          <Link href="/">
            <p className="relative flex h-[50px] px-4 items-center justify-center rounded-full overflow-hidden text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-indigo-700/40 before:duration-500 before:ease-out hover:shadow-indigo-700/30 hover:before:h-56 hover:before:w-56">
              Home
            </p>
          </Link>
          <Link
            href="https://drive.google.com/file/d/1MHL11yx7ELu6ebIGu5NURKLFfgG1ErbF/view?usp=sharing"
            target="_blank"
          >
            <p className="relative flex h-[50px] px-4 items-center justify-center rounded-full overflow-hidden text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-indigo-700/40 before:duration-500 before:ease-out hover:shadow-indigo-700/30 hover:before:h-56 hover:before:w-56">
              Sponsor Us
            </p>
          </Link>
          <Link href="/teams">
            <p className="relative flex h-[50px] px-4 items-center justify-center rounded-full overflow-hidden text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-indigo-700/40 before:duration-500 before:ease-out hover:shadow-indigo-700/30 hover:before:h-56 hover:before:w-56">
              Team
            </p>
          </Link>
          <Link href="/contact">
            <p className="relative flex h-[50px] px-4 items-center justify-center rounded-full overflow-hidden text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-indigo-700/40 before:duration-500 before:ease-out hover:shadow-indigo-700/30 hover:before:h-56 hover:before:w-56">
              Contact Us
            </p>
          </Link>
          <Link href="/swags">
            <Button className="bg-white text-black hover:bg-[rgb(99,31,227)]/80 hover:text-white transition-all">
              Digital ID
            </Button>
          </Link>
        </div>
        <div className="md:hidden flex place-content-end items-center" id="Hamburger">
          {isMenuOpen ? (
            <>
              <div className=" flex flex-col items-end w-full">
                <div onClick={toggleMenu} className="text-white">
                  <Menu />
                </div>
              </div>
            </>
          ) : (
            <Menu onClick={toggleMenu} color="#ffffff" />
          )}
        </div>
      </div>
      {isMenuOpen ? (
        <div className="my-5 flex-col gap-3 items-center flex">
          <Link href="/teams">
            <p className="text-white font-mono font-bold text-lg -px-2 mx-1 hover:text-[#631fe3]">
              Team
            </p>
          </Link>
          <Link
            href="https://drive.google.com/file/d/1MHL11yx7ELu6ebIGu5NURKLFfgG1ErbF/view?usp=sharing"
            target="_blank"
          >
            <p className="text-white font-mono font-bold text-lg mx-4 hover:text-[#631fe3]">
              Sponsor Us
            </p>
          </Link>
          <Link href="/contact">
            <p className="text-white font-mono font-bold text-lg mx-4 hover:text-[#631fe3]">
              Contact Us
            </p>
          </Link>
          <Link href="/swags">
            <Button className="bg-white text-black hover:bg-[#631fe3] hover:text-white">
              Digital ID
            </Button>
          </Link>
        </div>
      ) : null}
    </div>
  );
}

export default Navbar;