import React from 'react'
import { ArrowIcon, BookMarkIcon, DownArrow, LeftBlobSvg, SearchIcon } from '../../(icons)'
import Section from '../../(layout)/pagelayout'
import jsonData from '../../(util)/text.json';

const Hero = () => {
    const { title, body } = jsonData.home.hero;
    const formattedTitle = title.replace(
        /surplus/g,
        '<span class="highlight">surplus</span>'
    );
    return (
        <Section className='relative flex justify-around flex-col pt-20'>
            <div className='flex place-items-center py-10 flex-col md:flex-row justify-between'>
                <div className='flex flex-row gap-4'>
                    <div className='absolute -left-[30em] lg:left-0 top-0'>
                        <LeftBlobSvg />
                    </div>
                    <div className='z-10 md:max-w-[40vw] md:pr-[4em]'>
                        <h1 dangerouslySetInnerHTML={{ __html: formattedTitle }} className='text-3xl md:text-5xl title text-[#032D60] font-bold'></h1>
                        <p className='py-6'>{body}</p>
                    </div>
                </div>
                <div className='flex z-10 flex-col gap-4 '>
                    <button className='text-white flex justify-between gap-4 place-items-center bg-gradient1 rounded-md font-semibold relative px-10 py-6'><span className='absolute left-10 top-0'><SearchIcon /></span>Find Surplus Chemical <span><ArrowIcon /></span></button>
                    <button className='text-white flex justify-between place-items-center bg-gradient2 px-10 rounded-md font-medium py-6 relative'><span className='absolute left-4 top-0'><BookMarkIcon /></span>Sell your Surpluses <span><ArrowIcon /></span></button>
                </div>
            </div>
            <div className='flex flex-col place-items-center pt-[10em] z-10 justify-center'>
                <button className='text-black font-bold border-2 rounded-md border-black px-6 py-3'>See How it works</button>
                <span><DownArrow /></span>
            </div>
        </Section>
    )
}

export default Hero