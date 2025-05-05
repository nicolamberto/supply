import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { IoMdArrowDown } from 'react-icons/io'

export default function Button() {
    const [isHovering, setIsHovering] = useState(false);

    return (
        <div className=''>
            <motion.button
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}

                transition={{
                    delay: isHovering ? 0 : 0.1,
                    ease: "easeIn",
                }}
                className=" overflow-clip z-50 relative bg-blue-500 rounded-[20px] text-white m-10 px-7 py-2 text-[20px] cursor-pointer">
                {/* Fondo animado */}
                <motion.div
                    animate={{
                        scale: isHovering ? 100 : 0,
                    }}
                    transition={{
                        duration: isHovering ? 0.3 : 0.1,
                        ease: "easeIn",
                    }}
                    className="h-2 w-2 bg-blue-800 absolute rounded-full z-0"
                    style={{
                        top: '50%',
                        left: '-10%',
                        transform: 'translate(-50%, -50%)',
                        transformOrigin: 'center',
                    }}
                />
                {/* Texto del botón */}
                <p className="relative z-10 text-[15px] sm:text-[20px]">Conoce nuestros productos</p>

            </motion.button>
        </div>
    )
}
