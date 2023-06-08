import React from 'react'
import Section from '../(layout)/pagelayout'
import jsonData from '../(util)/text.json'
import FAQComponent from './FAQComponent'
const FAQSectionInfo = () => {
    const faqs = jsonData.faq.data
    return (
        <Section className='py-10'>
            <FAQComponent data={faqs} />
        </Section>
    )
}

export default FAQSectionInfo