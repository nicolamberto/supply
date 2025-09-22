import CategoriesProducts2 from './CategoriesProducts2'
import { motion } from 'framer-motion'
export default function CategoriesPage() {
    return (
        <div className='w-full flex flex-col justify-center items-center pt-10'>

            <div className="w-[88%] lg:w-[80%] 2xl:w-[80%]">
                <div className="w-[100%] text-start sm:text-start mx-0 ">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className={` relative text-[#00491f]`}>
                        <p className='font-banner text-nowrap text-[23px] sm:text-[35px]'>PRODUCTOS PLÁSTICOS</p>
                        <p className={`text-[30px] font-miFuente sm:text-[45px] absolute top-5 left-0 transform sm:left-0 -translate-y-1 sm:translate-y-0 sm:translate-x-0 text-nowrap text-[#adc9b8]`}>INDUSTRIALES</p>
                    </motion.div>
                </div>
                <CategoriesProducts2 />
            </div>

        </div>
    )
}
