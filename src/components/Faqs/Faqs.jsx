
import { faqs } from '../../data';
import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react'
import { IoMdArrowDropup } from "react-icons/io";
import OverlappingTitle from '../../resources/overlappingTitle';


export default function Faqs() {

    const [activeQuestion, setActiveQuestion] = useState(null);



    return (
        <div className='w-full py-10 sm:py-20 flex justify-center items-center px-4 md:px-0'>

            {/* contenedor que contiene al titulo y el contenedor de faqs */}
            <div className="-[95%] lg:w-[80%] 2xl:w-[70%] flex flex-col gap-10 justify-center items-center">

                <OverlappingTitle firstTitle={'PREGUNTAS'} secondTitle={'FRECUENTES'} colorFirstTitle={'text-[#00491f]'} colorSecondTitle={'text-[#adc9b8]'}/>
                <div className="flex flex-col justify-center items-center w-full ">
                    {
                        faqs.map((item) => (
                            <div
                                onClick={() => setActiveQuestion(activeQuestion === item.id ? null : item.id)}
                                key={item.id}
                                className="w-full flex flex-col justify-center items-start bg-white p-4 m-2 rounded-lg shadow-md cursor-pointer text-[#00491f]">
                                <div className="w-full flex justify-between items-center">
                                    <p className='text-[20px] font-semibold pb-4'>{item.question}</p>
                                    <motion.div 
                                    animate={{ rotate: activeQuestion === item.id ? 180 : 0 }}
                                    className="relative">
                                            <IoMdArrowDropup className='text-[25px]' />
                                    </motion.div>
                                </div>

                                <AnimatePresence>
                                    {
                                        activeQuestion === item.id && (
                                            <motion.div 
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' , transition: { opacity: { duration: 0.1, delay: 0.1 }, height: { duration: 0.2, } } }}
                                            exit={{ opacity: 0, height: 0, transition: { opacity: { duration: 0.1 }, height: { duration: 0.2, delay: 0 } } }} // opacidad rápida
                                            className='text-[#00491f]/80 w-full'>
                                                <p>
                                                    {item.answer}
                                                </p>
                                            </motion.div>
                                        )
                                    }
                                </AnimatePresence>

                            </div>
                        ))
                    }
                </div>

            </div>

        </div>
    )
}