import React, { useState } from "react";
import { Link } from "react-router-dom";

import { AnimatePresence, useMotionValueEvent, useScroll, motion } from "framer-motion";

import NavbarMobile from "./elements/NavbarMobile";
import NavbarDesktop from "./elements/NavbarDesktop";
import { HamburgerButton } from "./elements/AnimatedHamburgerButton";
import logoverde from "../../assets/logos/logo_small.png";
import logoblanco from "../../assets/logos/logoblanco.png";
import logomobile from '../../assets/logos/logomobile.jpg'

function Navbar2() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const [isHoverCart, setIsHoverCart] = useState(false)

  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (y) => {
    if (y > 10) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  })

  return (

    /* SECCION QUE TOMA EL COMPLETO DEL ANCHO DE PANTALLA */
    <motion.section
      initial={{ y: -50, opacity: 0 }}
      animate={{
        y: 0, 
        opacity: 1 ,
        background: isScrolled ? 'rgba(228, 239, 231, 1)' : 'rgba(255, 255, 255, 0)',
        height: isScrolled ? '80px' : '90px',
      }}
      transition={{
        duration: 0.35, // Duración de la transición en segundos
        ease: "easeInOut", // Curva de animación suave
      }}
      className={`w-full flex justify-center items-center fixed top-0 z-50 ${isScrolled ? 'pt-0' : 'pt-5'}`}
    >

      {/* SECCION QUE CONTIENE LOGO Y AMBOS MENUES */}
      <div className="w-[95%] lg:w-[80%] 2xl:w-[70%] flex justify-between items-center">

        {/* LOGO */}
        <Link to={"/"}>

          {
            isScrolled ?
              <img className='max-w-[250px] hidden md:block' src={logoverde} alt="logotipo" /> 
              :
              <img className='max-w-[250px] hidden md:block' src={logoblanco} alt="logotipo" /> 

          }
          {
            isScrolled ?
              <img className='w-[50px] block md:hidden' src={logomobile} alt="logotipo" />
              :
              <img className='w-[70px] block md:hidden pl-5' src={logomobile} alt="logotipo" />

          }

        </Link>


        {/* MENU DESKTOP */}
        <NavbarDesktop isHover={isHover} setIsHover={setIsHover} isScrolled={isScrolled} isHoverCart={isHoverCart} setIsHoverCart={setIsHoverCart} />

        {/* MENU MOBILE */}
        {/*         <HamburgerButton setIsHover={setIsHover} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        <AnimatePresence>

          {menuOpen && (
            <NavbarMobile setMenuOpen={setMenuOpen} isHover={isHover} setIsHover={setIsHover} />
          )}

        </AnimatePresence> */}
      </div>





    </motion.section>
  );
}

export default Navbar2;
