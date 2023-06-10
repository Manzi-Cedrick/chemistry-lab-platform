import { Metadata } from 'next'
import React from 'react'
import HeroSection from '../(components)/HeroSection'
import jsonData from '../(util)/text.json'
import PolicySection from '../(components)/PolicySection'

export const metadata: Metadata = {
    title: 'Psurplus Join Our Team Page!',
    description: 'Welcome to the page that describe the application of Psurplus platform, feel free to check around!'
}

const initialProps = jsonData.refundPolicy.hero
const data = jsonData.refundPolicy.data
const RefundPolicy = () => {
    return (
        <main>
            <HeroSection initialProps={initialProps} />
            <PolicySection sectionData={data}/>
        </main>
    )
}

export default RefundPolicy