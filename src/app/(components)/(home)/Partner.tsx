import React from 'react'
import Section from '../../(layout)/pagelayout'
import { AssetsArr, IPartner, IPreferedAssets, PartnersArr } from '../../(util)/custom.data'
import Image from 'next/image'
import jsonData from '../../(util)/text.json'

const PartnerSection = () => {
    const { title, body } = jsonData.partnersection
    return (
        <Section className='py-20'>
            <div className='text-left z-10'>
                <h1 className='text-3xl text-main font-bold'>{title}</h1>
            </div>
            <div className='grid z-10 py-10 lg:grid-cols-4 grid-cols-1 sm:grid-cols-2 gap-6 place-items-center justify-center'>
                {AssetsArr && AssetsArr.map((asset: IPreferedAssets) => {
                    return (
                        <div key={asset.id} className='bg-white rounded-md md:max-w-[32vw] flex flex-col lg:min-h-[36vh] gap-6 place-items-center shadow-md shadow-[#0000001e] p-6'>
                            <div>
                                <span className={`text-white bg-[#F0F0F0] flex place-items-center justify-center font-bold h-12 w-12 rounded-md`}>{asset.icon}</span>
                            </div>
                            <div>
                                <h1 className={`font-bold`}>{asset.title}</h1>
                                <p className='text-[14px] py-4'>{asset.description}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div>
                <p className='text-[18px] pb-8'>{body}</p>
                <div className='bg-[#eaeaea] flex flex-row overflow-x-auto gap-6 py-8 '>
                    {PartnersArr && PartnersArr.map((partner: IPartner) => (
                        <Image className='h-[16vh] lg:w-[14vw]' key={partner.id} src={`${partner.logo}`} alt='' width={300} height={100} />
                    ))}
                </div>
            </div>
        </Section>
    )
}

export default PartnerSection