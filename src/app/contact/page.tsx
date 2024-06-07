"use client"

import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useForm, ValidationError } from "@formspree/react";
import MaxWidthWrapper from '@/components/MaxWidthWrapper';

function Contact() {
    const [state, handleSubmit] = useForm("meqylnbr");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }

    return (
        <div className=' dark:bg-black dark:bg-grid-white/[0.2] bg-grid-white/[0.06] bg-black overflow-hidden'>
            <Navbar />
            <div className="rounded-2xl text-white flex flex-col justify-center items-center overflow-hidden -z-1 shadow-lg shadow-black bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-transparent via-gray-600/5 to-transparent">
                {/* TODO */}
                <div id="Contact" className='px-8 py-8 w-full content-center text-white rounded overflow-hidden z-1 shadow-lg shadow-black bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-transparent via-gray-600/5 to-transparent'>
                    {/* Decorational  */}
                    <div className="relative w-full grid place-content-center -z-5">
                        <div className="absolute top-2 left-20 w-72 h-72 bg-purple-300/90 rounded-full mix-blend-soft-light filter blur-3xl opacity-100 animate-accordion-down"></div>
                        <div className="absolute bottom-1 right-10 w-72 h-72 bg-yellow-300/90 rounded-full mix-blend-soft-light filter blur-3xl opacity-100 animate-accordion-up"></div>
                        <div className="absolute top-10 left-0 w-72 h-72 bg-pink-300/90 rounded-full mix-blend-soft-light filter blur-3xl opacity-100 animate-accordion-down"></div>
                    </div>
                    {/* Functional  */}
                    <div className='flex relative justify-end flex-col sm:ml-10 pb-1'>
                        <h1 className="font-bold text-6xl sm:text-[8rem] opacity-15">Contact Us</h1>
                        <h4 className='absolute top-5 left-3 sm:top-16 font-semibold text-indigo-400 text-2xl sm:text-4xl'>Contact Us</h4>
                    </div>
                    <div className="grid md:grid-cols-2 my-6 md:my-8 py-24 gap-24 relative w-full lg:p-10">

                        <div className=" rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
                        <div className=" bg-opacity-0">
                            <p>We are here to solve all your queries</p>
                            <form
                                className="flex flex-col "
                                action="https://formspree.io/f/meqylnbr"
                                method="POST"
                            >
                                <div className="mb-6">
                                    <label
                                        htmlFor="email"
                                        className="text-white mb-2 block text-sm font-medium"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        id="name"
                                        name="name"
                                        className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                                        placeholder="Enter your name"
                                    />
                                </div>
                                <div className="mb-6">
                                    <label
                                        htmlFor="message"
                                        className="text-white block text-sm mb-2 font-medium"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        id="email"
                                        name="email"
                                        className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                                        placeholder="Enter your email"
                                    />
                                </div>
                                <div className="mb-6">
                                    <label
                                        htmlFor="subject"
                                        className="text-white mb-2 block text-sm font-medium"
                                    >
                                        Phone Number
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        id="phone_number"
                                        name="phone_number"
                                        className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                                        placeholder="Enter your Phone number"
                                    />
                                </div>
                                <div className="mb-6">
                                    <label
                                        htmlFor="message"
                                        className="text-white block text-sm mb-2 font-medium"
                                    >
                                        What do you have in mind?
                                    </label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                                        placeholder="Please enter your message"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
                                >
                                    {" "}
                                    Submit
                                </button>
                            </form>
                        </div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18252.741245101875!2d77.29014588697625!3d28.659326677519502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb2d97ff9653%3A0xa236359e084edd43!2sGuru%20Gobind%20Singh%20Indraprastha%20University%20(East%20Delhi%20Campus)!5e0!3m2!1sen!2sin!4v1709991933563!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            loading="lazy"
                            className=' h-96 md:h-full'
                        ></iframe>
                    </div>
                    
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact