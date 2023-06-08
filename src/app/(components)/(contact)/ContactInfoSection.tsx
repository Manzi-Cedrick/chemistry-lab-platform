import { CallIcon, EmailIcon } from '@/app/(icons)'
import Section from '@/app/(layout)/pagelayout'
import React from 'react'
import LeaveMessageForm from './LeaveMessageForm'

const ContactInfoSection = () => {
  return (
    <Section className='py-10 relative'>
      <div className='flex md:flex-row flex-col justify-between'>
        <div className='z-10 md:max-w-[50vw] pt-[2em] md:pr-[10em]'>
          <h1 className='text-3xl text-secondary font-extrabold'>{'Have you Got a query?'}</h1>
          <p className='py-6'>{'Welcome to Company, your trusted partner in sustainable and eco-friendly management of surplus chemicals.Our platform is designed to help Organizations reduce their environmental footprint and recover assets by managing their surplus chemicals responsibly.'}</p>
          <div className='py-4'>
            <ul className='text-main text-[14px] font-normal py-4 flex flex-col gap-4 list-none'>
              <li className='hover:text-underline origin-center flex justify-start gap-4 duration-300'><span><CallIcon fill="#0A5DAB" /></span><span>info@Company.com</span></li>
              <li className='hover:text-underline origin-center flex justify-start gap-4 duration-300'><span><CallIcon fill="#0A5DAB" /></span><span>info@Company.com</span></li>
              <li className='hover:text-underline origin-center flex justify-start gap-4 duration-300'><span><EmailIcon /></span><span>000-000-000</span></li>
            </ul>
          </div>
        </div>
        <div className='bg-white z-10 shadow-box p-6'>
          <LeaveMessageForm />
        </div>
      </div>
    </Section>
  )
}

export default ContactInfoSection