import { Metadata } from 'next'
import React from 'react'
import HeroSection from '../(components)/HeroSection'
import jsonData from '../(util)/text.json'
import FAQSectionInfo from '../(components)/FAQSectionInfo'
export const metadata: Metadata = {
    title: 'Psurplus FAQ Page!',
    description: 'Welcome to the page that describe the application of Psurplus platform, feel free to check around!'
}

const initialProps = jsonData.faq.hero
const FAQ = () => {
    return (
        <main>
            <HeroSection initialProps={initialProps} />
            <FAQSectionInfo />
        </main>
    )
}

export default FAQ