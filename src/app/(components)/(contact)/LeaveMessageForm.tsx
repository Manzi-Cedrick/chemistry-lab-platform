import React from 'react'
import Link from 'next/link'

const LeaveMessageForm = () => {
    return (
        <form className='md:max-w-[50vw] min-w-[24vw] py-4'>
            <div>
                <h1 className='text-secondary font-bold pb-6 text-xl'>Leave us a message.</h1>
            </div>
            <div className="relative mb-6" data-te-input-wrapper-init>
                <input
                    type="text"
                    className="peer block min-h-[auto] w-full focus:border-main rounded bg-gray-50 border-2 border-slate-200 px-3 py-2 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none text-black [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    placeholder="Enter your full-name" />
                <label
                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-main peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none peer-focus:bg-white"
                >FullName</label>
            </div>
            <div className="relative mb-6" data-te-input-wrapper-init>
                <input
                    type="email"
                    className="peer block min-h-[auto] w-full focus:border-main rounded bg-gray-50 border-2 border-slate-200 px-3 py-2 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none text-black [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    placeholder="Enter your email" />
                <label
                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-main peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none peer-focus:bg-white"
                >Email</label>
            </div>
            <div className="relative mb-6" data-te-input-wrapper-init>
                <input
                    type="text"
                    className="peer block min-h-[auto] w-full focus:border-main rounded bg-gray-50 border-2 border-slate-200 px-3 py-2 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none text-black [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    placeholder="Enter your title" />
                <label
                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-main peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none peer-focus:bg-white"
                >Title</label>
            </div>
            <div className="relative mb-6" data-te-input-wrapper-init>
                <textarea
                    className="peer block min-h-[auto] w-full focus:border-main rounded bg-gray-50 border-2 border-slate-200 px-3 py-2 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none text-black [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                ></textarea>
                <label
                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-main peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none peer-focus:bg-white"
                >Message</label>
            </div>

            <div>
                <button className='py-3 bg-main text-white w-full rounded-md text-[14px] font-semibold'>Create Account</button>
            </div>
        </form>
    )
}

export default LeaveMessageForm