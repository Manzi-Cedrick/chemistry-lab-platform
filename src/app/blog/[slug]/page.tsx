import { ClockSvg, DateSvg, UpperBlobIcon } from '@/app/(icons)'
import Section from '@/app/(layout)/pagelayout'
import { posts } from '@/app/(util)/custom.data'
import Image from 'next/image'
import React from 'react'

const Blog = () => {
    return (
        <Section className='relative lg:px-24 flex justify-start'>
            <div className='absolute -left-[80] sm:flex sm:absolute top-[0em] md:top-0 right-0'>
                <UpperBlobIcon />
            </div>
            <div className='z-10 pt-20 md:pt-30 w-full flex flex-col items-center md:px-20'>
                <div className='md:max-w-[50vw]'>
                    <h1 className='text-3xl md:text-5xl text-secondary font-semibold'>{'How to sell the products on Company: learn the art of selling'}</h1>
                </div>
                <div className="mt-8 pb-6 text-left rounded-b-2 flex items-start text-gray-500 gap-x-4 text-xs">
                    <span className='flex items-center gap-4'>
                        <ClockSvg />
                        {'6min'} Read Time
                    </span>
                    <time dateTime={'2020-03-16'} className='flex items-center gap-4'>
                        <DateSvg />
                        {'2020-03-16'}
                    </time>
                </div>
                <div className='md:max-w-[50vw] pt-10 md:pt-0 md:pb-10 h-[40vh] md:min-h-[50vh] w-full md:flex'>
                    <Image src={'/(assets)/mac.jpg'} alt='' className='w-full h-full object-cover rounded-xl' height={100} width={400} priority />
                </div>
                <div className='py-10 pt-20 md:pt-0 md:max-w-[50vw]'>
                    <h2 className='py-4 text-secondary font-semibold'>The Future of Freight: How Technology is Revolutionizing the Industry</h2>
                    <p>The freight industry has been around for centuries, and it has played a vital role in the global economy. However, the industry is now undergoing a significant transformation, thanks to the rapid advancements in technology. Today, technology is revolutionizing the freight industry, and the future of freight looks more promising than ever before. In this blog, we will explore how technology is changing the industry and what the future holds.</p>
                    <h3 className='py-4 text-secondary font-semibold'>Automation of Freight Operations</h3>
                    <p>One of the significant changes brought about by technology is the automation of freight operations. Automation has made it possible to streamline freight operations, from the point of origin to the point of consumption. For example, transportation management systems (TMS) are being used to automate the entire transportation process, from booking to delivery. This has greatly reduced the time and cost involved in freight operations.</p>
                    <h3 className='py-4 text-secondary font-semibold'>Tracking and Visibility</h3>
                    <p>Another area where technology is transforming the freight industry is in the area of tracking and visibility. With the advent of GPS technology and real-time tracking systems, freight companies can now track their shipments in real-time. This has made it possible for companies to have greater visibility into their supply chain, which has resulted in better planning and decision-making.</p>
                    <h3 className='py-4 text-secondary font-semibold'>Artificial Intelligence in Supply Chain Optimization</h3>
                    <p>Artificial intelligence (AI) is also playing a critical role in the freight industry. AI is being used to optimize the entire supply chain, from procurement to delivery. For example, AI-powered algorithms are being used to predict demand, optimize routes, and identify potential disruptions. This has resulted in greater efficiency and cost savings for freight companies.</p>
                    <h3 className='py-4 text-secondary font-semibold'>Drones and Autonomous Vehicles</h3>
                    <p>Finally, the use of drones and autonomous vehicles is set to revolutionize the freight industry. Drones are already being used for last-mile deliveries, while autonomous vehicles are being tested for long-haul transportation. These technologies have the potential to greatly reduce the cost and time involved in freight operations.</p>
                    <p>In conclusion, the future of freight looks bright, thanks to the rapid advancements in technology. The industry is becoming more efficient, cost-effective, and sustainable. As technology continues to evolve,</p>
                </div>
                <div className='p-4 bg-gray-100 rounded-md flex flex-row'>
                    <Image src={'/(assets)/cosmetics.png'} height={100} width={100} alt='' className='h-16 w-16 object-cover rounded-full' />
                    <div className='px-4'>
                        <h1 className='text-main font-semibold'>Wade Warren</h1>
                        <p>Wade Warren is Director of the Sales team, at Company</p>
                    </div>
                </div>
                <div className='w-full'>
                    <h1 className='text-main font-semibold py-5 text-left'>Related Articles</h1>
                    <div className="mx-auto pt-4 pb-20 flex md:overflow-x-auto max-w-2xl lg:flex-row flex-col gap-x-8 gap-y-20 lg:mx-0 lg:max-w-6xl lg:grid-cols-3">
                        {posts.map((post) => (
                            <article key={post.id} className="flex shadow-box flex-col rounded-b-2 items-start justify-between">
                                <div className="relative w-full">
                                    <img
                                        src={post.imageUrl}
                                        alt=""
                                        className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                                    />
                                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                                </div>
                                <div className="max-w-xl px-6">
                                    <div className="group relative">
                                        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                            <a href={post.href} className="text-secondary">
                                                <span className="absolute inset-0" />
                                                {post.title}
                                            </a>
                                        </h3>
                                    </div>
                                    <div className="mt-8 pb-6 rounded-b-2 flex items-center justify-between text-gray-500 gap-x-4 text-xs">
                                        <span>
                                            {post.readtime} Read Time
                                        </span>
                                        <time dateTime={post.datetime}>
                                            {post.date}
                                        </time>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default Blog