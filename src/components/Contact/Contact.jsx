import React from 'react'
import banner from '../../assets/banners/bannerproducts.png'
import CartCheckout from './elements/CartCheckout'
import Form from './elements/Form'


export default function Contact() {
  return (
    <div className=' w-full flex flex-col justify-center items-center'>

      {/* Banner */}
      <div className="w-full relative overflow-hidden h-[350px] p-2 ">
        <img src={banner} alt="banner" className='w-full h-full rounded-[20px] object-cover' />
        <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl font-bold text-center'>CONTACTANOS</p>
      </div>


      <div className="flex flex-row gap-10 justify-center items-center w-[95%] lg:w-[80%] 2xl:w-[80%]">

        {/* carrito checkout */}
        <CartCheckout />

        {/* form */}
        <Form />

      </div>


    </div>
  )
}

