import React from 'react'
import { Link } from 'react-router-dom'
import Modal from './Modal'
import { AnimatePresence } from 'framer-motion'



export default function NavbarDesktop({isHover, setIsHover, isScrolled, orders}) {
    return (
        <div
            className={`hidden md:flex flex-row flex-wrap gap-5 lg:gap-10 xl:gap-16 font-semibold uppercase transitiontext-[15px] ${isScrolled ? 'text-green-700' : 'text-white'}`}
        >

            <Link to="/">Inicio</Link>
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

            <Link to="/presupuesto">
                Presupuestos/Pedidos{" "}
                {orders === 0 ? (
                    ""
                ) : (
                    <span className={style.orders_number}>{orders}</span>
                )}
            </Link>
            <Link to="/servicios">Servicios</Link>

        </div>
    )
}
