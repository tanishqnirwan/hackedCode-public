import MaxWidthWrapper from './MaxWidthWrapper';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const Faq = () => {
    return (
        <div className='px-4 py-8 w-full text-white rounded overflow-hidden -z-30 shadow-lg shadow-black bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-transparent via-gray-600/5 to-transparent overscroll-none text-left'>
            {/* Decorational  */}
            <div className="relative w-full grid place-content-center z-2">
                <div className="absolute top-2 left-20 w-72 h-72 bg-purple-300/90 rounded-full mix-blend-soft-light filter blur-3xl opacity-100 animate-accordion-down"></div>
                <div className="absolute bottom-1 right-10 w-72 h-72 bg-yellow-300/90 rounded-full mix-blend-soft-light filter blur-3xl opacity-100 animate-accordion-up"></div>
                <div className="absolute top-10 left-0 w-72 h-72 bg-pink-300/90 rounded-full mix-blend-soft-light filter blur-3xl opacity-100 animate-accordion-down"></div>
            </div>
            {/* Functional  */}
            <div className='flex relative justify-end flex-col sm:ml-10 pb-6 z-20'>
                <h1 className="font-bold text-6xl sm:text-[8rem] opacity-15">FAQ&apos;s</h1>
                <h4 className='absolute top-5 sm:top-16 left-5 font-semibold text-indigo-400 text-2xl sm:text-4xl'>FAQ&apos;s</h4>
            </div>
            <MaxWidthWrapper className='text-left z-20'>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger className='text-xl z-20 text-left'>What is the team size?</AccordionTrigger>
                        <AccordionContent>
                            2-4 people.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className='text-xl z-20 text-left'>Registration costs?</AccordionTrigger>
                        <AccordionContent>
                            Nada.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className='text-xl z-20 text-left'>In the hackathon, what programming languages are permitted to be used?</AccordionTrigger>
                        <AccordionContent>
                            Any programming language is acceptable.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger className='text-xl z-20 text-left'>Is it mandatory to participate in hackEDCode as a team?</AccordionTrigger>
                        <AccordionContent>
                            Participation in hackEDCode requires forming a team comprising 2 to 4 members. It is recommended to assemble the team before the hackathon, but participants are registered individually. If someone doesnot have a team, assistance will be provided during the event to help them find a team.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger className='text-xl z-20 text-left'>What criteria were employed to select the teams for the shortlist?</AccordionTrigger>
                        <AccordionContent>
                            The selection process for shortlisting participants will be based on their submitted profiles and resumes.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                        <AccordionTrigger className='text-xl z-20 text-left'>Do you need to worry about the food?</AccordionTrigger>
                        <AccordionContent>
                            Absolutely not, you will be provided with plenty of food and snacks.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </MaxWidthWrapper>
        </div>
    )

}

export default Faq;