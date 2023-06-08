import React from 'react'
import Section from '../(layout)/pagelayout'
import { UpperBlobIcon } from '../(icons)';
const HeroSection = ({ initialProps }: any) => {
    return (
        <Section className='relative flex justify-start min-h-[80vh]'>
            <div className='hidden sm:flex sm:absolute top-[0em] md:top-0 left-0 right-0'>
                <UpperBlobIcon />
            </div>
            <div className='z-10 pt-32 md:pt-40 text-center md:px-20'>
                <h1 className='text-5xl text-secondary font-extrabold'>{initialProps.title}</h1>
                <p className='py-6 text-[18px] font-bold md:px-10 text-slate-600'>{initialProps.body}</p>
            </div>
        </Section>
    )
}

export default HeroSection