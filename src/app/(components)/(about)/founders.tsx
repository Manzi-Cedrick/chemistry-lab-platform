import { LeftBlobSvg } from '@/app/(icons)'
import Section from '@/app/(layout)/pagelayout'
import React from 'react'

const Founders = () => {
    return (
        <Section className='relative'>
            <div className='absolute -top-[0em] left-0'>
                <LeftBlobSvg />
            </div>
            <div className='z-10 pt-40 text-center px-20'>
                <h1 className='text-5xl text-main font-extrabold'>{'Founders'}</h1>
                <p className='py-6 text-[18px] text-slate-600'>{'At Company, our founders bring over 20 years of experience in the chemical industry, making us leaders in environmental solutions. With expertise in chemistry, engineering, and supply chain management, we understand the complexities of surplus chemical management. Our team s diverse background enables us to deliver tailored solutions to meet your unique needs. We are passionate about sustainability and empowering businesses to reduce their environmental impact. With our industry knowledge and commitment to environmental responsibility, Company is your trusted partner in managing surplus chemicals sustainably'}</p>
            </div>
        </Section>
    )
}

export default Founders