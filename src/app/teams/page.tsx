'use client';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import { Tabs } from '@/components/ui/tabs';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import { web_team, org_team, graphic_team, ground_team, sponsors_team, faculty_team } from './teamdata';
import TeamMember from '@/components/TeamMember';

const Page = () => {

    const tabs = [

        {
            title: "Faculty",
            value: "faculty",
            content: (
                <div className="rounded-2xl md:p-6 p-4 lg:p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-indigo-700/20 to-indigo-900/20">
                    <p>Faculty</p>
                    <Faculty />
                </div>
            ),
        },
        {
            title: "Organizers",
            value: "organziing",
            content: (
                <div className="rounded-2xl md:p-6 p-4 lg:p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-indigo-700/20 to-indigo-900/20">
                    <p>Organizing Team</p>
                    <OrganizingTeam />
                </div>
            ),
        },
        {
            title: "Web",
            value: "Web Team",
            content: (
                <div className="rounded-2xl md:p-6 p-4 lg:p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-indigo-700/20 to-indigo-900/20">
                    <p>Web Team</p>
                    <WebTeam />
                </div>
            ),
        },
        {
            title: "Sponsorship",
            value: "sponsorship",
            content: (
                <div className="rounded-2xl md:p-6 p-4 lg:p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-indigo-700/20 to-indigo-900/20">
                    <p>Sponsorship Team</p>
                    <SponsorshipTeam />
                </div>
            ),
        },
        {
            title: "Graphics",
            value: "graphics",
            content: (
                <div className="rounded-2xl md:p-6 p-4 lg:p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-indigo-700/20 to-indigo-900/20">
                    <p>Graphics Team</p>
                    <GraphicsTeam />
                </div>
            ),
        },
        {
            title: "Ground",
            value: "ground",
            content: (
                <div className="rounded-2xl md:p-6 p-4 lg:p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-indigo-700/20 to-indigo-900/20">
                    <p>Ground team</p>
                    <GroundTeam />
                </div>
            ),
        },
    ];

    return (
        <div className="w-full dark:bg-black dark:bg-grid-white/[0.2] bg-grid-white/[0.06] bg-black overflow-hidden">
            <div className=''>
                <Navbar />
            </div>
            <div className="flex flex-col max-w-5xl mx-auto w-full items-start justify-start lg:p-12 md:p-8 p-1">
                <Tabs tabs={tabs} />
            </div>
            <Footer />
        </div>
    );
};


const WebTeam = () => {
    return (
        <ul className="w-full max-w-full lg:p-5 grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-1 md:gap-3">
            {web_team.map((val, index) => (
                <li key={index} >
                    <div className="p-1">
                        <TeamMember imageUrl={val.imageUrl} twitterLink={val.twitterLink} name={val.name} title={val.title} linkedInLink={val.linkedIn} />
                    </div>
                </li>
            ))}
        </ul>
    );
};
const OrganizingTeam = () => {
    return (
        <ul className="w-full max-w-full lg:p-5 grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-1 md:gap-3">
            {org_team.map((val, index) => (
                <li key={index} >
                    <div className="p-1">
                        <TeamMember imageUrl={val.imageUrl} twitterLink={val.twitterLink} name={val.name} title={val.title} linkedInLink={val.linkedIn} />
                    </div>
                </li>
            ))}
        </ul>
    );
};
const SponsorshipTeam = () => {
    return (
        <ul className="w-full max-w-full lg:p-5 grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-1 md:gap-3">
            {sponsors_team.map((val, index) => (
                <li key={index} >
                    <div className="p-1">
                        <TeamMember imageUrl={val.imageUrl} twitterLink={val.twitterLink} name={val.name} title={val.title} linkedInLink={val.linkedIn} />
                    </div>
                </li>
            ))}
        </ul>
    );
};
const GroundTeam = () => {
    return (
        <ul className="w-full max-w-full lg:p-5 grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-1 md:gap-3">
            {ground_team.map((val, index) => (
                <li key={index} >
                    <div className="p-1">
                        <TeamMember imageUrl={val.imageUrl} twitterLink={val.twitterLink} name={val.name} title={val.title} linkedInLink={val.linkedIn} />
                    </div>
                </li>
            ))}
        </ul>
    );
};
const GraphicsTeam = () => {
    return (
        <ul className="w-full max-w-full lg:p-5 grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-1 md:gap-3">
            {graphic_team.map((val, index) => (
                <li key={index} >
                    <div className="p-1">
                        <TeamMember imageUrl={val.imageUrl} twitterLink={val.twitterLink} name={val.name} title={val.title} linkedInLink={val.linkedIn} />
                    </div>
                </li>
            ))}
        </ul>
    );
};
const Faculty = () => {
    return (
        <ul className="w-full max-w-full lg:p-5 grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-1 md:gap-3">
            {faculty_team.map((val, index) => (
                <li key={index} >
                    <div className="p-1">
                        <TeamMember imageUrl={val.imageUrl} twitterLink={val.twitterLink} name={val.name} title={val.title} linkedInLink={val.linkedIn} />
                    </div>
                </li>
            ))}
        </ul>
    );
};


export default Page;
