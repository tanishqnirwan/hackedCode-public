import Link from "next/link";
import Image from "next/image";
import { Sparkles , MapPin} from 'lucide-react';

const Footer = () => {
    const current_date = new Date();
    const current_year = current_date.getFullYear();
    return (
<footer className="bg-black mt-8 border-y rounded-t-3xl border-slate-800 shadow-lg">
  <div className="grid md:grid-cols-3 grid-flow-row md:grid-flow-col gap-8 md:gap-28 p-4 lg:p-8">
    {/* First column with logos and separator */}
    <div className="flex items-center justify-center">
      <div className="aspect-square bg-white rounded-[1000px] p-1 mr-4">
        <Image src="/ipu.png" alt="University Logo" width={50} height={50} />
      </div>
      <div className="bg-white h-8 w-1"></div> {/* White separator */}
      <div className="aspect-square bg-white rounded-[1000px] p-1 ml-4">
        <Image src="/elysian-1.png" alt="Elysian Logo" width={50} height={50} />
      </div>
    </div>

    {/* Middle column with quick links */}
    <div className="text-white">
      <p className="font-semibold mb-3 text-lg">Quick Links:</p>


<div className="flex gap-2 ">
<MapPin />
      <Link href={'https://sites.google.com/view/ggsipuedc/home'} target="_blank" className="hover:underline">
        GGSIPU East Campus
      </Link>
      </div>
      <div className="flex gap-2">
    <Sparkles />
      <Link href={'https://sites.google.com/view/ggsipuedc/home'} target="_blank" className="hover:underline">
        Elysian
      </Link>
      </div>
      <div className="flex gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
    <Link href="mailto:hackedcode.edc@gmail.com">Email Us</Link>
</div>
    </div>

    

    {/* Third column with address */}
    <div className="text-white">
      <div className="grid grid-cols-1 gap-1">
        <span className="md:p-0.5">Guru Gobind Singh Indraprastha University</span>
        <span className="md:p-0.5"> East Delhi Campus</span>
        <span className="md:p-0.5">Surajmal Vihar, Delhi, 110092</span>
      </div>
    </div>
  </div>
  <div className="flex justify-center text-white text-xs pt-4">copyright © SDC USAR {current_year} All rights reserved </div>
</footer>

    )
}

export default Footer;