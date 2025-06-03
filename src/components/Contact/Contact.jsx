import React from 'react'
import banner from '../../assets/banners/bannerproducts.png'
import CartCheckout from './elements/CartCheckout'
import Form from './elements/Form'
import Button from '../Header/elements/Button'


export default function Contact() {
  return (
    <div className=' w-full flex flex-col justify-center items-center'>

      {/* Banner */}
      <div className="w-full relative overflow-hidden h-[350px] p-2 ">
        <img src={banner} alt="banner" className='w-full h-full rounded-[20px] object-cover' />
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-10 sm:-translate-y-5 text-white  text-center flex flex-col w-full sm:gap-5'>
          <p className='text-3xl font-bold'>CONTACTANOS</p>
          <Button text={'Volver al catalogo'} url={'/productos'} />
        </div>
      </div>


      <div className="flex flex-col lg:flex-row lg:gap-10 justify-center items-start w-[95%] lg:w-[80%] 2xl:w-[80%]">

        {/* carrito checkout */}
        <CartCheckout />

        {/* form */}
        <Form />

      </div>


    </div>
  )
}

