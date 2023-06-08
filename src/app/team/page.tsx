import { Metadata } from 'next'
import React from 'react'
import HeroSection from '../(components)/HeroSection'
import jsonData from '../(util)/text.json'
import ApplicationSection from '../(components)/(apply)/ApplicationSection'

export const metadata: Metadata = {
    title: 'Psurplus Join Our Team Page!',
    description: 'Welcome to the page that describe the application of Psurplus platform, feel free to check around!'
}

const initialProps = jsonData.jointeam.hero
const JoinTeam = () => {
    return (
        <main>
            <HeroSection initialProps={initialProps} />
            <ApplicationSection />
        </main>
    )
}

export default JoinTeam