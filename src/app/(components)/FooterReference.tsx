import React from 'react'
import Section from '../(layout)/pagelayout'
import { ArrowIcon, BookMarkIcon, SearchIcon, WhatsapIcon } from '../(icons)'
import jsonData from '../(util)/text.json'

const FooterReference = () => {
    const { title, body, secondtitle } = jsonData.home.footerreference
    return (
        <Section className='flex py-20 flex-col justify-center place-items-center'>
            <div className='bg-gradient1 rounded-md text-white p-4 md:p-8 w-full md:max-w-[60vw]'>
                <div className='py-4'>
                    <h1 className='text-xl font-bold'>{title}</h1>
                    <p className='py-4 md:pr-[14em]'>{body}</p>
                </div>
                <div className='flex py-4 gap-4 flex-row'>
                    <button className='bg-white text-black font-bold text-[12px] md:text-[14px] rounded-md py-3 px-6'>Contact Us</button>
                    <button className='bg-white flex justify-center place-items-center text-[12px] md:text-[14px] gap-4 text-black font-bold rounded-md py-3 px-6'><span><WhatsapIcon /></span>Contact on Whatsap</button>
                </div>
            </div>
            <div>
                <p className='font-bold text-main py-10 text-[14px] md:text-3xl text-center'>{secondtitle}</p>
                <div className='flex flex-col md:flex-row gap-10'>
                    <button className='text-white flex justify-between gap-4 place-items-center bg-gradient1 rounded-md font-semibold relative px-10 py-6'><span className='absolute left-10 top-0'><SearchIcon /></span>Find Surplus Chemical <span><ArrowIcon /></span></button>
                    <button className='text-white flex justify-between place-items-center bg-gradient2 px-10 rounded-md font-medium py-6 relative'><span className='absolute left-4 top-0'><BookMarkIcon /></span>Sell your Surpluses <span><ArrowIcon /></span></button>
                </div>
            </div>
        </Section>
    )
}

export default FooterReference