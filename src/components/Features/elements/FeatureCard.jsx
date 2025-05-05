
import { motion } from 'framer-motion';
import React, { useState } from 'react'
import { DiApple } from "react-icons/di";

import { DiHtml53dEffects } from "react-icons/di";


export default function ServiceCard() {

    const [isHovering, setIsHovering] = useState(false); // Estado para controlar el hover


    return (
        <div className="bg-[#00491f] text-white rounded-b-[120px] flex justify-center items-center ">

            <div className="flex flex-col justify-center items-start gap-5 px-10 pb-14 pt-6">

                {/* icono */}
                <div className="text-[50px]">
                    <DiApple />
                </div>

                {/* titulo */}
                <div className="text-[25px] font-bold">
                    <p>Calidad Industrial Garantizada</p>
                </div>

                {/* texto */}
                <div className="text-white/70">
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
