
import { motion } from 'framer-motion';
import React, { useState } from 'react'
import { DiApple } from "react-icons/di";

import { DiHtml53dEffects } from "react-icons/di";


export default function ServiceCard({ feature, index }) {

    const [isHovering, setIsHovering] = useState(false); // Estado para controlar el hover


    return (
        <motion.div
            key={index}
            variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.4 }}
            className="group bg-white text-[#00491f] hover:bg-[#00491f] hover:text-white transition rounded-b-[70px] flex justify-center items-center shadow-sm/20 hover:inset-shadow-sm/20 ">

            <div className="flex flex-col justify-center items-start gap-3  mx-10 mt-5 mb-10">

                {/* icono */}
                <div className="text-[35px]">
                    <feature.icon />
                </div>

                {/* titulo */}
                <div className="text-[25px] xl:text-[30px] font-bold leading-tight">
                    <p>{feature.title}</p>
                </div>

                {/* texto */}
                <div className="text-[#00491f]/70 group-hover:text-white/70 transition leading-tight text-[18px] xl:text-[21px]">
                    <p>{feature.text}</p>
                </div>

            </div>

        </motion.div>
    )
}
