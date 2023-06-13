import React from 'react'
import Section from '../(layout)/pagelayout'
import jsonData from '../(util)/text.json'
import { UpperBlobIcon } from '../(icons)';
const AboutSection = () => {
    const { title, body } = jsonData.about.abouthero;
    return (
        <Section className='relative flex justify-start min-h-[80vh] '>
            <div className='absolute -left-[80] sm:flex sm:absolute top-[0em] md:top-0 right-0'>
                <UpperBlobIcon />
            </div>
            <div className='z-10 pt-32 md:pt-20 text-center md:px-20'>
                <h1 className='text-[22px] md:text-5xl text-secondary font-[600]'>{title}</h1>
                <p className='py-6 text-[16px] font-[600] md:px-10 text-slate-600'>{body}</p>
            </div>
        </Section>
    )
}

export default AboutSection