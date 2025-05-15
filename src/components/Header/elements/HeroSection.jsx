import Button from "./Button";
import banner1 from "../../../assets/banners/bannersupply.png";

function HeroSection() {

  return (
    <div className='rounded-[20px] overflow-hidden'>

      <div className={`relative w-[100%] flex flex-col flex-nowrap justify-center items-center`}>
        <div className="absolute inset-0 bg-gray-500 opacity-10 z-10"></div>

        {/* Imagen del slider */}
        <img
          src={banner1}
          className={`object-cover w-full h-[350px] blur-[1px]`}
          alt={`Banner `}
        />

        {/* Contenido centrado */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-20 pt-24">

          <h2 className="text-[30px] md:text-4xl font-bold mb-0 uppercase text-center">productos plasticos industriales</h2>
          <p className="text-lg mb-0 text-center opacity-70 px-5">
            Soluciones resistentes, funcionales y a medida para tu industria.
          </p>
          <Button text={'Conoce nuestros productos'} url={'/productos'}/>

        </div>
      </div>

    </div>
  );
}

export default HeroSection;
