import React from 'react';
import logosimple from '../../assets/logos/logosimpleblanco.png'
import logoblanco from '../../assets/logos/logoblanco.png'
import { socialMedia } from '../../data';
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className='h-[60vh] sm:h-[55vh] xl:h-[60vh] w-[96%] sm:w-[98%] bg-[#00491f] rounded-t-[20px] md:rounded-t-[100px] relative overflow-hidden'>

      <div className="w-full z-20 flex flex-col justify-between items-center h-full gap-20 text-white pb-10">

        <div className="flex flex-col md:flex-row-reverse justify-around w-full md:items-start pt-10 md:pt-16 xl:pt-28 gap-10">

          <div className="flex flex-row justify-center items-center font-bold text-white/60 gap-3 sm:gap-10 font-MontBold">
            <Link to={'/'}>INICIO</Link>
            <Link to={'/productos'}>PRODUCTOS</Link>
            <Link to={'/presupuesto'}>PRESUPUESTO</Link>
          </div>

          <div className=" flex flex-col justify-center items-center md:items-start gap-6 opacity-45 z-30">
            <img src={logoblanco} alt='logoblanco' className='w-[350px]' />
            <div className="flex flex-col justify-center items-center sm:flex-row sm:gap-5">
              <p>Supply Argentina SRL</p>
              {" - "}
              <p>0800 444 0152</p>
            </div>
            <p>ventas@supplyargentina.com.ar</p>
            <div className="flex flex-row justify-center items-center gap-3">
              {
                socialMedia.map(({ id, url, icon: Icon }) => (
                  <Link
                    to={url}
                    key={id}
                    className=''
                    target='_blank'
                  >
                    <Icon className='text-[25px] cursor-pointer' />
                  </Link>
                ))
              }
            </div>
          </div>

        </div>




        <div className="flex flex-col justify-center items-center font-semibold text-white/40 text-center">
          <p>Todos los derechos reservados</p>
          <p>Desarrollado por Soluciones Digitales & WeNima</p>
        </div>


      </div>
      <p className='hidden md:block absolute text-[18vw] font-extrabold opacity-5 left-1/2 transform -translate-x-1/2 bottom-0  text-white leading-65 z-0 font-miFuente'>PLASTICOS</p>
      <img src={logosimple} alt="logo" className='absolute md:hidden lg:w-[80%] 2xl:w-[70%] opacity-5 left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 z-0' />
    </footer>
  );
}

export default Footer;
