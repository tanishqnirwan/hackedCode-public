import Image from "next/image";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Tracks = () => {
    const content = [
        {
            title: "Gen AI",
            description:
                "Dive into the realm of artificial intelligence (AI) to tackle a myriad of challenges spanning healthcare, finance, education, and beyond. Utilize cutting-edge techniques such as machine learning, natural language processing, and computer vision to develop innovative solutions that enhance productivity, efficiency, and decision-making processes across various domains.",
            content: (
                <div className="h-full w-full flex items-center justify-center text-white">
                    <Image
                        src="/ai-2.png"
                        width={300}
                        height={300}
                        className="h-full w-full object-bottom"
                        alt="linear board demo"
                    />
                </div>
            ),
        },
        {
            title: "Web 3.0",
            description:
                "Explore the transformative potential of Web 3.0, emphasizing decentralization, blockchain technology, and peer-to-peer networks. Engage in projects that push the boundaries of decentralized applications (dApps), blockchain protocols, smart contracts, and privacy-enhancing tools, paving the way for a more secure, transparent, and equitable internet.",
            content: (
                <div className="h-full w-full  flex items-center justify-center text-white">
                    <Image
                        src="/web3.png"
                        width={300}
                        height={300}
                        className="h-full w-full object-cover"
                        alt="linear board demo"
                    />
                </div>
            ),
        },
        {
            title: "Cybersecurity",
            description:
                "Safeguard digital ecosystems from evolving cyber threats through robust cybersecurity solutions. Conduct in-depth vulnerability assessments, implement advanced threat detection mechanisms, employ encryption techniques, and foster secure coding practices to fortify digital infrastructure and protect sensitive data from malicious actors.",
            content: (
                <div className="h-full w-full  flex items-center justify-center text-white">
                    <Image
                        src="/cyber.png"
                        width={300}
                        height={300}
                        className="h-full w-full object-cover"
                        alt="linear board demo"
                    />
                </div>
            ),
        },
        {
            title: "Robotics",
            description:
                "Embark on a journey at the intersection of hardware and software with robotics technology. Develop autonomous systems, robots, and drones equipped with state-of-the-art capabilities such as navigation, object recognition, and human-robot interaction. Explore applications across diverse sectors, including manufacturing, agriculture, healthcare, and exploration, revolutionizing the way we interact with machines.",
            content: (
                <div className="h-full w-full  flex items-center justify-center text-white">
                    <Image
                        src="/robotics.png"
                        width={300}
                        height={300}
                        className="h-full w-full object-cover"
                        alt="linear board demo"
                    />
                </div>
            ),
        },
        {
            title: "Open Innovation",
            description:
                "Embrace the power of collaboration, transparency, and inclusivity to drive impactful change through open innovation. Cultivate a culture of knowledge-sharing, community engagement, and co-creation to address complex societal challenges. Leverage the principles of open-source development, crowdsourcing, and participatory design to foster creativity, diversity, and resilience in the pursuit of meaningful solutions.",
            content: (
                <div className="h-full w-full  flex items-center justify-center text-white">
                    <Image
                        src="/open.png"
                        width={300}
                        height={300}
                        className="h-full w-full object-cover"
                        alt="linear board demo"
                    />
                </div>
            ),
        },
    ];
    return (
        <>
            <div className='px-4 py-8 w-full text-white rounded overflow-hidden z-1 shadow-lg shadow-black bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-transparent via-gray-600/5 to-transparent overscroll-none'>
                {/* Decorational  */}
                <div className="relative w-full grid place-content-center -z-5">
                    <div className="absolute right-20 w-72 h-72 bg-purple-300/90 rounded-full mix-blend-soft-light filter blur-3xl opacity-100 animate-accordion-down"></div>
                    <div className="absolute bottom-1 right-10 w-72 h-72 bg-yellow-300/90 rounded-full mix-blend-soft-light filter blur-3xl opacity-100 animate-accordion-up"></div>
                    <div className="absolute top-1 right-0 w-72 h-72 bg-pink-300/90 rounded-full mix-blend-soft-light filter blur-3xl opacity-100 animate-accordion-down"></div>
                </div>
                {/* Functional  */}
                <div className='flex relative items-end pr-5 justify-end flex-col sm:mr-10 pb-6'>
                    <h1 className="font-bold text-5xl sm:text-[8rem] opacity-15">Tracks</h1>
                    <h4 className='absolute top-3 right-7 sm:right-16 sm:top-16 font-semibold text-indigo-400 text-2xl sm:text-4xl'>Tracks</h4>
                </div>
                <div className="grid overscroll-none w-full">
                    <div className='grid place-content-center w-full overflow-y-scroll overscroll-none'>
                        <StickyScroll content={content} />
                    </div>
                </div>
                <div className="relative w-full grid place-content-center -z-5">
                    <div className="absolute top-30 left-20 w-72 h-72 bg-purple-300/90 rounded-full mix-blend-soft-light filter blur-3xl opacity-100 animate-accordion-down"></div>
                    <div className="absolute bottom-1 right-10 w-72 h-72 bg-yellow-300/90 rounded-full mix-blend-soft-light filter blur-3xl opacity-100 animate-accordion-up"></div>
                    <div className="absolute top-40 left-0 w-72 h-72 bg-pink-300/90 rounded-full mix-blend-soft-light filter blur-3xl opacity-100 animate-accordion-down"></div>
                </div>
            </div>

        </>
    )
}

export default Tracks;