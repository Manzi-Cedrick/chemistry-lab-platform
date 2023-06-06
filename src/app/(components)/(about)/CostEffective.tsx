import { PolygonBlobSvg } from '@/app/(icons)'
import Section from '@/app/(layout)/pagelayout'
import React from 'react'

const CostEffective = () => {
    return (
        <Section className='relative flex md:flex-row flex-col justify-between place-items-center'>
            <div className='md:max-w-[52vw]'>
                <p className='py-6 text-[16px] text-slate-600'>{'At Company, our founders bring over 20 years of experience in the chemical industry, making us leaders in environmental solutions. With expertise in chemistry, engineering, and supply chain management, we understand the complexities of surplus chemical management. Our team s diverse background enables us to deliver tailored solutions to meet your unique needs. We are passionate about sustainability and empowering businesses to reduce their environmental impact. With our industry knowledge and commitment to environmental responsibility, Company is your trusted partner in managing surplus chemicals sustainably'}</p>
            </div>
            <div className='flex py-20 md:py-0 justify-end flex-col place-items-center'>
                <div className='absolute bottom-0 right-0'>
                    <PolygonBlobSvg />
                </div>
                <h1 className='text-xl z-10 text-main font-extrabold'>{'Cost Effective'}</h1>
            </div>
        </Section>
    )
}

export default CostEffective