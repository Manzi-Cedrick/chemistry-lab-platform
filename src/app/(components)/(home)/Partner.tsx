import React from 'react'
import Section from '../../(layout)/pagelayout'
import { AssetsArr, IPartner, IPreferedAssets, PartnersArr } from '../../(util)/custom.data'
import Image from 'next/image'
import jsonData from '../../(util)/text.json'

const PartnerSection = () => {
    const { title, body } = jsonData.home.partnersection
    return (
        <div>
            <div className='py-20 px-[52px] md:max-w-[88vw] relative flex flex-col justify-center place-items-center mx-auto'>
                <div className='text-left md:px-20 z-10'>
                    <h1 className='text-[22px] text-secondary md:text-5xl font-[600]'>{title}</h1>
                </div>
                <div className='grid z-10 py-10 lg:grid-cols-4 grid-cols-1 sm:grid-cols-2 gap-6 place-items-center justify-center'>
                    {AssetsArr && AssetsArr.map((asset: IPreferedAssets) => {
                        return (
                            <div key={asset.id} className='bg-white rounded-md lg:w-[16vw] flex flex-row w-full md:flex-col lg:h-[40vh] gap-6 place-items-center shadow-box py-6 px-4'>
                                <div>
                                    <span className={`text-white bg-[#F0F0F0] flex place-items-center justify-center font-bold h-12 w-12 rounded-md`}>{asset.icon}</span>
                                </div>
                                <div>
                                    <h1 className={`font-semibold text-secondary`}>{asset.title}</h1>
                                    <p className='text-[14px] md:flex hidden py-4'>{asset.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='py-24'>
                <div className='sm:px-20 px-[14px] max-w-[88vw] mx-auto'>
                    <p className='text-[18px] md:text-[28px] font-medium pb-8'>{body}</p>
                </div>
                <div className='bg-[#eaeaea] flex flex-row overflow-x-auto gap-16 py-8 '>
                    {PartnersArr && PartnersArr.map((partner: IPartner) => (
                        <Image className='h-[16vh] lg:w-[12vw]' key={partner.id} src={`${partner.logo}`} alt='' width={300} height={100} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PartnerSection