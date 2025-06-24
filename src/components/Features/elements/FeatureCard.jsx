
import { motion } from 'framer-motion';
import { useState } from 'react'

export default function ServiceCard({ feature, index }) {

    const [isHovering, setIsHovering] = useState(false); // Estado para controlar el hover


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
            className="group bg-white text-[#00491f] hover:bg-[#00491f] hover:text-white transition rounded-b-[70px] flex justify-center items-center shadow-sm/20 hover:inset-shadow-sm/20 mx-0 lg:mx-0 ">

            <div className="flex flex-col justify-center items-start gap-3  mx-10 mt-5 mb-10">

                {/* icono */}
                <div className="text-[35px] relative w-[35px] h-[35px]">
                    {/* Icono verde (visible cuando NO hay hover) */}
                    <img
                        src={feature.icongreen}
                        alt="icongreen"
                        className="absolute inset-0 w-full h-full object-contain group-hover:opacity-0 transition-opacity duration-300"
                    />
                    {/* Icono blanco (visible en hover) */}
                    <img
                        src={feature.iconwhite}
                        alt="iconwhite"
                        className="absolute inset-0 w-full h-full object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                </div>


                {/* titulo */}
                <div className="text-[22px] xl:text-[25px] leading-tight 2xl:w-[75%] font-MontBoldItalic">
                    <p>{feature.title}</p>
                </div>

                {/* texto */}
                <div className="text-[#00491f]/70 group-hover:text-white/70 transition leading-tight text-[16px] xl:text-[21px]">
                    <p>{feature.text}</p>
                </div>

            </div>

        </motion.div>
    )
}
