import React, { useState } from 'react'
import { useProductContext } from '../../../context/products';
import { IoIosArrowUp } from "react-icons/io";
import { motion, AnimatePresence, delay } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function FilterBarMobile() {

    const [openFilters, setOpenFilters] = useState(false)
    const { categories, category, setCategory } = useProductContext();
    const navigate = useNavigate();

    const handleCategoryClick = (slug) => {
        setCategory(slug);
        navigate(`/${slug}`);
    };


    return (
        <div className="block lg:hidden">
            <div className="px-3 py-2 rounded-[20px] bg-white/95">

                <div
                    onClick={() => setOpenFilters(!openFilters)}
                    className="flex flex-row justify-around items-center text-[#00491f]"
                >
                    <h2 className="text-[25px] font-bold mb-0 text-start w-full">CATEGORÍAS</h2>
                    <motion.div
                        animate={{ rotate: openFilters ? 0 : 180 }}
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
                                className="flex flex-col items-start justify-center w-full text-[17px] mt-4">
                                <button onClick={
                                    () => {
                                        setCategory('');
                                        navigate('/productos'); // Navegar a la ruta de productos
                                    }

                                }
                                    className={`mb-2 block cursor-pointer w-full text-start py-1 ${category === '' ? 'font-bold text-[#00491f] text-nowrap transition' : ''}`}>Todos los Productos</button>
                                {
                                    categories.map((item) => {
                                        // Convertir a minúsculas y luego capitalizar cada palabra
                                        const nameFormatted = item.name
                                            .toLowerCase()
                                            .replace(/\b\w/g, (c) => c.toUpperCase());

                                        return (
                                            <button
                                                key={item.slug}
                                                onClick={() => handleCategoryClick(item.slug)}
                                                className={`mb-2 block cursor-pointer w-full text-start border-t-[1px] border-black/10 py-1 last:border-b ${category === item.slug ? 'font-bold text-[#00491f] text-nowrap transition' : ''
                                                    }`}
                                            >
                                                {nameFormatted}
                                            </button>
                                        );
                                    })
                                }
                            </motion.div>

                        )}
                </AnimatePresence>


            </div>
        </div>
    )
}
