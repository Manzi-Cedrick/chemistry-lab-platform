import React from 'react'

const CookiePolicySection = ({ sectionData }: any) => {
    return (
        <div className='w-full px-4 lg:px-10'>
            {sectionData.map((sectionItem: any, index: number) => (
                <div key={index} id={`${sectionItem.title}`}>
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
                </div>
            ))}
        </div>
    )
}

export default CookiePolicySection