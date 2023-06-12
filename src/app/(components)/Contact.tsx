import React from 'react'
import Section from '../(layout)/pagelayout'
import LogoSvg from '../(icons)/logosvg'
import jsonData from '../(util)/text.json'
import ContactForm from './ContactForm'
import { RightSideBlob } from '../(icons)'

const Contact = () => {
    const { title, body } = jsonData.home.contact
    return (
        <Section className='py-10 relative min-h-screen flex items-center justify-end'>
            <div className='flex md:flex-row flex-col justify-between'>
                <div className='z-10 md:max-w-[50vw] pt-[2em] md:pr-[10em]'>
                    <h1 className='text-3xl sm:text-5xl leading-relaxed text-secondary font-semibold'>{title}</h1>
                    <p className='py-10 pr-10'>{body}</p>
                </div>
                <div className='bg-white md:max-w-[30vw] z-10 shadow-box rounded-xl py-6 px-4 sm:px-10'>
                    <div className='h-12 pb-4 object-contain'>
                        <LogoSvg />
                    </div>
                    <ContactForm />
                </div>
            </div>
            <div className='absolute bottom-0 right-0'>
                <RightSideBlob />
            </div>
        </Section>
    )
}

export default Contact