import { CustomButtonProps } from '@/types'
import React from 'react'

const CustomButton = ({ title }: CustomButtonProps) => {
    return (
        <button className='bg-blue-600 px-6 py-3 text-white rounded-full'>{title}</button>
    )
}

export default CustomButton