"use client"
import React, { useState } from 'react'
import { FaqData } from './FAQComponent';
import { DownColoredArrowSvg, UppwardColoredArrowSvg } from '../(icons)';

const Accordion = ({faq}: any) => {
    const [activeAccordion, setActiveAccordion] = useState<boolean>(false);

    return (
        <div className={`w-full my-4`}>
            <div className={`${activeAccordion ? 'border-main ': 'border-[#A9A9A9] '} border-2 flex py-4 px-10 rounded-t-md place-items-center justify-between bg-gray-100`}>
                <h1 className='text-[14px]'>{faq.question}</h1>
                <button className='h-8 w-8 p-2 bg-transparent duration-500 flex justify-center place-items-center' onClick={() => setActiveAccordion((prev) => !prev)}>{activeAccordion ? <UppwardColoredArrowSvg /> : <DownColoredArrowSvg />}</button>
            </div>
            {activeAccordion &&
                <div className='px-10 shadow-box my-4'>
                    <p className='py-4'>{faq.answer}</p>
                </div>
            }
        </div>
    )
}

export default Accordion