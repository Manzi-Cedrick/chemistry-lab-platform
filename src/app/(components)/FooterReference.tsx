import React from 'react'
import Section from '../(layout)/pagelayout'
import { ArrowIcon, AudioSupportSvg, BookMarkIcon, SearchIcon, WhatsapIcon } from '../(icons)'
import jsonData from '../(util)/text.json'

const FooterReference = () => {
    const { title, body, secondtitle } = jsonData.home.footerreference
    return (
        <Section className='flex py-20 flex-col justify-center place-items-center'>
            <div className='bg-gradient3 relative rounded-xl min-h-[50vh] text-white p-4 md:p-10 w-full '>
                <div className='absolute md:flex hidden right-6 top-6'>
                    <AudioSupportSvg />
                </div>
                <div className='py-4'>
                    <h1 className='text-[22px] md:text-4xl font-[600]'>{title}</h1>
                    <p className='py-6 text-[16px] md:text-[18px] md:pr-[20em] font-[400]'>{body}</p>
                </div>
                <div className='flex py-4 md:pt-10 gap-4 md:gap-10 md:flex-row flex-col place-items-center'>
                    <button className='bg-white text-black font-bold text-[12px] md:text-[14px] rounded-md py-2 px-2'>Contact Us</button>
                    <button className='bg-white flex justify-center place-items-center text-[12px] md:text-[14px] gap-4 text-black font-bold rounded-md py-2 px-2'><span><WhatsapIcon /></span>Contact on Whatsap</button>
                </div>
            </div>
            <div>
                <p className='font-semibold text-secondary pt-20 pb-10 text-[18px] md:text-3xl text-center'>{secondtitle}</p>
                <div className='flex flex-col-reverse md:flex-row gap-10'>
                <button className='text-white flex justify-between gap-4 place-items-center bg-gradient1 rounded-[10px] text-[16px] md:text-[28px] px-6 py-8 md:w-[410px] md:h-[127px] font-[600] relative md:pt-4'><span className='absolute left-10 top-0'><SearchIcon /></span>Find Surplus Chemicals <span><ArrowIcon /></span></button>
                    <button className='text-white flex justify-between place-items-center bg-gradient2 rounded-[10px] text-[16px] md:text-[28px] py-8 px-6 md:w-[410px] md:h-[127px] font-[600] relative md:pt-4'><span className='absolute left-4 top-0'><BookMarkIcon /></span>Sell your Surpluses <span><ArrowIcon /></span></button>
                </div>
            </div>
        </Section>
    )
}

export default FooterReference