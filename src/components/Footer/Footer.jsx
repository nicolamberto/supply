import React from 'react';
import logo from '../../assets/logos/logoblanco.png'

function Footer() {
  return (
    <footer className='h-[80vh] w-full bg-[#00491f] rounded-t-[100px] relative'>
          <img src={logo} alt="logo" className='absolute w-[95%] lg:w-[80%] 2xl:w-[60%] opacity-20 left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2'/>
    </footer>
  );
}

export default Footer;
