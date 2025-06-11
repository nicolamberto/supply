import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useProductContext } from '../../../context/products'
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

const MotionLink = motion(Link)


export default function ModalCart({ setIsHoverCart }) {

    const { cart, addToCart, removeFromCart } = useProductContext()

    console.log(cart);


    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className='w-[500px] h-fit bg-white hidden lg:block md:absolute left-1/2 -translate-x-1/2 top-10 z-0 rounded-lg shadow-lg p-10'
        >
            {cart.length > 0 ? (
                <div className="flex flex-col justify-center items-center w-full">
                    {cart.map((item) => (
                        <div
                            key={item.id} // Asegurate de que `item.id` exista y sea único
                            className="w-full flex flex-row border-t py-3 text-[#00491f]"
                        >
                            <div className="text-nowrap flex flex-row justify-between items-center w-full">
                                <div className="">
                                    <div className="overflow-hidden">
                                        <img src={item.image} alt={item.image} className='h-[70px] w-[70px]' />
                                        <p>{item.nombre}</p>
                                    </div>
                                </div>

                                <div className="border rounded-full flex flex-row gap-6 justify-around items-center w-[150px] py-1 px-2">
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className='cursor-pointer'
                                    >
                                        <FaMinus onClick={() => { removeFromCart(item) }} className='text-[20px]' />
                                    </motion.button>
                                    <motion.p
                                        key={item.quantity} // clave para que detecte el cambio
                                        initial={{ scale: 0, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        exit={{ scale: 0, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className='absolute ml-1 px-[5px] text-[20px] rounded-full text-center font-light'>
                                        {item.quantity}
                                    </motion.p>
                                    <motion.button
                                        className=' cursor-pointer'
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <FaPlus onClick={() => { addToCart(item) }} className='text-[18px]' />

                                    </motion.button>
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    transition={{ delay: 0 }}
                                    className=' cursor-pointer'
                                >
                                    <FaTrash className="text-[25px]" />

                                </motion.button>
                            </div>

                        </div>
                    ))}
                    <div className="w-full text-end pt-5 text-[#00491f]">
                        <Link
                        to={`/presupuesto`}
                            className="px-4 py-1 border-2 rounded-[10px] hover:bg-[#00491f] hover:text-white transition cursor-pointer">
                            FINALIZAR PEDIDO
                        </Link>
                    </div>
                </div>
            ) : (
                <p className="text-center text-[#00491f]">NO HAY ARTÍCULOS EN EL CARRITO</p>
            )}



        </motion.div>
    )
}
