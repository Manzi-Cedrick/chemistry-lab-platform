import React from 'react'
import Section from '../(layout)/pagelayout'
import { RightSideBlob } from '../(icons)'
import { IManage, ManagerArr } from '../(util)/custom.data'
import jsonData from '../(util)/text.json'
const CompanyManage = () => {
    const { title } = jsonData.companymanage
    return (
        <Section className='relative'>
                <div className='text-center z-20 flex justify-center place-items-center border-dashed'>
                    <h1 className='text-2xl text-main font-bold border-b-2 border-main py-2 border-dashed'>{title}</h1>
                </div>
                <div className='grid z-20 py-10 lg:grid-cols-2 sm:grid-cols-3 grid-cols-1 gap-6 place-items-center justify-center'>
                    {ManagerArr && ManagerArr.map((service: IManage) => {
                        return (
                            <div key={service.id} className='bg-white rounded-md md:max-w-[32vw] flex flex-row gap-6 place-items-center shadow-sm shadow-[#0000001e] p-6'>
                                <div>
                                    <span style={{ background: service.color }} className={`text-white flex place-items-center justify-center font-bold h-12 w-12 rounded-md`}>{service.id}</span>
                                </div>
                                <div>
                                    <h1 style={{ color: service.color }} className={`font-bold`}>{service.title}</h1>
                                    <p className='text-[14px] py-1'>{service.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            <div className='hidden absolute right-0 top-0'>
                <RightSideBlob />
            </div>
        </Section>
    )
}

export default CompanyManage