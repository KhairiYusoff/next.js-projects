import React from 'react'
import HightlightsCard from './HightlightsCard'

const MatchHighlights = () => {
    return (
        <div className='pt-[5rem] pb-[3rem]'>
            <h1 className='heading'>Match Highlights</h1>
            <div className='mt-[3rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[3rem]'>
                <div>
                    <HightlightsCard
                        image="/images/h1.jpg"
                        title="Arsenal stay top, man utd is losers"
                        date="21 March 2024"
                    />
                </div>
                <div>
                    <HightlightsCard
                        image="/images/h2.jpg"
                        title="Arsenal stay top, man utd is losers"
                        date="21 March 2024"
                    />
                </div>
                <div>
                    <HightlightsCard
                        image="/images/h3.jpg"
                        title="Arsenal stay top, man utd is losers"
                        date="21 March 2024"
                    />
                </div>
                <div>
                    <HightlightsCard
                        image="/images/h4.jpg"
                        title="Arsenal stay top, man utd is losers"
                        date="21 March 2024"
                    />
                </div>
            </div>
        </div>
    )
}

export default MatchHighlights