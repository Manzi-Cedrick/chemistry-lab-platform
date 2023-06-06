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
    <section className={`lg:px-24 sm:px-20 px-8 bg-white text-black ${className || ''}`} id={id}>
        {children}
    </section>
  )
}

export default Section