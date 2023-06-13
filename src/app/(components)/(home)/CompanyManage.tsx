import React from 'react'
import Section from '../../(layout)/pagelayout'
import { DashedLine, RightSideBlob } from '../../(icons)'
import { IManage, ManagerArr } from '../../(util)/custom.data'
import jsonData from '../../(util)/text.json'
const CompanyManage = () => {
    const { title } = jsonData.home.companymanage
    return (
        <Section className='relative'>
            <div className='flex absolute right-0  top-0 '>
                <RightSideBlob />
            </div>
            <div className='text-center flex justify-center place-items-center w-[70vw] flex-col gap-4'>
                <h1 className='text-[22px] md:text-[42px] text-secondary z-[10] font-[600] py-2'>{title}</h1>
                <span><DashedLine /></span>
            </div>
            <div className='grid py-20 lg:grid-cols-2 grid-cols-1 gap-6 place-items-center justify-center'>
                {ManagerArr && ManagerArr.map((service: IManage, index: number) => {
                    const isLastElement = index === ManagerArr.length - 1;
                    const columnClasses = isLastElement ? "lg:col-span-2" : "";

                    return (
                        <div
                            key={service.id}
                            className={`bg-white z-10 rounded-md h-[18vh] lg:h-[16vh] lg:w-[32vw] flex flex-row gap-6 place-items-center shadow-box w-[80vw] p-6 ${columnClasses}`}
                        >
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
        </Section>
    )
}

export default CompanyManage