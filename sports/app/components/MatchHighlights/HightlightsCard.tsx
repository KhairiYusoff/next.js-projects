import Image from 'next/image';
import React from 'react'
import { FaPlay } from 'react-icons/fa';

interface Props {
    image: string;
    title: string;
    date: string
}

const HightlightsCard = ({ image, title, date }: Props) => {
    return (
        <div className='bg-[#1e1c1c] p-4'>
            <div className='h-[230px] relative z-[10]'>
                <Image
                    src={image}
                    alt={title}
                    width={200}
                    height={200}
                    className='object-cover h-[100%] w-[100%]'
                />
                <div className='w-[4rem] h-[4rem] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex items-center justify-center flex-col bg-black hover:bg-red-600 rounded-full transition-all duration-300 cursor-pointer'>
                    <FaPlay className='text-white' />
                </div>
                <div className='absolute px-4 py-1 bg-red-600 bottom-0 left-0 flex items-center space-x-2'>
                    <FaPlay className='text-white' />
                    <p className='text-[15px] text-white'>6:00pm</p>
                </div>
            </div>
            <h1 className='text-[18px] text-white mt-[1.5rem] pb-[1.5rem] border-b-2 border-gray-500 border-opacity-30 font-semibold'>{title}</h1>
            <p className='text-white  mt-[0.5rem]'>{date}</p>
        </div>
    )
}

export default HightlightsCard