import { bigShoe1 } from '@/assets/images';
import { shoes, statistics } from '@/constants'
import Image from 'next/image'
import React, { useState } from 'react'

const Hero = () => {
    const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
    return (
        <section id='home' className='w-full flex xl:flex-row flex-col justify-center gap-10 bg-slate-300 min-h-screen max-container'>
            <div>
                <p>Our Summer collections</p>
                <h1>
                    <span>The New Arrival</span>
                    <br />
                    <span>Nike</span>Shoes
                </h1>
                <p> Discover stylish Nike arrivals, quality comfort, and innovation for
                    your active life.</p>
                <button>Shop Now</button>
                <div>
                    {statistics.map((stat, index) => (
                        <div key={index}>
                            <p>{stat.value}</p>
                            <p>{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <Image
                    src={bigShoeImg}
                    alt='shoe colletion'
                    width={610}
                    height={502}
                />
                <div>
                    {shoes.map((image, index) => (
                        <div key={index}>
                            {/* <ShoeCard
                                index={index}
                                imgURL={image}
                                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                                bigShoeImg={bigShoeImg}
                            /> */}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Hero