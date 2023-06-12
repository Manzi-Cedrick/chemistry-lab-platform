import React from 'react'
import Section from '../(layout)/pagelayout'
import { ArrowIcon, AudioSupportSvg, BookMarkIcon, SearchIcon, WhatsapIcon } from '../(icons)'
import jsonData from '../(util)/text.json'

const FooterReference = () => {
    const { title, body, secondtitle } = jsonData.home.footerreference
    return (
        <Section className='flex py-20 flex-col justify-center place-items-center'>
            <div className='bg-gradient3 relative rounded-xl min-h-[50vh] text-white p-4 md:p-10 w-full md:max-w-[60vw]'>
                <div className='absolute right-6 top-6'>
                    <AudioSupportSvg />
                </div>
                <div className='py-4'>
                    <h1 className='text-3xl md:text-4xl font-semibold'>{title}</h1>
                    <p className='py-6 text-[18px] md:pr-[12em] font-medium'>{body}</p>
                </div>
                <div className='flex py-4 md:pt-10 gap-4 flex-row'>
                    <button className='bg-white text-black font-bold text-[12px] md:text-[14px] rounded-md py-2 px-2'>Contact Us</button>
                    <button className='bg-white flex justify-center place-items-center text-[12px] md:text-[14px] gap-4 text-black font-bold rounded-md py-2 px-2'><span><WhatsapIcon /></span>Contact on Whatsap</button>
                </div>
            </div>
            <div>
                <p className='font-semibold text-secondary py-20 text-[18px] md:text-3xl text-center'>{secondtitle}</p>
                <div className='flex flex-col md:flex-row gap-10'>
                <button className='text-white flex justify-between gap-4 place-items-center bg-gradient1 rounded-md font-semibold relative px-4 py-6 pt-8'><span className='absolute left-10 top-0'><SearchIcon /></span>Find Surplus Chemical <span><ArrowIcon /></span></button>
                    <button className='text-white flex justify-between place-items-center bg-gradient2 px-4 rounded-md font-medium py-6 gap-4 relative'><span className='absolute left-4 top-0'><BookMarkIcon /></span>Sell your Surpluses <span><ArrowIcon /></span></button>
                </div>
            </div>
        </Section>
    )
}

export default FooterReference