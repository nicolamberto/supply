import React, { useEffect, useState, useRef } from 'react'
import { useMotionValue, animate, useInView } from 'framer-motion'

function Divider() {
    return (
        <div className="bg-[#00491f] w-22 h-[2px] sm:w-[3px] sm:h-12 2xl:h-[30px] mx-2 sm:mx-6 opacity-60 xl:mb-5"></div>
    )
}

function AnimatedNumber({ to }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true }) // solo una vez
    const motionValue = useMotionValue(0)
    const [currentValue, setCurrentValue] = useState(0)

    useEffect(() => {
        if (isInView) {
            const controls = animate(motionValue, to, {
                duration: 1.5,
                onUpdate(value) {
                    setCurrentValue(Math.floor(value))
                },
            })

            return controls.stop
        }
    }, [isInView, motionValue, to])

    return <span ref={ref}>{currentValue}</span>
}

export default function Stats() {
    return (
        <div className='flex flex-col sm:flex-row justify-between items-center text-[#00491f] w-full'>

            <div className="flex flex-col justify-center items-center max-w-[150px] pb-4 sm:pb-0">
                <p className='text-[70px] md:text-[55px] 2xl:text-[80px] font-extrabold pr-3 font-MontExtraBoldItalic'>
                    +<AnimatedNumber to={15} />
                </p>
                <p className='text-center text-[20px] sm:text-[16px] lg:text-[22px] xl:text-[20px] text-nowrap'>Años de trayectoria</p>
            </div>

            <Divider />

            <div className="flex flex-col justify-center items-center pb-4 sm:pb-0">
                <p className='text-[70px] md:text-[55px] 2xl:text-[80px] font-extrabold pr-3 font-MontExtraBoldItalic'>
                    +<AnimatedNumber to={5000} />
                </p>
                <p className='text-center text-[20px] sm:text-[16px] lg:text-[22px] xl:text-[20px] text-nowrap'>Clientes satisfechos</p>
            </div>

            <Divider />

            <div className="flex flex-col justify-center items-center">
                <p className='text-[70px] md:text-[55px] 2xl:text-[80px] font-extrabold pr-3 font-MontExtraBoldItalic'>
                    +<AnimatedNumber to={250} />
                </p>
                <p className='text-center text-[20px] sm:text-[16px] lg:text-[22px] xl:text-[20px] text-nowrap'>Productos disponibles</p>
            </div>

        </div>
    )
}
