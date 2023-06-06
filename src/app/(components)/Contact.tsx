import React from 'react'
import Section from '../(layout)/pagelayout'
import LogoSvg from '../(icons)/logosvg'
import jsonData from '../(util)/text.json'
import ContactForm from './ContactForm'
import { RightSideBlob } from '../(icons)'

const Contact = () => {
    const { title, body } = jsonData.contact
    return (
        <Section className='py-10 relative'>
            <div className='flex md:flex-row flex-col justify-between'>
                <div className='z-10 md:max-w-[50vw] pt-[2em] md:pr-[10em]'>
                    <h1 className='text-5xl text-main font-extrabold'>{title}</h1>
                    <p className='py-6'>{body}</p>
                </div>
                <div className='bg-white z-10 shadow-md shadow-slate-200 p-6'>
                    <div className='h-12 object-contain'>
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