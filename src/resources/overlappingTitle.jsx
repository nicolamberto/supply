import React from 'react'
import { motion } from 'framer-motion'

export default function OverlappingTitle({ firstTitle, secondTitle, colorFirstTitle, colorSecondTitle }) {
    return (
        <div className="w-[100%] text-start sm:text-start mx-0 ">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className={`text-[35px] relative ${colorFirstTitle}`}>
                <p className='font-banner'>{firstTitle}</p>
                <p className={`text-[40px] font-miFuente sm:text-[45px] absolute top-5 left-0 transform sm:left-0 sm:translate-x-0 text-nowrap ${colorSecondTitle}`}>{secondTitle}</p>
            </motion.div>
        </div>
    )
}
