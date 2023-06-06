import React from 'react'
import { GoogleIcon, LinkedIcon } from '../(icons)'
import Link from 'next/link'

const ContactForm = () => {
    return (
        <form className='md:max-w-[30vw] py-10'>
            <div className='flex flex-row gap-4'>
                <div className="relative mb-6" data-te-input-wrapper-init>
                    <input
                        type="text"
                        className="peer block min-h-[auto] w-full focus:border-main rounded bg-gray-50 border-2 border-slate-200 px-3 py-2 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none text-black [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        placeholder="First name" />
                    <label
                        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-main peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none peer-focus:bg-white"
                    >Firstname</label>
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                    <input
                        type="text"
                        className="peer block min-h-[auto] w-full focus:border-main rounded bg-gray-50 border-2 border-slate-200 px-3 py-2 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none text-black [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        placeholder="First name" />
                    <label
                        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-main peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none peer-focus:bg-white"
                    >Lastname</label>
                </div>
            </div>
            <div className="relative mb-6" data-te-input-wrapper-init>
                <input
                    type="email"
                    className="peer block min-h-[auto] w-full focus:border-main rounded bg-gray-50 border-2 border-slate-200 px-3 py-2 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none text-black [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    placeholder="Email" />
                <label
                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-main peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none peer-focus:bg-white"
                >Email</label>
            </div>
            <div className="relative mb-6" data-te-input-wrapper-init>
                <input
                    type="password"
                    className="peer block min-h-[auto] w-full focus:border-main rounded bg-gray-50 border-2 border-slate-200 px-3 py-2 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none text-black [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    placeholder="password" />
                <label
                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-main peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none peer-focus:bg-white"
                >Password</label>
            </div>
            <div className="mb-6 block min-h-[1.5rem] pl-[1.5rem]">
                <input
                    className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                    type="checkbox"
                    value=""
                    id="checkboxDefault" />
                <label
                    className="inline-block pl-[0.15rem] hover:cursor-pointer">
                    By creating an account, you agree to Psurplus s <Link href='/terms' className='text-mai'>Terms and Conditions and Privacy Policy</Link>
                </label>
            </div>
            <div>
                <button className='py-3 bg-main text-white w-full rounded-md text-[14px] font-semibold'>Create Account</button>
            </div>
            <div>
                <div className='w-full'>
                    <p className='text-slate-500 text-center py-2'> Or </p>
                </div>
                <div className='flex flex-row gap-4'>
                    <button type='button' className='w-full group flex place-items-center gap-8 justify-center bg-white border-2 border-main hover:bg-main hover:text-white duration-500 text-main font-semibold py-3 rounded-md text-[14px] '>
                        <GoogleIcon />
                        Google
                    </button>
                    <button type='button' className='w-full group flex place-items-center gap-8 justify-center bg-white border-2 border-main hover:bg-main hover:text-white duration-500 text-main font-semibold py-3 rounded-md text-[14px] '>
                        <LinkedIcon />
                        LinkedIn
                    </button>
                </div>
                <div>
                    <p className='text-slate-500 py-3 font-semibold text-center text-[12px]'>Already have an account</p>
                    <button className='py-3 bg-white text-main border-2 border-main w-full rounded-md text-[14px] font-semibold'>Login Now</button>
                </div>
            </div>
        </form>
    )
}

export default ContactForm