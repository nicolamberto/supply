import React from 'react'
import { Link } from 'react-router-dom'
import Modal from './Modal'
import { AnimatePresence, motion } from 'framer-motion'
import ModalCart from './CartModal'
import { useProductContext } from '../../../context/products'



export default function NavbarDesktop({ isHover, setIsHover, isScrolled, isHoverCart, setIsHoverCart }) {

    const { cart } = useProductContext()

    return (
        <div
            className={`flex flex-row flex-wrap gap-10 lg:gap-10 xl:gap-16 font-semibold uppercase transitiontext-[15px] ${isScrolled ? 'text-green-700' : 'text-white'}`}
        >

            <Link className='hidden md:block' to="/">Inicio</Link>

            {/* PRODUCTOS Y MODAL */}
            <div
                className='hidden md:block '
                onMouseEnter={() => { setIsHover(true) }}
                onMouseLeave={() => { setIsHover(false) }}>
                <Link onClick={() => { setIsHover(false) }} to="/productos" className='relative'>
                    <p>Productos</p>
                    <div className="absolute w-[200px] left-1/2 right-1/2 -translate-x-25 h-10 z-0 bg-transparent" />
                </Link>
                <AnimatePresence>
                    {
                        isHover && (
                            <Modal setIsHover={setIsHover} />
                        )
                    }
                </AnimatePresence>
            </div>

            {/* CARRITO Y MODALCART */}
            <div className='relative pr-9 md:pr-0' onMouseEnter={() => { setIsHoverCart(true) }} onMouseLeave={() => { setIsHoverCart(false) }}>
                <Link onClick={() => { setIsHoverCart(false) }} to="/presupuesto">PRESUPUESTO</Link>

                <AnimatePresence>
                    {cart.length > 0 && (
                        <motion.span
                            key={cart.length} // clave para que detecte el cambio
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className='absolute ml-1 px-[5px] text-[10px] rounded-full text-center text-white font-bold bg-blue-400'>
                            {cart.length}
                        </motion.span>
                    )}
                </AnimatePresence>


                <AnimatePresence>
                    {
                        isHoverCart && (
                            <ModalCart setIsHoverCart={setIsHoverCart} />
                        )
                    }
                </AnimatePresence>
                <div className="absolute left-1/2 -translate-x-1/2 w-[200px] h-10 z-0 bg-transparent" />
            </div>

        </div>
    )
}
