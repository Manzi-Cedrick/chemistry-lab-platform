import Section from '@/app/(layout)/pagelayout'
import { ServicesOfferArr } from '@/app/(util)/custom.data'
import React from 'react'
import jsonData from '../../(util)/text.json'
import { SupportIconAudio } from '@/app/(icons)'
const Services = () => {
    const { title } = jsonData.about.services
    return (
        <Section className='relative'>
            <div className='text-center z-20 flex justify-center place-items-center border-dashed'>
                <h1 className='text-3xl text-secondary font-semibold py-2'>{title}</h1>
            </div>
            <div className='grid z-20 py-10 lg:grid-cols-3 sm:grid-cols-1 grid-cols-1 mx-auto max-w-[80vw] gap-6 place-items-center justify-center'>
                {ServicesOfferArr && ServicesOfferArr.map((service: any) => {
                    return (
                        <div key={service.id} className='bg-white rounded-md lg:w-[24vw] flex flex-col lg:h-[50vh] place-items-center shadow-box p-6'>
                            <div style={{ background: service.color }} className={`flex place-items-center justify-center font-bold h-16 w-16 p-4 rounded-full`}>
                                <span className='z-10'>{service.icon}</span>
                            </div>
                            <div>
                                <h1 style={{ color: service.text_color }} className={`font-bold`}>{service.title}</h1>
                                <p className='text-[14px] py-2'>{service.description}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </Section>
    )
}

export default Services