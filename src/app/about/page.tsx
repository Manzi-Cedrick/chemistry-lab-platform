import { Metadata } from 'next'
import React from 'react'
import HeroSection from '../(components)/AboutHero'
import Services from '../(components)/(about)/services'
import CostEffective from '../(components)/(about)/CostEffective'
import FooterReferenceOther from '../(components)/(about)/FooterReferenceOther'
import Founders from '../(components)/(about)/founders'

export const metadata: Metadata = {
    title: 'Psurplus About Us Page!',
    description: 'Welcome to the page that describe the application of Psurplus platform, feel free to check around!'
}

const About = () => {
    return (
        <main>
            <HeroSection />
            <Services />
            <Founders />
            <CostEffective />
            <FooterReferenceOther />
        </main>
    )
}

export default About