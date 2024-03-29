import React from 'react'

const Section = ({
    children,
    className,
    id
}:{
    children: React.ReactNode,
    className?:string,
    id?:string
}) => {
  return (
    <section className={`lg:px-[165px] px-10 md:px-[52px] bg-white text-black ${className || ''}`} id={id}>
        {children}
    </section>
  )
}

export default Section