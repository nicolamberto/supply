import banner from '../../assets/banners/bannerproductosdesktop.png'
import bannermobile from '../../assets/banners/bannerproductosmobile.png'
import { useProductContext } from '../../context/products';
import ProductGrid from './elements/ProductGrid';
import FilterBar from './elements/FilterBar';
import FilterBarMobile from './elements/FilterBarMobile';
import { motion } from 'framer-motion';

export default function NewProducts() {



    return (
        <div className='w-full bg-[#efefef]'>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className="w-full relative overflow-hidden h-fit xl:h-[350px] p-2 "
            >
                <img src={banner} alt="banner" className='w-full h-full rounded-[20px] object-cover hidden sm:block' />
                <img src={bannermobile} alt="banner" className='w-full h-full rounded-[20px] object-cover block sm:hidden' />
                <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 text-white text-[25px] sm:text-[30px] md:text-[40px] xl:text-[70px] font-bold text-center font-banner text-nowrap'>NUESTRO CATÁLOGO</p>
            </motion.div>



            <div className="flex flex-col justify-center items-center">

                {/* arreglar nombres de categorias */}
                {/*                 <div className="w-[95%] lg:w-[80%] 2xl:w-[60%] py-10 lg:pl-5">
                    <OverlappingTitle firstTitle={titleArray.length == 2 ? titleArray[0] : titleArray.slice(0, 2).join(' ')} secondTitle={titleArray.length == 2 ? titleArray[1] : titleArray.slice(2).join(' ')} colorFirstTitle={'text-[#00491f]'} colorSecondTitle={'text-[#adc9b8]'} />
                </div> */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 p-4 w-[95%] lg:w-[80%] 2xl:w-[70%]">

                    {/* Barra lateral de filtros */}
                    <FilterBar />
                    <FilterBarMobile />

                    {/* Productos */}
                    <ProductGrid />

                </div>
            </div>


        </div>
    )
}
