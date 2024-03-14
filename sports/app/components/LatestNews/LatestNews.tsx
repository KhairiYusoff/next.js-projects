import Image from 'next/image'
import React from 'react'
import NewsCard from '../NewsCard/NewsCard'
import SmallCardNews from '../SmallCardNews/SmallCardNews'

const LatestNews = () => {

    return (
        <div className='pt-[5rem] pb-[3rem]'>
            <h1 className='heading'>Latest News</h1>
            <div className='pt-[4rem] md:pt-[3rem] w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8'>
                <div className='lg:col-span-3'>
                    <NewsCard image="/images/n1.jpg" date="March 23, 2025" title="What new in England" height='h-[400px]' />
                </div>
                <div className='lg:col-span-2'>
                    <div>
                        <SmallCardNews image="/images/n1.jpg" date="March 23, 2025" title="What new in England" />
                    </div>
                    <div className='my-4'>
                        <SmallCardNews image="/images/n1.jpg" date="March 23, 2025" title="What new in England" />
                    </div>
                    <div>
                        <SmallCardNews image="/images/n1.jpg" date="March 23, 2025" title="What new in England" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LatestNews