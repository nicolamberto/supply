import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Modal from './Modal'



export default function NavbarMobile({ setMenuOpen, isHover, setIsHover }) {


    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);


    return (

        <motion.div
            initial={{
                opacity: 0,
            }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { delay: 0.2 } }}
            className=" fixed inset-0 z-10 bg-[#033908]/80 backdrop-blur-md flex flex-col justify-center space-y-5 items-center overflow-y-auto border-2 border-white"
        >
            <motion.div
                className="flex flex-col font-semibold text-[20px] text-white/80 uppercase w-[80%] h-[80%] border-2 border-black"
            >
                <Link to="/">Inicio</Link>
                <div onClick={() => { setIsHover(!isHover) }}>
                    <Link to="">Productos</Link>
                    <AnimatePresence>
                        {
                            isHover && (
                                <Modal setMenuOpen={setMenuOpen} setIsHover={setIsHover} />
                            )
                        }
                    </AnimatePresence>
                </div>

                <Link to="/presupuesto">
                    Presupuestos/Pedidos
                </Link>
                <Link to="/servicios">Servicios</Link>
            </motion.div>
        </motion.div>



    )
}



