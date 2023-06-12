import { LeftBlobSvg } from '@/app/(icons)'
import Section from '@/app/(layout)/pagelayout'
import React from 'react'
import jsonData from '../../(util)/text.json'
const Founders = () => {
    const { title, body } = jsonData.about.founders
    return (
        <Section className='relative min-h-[60vh] py-20'>
            <div className='flex justify-center place-items-center flex-row gap-4'>
                <div className='absolute -left-[30em] lg:left-0 top-0'>
                    <LeftBlobSvg />
                </div>
                <div className='z-10 px-0 text-center md:px-20 md:pr-[4em]'>
                    <h1 className='text-3xl md:text-5xl title text-[#032D60] font-semibold'>{title}</h1>
                    <p className='py-8 text-[18px] text-[#404040] sm:px-20 font-medium'>{body}</p>
                </div>
            </div>
        </Section>
    )
}

export default Founders