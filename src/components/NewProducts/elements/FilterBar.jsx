import React from 'react'
import { useProductContext } from '../../../context/products';

export default function FilterBar() {

    const { categories, category, setCategory } = useProductContext();


    return (
        <div className="hidden lg:block lg:col-span-1">
            <div className="p-4 rounded-[20px] bg-white/95">
                <h2 className="text-[30px] text-[#00491f] font-bold mb-4">CATEGORÍAS</h2>
                <div className="flex flex-col items-start justify-center w-full text-[17px]">
                    <button onClick={() => { setCategory('') }}
                        className={`mb-2 block cursor-pointer border-t w-full text-start py-1 ${category === '' ? 'font-bold text-[#00491f] text-nowrap transition' : ''}`}>Todos los Productos</button>
                    {
                        categories.map((item) => (
                            <button
                                key={item.slug}
                                onClick={() => { setCategory(item.slug) }}
                                className={`mb-2 block cursor-pointer w-full text-start border-t-[1px] py-1 last:border-b ${category === item.slug ? 'font-bold text-[#00491f] text-nowrap transition' : ''} `}>{item.name}</button>

                        ))
                    }
                </div>
            </div>
        </div>
    )
}
