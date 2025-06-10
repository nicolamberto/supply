
import { motion } from 'framer-motion';
import React, { useState } from 'react'
import { DiApple } from "react-icons/di";

import { DiHtml53dEffects } from "react-icons/di";


export default function ServiceCard({ feature, index }) {

    const [isHovering, setIsHovering] = useState(false); // Estado para controlar el hover
    console.log(isHovering);


    return (
        <motion.div
            whileHover={() => setIsHovering(true)}
            onHoverEnd={() => setIsHovering(false)}
            key={index}
            variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.4 }}
            className="group bg-white text-[#00491f] hover:bg-[#00491f] hover:text-white transition rounded-b-[70px] flex justify-center items-center shadow-sm/20 hover:inset-shadow-sm/20 ">

            <div className="flex flex-col justify-center items-start gap-3  mx-10 mt-5 mb-10">

                {/* icono */}
                <div className="text-[35px] relative w-[35px] h-[35px]">
                    {/* Icono verde (visible cuando NO hay hover) */}
                    <img
                        src={feature.icongreen}
                        alt=""
                        className="absolute inset-0 w-full h-full object-contain group-hover:opacity-0 transition-opacity duration-300"
                    />
                    {/* Icono blanco (visible en hover) */}
                    <img
                        src={feature.iconwhite}
                        alt=""
                        className="absolute inset-0 w-full h-full object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                </div>


                {/* titulo */}
                <div className="text-[25px] xl:text-[30px] font-bold leading-tight 2xl:w-[75%]">
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
