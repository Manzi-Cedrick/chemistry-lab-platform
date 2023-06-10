import { Metadata } from 'next'
import React from 'react'
import HeroSection from '../(components)/HeroSection'
import jsonData from '../(util)/text.json'
import PolicySection from '../(components)/PolicySection'
import CookiePolicySection from '../(components)/CookiePolicySection'
import CookieHeroSection from '../(components)/CookieHero'

export const metadata: Metadata = {
    title: 'Psurplus Join Our Team Page!',
    description: 'Welcome to the page that describe the application of Psurplus platform, feel free to check around!'
}

const data = jsonData.cookiePolicy.data

const PrivatePolicy = () => {
    return (
        <main>
            <CookieHeroSection />
            <CookiePolicySection sectionData={data} />
        </main>
    )
}

export default PrivatePolicy