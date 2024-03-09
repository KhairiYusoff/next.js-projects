import React from 'react'
import NewsCard from '../NewsCard/NewsCard'

const TrendingNews = () => {
    return (
        <div className='pt-[5rem] pb-[3rem]'>
            <h1 className='heading'>Trending News</h1>
            <div className='pt-[2rem] md:pt-[3rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
                <div>
                    <NewsCard image='/images/n1.jpg' date="March 21, 2025" title="Whats new in England team" height="h-[300px]" />
                </div>
                <div>
                    <NewsCard image='/images/n2.jpg' date="March 22, 2025" title="Whats new in England team" height="h-[300px]" />
                </div>
                <div>
                    <NewsCard image='/images/n3.jpg' date="March 23, 2025" title="Whats new in England team" height="h-[300px]" />
                </div>
                <div>
                    <NewsCard image='/images/n4.jpg' date="March 24, 2025" title="Whats new in England team" height="h-[300px]" />
                </div>
            </div>
        </div>
    )
}

export default TrendingNews