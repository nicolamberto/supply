import Button from "./Button";
import banner1 from "../../../assets/banners/bannersupply.jpg";

function HeroSection() {

  return (
    <div className='rounded-[20px] overflow-hidden'>

      <div className={`relative w-[100%] flex flex-col flex-nowrap justify-center items-center`}>
        <div className="absolute inset-0 bg-gray-500 opacity-10 z-10"></div>

        {/* Imagen del slider */}
        <img
          src={banner1}
          className={`object-cover w-full h-[60vh] md:h-[350px] blur-[1px]`}
          alt={`Banner `}
        />

        {/* Contenido centrado */}
        <div className="absolute inset-0 gap-0 md:gap-0 flex flex-col items-start md:items-center justify-center text-white z-20 pt-24 px-2">

          <h2 className="text-[25px] sm:text-[30px] md:text-[40px] font-bold mb-0 uppercase text-start md:text-center font-banner px-5 ">SOLUCIONES PLÁSTICAS PARA LA INDUSTRIA</h2>
          <p className="text-[15px] sm:text-[18px] xl:text-[24px] mb-0 text-start md:text-center opacity-70 px-5 pb-6">
            Pallets, contenedores, cajas, residuos y más
          </p>
          <Button text={'VER CATALOGO'} url={'/productos'} />

        </div>
      </div>

    </div>
  );
}

export default HeroSection;
