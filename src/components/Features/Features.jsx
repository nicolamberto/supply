import React from 'react'
import ServiceCard from './elements/FeatureCard'
import OverlappingTitle from '../../resources/overlappingTitle'

export default function Features() {
    return (
        <div className=' z-0  w-full flex  justify-center items-center py-20 '>
            <div className="w-[95%] lg:w-[80%] 2xl:w-[70%] flex flex-col justify-center items-center gap-10">
                <OverlappingTitle firstTitle={'¿POR QUE'} secondTitle={'ELEGIRNOS?'} colorFirstTitle={'text-[#adc9b8]'} colorSecondTitle={'text-[#00491f]'} />
                <div className="flex flex-row gap-5 w-full flex-wrap lg:flex-nowrap">
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                </div>
            </div>

        </div>
    )
}
