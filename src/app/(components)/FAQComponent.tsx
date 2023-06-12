"use client"
import React, { useState } from 'react';
import Accordion from './Accordion';

export interface FaqData {
    [key: string]: { question: string; answer: string }[];
}

const FAQComponent: React.FC<{ data: FaqData }> = ({ data }) => {

    return (
        <div className='lg:px-[12em]'>
            {Object.entries(data).map(([title, faqs]) => (
                <div key={title}>
                    <h1 className='py-4 text-secondary text-xl font-semibold text-center'>{title}</h1>
                    {faqs.map((faq, index) => (
                        <Accordion key={index} faq={faq} />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default FAQComponent;
