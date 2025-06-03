
import { motion } from 'framer-motion';
import React, { useState } from 'react'
import { DiApple } from "react-icons/di";

import { DiHtml53dEffects } from "react-icons/di";


export default function ServiceCard() {

    const [isHovering, setIsHovering] = useState(false); // Estado para controlar el hover


    return (
        <div className="group bg-white text-[#00491f] hover:bg-[#00491f] hover:text-white transition rounded-b-[70px] flex justify-center items-center shadow-sm/20 hover:inset-shadow-sm/20 ">

            <div className="flex flex-col justify-center items-start gap-3  mx-10 mt-5 mb-10">

                {/* icono */}
                <div className="text-[35px]">
                    <DiApple />
                </div>

                {/* titulo */}
                <div className="text-[25px] font-bold leading-tight">
                    <p>Calidad Industrial Garantizada</p>
                </div>

                {/* texto */}
                <div className="text-[#00491f]/70 group-hover:text-white/70 transition leading-tight">
                    <p>Fabricamos productos
                        resistentes, duraderos y
                        funcionales, pensados para las
                        exigencias del trabajo diario y
                        los entornos industriales más
                        desafiantes.</p>
                </div>

            </div>

        </div>
    )
}
