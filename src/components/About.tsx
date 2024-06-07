import React from 'react'
import Image from 'next/image'

function AboutPage() {
    return (
        <div id="About" className='px-8 py-8 w-full content-center text-white rounded overflow-hidden z-1 shadow-lg shadow-black bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-transparent via-gray-600/5 to-transparent'>
            {/* Decorational  */}
            <div className="relative w-full grid place-content-center -z-5">
                <div className="absolute top-2 left-20 w-72 h-72 bg-purple-300/90 rounded-full mix-blend-soft-light filter blur-3xl opacity-100 animate-accordion-down"></div>
                <div className="absolute bottom-1 right-10 w-72 h-72 bg-yellow-300/90 rounded-full mix-blend-soft-light filter blur-3xl opacity-100 animate-accordion-up"></div>
                <div className="absolute top-10 left-0 w-72 h-72 bg-pink-300/90 rounded-full mix-blend-soft-light filter blur-3xl opacity-100 animate-accordion-down"></div>
            </div>
            {/* Functional  */}
            <div className='flex relative justify-end flex-col sm:ml-10 pb-6'>
                <h1 className="font-bold text-6xl sm:text-[8rem] opacity-15">About</h1>
                <h4 className='absolute top-5 left-3 sm:top-16 font-semibold text-indigo-400 text-2xl sm:text-4xl'>About Us</h4>
            </div>
            <div className='grid place-content-center grid-flow-row md:grid-cols-3 md:grid-flow-col'>
                <div className='sm:p-12 text-wrap text-xl sm:text-2xl w-full md:col-span-2 grid place-content-center'>
                    hackEDCode 2.0 is a hackathon focused on bringing together talented minds in coding and technology to tackle real-world challenges. It offers a platform for participants to learn, collaborate, showcase their skills, and develop innovative solutions using the latest tools. This event promises to be a game-changer in the coding and technology industry.
                </div>
                <div className='w-full place-content-center grid mt-8 md:mt-0'>
                <Image
                    src='/Devs.png'
                    alt="DevsCoding"
                    width={1500}
                    height={2000}
                    className="lg:w-96 md:w-72 w-96 rounded-3xl"
                />
                </div>
            </div>
        </div>
    )
}

export default AboutPage;