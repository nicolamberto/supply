import Button from "./Button";
import banner1 from "../../../assets/banners/bannerdesktopnuevo.webp";
import { motion } from "framer-motion";
import bannermobile from "../../../assets/banners/bannermobilenew.webp";
import { features } from "../../../data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, A11y, Autoplay, FreeMode, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/free-mode'
import 'swiper/css/autoplay'
import 'swiper/css/scrollbar'
import 'swiper/css/a11y'
import 'swiper/css/effect-fade';


function HeroSection() {

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className='rounded-[40px] md:rounded-[60px] overflow-hidden'>

      <div className={`relative w-[100%] flex flex-col flex-nowrap justify-center items-center`}>
        <div className="absolute inset-0 bg-gray-500 opacity-10 z-10"></div>


        <div className="absolute bottom-4 md:bottom-2 xl:bottom-3 2xl:bottom-1 right-0 z-20 hidden sm:flex sm:justify-end">
          <Swiper
            modules={[Scrollbar, A11y, Autoplay, FreeMode, EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            spaceBetween={120}
            slidesPerView={1}
            freeMode={true}
            loop={true}
            speed={500}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className="max-w-[300px] md:max-w-[360px] lg:max-w-[450px] xl:max-w-[500px] 2xl:max-w-[700px] h-[60px]"
            style={{ minWidth: 200 }}
          >
            {features.map((item, index) => (
              <SwiperSlide key={index} className="h-full w-full flex items-center justify-center">
                <div className="w-full h-full flex items-center justify-center gap-2 xl:gap-5">
                  <img src={item.iconwhite} className="w-[20px] 2xl:w-[30px]" />
                  <p className="pt-1 2xl:pt-2 text-[12px] md:text-[16px] lg:text-[20px] xl:text-[23px] 2xl:text-[30px] text-white uppercase">
                    {item.title}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Imagen del slider */}
        <img
          src={banner1}
          className={`object-cover w-full h-[60vh] blur-[0px] hidden sm:block`}
          alt={`Banner `}
        />
        <img
          src={bannermobile}
          className={` h-[60vh] w-full object-cover blur-[0px] block sm:hidden`}
          alt={`Banner `}
        />

        {/* Contenido centrado */}
        <div className="absolute inset-0 gap-0 md:gap-0 flex flex-col items-start md:items-center justify-center text-white z-20 pt-52 lg:pt-40 px-0">
          <h1 className="text-[24px] sm:text-[30px] md:text-[40px] font-bold mb-0 uppercase text-start md:text-center font-banner px-3 pb-2">SOLUCIONES PLÁSTICAS <br className="md:hidden" /> PARA LA INDUSTRIA</h1>
          <p className="text-[12px] sm:text-[18px] xl:text-[24px] mb-0 text-start md:text-center opacity-90 px-3 pb-0 font-MontBoldItalic leading-0 lg:pb-10">
            Pallets, contenedores, cajas, residuos y más
          </p>
          <Button text={'VER CATÁLOGO'} url={'/productos'} />

        </div>
      </div>

    </motion.div>
  );
}

export default HeroSection;
