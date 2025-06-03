import React from 'react';
import logo from '../../assets/logos/logoblanco.png'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className=' md:h-[80vh] w-full bg-[#00491f] rounded-t-[20px] md:rounded-t-[100px] relative'>

      <div className="w-full z-20 flex flex-col justify-between items-center h-full gap-20 text-white pb-10">

        <div className="flex flex-col md:flex-row justify-around w-full items-center">

          <img src={logo} alt="logo" className='w-[300px] opacity-90' />
          <div className="flex flex-row font-bold text-white gap-10">
            <Link to={'/'}>INICIO</Link>
            <Link to={'/productos'}>PRODUCTOS</Link>
            <Link to={'/presupuesto'}>PRESUPUESTO</Link>
          </div>
        </div>


        <div className="flex flex-col justify-center items-center font-semibold text-white/40">
          <p>Todos los derechos reservados</p>
          <p>Desarrollado por soluciones digitales y WeNima</p>
        </div>

      </div>
      <p className='absolute text-[18vw] font-extrabold opacity-5 left-1/2 transform -translate-x-1/2 bottom-0 z-30 text-white'>PLASTICOS</p>
      {/* <img src={logo} alt="logo" className='absolute w-[95%] lg:w-[80%] 2xl:w-[70%] opacity-5 left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 z-0' /> */}
    </footer>
  );
}

export default Footer;
