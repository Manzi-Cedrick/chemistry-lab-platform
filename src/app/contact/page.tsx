import { Metadata } from 'next'
import React from 'react'
import Services from '../(components)/(about)/services'
import CostEffective from '../(components)/(about)/CostEffective'
import FooterReferenceOther from '../(components)/(about)/FooterReferenceOther'
import Founders from '../(components)/(about)/founders'
import HeroSection from '../(components)/HeroSection'
import jsonData from '../(util)/text.json'
import ContactInfoSection from '../(components)/(contact)/ContactInfoSection'
import GoogleMapEmbed from '../(components)/(contact)/GoogleMapEmbed'
export const metadata: Metadata = {
    title: 'Psurplus Contact Page!',
    description: 'Welcome to the page that describe the application of Psurplus platform, feel free to check around!'
}

const initialProps = jsonData.contact.hero
const Contact = () => {
    return (
        <main>
            <HeroSection initialProps={initialProps} />
            <ContactInfoSection />
            <GoogleMapEmbed />
        </main>
    )
}

export default Contact