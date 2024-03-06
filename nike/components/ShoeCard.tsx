import Image from 'next/image'
import React from 'react'

const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }: any) => {
    return (
        <div>
            <div>
                <Image
                    src={imgURL.thumbnail}
                    alt='shoe colletion'
                    width={127}
                    height={103.34}
                    className='object-contain'
                />
            </div>
        </div>
    )
}

export default ShoeCard