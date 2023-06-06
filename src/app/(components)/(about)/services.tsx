import Section from '@/app/(layout)/pagelayout'
import { ServicesOfferArr } from '@/app/(util)/custom.data'
import React from 'react'

const Services = () => {
    return (
        <Section className='relative'>
            <div className='text-center z-20 flex justify-center place-items-center border-dashed'>
                <h1 className='text-2xl text-main font-bold border-b-2 border-main py-2 border-dashed'>{'What Do We Offer?'}</h1>
            </div>
            <div className='grid z-20 py-10 lg:grid-cols-3 sm:grid-cols-1 grid-cols-1 gap-6 place-items-center justify-center'>
                {ServicesOfferArr && ServicesOfferArr.map((service: any) => {
                    return (
                        <div key={service.id} className='bg-white rounded-md md:max-w-[32vw] flex flex-col gap-6 place-items-center shadow-sm shadow-[#0000001e] p-6'>
                            <div>
                                <span style={{ background: service.color, opacity: '10%', color: service.color }} className={`flex place-items-center justify-center font-bold h-12 w-12 rounded-full`}>{service.icon}</span>
                            </div>
                            <div>
                                <h1 style={{ color: service.color }} className={`font-bold`}>{service.title}</h1>
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