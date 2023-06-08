import Section from '@/app/(layout)/pagelayout'
import React from 'react'
import LeaveMessageForm from '../(contact)/LeaveMessageForm'
import DetailForm from './DetailForm'

const ApplicationSection = () => {
    return (
        <Section className='py-10 relative'>
            <div className='flex md:flex-row flex-col justify-between'>
                <div className='z-10 md:max-w-[50vw] pt-[2em] md:pr-[10em]'>
                    <h1 className='text-3xl text-secondary font-extrabold'>{'Apply Now'}</h1>
                    <p className='py-6'>{'As the first asset recovery marketplace specialized in chemicals, we are committed to providing our customers with the best service possible. If you have experience in the fields and are passionate about making a difference, we want to hear from you! Join our team and help us reduce carbon foot print.. Contact us today to learn more about this exciting opportunity.'}</p>
                </div>
                <div className='bg-white z-10 shadow-box p-6'>
                    <DetailForm />
                </div>
            </div>
        </Section>
    )
}

export default ApplicationSection