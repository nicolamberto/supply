import React from 'react'
import { useProductContext } from '../../../context/products';
import { motion } from 'framer-motion';


export default function FilterBar() {

    const { categories, category, setCategory } = useProductContext();


    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="hidden lg:block lg:col-span-1"
        >
            <div className="p-4 rounded-[20px] bg-white/95">
                <h2 className="text-[30px] text-[#00491f] font-bold mb-4 font-miFuente">CATEGORÍAS</h2>
                <div className="flex flex-col items-start justify-center w-full text-[17px]">
                    <button onClick={() => { setCategory('') }}
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
                                    onClick={() => setCategory(item.slug)}
                                    className={`mb-2 block cursor-pointer w-full text-start border-t-[1px] border-black/10 py-1 last:border-b ${category === item.slug ? 'font-bold text-[#00491f] text-nowrap transition' : ''
                                        }`}
                                >
                                    {nameFormatted}
                                </button>
                            );
                        })
                    }
                </div>
            </div>
        </motion.div>
    )
}
