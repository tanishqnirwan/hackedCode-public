"use client"

import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useForm, ValidationError } from "@formspree/react";
import Swags from '@/components/Swags';

function Contact() {
    const [state, handleSubmit] = useForm("meqylnbr");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }

  return (
    <div className='w-full dark:bg-black dark:bg-grid-white/[0.2] bg-grid-white/[0.06] bg-black overflow-hidden'>
        <Navbar />
        <Swags/>
        <Footer />
    </div>
  )
}

export default Contact