import { Metadata } from 'next'
import React from 'react'
import HeroSection from '../(components)/HeroSection'
import jsonData from '../(util)/text.json'
import Hero from '../(components)/(blog)/Hero'
import Example from '../(components)/(blog)/BlogSec'

export const metadata: Metadata = {
    title: 'Psurplus Blog Page!',
    description: 'Welcome to the page that describe the application of Psurplus platform, feel free to check around!'
}

const initialProps = jsonData.blog.hero
const BlogPage = () => {
    return (
        <main>
            <Hero initialProps={initialProps} />
            <Example />
        </main>
    )
}

export default BlogPage