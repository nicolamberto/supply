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
            className='w-[380px] h-fit bg-white md:absolute left-1/2 -translate-x-1/2 top-10 z-0 rounded-lg shadow-lg p-10'
        >
            {cart.length > 0 ? (
                <div className="flex flex-col justify-center items-center">
                    {cart.map((item) => (
                        <div
                            key={item.id} // Asegurate de que `item.id` exista y sea único
                            className="w-full flex flex-row items-center justify-between border-t py-3 text-[#00491f]"
                        >
                            <div className="text-nowrap flex flex-row justify-center items-center">
                                <div className="border h-[60px] w-[60px] rounded-full overflow-hidden">
                                    <img src={item.img} alt="" />
                                </div>
                                <div className="flex flex-col justify-center items-center w-[200px]">
                                    <p>{item.name}</p>
                                    <div className="border rounded-full flex flex-row gap-6 justify-center items-center w-fit px-2">
                                        <FaMinus onClick={()=>{removeFromCart(item)}}/>
                                        <p className="text-[20px]">{item.quantity}</p>
                                        <FaPlus onClick={()=>{addToCart(item)}}/>
                                    </div>
                                </div>
                            </div>

                            <FaTrash className="text-[25px]" />
                        </div>
                    ))}
                    <div className="w-full text-end pt-5 text-[#00491f]">
                        <button className="px-4 py-1 border-2 rounded-full">FINALIZAR PEDIDO</button>
                    </div>
                </div>
            ) : (
                <p className="text-center text-[#00491f]">NO HAY ARTÍCULOS EN EL CARRITO</p>
            )}



        </motion.div>
    )
}
