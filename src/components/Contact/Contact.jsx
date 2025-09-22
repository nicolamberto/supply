import banner from '../../assets/banners/bannerpresupuestodesktop.webp'
import bannermobile from '../../assets/banners/bannerpresupuestomobile.webp'
import { useProductContext } from '../../context/products'
import Button from '../Header/elements/Button'
import CartCheckout from './elements/CartCheckout'
import Form from './elements/Form'
import { motion } from 'framer-motion'

export default function Contact() {

  const { cart } = useProductContext()

  return (
    <div className=' w-full flex flex-col justify-center items-center'>

      {/* Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        className="w-full relative overflow-hidden sm:h-[300px] p-2 "
      >
        <img src={banner} alt="banner" className='w-full h-full rounded-[20px] object-cover hidden sm:block' />
        <img src={bannermobile} alt="banner" className='w-full h-full rounded-[20px] object-cover block sm:hidden' />
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-5 sm:-translate-y-5 text-white text-center flex flex-col w-full sm:gap-0'>
          <p className='text-[25px] sm:text-[30px] md:text-[40px] font-bold font-banner hidden sm:block'>CONTACTANOS</p>

          {cart.length > 0 && (
            <div className="">
              <Button text={'VER CATÁLOGO'} url={'/productos'} />
            </div>
          )}

        </div>
      </motion.div>


      <div className="flex flex-col lg:flex-row lg:gap-10 justify-center items-start w-[95%] lg:w-[80%] 2xl:w-[80%]">

        {/* carrito checkout */}
        <CartCheckout />

        {/* form */}
        <Form />

      </div>


    </div>
  )
}

