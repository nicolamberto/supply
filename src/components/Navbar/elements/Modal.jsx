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
            className='h-fit w-full bg-white md:absolute top-20 left-0 z-0 md:px-20 py-10 flex justify-center itecems-center text-green-700 rounded-lg shadow-lg'
        >
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-2 md:gap-5 max-w-[2000px] w-[65%] no-underline">
                {categories.map((item, index) => (
                    <MotionLink
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className='w-full border-2 rounded-full flex justify-between md:justify-center items-center gap-3 px-5 z-10 overflow-hidden hover:bg-green-700 hover:text-white duration-100 text-[14px] md:text-[13px]'
                        onClick={() => {handleClickProductButton(item.slug)} }
                        key={item.id}
                        to={`/productos`}
                    >

                        <p className='text-start font-semibold text-nowrap uppercase' key={item.id}>
                            {item.name}
                        </p>
                        <img src={item.img} alt="img" className='w-[20px] md:w-[50px]' />
                    </MotionLink>


                ))}
            </div>


        </motion.div>
    )
}
