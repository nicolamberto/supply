import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useProductContext } from '../../../context/products';

import bgnavbar from '../../../assets/backgroundImages/bgnavbarmobile.png'
import inicio from '../../../assets/iconos/inicio.png'
import catalogo from '../../../assets/iconos/catalogo.png'
import presupuesto from '../../../assets/iconos/presupuesto.png'

export default function NavbarMobile({ openMenu }) {

    const { cart } = useProductContext()

    return (

        <AnimatePresence>
            {openMenu && (
                <motion.div
                    key="menu"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="m-2 z-30 bg-white/80 backdrop-blur-md flex flex-col justify-center items-center absolute right-0 top-0 rounded-[20px] sm:hidden w-[80%]"
                >
                    <div className="w-full h-full flex justify-center items-center relative">
                        <motion.div
                            className="flex flex-col font-semibold text-[20px] text-[#033908]/80 uppercase w-[80%] h-[80%] gap-5 py-20 z-20"
                        >

                            <div className="flex flex-row items-center justify-start gap-5">
                                <img src={inicio} alt="inicio" className='w-[25px] inline-block' />
                                <Link to="/">Inicio</Link>
                            </div>

                            <div className="h-[1px] w-full bg-[#033908]/30" />

                            <div className="flex flex-row items-center justify-start gap-5">
                                <img src={catalogo} alt="catalogo" className='w-[25px] inline-block' />
                                <Link to="/productos">CATÁLOGO</Link>
                            </div>


                            <div className="h-[1px] w-full bg-[#033908]/30" />


                            <div className="relative pr-9 md:pr-0">
                                <div className="flex flex-row items-center justify-start gap-5 relative">
                                    <img src={presupuesto} alt="presupuesto" className='w-[25px] inline-block' />
                                    <Link to="/presupuesto">PRESUPUESTO</Link>
                                    <AnimatePresence>
                                        {cart.length > 0 && (
                                            <motion.span
                                                key={cart.length}
                                                initial={{ scale: 0, opacity: 0 }}
                                                animate={{ scale: 1, opacity: 1 }}
                                                exit={{ scale: 0, opacity: 0 }}
                                                transition={{ duration: 0.2 }}
                                                className="absolute top-0 left-6 px-[5px] text-[10px] rounded-full text-center text-white font-bold bg-blue-400"
                                            >
                                                {cart.length}
                                            </motion.span>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>


                        </motion.div>
                        <div className='absolute inset-0 z-0 opacity-45 flex justify-center items-center'>
                            <img src={bgnavbar} alt="bgnavbar" className='object-cover w-full h-full' />
                        </div>
                    </div>


                </motion.div>

            )}
        </AnimatePresence>

    )
}



