"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
import { Element, Link } from 'react-scroll'
const PolicySection = ({ sectionData }: any) => {
    const router = usePathname();
    const activeSection = router.includes('#') ? router.split('#')[1] : '';
    return (
        <div className='p-10 bg-white'>
            <div>
                <h1 className='text-main font-semibold'>Navigate To:</h1>
            </div>
            <div className='flex relative flex-col md:flex-row justify-start md:gap-x-10'>
                <div className='flex-col section-header min-w-[20vw] gap-2 border-r-2 border-slate-100'>
                    {sectionData.map((section: any, index: number) => (
                        <Link
                            activeClass="nav-section"
                            to={`${section.title}`}
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-80}
                            key={index}
                            className={`flex hover:text-main hover:shadow-md hover:shadow-slate-100 hover:bg-gray-100 px-4 text-[14px] font-semibold text-slate-500 duration-500 transition-all py-3 items-center justify-start ${activeSection === section.title ? 'bg-main text-white' : 'text-slate-500'}`}>
                            <span>{`${section.title ? `• ${section.title}` : ''}`}</span>
                        </Link>
                    ))}
                </div>
                <div className='w-full lg:px-20'>
                    {sectionData.map((sectionItem: any, index: number) => (
                        <Element key={index} name={`${sectionItem.title}`}>
                            <h2 className='py-4 text-main font-semibold'>{sectionItem.title && sectionItem.title}</h2>
                            {sectionItem.body.map((dataItem: any, dataIndex: number) => {
                                const { tag, value, class: className } = dataItem;
                                const Tag = tag as keyof JSX.IntrinsicElements;
                                if (Array.isArray(value)) {
                                    return (
                                        <Tag key={dataIndex} className={`${Tag != "ol" ? 'list-disc list-inside' : ' list-decimal list-inside'} space-y-4 ${className}`}>
                                            {value.map((listItem, listItemIndex) => (
                                                <li key={listItemIndex}>{listItem}</li>
                                            ))}
                                        </Tag>
                                    );
                                } else {
                                    return <Tag key={dataIndex} className={className}>{value}</Tag>;
                                }
                            })}
                        </Element>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PolicySection