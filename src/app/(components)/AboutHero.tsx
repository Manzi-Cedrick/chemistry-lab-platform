import React from 'react'
import Section from '../(layout)/pagelayout'
import { UpperBlobIcon } from '../(icons)'

const HeroSection = () => {
    return (
        <Section className='relative flex justify-start min-h-[80vh] pt-20'>
            <div className='absolute -top-[0em] left-0 right-0'>
                <UpperBlobIcon />
            </div>
            <div className='z-10 pt-32 md:pt-40 text-center md:px-20'>
                <h1 className='text-5xl text-main font-extrabold'>{'About Us'}</h1>
                <p className='py-6 text-[18px] text-slate-600'>{'Welcome to Company, your trusted partner in sustainable and eco-friendly management of surplus chemicals.Our platform is designed to help Organizations reduce their environmental footprint and recover assets by managing their surplus chemicals responsibly.'}</p>
            </div>
        </Section>
    )
}

export default HeroSection