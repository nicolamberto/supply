import React from 'react'
import { useProductContext } from '../../../context/products'
import { FaMinus, FaPlus } from 'react-icons/fa6'
import { FaTrash } from "react-icons/fa";
import { motion } from 'framer-motion';

export default function CartCheckout() {
  const { cart, removeFromCart, addToCart } = useProductContext()

  return (
    <div className='w-full h-full'>
      <table className="table-auto w-full border-separate border-spacing-y-4">
        <thead>
          <tr className='text-[19px] lg:text-[22px] text-[#00491f]'>
            <th className='text-start px-4 py-2'>Producto</th>
            <th className='text-start px-4 py-2'>Cantidad</th>
            <th className='text-start px-4 py-2'></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.codigo} className="bg-white shadow rounded">
              <td className='px-4 py-2'>
                <div className="flex items-center gap-3">
                  <img src={item.image} alt={item.nombre} className='w-[80px]' />
                  <p className=' font-semibold text-[14px] sm:text-[17px]'>{item.nombre}</p>
                </div>
              </td>
              <td className='px-4 py-2'>
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
              </td>
              <td className='px-4 py-2'>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ delay: 0 }}
                  className=' cursor-pointer'
                >
                  <FaTrash className="text-[25px] text-[#00491f]" />

                </motion.button>              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
