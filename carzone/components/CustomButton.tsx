import { CustomButtonProps } from '@/types'
import React from 'react'

const CustomButton = ({ title, containerStyles }: CustomButtonProps) => {
    return (
        <button className={`${containerStyles} bg-blue-600 px-6 py-3 text-white rounded-full max-sm:text-[12px]`}>{title}</button>
    )
}

export default CustomButton