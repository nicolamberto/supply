import React, { useState } from 'react'
import { useProductContext } from '../../../context/products';
import { IoIosArrowUp } from "react-icons/io";
import { motion, AnimatePresence, delay } from 'framer-motion';

export default function FilterBarMobile() {

    const [openFilters, setOpenFilters] = useState(false)
    const { categories, category, setCategory } = useProductContext();


    return (
        <div className="block lg:hidden">
            <div className="p-4 rounded-[20px] bg-white/95">

                <div
                    onClick={() => setOpenFilters(!openFilters)}
                    className="flex flex-row justify-around items-center text-[#00491f]"
                >
                    <h2 className="text-[30px]  font-bold mb-0 text-center">CATEGORÍAS</h2>
                    <motion.div
                        animate={{ rotate: openFilters ? 180 : 0 }}
                    >
                        <IoIosArrowUp className='text-3xl' />
                    </motion.div>
                </div>

                <AnimatePresence>
                    {
                        openFilters && (

                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto', transition: { opacity: { duration: 0.2, delay: 0.2 }, height: { duration: 0.2, } } }} // entrada lenta
                                exit={{ opacity: 0, height: 0, transition: { opacity: { duration: 0.2 }, height: { duration: 0.2, delay: 0.3 } } }} // opacidad rápida
                                onClick={() => setOpenFilters(!openFilters)}
                                className="flex flex-col items-start justify-center w-full text-[17px]">
                                <button onClick={() => { setCategory('') }}
                                    className={`mb-2 block cursor-pointer border-t w-full text-start py-1 ${category === '' ? 'font-bold text-[#00491f] text-nowrap transition' : ''}`}>Todos los Productos</button>
                                {
                                    categories.map((item) => (
                                        <button
                                            key={item.id}
                                            onClick={() => { setCategory(item.slug) }}
                                            className={`mb-2 block cursor-pointer w-full text-start border-t-[1px] py-1 last:border-b ${category === item.slug ? 'font-bold text-[#00491f] text-nowrap transition' : ''} `}>{item.name}</button>

                                    ))
                                }
                            </motion.div>

                        )}
                </AnimatePresence>


            </div>
        </div>
    )
}
