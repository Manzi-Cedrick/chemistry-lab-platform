import Section from '@/app/(layout)/pagelayout'
import Image from 'next/image'
import React from 'react'
const GoogleMapEmbed = () => {
    return (
        <Section className='flex py-20 min-h-[60vh] justify-center place-items-center'>
            <div className='md:max-w-[50vw] h-full md:max-h-[50vh] w-full box-shadow md:flex'>
                <Image src={'/(assets)/map_simulate.png'} alt='' className='w-full' height={100} width={400} priority/>
            </div>
        </Section>
    )
}

export default GoogleMapEmbed