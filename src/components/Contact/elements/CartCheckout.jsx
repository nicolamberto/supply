import React from 'react'
import { useProductContext } from '../../../context/products'
import { FaMinus, FaPlus } from 'react-icons/fa6'

export default function CartCheckout() {
  const { cart, removeFromCart, addToCart } = useProductContext()

  return (
    <div className='w-full h-full'>
      <table className="table-auto w-full border-separate border-spacing-y-4">
        <thead>
          <tr className='text-[19px] lg:text-[22px] text-[#00491f]'>
            <th className='text-start px-4 py-2'>Producto</th>
            <th className='text-start px-4 py-2'>Cantidad</th>
            <th className='text-start px-4 py-2'>Acción</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.codigo} className="bg-white shadow rounded">
              <td className='px-4 py-2'>
                <div className="flex items-center gap-3">
                  <img src={item.image} alt={item.nombre} className='w-[50px]' />
                  <p className=' font-semibold text-[14px] sm:text-[17px]'>{item.nombre}</p>
                </div>
              </td>
              <td className='px-4 py-2'>
                <div className="border rounded-full flex items-center gap-2 sm:gap-6 w-fit px-2">
                  <FaMinus onClick={() => removeFromCart(item)} className='cursor-pointer text-[10px]' />
                  <p className="sm:text-[20px]">{item.quantity}</p>
                  <FaPlus onClick={() => addToCart(item)} className='cursor-pointer text-[10px]' />
                </div>
              </td>
              <td className='px-4 py-2'>
                <button className='py-1 px-3 border border-green-900 rounded-full cursor-pointer text-[12px] sm:text-[17px]'>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
