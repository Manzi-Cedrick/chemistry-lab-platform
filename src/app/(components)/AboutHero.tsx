import React from 'react'
import Section from '../(layout)/pagelayout'
import jsonData from '../(util)/text.json'
import { UpperBlobIcon } from '../(icons)';
const AboutSection = () => {
    const { title, body } = jsonData.about.abouthero;
    return (
        <Section className='relative flex justify-start min-h-[80vh] '>
            <div className='absolute -left-[80] sm:flex sm:absolute top-[0em] md:top-0 right-0'>
                <UpperBlobIcon/>
            </div>
            <div className='z-10 pt-32 md:pt-40 text-center md:px-20'>
                <h1 className='text-3xl md:text-5xl text-secondary font-bold'>{title}</h1>
                <p className='py-6 text-[20px] font-semibold md:px-10 text-[#404040]'>{body}</p>
            </div>
        </Section>
    )
}

export default AboutSection