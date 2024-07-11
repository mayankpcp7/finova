import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { accordionList } from './common/Helper'
const Faq = () => {
    return (
        <div className='bg-off-black'>
            <div className='max-w-[1072px] mx-auto px-4 md:py-[60px] sm:py-12 py-8'>
                <h2 className='text-center text-white font-bold leading-126 sm:text-custom-4xl text-custom-2xl'>FAQs</h2>
                <Accordion type="single" collapsible defaultValue="item-1" className="w-full flex flex-col gap-[22px] mt-16">
                    {accordionList.map((obj, index) => (
                        <AccordionItem key={index} value={obj.id}>
                            <AccordionTrigger className="text-white font-bold xs:text-lg text-base leading-126">{obj.trigger}</AccordionTrigger>
                            <AccordionContent className="text-white font-normal xs:text-lg text-base leading-126">{obj.content}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    )
}

export default Faq