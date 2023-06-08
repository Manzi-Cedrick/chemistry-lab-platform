import { FieldSearchIcon } from "@/app/(icons)"
import { posts } from "@/app/(util)/custom.data"
import { SortOptions } from "@/app/(util)/options"

export default function BlogSection() {
    return (
        <div className="bg-white py-10">
            <div className="mx-auto max-w-7xl px-6 lg:px-20">
                <div className='flex flex-row justify-between place-items-center'>
                    <div>
                        <h1 className='text-main text-xl font-semibold'>Articles</h1>
                    </div>
                    <div className='flex flex-row justify-start gap-4'>
                        <div className='bg-gray-50 rounded-md flex border-2 border-slate-200 place-items-center'>
                            <div className="flex justify-center place-items-center rounded-r-2 h-10 w-16">
                                <FieldSearchIcon />
                            </div>
                            <input type="text" placeholder='Search here' className='py-3 bg-gray-50 outline-none h-10 text-[14px] w-full px-4 border-2 border-transparent' />
                        </div>
                        <div>
                            <select
                                className="peer block min-h-[auto] w-full focus:border-main rounded bg-gray-50 border-2 border-slate-200 px-3 py-2 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none text-black [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            >
                                <option value={''}>{'Sort'}</option>
                                {SortOptions && SortOptions.map((option, index) => (
                                    <option key={index} value={option.value}>{option.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-6xl lg:grid-cols-3">
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
    )
}