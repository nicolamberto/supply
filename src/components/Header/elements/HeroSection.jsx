import Button from "./Button";
import banner1 from "../../../assets/banners/bannerdesktopnew.png";
import { motion } from "framer-motion";
import bannermobile from "../../../assets/banners/bannermobilenew.png";
function HeroSection() {

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className='rounded-[20px] overflow-hidden'>

      <div className={`relative w-[100%] flex flex-col flex-nowrap justify-center items-center`}>
        <div className="absolute inset-0 bg-gray-500 opacity-10 z-10"></div>

        {/* Imagen del slider */}
        <img
          src={banner1}
          className={`object-cover w-full h-[60vh] blur-[0px] hidden sm:block`}
          alt={`Banner `}
        />
        <img
          src={bannermobile}
          className={` h-[50vh] w-full object-cover blur-[0px] block sm:hidden`}
          alt={`Banner `}
        />

        {/* Contenido centrado */}
        <div className="absolute inset-0 gap-0 md:gap-0 flex flex-col items-start md:items-center justify-center text-white z-20 pt-24 px-0">

          <h2 className="text-[24px] sm:text-[30px] md:text-[40px] font-bold mb-0 uppercase text-start md:text-center font-banner px-5 ">SOLUCIONES PLÁSTICAS PARA LA INDUSTRIA</h2>
          <p className="text-[15px] sm:text-[18px] xl:text-[24px] mb-0 text-start md:text-center opacity-70 px-5 pb-6">
            Pallets, contenedores, cajas, residuos y más
          </p>
          <Button text={'VER CATALOGO'} url={'/productos'} />

        </div>
      </div>

    </motion.div>
  );
}

export default HeroSection;
