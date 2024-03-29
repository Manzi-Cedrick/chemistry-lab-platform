import React from 'react'
import LogoSvg from '../(icons)/logosvg'
import { AboutServiceLinks, ISocialMedia, SocialMediaArr, SupportLinks } from '../(util)/custom.data'
import Link from 'next/link'
import Section from '../(layout)/pagelayout'
import { CallColoredSvg, CallIcon, EmailIcon } from '../(icons)'

const Footer = () => {
    return (
        <div className='py-10 min-h-[30vh] relative lg:px-[165px] md:px-[2em]' >
            <div className='flex flex-col justify-around text-left md:text-left md:flex-row mx-auto px-10 lg:px-0 gap-6'>
                <div className='text-black font-bold flex gap-8 flex-col text-[14px] lg:text-[16px]'>
                    <div className='h-12'>
                        <LogoSvg />
                    </div>
                    <div>
                        <h1>Socio links</h1>
                        <div className='flex justify-between py-2 gap-4'>
                            {SocialMediaArr && SocialMediaArr.map((social: ISocialMedia) => (
                                <Link href={social.url} key={social.id}>
                                    <div className='rounded-full hover:scale-125 hover:cursor-pointer duration-300 text-backG place-items-center bg-white p-5'>
                                        {social.icon}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='flex min-w-[50vw] md:flex-row flex-col gap-10'>
                    <div className='flex flex-col gap-6 md:w-[30vw] md:flex-row'>
                        <div className='flex-1 font-bold flex gap-4 flex-col text-[14px] lg:text-[16px]'>
                            <h1 className='font-semibold'>About and Service</h1>
                            <ul className='text-[#0A5DAB] text-[14px] font-normal flex flex-col gap-4 list-none'>
                                {AboutServiceLinks && AboutServiceLinks.map((link) => (
                                    <li key={link.id} className='hover:text-underline origin-center duration-300'><Link href={link.url}>{link.title}</Link></li>
                                ))}
                            </ul>
                        </div>
                        <div className='flex-1 font-bold flex gap-4 flex-col  text-[14px] lg:text-[16px]'>
                            <h1 className='font-semibold'>Support</h1>
                            <ul className='text-[#0A5DAB] text-[14px] font-normal flex flex-col gap-4 list-none'>
                                {SupportLinks && SupportLinks.map((link) => (
                                    <li key={link.id} className='hover:text-underline origin-center duration-300'><Link href={link.url}>{link.title}</Link></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className='flex-1 font-bold flex gap-4 flex-col text-[14px] lg:text-[16px]'>
                        <h1 className='font-semibold'>Sign in</h1>
                        <ul className='text-[#0A5DAB] text-[14px] font-normal flex flex-col gap-4 list-none'>
                            <li className='hover:text-underline origin-center duration-300'><Link href={'/auth/login'}>{'Sign In Now'}</Link></li>
                        </ul>
                        <div>
                            <h1 className='font-semibold'>Contact</h1>
                            <ul className='text-main text-[14px] font-normal py-4 flex flex-col gap-4 list-none'>
                                <li className='hover:text-underline origin-center flex justify-start gap-4 items-center duration-300'><span><EmailIcon /></span><span>info@Company.com</span></li>
                                <li className='hover:text-underline origin-center flex justify-start gap-4 items-center duration-300'><span><CallColoredSvg /></span><span>000-000-000</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-gray-50 absolute w-full left-0 right-0 flex-col gap-6 md:flex-row my-10 flex py-5 place-items-center '>
                <p className='text-[#7E7E7E] text-center text-[12px] flex justify-center w-full font-semibold'>©2023 - Psurplus. All right reserved</p>
            </div>
        </div>
    )
}

export default Footer