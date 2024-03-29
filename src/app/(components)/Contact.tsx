import React from 'react'
import Section from '../(layout)/pagelayout'
import LogoSvg from '../(icons)/logosvg'
import jsonData from '../(util)/text.json'
import ContactForm from './ContactForm'
import { RightSideBlob } from '../(icons)'

const Contact = () => {
    const { title, body } = jsonData.home.contact
    return (
        <Section className='py-10 relative min-h-screen flex items-center flex-col justify-end'>
            <div className='flex md:flex-row flex-col gap-8 justify-between'>
                <div className='z-10 lg:max-w-[50vw] pt-[2em] lg:pr-[4em]'>
                    <h1 className='text-3xl lg:text-5xl text-secondary font-[600]'>{title}</h1>
                    <p className='py-10 pr-10'>{body}</p>
                </div>
                <div className='bg-white lg:min-w-[30vw] z-10 shadow-box rounded-xl py-6 px-4 sm:px-10'>
                    <div className='h-12 pb-4 object-contain'>
                        <LogoSvg />
                    </div>
                    <ContactForm />
                </div>
            </div>
            <div className='absolute bottom-0 top-0  right-0'>
                <RightSideBlob />
            </div>
        </Section>
    )
}

export default Contact