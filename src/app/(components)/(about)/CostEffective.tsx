import { PolygonBlobSvg } from '@/app/(icons)'
import Section from '@/app/(layout)/pagelayout'
import React from 'react'
import jsonData from '../../(util)/text.json'
const CostEffective = () => {
    const { title, body } = jsonData.about.costeffective
    return (
        <Section className='relative flex md:flex-row flex-col justify-between place-items-center'>
            <div className='md:max-w-[30vw]'>
                <p className='py-6 text-[18px] text-[#404040] font-medium'>{body}</p>
            </div>
            <div className='flex py-20 md:py-0 justify-end flex-col place-items-center'>
                <div className='absolute bottom-0 right-0'>
                    <PolygonBlobSvg />
                </div>
                <h1 className='text-xl z-10 text-secondary font-extrabold'>{title}</h1>
            </div>
        </Section>
    )
}

export default CostEffective