import React from 'react'
import Link from 'next/link'
import Select from 'react-select/dist/declarations/src/Select'
import { CountrieListArr, ExpertiseArr } from '@/app/(util)/options'

const DetailForm = () => {
    const value = CountrieListArr[0]; // Set the desired default value object
    const defaultValue = CountrieListArr.find(country => country.name === 'Rwanda'); // Find the object that matches the default value

    return (
        <form className=''>
            <div>
                <h1 className='text-secondary font-bold pb-6 text-xl'>Enter your details.</h1>
            </div>
            <div className="relative mb-3" data-te-input-wrapper-init>
                <input
                    type="text"
                    className="peer block min-h-[auto] w-full focus:border-main rounded bg-gray-50 border-2 border-slate-200 px-3 py-2 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none text-black [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    placeholder="Enter your full-name" />
                <label
                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-main peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none peer-focus:bg-white"
                >Name</label>
            </div>
            <div className="relative mb-3" data-te-input-wrapper-init>
                <input
                    type="email"
                    className="peer block min-h-[auto] w-full focus:border-main rounded bg-gray-50 border-2 border-slate-200 px-3 py-2 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none text-black [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    placeholder="Enter your email" />
                <label
                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-main peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none peer-focus:bg-white"
                >Email</label>
            </div>
            <div className="relative mb-3" data-te-input-wrapper-init>
                <input
                    type="text"
                    className="peer block min-h-[auto] w-full focus:border-main rounded bg-gray-50 border-2 border-slate-200 px-3 py-2 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none text-black [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    placeholder="Enter your title" />
                <label
                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-main peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none peer-focus:bg-white"
                >Title</label>
            </div>
            <div className="relative mb-3" data-te-input-wrapper-init>
                <select
                    className="peer block min-h-[auto] w-full focus:border-main rounded bg-gray-50 border-2 border-slate-200 px-3 py-2 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none text-black [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                >
                    <option value={''}>{''}</option>
                    {CountrieListArr && CountrieListArr.map((country, index) => (
                        <option key={index} value={country.name}>{country.name}</option>
                    ))}
                </select>
                <label
                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-main peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none peer-focus:bg-white"
                >Country</label>
            </div>
            <div className='relative mb-3'>
                <div className='flex'>
                    <p className='bg-slate-100 text-[12px] px-2 font-semibold flex justify-center place-items-center'>+240</p>
                    <input
                        type="number"
                        className="peer block min-h-[auto] w-full focus:border-main rounded bg-gray-50 border-2 border-slate-200 px-3 py-2 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none text-black [&:not([data-te-input-placeholder-active])]:placeholder:opacity-100"
                        placeholder="Phone" />
                </div>
            </div>
            <div className="relative mb-3" data-te-input-wrapper-init>
                <select
                    className="peer block min-h-[auto] w-full focus:border-main rounded bg-gray-50 border-2 border-slate-200 px-3 py-2 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none text-black [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                >
                    <option value={''}>{''}</option>
                    {ExpertiseArr && ExpertiseArr.map((option, index) => (
                        <option key={index} value={option.name}>{option.name}</option>
                    ))}
                </select>
                <label
                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-main peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none peer-focus:bg-white"
                >Fields of Expertise</label>
            </div>
            <div className="relative mb-3" data-te-input-wrapper-init>
                <select
                    className="peer block min-h-[auto] w-full focus:border-main rounded bg-gray-50 border-2 border-slate-200 px-3 py-2 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none text-black [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                >
                    <option value={''}>{''}</option>
                    {ExpertiseArr && ExpertiseArr.map((option, index) => (
                        <option key={index} value={option.name}>{option.name}</option>
                    ))}
                </select>
                <label
                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-main peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none peer-focus:bg-white"
                >Open Opportunities</label>
            </div>
            <div className="relative mb-3" data-te-input-wrapper-init>
                <input
                    type="text"
                    className="peer block min-h-[auto] w-full focus:border-main rounded bg-gray-50 border-2 border-slate-200 px-3 py-2 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none text-black [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    placeholder="" />
                <label
                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-main peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none peer-focus:bg-white"
                >LinkedIn Profile</label>
            </div>
            <div className="relative mb-3" data-te-input-wrapper-init>
                <input
                    type="file"
                    className="peer block min-h-[auto] w-full focus:border-main rounded bg-gray-50 border-2 border-slate-200 px-3 py-2 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none text-black [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    placeholder=""
                    accept='*/' />
                <label
                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-main peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none peer-focus:bg-white"
                >File</label>
            </div>
            <div>
                <button className='py-3 bg-main text-white w-full rounded-md text-[14px] font-semibold'>Apply Now</button>
            </div>
        </form>
    )
}

export default DetailForm