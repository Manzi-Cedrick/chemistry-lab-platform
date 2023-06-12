import { ClockSvg, LeftBlobSvg, UpperBlobIcon } from '@/app/(icons)'
import Section from '@/app/(layout)/pagelayout'
import Image from 'next/image'
import React from 'react'

const Hero = ({ initialProps }: any) => {
    return (
        <Section className='relative min-h-[80vh] flex justify-center gap-8 md:gap-20 py-10 md:flex-row flex-col md:pt-20'>
            <div className='flex flex-row md:max-w-[40vw] gap-4'>
                <div className='absolute -left-[80] sm:flex sm:absolute top-[0em] md:top-0 right-0'>
                    <UpperBlobIcon />
                </div>
                <div className='z-10 md:pr-[4em]'>
                    <h1 className='text-3xl md:text-5xl title text-[#032D60] font-semibold'>{initialProps.title}</h1>
                    <p className='py-6 text-[#404040] text-[18px] font-normal'>{initialProps.body}</p>
                    <div className='z-10 flex flex-col place-items-center md:flex-row gap-4'>
                        <input type="email" placeholder='Enter email' className='px-4 shadow-box w-full bg-white text-slate-500 rounded-md border-2 border-transparent py-3 focus:border-main' />
                        <button className='text-white flex justify-between place-items-center bg-main rounded-md font-semibold relative px-6 py-3'>Subscribe</button>
                    </div>
                </div>
            </div>
            <div className='bg-white z-10 md:w-[28vw] md:h-[50vh] rounded-xl shadow-box'>
                <div className='max-h-[60%]'>
                    <Image src={'/(assets)/cosmetics.png'} alt='' width={400} height={100} className='md:max-w-[50vw] w-full' />
                </div>
                <div className='bg-white h-[45%] rounded-b-xl p-4'>
                    <h1 className='text-main py-4 font-semibold'>How to sell the products on Company: learn the art of selling</h1>
                    <div className='flex justify-between place-items-center text-[14px]'>
                        <div className='flex flex-row place-items-center gap-4 text-slate-500'>
                            <Image src={'/(assets)/cosmetics.png'} height={100} width={100} alt='' className='h-12 w-12 rounded-full' />
                            <h1>Jacob Jones</h1>
                        </div>
                        <div>
                            <p className='text-slate-500 flex place-items-center'><span><ClockSvg /></span>10 min Read</p>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default Hero