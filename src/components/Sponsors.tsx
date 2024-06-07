import React from 'react';
import Image from 'next/image';
import MaxWidthWrapper from './MaxWidthWrapper';
import Link from 'next/link';

function Sponsors() {
  return (
    <div className='m-2 py-8 w-full content-center text-white rounded overflow-hidden z-1 shadow-lg shadow-black bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-transparent via-gray-600/5 to-transparent'>
      {/* Decorational  */}
      <div className="relative w-full grid place-content-center -z-5">
        <div className="absolute top-2 left-20 w-72 h-72 bg-purple-300/90 rounded-full mix-blend-soft-light filter blur-3xl opacity-100 animate-accordion-down"></div>
        <div className="absolute bottom-1 right-10 w-72 h-72 bg-yellow-300/90 rounded-full mix-blend-soft-light filter blur-3xl opacity-100 animate-accordion-up"></div>
        <div className="absolute top-10 left-0 w-72 h-72 bg-pink-300/90 rounded-full mix-blend-soft-light filter blur-3xl opacity-100 animate-accordion-down"></div>
      </div>


      {/*title sponsors  */}
      {/* Functional  */}
      <div className='flex relative justify-end flex-col sm:ml-10 pb-6 mt-10'>
        <h1 className="font-bold text-6xl sm:text-[8rem] opacity-15 mt-14">Sponsors</h1>
        <h4 className='absolute top-5 left-3 sm:top-16 font-semibold text-indigo-400 text-2xl sm:text-4xl mt-14'>Sponsors</h4>
      </div>
      <h4 className="top-5 sm:top-16 text-lg font-mono font-bold mb-4 text-white text-center sm:text-l">
        Title Sponsor
      </h4>
      <MaxWidthWrapper className='flex flex-col w-[50%] md:w-full'>
        <Link href={'https://skillsbuild.org/'} target='_blank' className='mx-auto my-auto mb-4 md:mb-12 z-10'>
          <Image
            className="mx-auto bg-white p-1 md:py-3 md:px-2 rounded-lg md:w-[120x] md:h-[75px] mt-2 ml-2"
            src={"/ibmfinal.png"}
            alt="IBM logo"
            height={150}
            width={240}
            style={{ objectFit: 'contain' }}
          />
        </Link>



      </MaxWidthWrapper>

      <h4 className="top-5 sm:top-16 text-lg font-mono font-bold mb-4 text-white text-center sm:text-l">
        Powered By
      </h4>


      <MaxWidthWrapper className='flex flex-col w-[50%] md:w-full'>
        <Link href={'https://www.hackquest.io/en'} target='_blank' className='mx-auto my-auto mb-4 md:mb-12 z-10'>
          <Image
            className="mx-auto bg-white p-1 md:py-3 md:px-2 rounded-lg md:w-[120x] md:h-[75px] mt-2 ml-2"
            src={"/hackspon.png"}
            alt="hackquest"
            height={150}
            width={240}
            style={{ objectFit: 'contain' }}
          />
        </Link>

      </MaxWidthWrapper>



      {/* Platinum Sponsor hai yeh  */}

      {/* Functional  */}
      <div className='flex relative items-end pr-5 justify-end flex-col mt-8 sm:mr-10 pb-6'>

      </div>
      <h4 className="top-5 sm:top-16 text-lg font-mono font-bold mb-4 text-white text-center sm:text-l">
        Platinum Sponsors
      </h4>
      <MaxWidthWrapper className='flex flex-col w-[50%] md:w-full'>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-2 mx-auto place-content-center">



          <Link href="https://runpod.io/" target='_blank' className='z-10'>
            <Image
              alt=""
              src={"/runpod.png"}

              width="250"
              height="800"
            />
          </Link>

          <Link href="https://devfolio.co/discover" target='_blank' className='z-10'>
            <Image
              alt="DEVFOLIO LOGO"
              src={"/devfolio.png"}
              className=""
              width="250"
              height="300"
            />
          </Link>



        </div>
      </MaxWidthWrapper>




      <div className='flex relative justify-end flex-col sm:ml-10 pb-6 mt-14'>

      </div>
      <h4 className="top-2 sm:top-16 text-lg font-mono font-bold mb-4 text-white text-center sm:text-l">
        Our Partners
      </h4>
      <MaxWidthWrapper className='flex flex-col w-[50%] md:w-full'>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-5 mx-auto place-content-center">


          <Link href={'https://polygon.technology/'} target='_blank' className='z-10'>
            <Image
              alt="POLYGON LOGO"
              src={"/polygon.png"}
              className=""
              width="250"
              height="300"
            />
          </Link>
          <Link href={'https://ethindia.co/'} target='_blank' className='z-10'>
            <Image
              alt="ETHINDIA LOGO"
              src={"/ethIndia.png"}
              className=""
              width="250"
              height="300"
            />
          </Link>
          <Link href="https://vectara.com/" target='_blank' className='z-10'>
            <Image
              alt="Vectara LOGO"
              src={"/vectara.png"}

              width="250"
              height="800"
            />
          </Link>
          <Link href={'https://opengig.work/'} target='_blank' className='z-10'>
            <Image
              alt="opengig"
              src={"/opengig.png"}
              className=""
              width="250"
              height="800"
            />
          </Link>
          <Link href={'https://www.xerocodee.com/'} target='_blank' className='z-10'>
            <Image
              alt="Xero Codee"
              src={"/xero.webp"}
              className="h-[4.5rem] bg-white rounded-xl"
              width="250"
              height="800"
            />
          </Link>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

export default Sponsors;
