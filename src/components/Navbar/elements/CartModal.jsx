import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useProductContext } from '../../../context/products'
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

function getCartImage(item) {
    if (!item) return null;
    if (item.images?.thumbnail) return item.images.thumbnail;
    if (item.images?.small) return item.images.small;
    if (typeof item.image === 'string') return item.image;
    return null;
}

export default function ModalCart() {

    const { cart, addToCart, removeFromCart, removeFullProductFromCart } = useProductContext()

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className='w-[500px] h-fit bg-white hidden lg:block md:absolute left-1/2 -translate-x-1/2 top-10 z-0 rounded-lg shadow-lg p-10 max-h-[80vh] overflow-y-scroll'
        >
            {cart.length > 0 ? (
                <div className="flex flex-col justify-center items-center w-full">
                    <AnimatePresence>
                        {cart.map((item) => {
                            const imageSrc = getCartImage(item);

                            return (
                                <motion.div
                                    layout
                                    key={item.id ?? item.codigo}
                                    initial={{ opacity: 0, scale:0.99 }}
                                    animate={{ opacity: 1, scale:1 }}
                                    exit={{ opacity: 0, scale:0.9 }}
                                    transition={{ duration: 0.2 }}
                                    className="w-full flex flex-row border-t py-1 text-[#00491f]"
                                >
                                    <div className="text-nowrap flex flex-row justify-between items-center w-full">
                                        <div className="">
                                            <div className="overflow-hidden flex flex-col-reverse justify-center items-center">
                                                {imageSrc && (
                                                    <img
                                                        src={imageSrc}
                                                        alt={item.nombre}
                                                        className='h-[70px] w-[70px] object-cover'
                                                        loading="lazy"
                                                        decoding="async"
                                                    />
                                                )}
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
                                                key={item.quantity}
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
                                            onClick={() => { removeFullProductFromCart(item) }}
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            transition={{ delay: 0 }}
                                            className=' cursor-pointer'
                                        >
                                            <FaTrash className="text-[25px]" />
                                        </motion.button>
                                    </div>

                                </motion.div>
                            );
                        })}
                    </AnimatePresence>

                    <div className="w-full text-end pt-5 text-[#00491f]">
                        <Link
                            to={`/presupuesto`}
                            className="px-4 py-1 border-2 rounded-[10px] hover:bg-[#00491f] hover:text-white transition cursor-pointer">
                            FINALIZAR PEDIDO
                        </Link>
                    </div>
                </div>
            ) : (
                <p className="text-center text-[#00491f]">NO HAY ARTICULOS EN EL CARRITO</p>
            )}

        </motion.div>
    )
}
