import React from 'react'
import { useProductContext } from '../../../context/products'
import { FaMinus, FaPlus } from 'react-icons/fa6'
import { FaTrash } from "react-icons/fa";
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../../Header/elements/Button';

export default function CartCheckout() {

  const { cart, removeFromCart, addToCart, removeFullProductFromCart } = useProductContext()

  const tbodyVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const rowVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <motion.div
      layout
      className='w-full flex justify-center items-center'>
      {
        cart.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full h-full flex flex-col justify-center items-center pt-10 lg:pt-40"
          >
            <p className='text-[#00491f] font-bold font-banner sm:text-[25px] md:text-[25px] lg:text-[25px] xl:text-[30px] text-center'>NO HAY PRODUCTOS EN EL CARRITO</p>
            <Button text={'Volver al catalogo'} url={'/productos'} />

          </motion.div>

        ) : (
          <table className="table-auto w-full border-separate border-spacing-y-4">
            <thead>
              <tr className='text-[19px] lg:text-[22px] text-[#00491f] font-MontBoldItalic'>
                <th className='text-start px-4 py-2'>Producto</th>
                <th className='text-start px-4 py-2'>Cantidad</th>
                <th className='text-start px-4 py-2'></th>
              </tr>
            </thead>
            <motion.tbody
              initial="hidden"
              animate="show"
              variants={tbodyVariants}
              className=''
            >
              <AnimatePresence>
                {cart.map((item) => (
                  <motion.tr
                    key={item.codigo}
                    variants={rowVariants}
                    className="bg-white shadow rounded"
                  >
                    <td className='px-4 py-2'>
                      <div className="flex items-center gap-3 h-[80px] overflow-hidden">
                        <img src={item.image} alt={item.nombre} className='w-[70px] sm:w-[80px]' />
                        <p className='font-semibold text-[14px] sm:text-[17px]'>{item.nombre}</p>
                      </div>
                    </td>
                    <td className='px-4 py-2'>
                      <div className="border rounded-full flex flex-row gap-6 justify-around items-center w-[100px] sm:w-[150px] py-1 px-2">
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
                          className='cursor-pointer'
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <FaPlus onClick={() => { addToCart(item) }} className='text-[18px]' />
                        </motion.button>
                      </div>
                    </td>
                    <td className='px-4 py-2'>
                      <motion.button
                        onClick={() => { removeFullProductFromCart(item) }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className='cursor-pointer'
                      >
                        <FaTrash className="text-[20px] text-[#00491f]" />
                      </motion.button>
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>

            </motion.tbody>
          </table>
        )
      }

    </motion.div>
  )
}
