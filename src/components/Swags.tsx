import React, { useState, useRef, ChangeEvent } from 'react';
import { toPng } from 'html-to-image';
import  download from "downloadjs";

const Swags = () => {
  const [userName, setUserName] = useState(""); // Initial state with default title
  const swagElementRef = useRef(null);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const handleDownloadClick = () => {
    const divElement = document.querySelector(".image-upload") as HTMLElement;

    if (divElement) {
      toPng(divElement)
        .then(function (dataUrl) {
          download(dataUrl, `${userName}-hackedcode.png`);
        })
        .catch(function (error) {
          console.error('Oops, something went wrong!', error);
        });
    }
  };

  const message = `🌟 Pumped to join hackEDCode 2.0 hosted by @SDC_USS!!! Time to unleash creativity, solve problems, and make magic with code. Who's in for an epic coding adventure? 🚀💻 Secure your spot: https://hackedcode-2.devfolio.co/#hackEDCode2.0 #excited`;
  const encodedMessage = encodeURIComponent(message);
  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodedMessage}`;

  return (
    <div className='mx-24 grid place-content-center'>

      <div className="rounded-lg flex flex-col justify-center items-center py-10 max-w-[800px] mx-auto my-16 bg-[#1c1c1d] shadow-md border-gray-900 border-2 filter blur-9" ref={swagElementRef}>
        <h1 className="font-logo text-center text-xl md:text-3xl text-white font-bold mb-4">Get your Digital ID</h1>
        <p className="text-white sm:mx-10 mx-5 mb-4 text-sm text-center">🚀 Embrace the collaborative spirit of hackathons! Join us for HackEDCode 2.0 and share your journey on social media, tagging @HackEDCode! Lets innovate together! 💡💻 </p>
        <div className='mx-4'>
          <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 m-4" placeholder="Enter Your Name" type="text" value={userName} onChange={handleInputChange} />
        </div>
        <div>
        <div className='md:w-[500px] md:h-[500px] bg-cover my-3 w-[300px] h-[300px]'>
          <div className="image-upload w-full h-full bg-cover" style={{ backgroundImage: `url(/bg-1.jpg)` }}>
            <h1 className="text-[8px] text-md pb-1 md:pb-0 md:text-xl h-[75%] grid place-content-end justify-center font-bold text-center text-black userText m-auto">{userName}</h1>
          </div>
        </div>
          <div className='flex gap-2 justify-center items-center'>
            <button onClick={handleDownloadClick} className="border hover:text-[#7038ff] hover:border-[#7038ff] border-white text-white p-2 rounded-md mt-3 text-lg flex justify-center items-center">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M416 199.5h-91.4V64H187.4v135.5H96l160 158.1 160-158.1zM96 402.8V448h320v-45.2H96z"></path>
              </svg>
              Download
            </button>
            <a href={tweetUrl} target="_blank" rel="noreferrer">
              <button className="border border-white hover:text-[#7038ff] hover:border-[#7038ff] text-white p-2 rounded-md mt-3 text-lg flex justify-center items-center ">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z"></path></svg><span className="ml-1">Tweet</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Swags;
