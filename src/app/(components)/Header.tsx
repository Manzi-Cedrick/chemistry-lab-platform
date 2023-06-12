"use client"
import React, { useState, useEffect } from 'react'
import LogoSvg from '../(icons)/logosvg'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ILink, links, sideBarArr } from '../(util)/custom.data';
import { CallIcon, CartIcon, ChemicalSvg, EmailIcon, HomeIcon } from '../(icons)';

const Header = () => {
    const [ShowLinks, setShowLinks] = useState<boolean>(false);
    const pathname = usePathname()
    const ChangeHeader = (path: string) => {
        if (pathname === path) {
            return `text-main border-b-2 border-solid border-main py-2 duration-700`
        }
    }
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768 && ShowLinks) {
                setShowLinks(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [ShowLinks]);
    return (
        <header className='bg-white'>
            <div className='border-2 w-full bg-white flex justify-center md:justify-end place-items-center px-20 py-4 border-slate-200'>
                <p className='text-[12px] flex justify-center place-items-center gap-2 font-bold text-slate-500'>
                    <span><CallIcon fill="none" /></span>
                    <span>Call us now:</span>
                    <span className='text-main'>000-000-000</span>
                </p>
            </div>
            <div className={`flex justify-between px-0 md:px-20 gap-14 flex-col md:flex-row md:place-items-center py-3`}>
                <div className={`h-12 flex justify-center place-items-center md:block md:h-14 md:w-14}`}>
                    <LogoSvg />
                </div>
                <div className={`flex ${ShowLinks && 'flex flex-col gap-6 justify-start py-4 px-8'} text-black md:place-items-center md:justify-center md:gap-[2em] lg:gap-[8em] md:py-0`}>
                    <ul className={`text-black text-[14px] font-normal ${ShowLinks ? 'flex flex-col gap-6 justify-start' : 'hidden'}  md:flex gap-10`}>
                        {!ShowLinks ? links.map((link: ILink) => (
                            <li key={link.id} className={`${ChangeHeader(link.link_url)} hover:border-b-2 hover:border-solid hover:border-main py-2 hover:duration-700 hover:text-main`}>
                                <Link href={link.link_url}>
                                    <span>{link.link_title}</span>
                                </Link>
                            </li>
                        )) :
                            sideBarArr.map((ILink) => (
                                <Link href={ILink.link_url} key={ILink.id}>
                                    <div className='flex flex-row items-center gap-10'>
                                        <div style={{ backgroundColor: ILink.bg_color }} className='rounded-full'>
                                            <span className='sm:hidden h-16  w-16 rounded-full flex items-center justify-center'>{ILink.icon}</span>
                                        </div>
                                        <div>
                                            <h1 className='text-[18px] sm:text-[16px] font-semibold sm:font-normal'>{ILink.linkName}</h1>
                                            <p className='text-[14px] text-[#7E7E7E] sm:hidden flex'>{ILink.linkDescription}</p>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        }
                    </ul>
                    <Link href='/auth/login' className={`${!ShowLinks ? 'flex flex-col gap-6 py-10 justify-center' : 'hidden'} py-2 `}>
                        <button className={`btn lg:flex border-solid hover:bg-main text-white duration-600 bg-main text-whit justify-center rounded-md py-3 text-[12px] px-10 font-semibold  ${ShowLinks ? 'flex' : 'hidden'}  `}>Sign up Now</button>
                    </Link>
                </div>
                <div className={`flex absolute left-8 top-18 md:hidden`}>
                    <button className='btn duration-600 transition-all' onClick={() => setShowLinks((prevLink) => !prevLink)}>{ShowLinks ? <span>&times;</span> : <span>&#x2630;</span>}</button>
                </div>
                <div className={`${ShowLinks && 'hidden'} flex absolute right-8 top-18 md:hidden`}>
                    <button className='btn'><span className='bg-red-500 text-white absolute -top-2 -right-2 flex justify-center place-items-center text-[8px] font-bold h-4 w-4 rounded-full'>4</span><CartIcon /></button>
                </div>
            </div>

        </header>
    )
}

export default Header