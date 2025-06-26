import React from 'react'
import ServiceCard from './elements/FeatureCard'
import OverlappingTitle from '../../resources/overlappingTitle'
import { motion } from 'framer-motion'
import { features } from '../../data'
export default function Features() {

    return (
        <div className=' z-0  w-full flex  justify-center items-center py-20 '>
            <div className="w-[88%] lg:w-[80%] 2xl:w-[70%] flex flex-col justify-center items-center gap-10">
                <OverlappingTitle firstTitle={'¿POR QUÉ'} secondTitle={'ELEGIRNOS?'} colorFirstTitle={'text-[#adc9b8]'} colorSecondTitle={'text-[#00491f]'} />
                <motion.div
                    variants={{
                        hidden: {},
                        show: {
                            transition: {
                                staggerChildren: 0.2
                            }
                        }
                    }}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="flex flex-row gap-5 w-full flex-wrap lg:flex-nowrap">
                    {
                        features.map((item, index) => (
                            <ServiceCard key={index} feature={item} />
                        ))
                    }
                </motion.div>
            </div>

        </div>
    )
}
