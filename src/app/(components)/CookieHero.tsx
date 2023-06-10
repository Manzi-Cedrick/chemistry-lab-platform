import React from 'react'
import jsonData from '../(util)/text.json'
const CookieHeroSection = () => {
    const { title, body } = jsonData.cookiePolicy.hero;
    return (
        <div className='lg:px-10 px-4'>
            <div>
                <h1 className='text-5xl text-secondary font-semibold'>{title}</h1>
                <p className='py-6 text-[16px] text-slate-600'>{body}</p>
            </div>
        </div>
    )
}

export default CookieHeroSection