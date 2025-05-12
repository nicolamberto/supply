import React from 'react'
import { Link } from 'react-router-dom'
import Modal from './Modal'
import { AnimatePresence } from 'framer-motion'
import ModalCart from './CartModal'



export default function NavbarDesktop({ isHover, setIsHover, isScrolled, isHoverCart, setIsHoverCart }) {
    return (
        <div
            className={`hidden md:flex flex-row flex-wrap gap-5 lg:gap-10 xl:gap-16 font-semibold uppercase transitiontext-[15px] ${isScrolled ? 'text-green-700' : 'text-white'}`}
        >

            <Link to="/">Inicio</Link>

            {/* PRODUCTOS Y MODAL */}
            <div onMouseEnter={() => { setIsHover(true) }} onMouseLeave={() => { setIsHover(false) }}>
                <Link onClick={() => { setIsHover(false) }} to="/productos">Productos</Link>
                <AnimatePresence>
                    {
                        isHover && (
                            <Modal setIsHover={setIsHover} />
                        )
                    }
                </AnimatePresence>
                <div className="absolute w-[300px] left-1/2 right-1/2 h-10 z-0 bg-transparent" />
            </div>

            {/* CARRITO Y MODALCART */}
            <div className='relative' onMouseEnter={() => { setIsHoverCart(true) }} onMouseLeave={() => { setIsHoverCart(false) }}>
                <Link onClick={() => { setIsHoverCart(false) }} to="/presupuesto">PRESUPUESTO</Link>
                <AnimatePresence>
                    {
                        isHoverCart && (
                            <ModalCart setIsHoverCart={setIsHoverCart} />
                        )
                    }
                </AnimatePresence>
                <div className="absolute left-1/2 -translate-x-1/2 w-[200px] h-10 z-0 bg-transparent" />
            </div>


            <Link to="/servicios">Servicios</Link>

        </div>
    )
}
