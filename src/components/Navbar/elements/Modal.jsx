import React, { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useProductContext } from '../../../context/products'


const MotionLink = motion(Link)

export default function Modal({ setIsHover, setMenuOpen }) {

    const {setCategory, categories} = useProductContext()

    const handleClickProductButton = (category) => {
        setCategory(category)
        setIsHover(false)
        setMenuOpen(false)
    }
    

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className='h-fit max-h-[80vh] w-full bg-white md:absolute top-20 left-0 z-0 md:px-20 py-10 flex justify-center items-center text-black/80 rounded-lg shadow-lg overflow-y-scroll'
        >
            <div className="grid grid-cols-1 xl:grid-cols-3 divide-y divide-[#00491f]/20 gap-2 md:gap-5 max-w-[2000px] w-[65%] no-underline">
                {categories.map((item, index) => (
                    <MotionLink
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className='w-full py-0 flex justify-between md:justify-center rounded-[10px] items-center gap-3 pl-5 z-10 overflow-hidden hover:bg-green-700 hover:text-white duration-100 text-[14px] md:text-[13px] bg-[#efefef]'
                        onClick={() => {handleClickProductButton(item.slug)} }
                        key={item.id}
                        to={`/productos`}
                    >

                        <p className='text-start font-semibold text-nowrap uppercase w-full text-[17px]' key={item.id}>
                            {item.name}
                        </p>
                        <div className=" w-[20px] md:w-[80px] h-[50px] overflow-hidden">
                            <img src={item.img} alt="img" className=' w-full h-full object-cover' />
                        </div>
                        
                    </MotionLink>


                ))}
            </div>


        </motion.div>
    )
}
