import React from 'react'
import Section from '../../(layout)/pagelayout'

const VideoBased = () => {
    return (
        <Section className='flex py-20 justify-center place-items-center'>
            <div className='lg:max-w-[50vw] w-full drop-shadow-box md:flex'>
                <video controls src={"/chemicals.mp4"} className='rounded-lg' autoPlay />
            </div>
        </Section>
    )
}

export default VideoBased