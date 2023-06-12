import React from 'react'
import Section from '../../(layout)/pagelayout'
import { ArrowIcon, WhatsapIcon } from '../../(icons)'
import jsonData from '../../(util)/text.json'

const FooterReferenceOther = () => {
    const { title, body, secondtitle } = jsonData.home.footerreference
    return (
        <Section className='flex py-20 flex-col justify-center place-items-center'>
            <div className='bg-[#E5F8FF] rounded-xl text-black p-4 md:p-8 w-full md:max-w-[60vw]'>
                <div className='py-4'>
                    <h1 className='text-xl font-bold'>{title}</h1>
                    <p className='py-4 text-[18px] text-[#404040] font-medium md:pr-[14em]'>{body}</p>
                </div>
                <div className='flex py-4 gap-4 text-white flex-row'>
                    <button className='bg-main font-bold text-[12px] md:text-[14px] rounded-md py-2 px-2'>Contact Us</button>
                    <button className='bg-transparent text-main border-2 border-main flex justify-center place-items-center text-[12px] md:text-[14px] gap-4 font-bold rounded-md py-2 px-2'><span><WhatsapIcon /></span>Contact on Whatsap</button>
                </div>
            </div>
        </Section>
    )
}

export default FooterReferenceOther