import React from 'react'
import Section from '../../(layout)/pagelayout'
import { RightSideBlob } from '../../(icons)'
import { IManage, ManagerArr } from '../../(util)/custom.data'
import jsonData from '../../(util)/text.json'
const CompanyManage = () => {
    const { title } = jsonData.home.companymanage
    return (
        <Section className='relative'>
            <div className='text-center z-20 flex justify-center place-items-center border-dashed'>
                <h1 className='text-2xl text-secondary font-bold border-b-2 border-main py-2 border-dashed'>{title}</h1>
            </div>
            <div className='grid z-20 py-10 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 grid-cols-1 gap-6 place-items-center justify-center'>
                {ManagerArr && ManagerArr.map((service: IManage) => {
                    return (
                        <div key={service.id} className='bg-white rounded-md md:max-w-[32vw] flex flex-row gap-6 place-items-center shadow-box w-[80vw] p-6'>
                            <div style={{ borderLeftColor: service.color }} className="text-white flex place-items-center justify-center font-bold w-0 h-0 relative border-t-[25px] border-t-transparent border-l-[40px] border-b-[25px] border-b-transparent rounded-md">
                                <span className="absolute top-1/2 left-1/2 transform -translate-x-[2em] -translate-y-1/2">{service.id}</span>
                            </div>
                            <div>
                                <h1 style={{ color: service.color }} className={`font-bold`}>{service.title}</h1>
                                <p className='text-[14px] hidden md:flex py-1'>{service.description}</p>
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