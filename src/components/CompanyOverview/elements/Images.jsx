import React from 'react'
import about1 from '../../../assets/about/about1.png'
import about2 from '../../../assets/about/about2.png'
import about3 from '../../../assets/about/about3.png'
import { motion } from 'framer-motion'

export default function Images() {
    return (
        <div className="hidden md:block md:w-[50%] lg:w-[40%] relative">
            <motion.img whileHover={{ rotate: 2, scale: 1.02 }} src={about1} alt="img1" className='absolute md:top-10 lg:top-0 rounded-[20px] w-[240px] lg:w-[320px] xl:w-[380px] left-1/2 transform -translate-x-1/2 z-0' />
            <motion.img whileHover={{ rotate: 2, scale: 1.02 }} src={about2} alt="img1" className='absolute md:top-1/2 left-1/2 lg:top-36 rounded-[20px] w-[280px] lg:w-[350px] xl:w-[400px] transform -translate-y-1/2 lg:-translate-y-0 -translate-x-32 lg:-translate-x-10 rotate-15 z-10' />
            <motion.img whileHover={{ rotate: 2, scale: 1.02 }} src={about3} alt="img1" className='absolute md:bottom-10 lg:bottom-0 rounded-[20px] w-[240px] lg:w-[320px] xl:w-[380px] left-1/2 transform -translate-x-1/2 -rotate-5' />
        </div>
        )
}


