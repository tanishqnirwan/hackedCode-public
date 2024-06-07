import { Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import "@/app/globals.css"


const TeamMember = ({ imageUrl, name, title, linkedInLink, twitterLink }: {
  imageUrl: string;
  name: string;
  title: string;
  linkedInLink: string;
  twitterLink?: string
}) => (
  <div className='border border-indigo-800 rounded-2xl min-h-[19rem] shadow-xl max-w-[20rem] '>
    <div className="flex basis-full flex-col p-3 pb-1 tracking-tight text-slate-100/50 ">
      <Image
        src={imageUrl}
        alt="Image"
        height={1000}
        width={1000}
        className="w-full max-h-60 min-h-60 rounded-lg object-cover pb-2"
      />
      <div className='gap-2 flex justify-between'>
        <div>
          <h3 className="max-w-xs pt-2 font-bold  text-sm text-slate-300">
            {name}
          </h3>
          <div className="text-sm font-normal">
            <span className="text-slate-500 ">
              {title}
            </span>
          </div>
        </div>
        <div className='flex gap-3 items-center justify-center'>
          <Link
            href={linkedInLink}
            target={"_blank"}
          >

            <Linkedin className='h-6 text-white hover:text-[#601fe7]' />

          </Link>
          {twitterLink && twitterLink !== "" &&
            <Link
              href={twitterLink}
              target={"_blank"}
            >

              <Twitter className='h-6  text-white  hover:text-[#601fe7]' />

            </Link>}
        </div>
      </div>
    </div>
   

  </div>
);

export default TeamMember;
