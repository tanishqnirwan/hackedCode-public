"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "./ui/layout-grid";
import Image from "next/image";

export function Previous() {
  return (
    <div className='px-4 py-8 w-full text-white rounded overflow-hidden z-1 shadow-lg shadow-black bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-transparent via-gray-600/5 to-transparent overscroll-none'>
                {/* Decorational  */}
                <div className="relative w-full grid place-content-center -z-5">
                    <div className="absolute right-20 w-72 h-72 bg-purple-300/90 rounded-full mix-blend-soft-light filter blur-3xl opacity-100 animate-accordion-down"></div>
                    <div className="absolute bottom-1 right-10 w-72 h-72 bg-yellow-300/90 rounded-full mix-blend-soft-light filter blur-3xl opacity-100 animate-accordion-up"></div>
                    <div className="absolute top-1 right-0 w-72 h-72 bg-pink-300/90 rounded-full mix-blend-soft-light filter blur-3xl opacity-100 animate-accordion-down"></div>
                </div>
                {/* Functional  */}
                <div className='flex relative items-end pr-5 justify-end flex-col sm:mr-10 pb-6'>
                    <h1 className="font-bold text-5xl sm:text-[8rem] opacity-15">SnapShots</h1>
                    <h4 className='absolute top-3 right-7 sm:right-16 sm:top-16 font-semibold text-indigo-400 text-2xl sm:text-4xl'>SnapShots</h4>
                </div>

    
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = ({img}:{img: string}) => {
  return (
    <div>
      <Image src={`${img}`} alt="img1" width={600} height={400} className="w-full h-full"/>
    </div>
  );
};
const cards = [
  {
    id: 1,
    content: <SkeletonOne img="/img7.jpeg"/>,
    className: "md:col-span-2",
    thumbnail:
      "/img7.jpeg",
  },
  {
    id: 2,
    content: <SkeletonOne img="/img1.JPG" />,
    className: "col-span-1",
    thumbnail:
    "/img1.JPG",
  },
  {
    id: 3,
    content: <SkeletonOne img="/img2.JPG" />,
    className: "col-span-1",
    thumbnail:
    "/img2.JPG",
  },
  {
    id: 4,
    content: <SkeletonOne img="/img3.JPG" />,
    className: "col-span-1 h-full",
    thumbnail:
    "/img3.JPG",
  },
  {
    id: 5,
    content: <SkeletonOne img="/img4.JPG" />,
    className: "col-span-1",
    thumbnail:
    "/img4.JPG",
  },
  {
    id: 6,
    content: <SkeletonOne img="/img5.JPG" />,
    className: "col-span-1",
    thumbnail:
    "/img5.JPG",
  },
  {
    id: 7,
    content: <SkeletonOne img="/img6.JPG" />,
    className: "col-span-1",
    thumbnail:
    "/img6.JPG",
  },
  {
    id: 8,
    content: <SkeletonOne img="/img7.JPG" />,
    className: "col-span-1",
    thumbnail:
    "/img7.JPG",
  },
];
