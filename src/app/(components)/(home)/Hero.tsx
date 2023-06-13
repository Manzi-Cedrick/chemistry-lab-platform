import React from 'react'
import { ArrowIcon, BookMarkIcon, DownArrow, HomeIcon, LeftBlobSvg, SearchIcon } from '../../(icons)'
import Section from '../../(layout)/pagelayout'
import jsonData from '../../(util)/text.json';

const Hero = () => {
    const { title, body } = jsonData.home.hero;
    const formattedTitle = title.replace(
        /Surplus/g,
        '<span class="highlight">Surplus</span>'
    );
    return (
        <Section className='relative flex justify-around flex-col pt-10 sm:pt-20'>
            <div className='flex place-items-center py-10  flex-col md:flex-row justify-between'>
                <div className='flex flex-row gap-4'>
                    <div className='absolute -left-[28em] lg:left-0 top-0'>
                        <LeftBlobSvg />
                    </div>
                    <div className='z-10 md:max-w-[44vw] lg:pr-[4em]'>
                        <h1 dangerouslySetInnerHTML={{ __html: formattedTitle }} className='text-3xl md:text-5xl text-[#032D60] font-bold'></h1>
                        <p className='py-6 font-[400] text-[20px]'>{body}</p>
                    </div>
                </div>
                <div className='flex z-10 flex-col gap-6 place justify-center'>
                    <button className='text-white flex justify-between gap-4 place-items-center bg-gradient1 rounded-[10px] text-[16px] lg:text-[28px] px-6 py-8 lg:w-[410px] lg:h-[127px] font-[600] relative lg:pt-4'><span className='absolute left-10 top-0'><SearchIcon /></span>Find Surplus Chemicals <span><ArrowIcon /></span></button>
                    <button className='text-white flex justify-between place-items-center bg-gradient2 rounded-[10px] text-[16px] lg:text-[28px] py-8 px-6 lg:w-[410px] lg:h-[127px] font-[600] relative lg:pt-4'><span className='absolute left-4 top-0'><BookMarkIcon /></span>Sell your Surpluses <span><ArrowIcon /></span></button>
                </div>
            </div>
            <div className='flex flex-col place-items-center pt-[6em] z-10 justify-center'>
                <button className='font-semibold border-2 rounded-md border-[#404040] text-[#404040] px-6 py-3'>See How It works</button>
                <span><DownArrow /></span>
            </div>
        </Section>
    )
}

export default Hero