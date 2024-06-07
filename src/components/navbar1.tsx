import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track menu open/close

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu state
  };

  return (
    <>
      <div className="relative flex justify-center items-center">
        <div className="sticky top-3 z-30 sm:mx-48 md:mx-24 bg-slate-600/20 shadow-xl shadow-gray-600/20 px-4 py-2 mt-2 rounded-2xl backdrop-blur-md lg:text-xl text-md">
          <div className="grid place-content-between grid-flow-col grid-cols-2 gap-2">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <p className="text-white hover:text-[#631fe3] font-semibold ml-3">
                  hackEDCode 2.0
                </p>
              </Link>
            </div>
            <div className="hidden md:grid justify-end grid-flow-col items-center gap-3">
              <Link href="/">
                <p className="text-white font-mono font-bold text-lg px-2 hover:text-[#631fe3]">
                  Home
                </p>
              </Link>
              <Link
                href="https://drive.google.com/file/d/1MHL11yx7ELu6ebIGu5NURKLFfgG1ErbF/view?usp=sharing"
                target="_blank"
              >
                <p className="text-white font-mono font-bold text-lg -px-2 mx-1 hover:text-[#631fe3]">
                  Sponsor Us
                </p>
              </Link>
              <Link href="/contact">
                <p className="text-white font-mono font-bold text-lg -px-2 mx-1 hover:text-[#631fe3]">
                  Contact Us
                </p>
              </Link>
              <Link href="/swags">
                <Button className="ml-2 bg-white text-black hover:bg-[#631fe3] hover:text-white">
                  Digital ID
                </Button>
              </Link>
            </div>
            <div className="md:hidden flex justify-end gap-4 w-full items-center my-2">
              <Link href="/swags">
                <Button className="bg-white text-black hover:bg-[#631fe3] hover:text-white">
                  Digital ID
                </Button>
              </Link>
              {isMenuOpen ? (
                <>
                  <div className=" flex flex-col items-end">
                    <div onClick={toggleMenu} className="text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="m15 9-6 6" />
                        <path d="m9 9 6 6" />
                      </svg>
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
            </div>
          ) : null}
        </div>
        <div>
          <Image
            className="h-auto w-[300px]  "
            src={"/GGSIPU.png"}
            alt="IBM logo"
            height={200}
            width={120}
          />
        </div>
      </div>
    </>
  );
}

export default Navbar;
