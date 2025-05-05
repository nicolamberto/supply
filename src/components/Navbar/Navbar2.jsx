import React, { useState } from "react";
import { Link } from "react-router-dom";

import { AnimatePresence, useMotionValueEvent, useScroll, motion } from "framer-motion";

import NavbarMobile from "./elements/NavbarMobile";
import NavbarDesktop from "./elements/NavbarDesktop";
import { HamburgerButton } from "./elements/AnimatedHamburgerButton";
import logoverde from "../../assets/logos/logo_small.png";
import logoblanco from "../../assets/logos/logoblanco.png";


function Navbar2({ orders = 0 }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);

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
      animate={{
        background: isScrolled ? 'rgba(228, 239, 231, 1)' : 'rgba(255, 255, 255, 0)',
        height: isScrolled ? '80px' : '90px',
      }}
      transition={{
        duration: 0.2, // Duración de la transición en segundos
        ease: "easeInOut", // Curva de animación suave
      }}
      className={`w-full flex justify-center items-center fixed top-0 z-50 ${isScrolled ? 'pt-0' : 'pt-5'}`}
    >

      {/* SECCION QUE CONTIENE LOGO Y AMBOS MENUES */}
      <div className="w-[95%] lg:w-[80%] 2xl:w-[60%] flex justify-between items-center">

        {/* LOGO */}
        <Link to={"/"}>

          {
            isScrolled ?
              <img className='max-w-[250px]' src={logoverde} alt="logotipo" /> :
              <img className='max-w-[250px]' src={logoblanco} alt="logotipo" />
          }

        </Link>


        {/* MENU DESKTOP */}
        <NavbarDesktop isHover={isHover} setIsHover={setIsHover} isScrolled={isScrolled} orders={orders} />


        {/* MENU MOBILE */}
        <HamburgerButton setIsHover={setIsHover} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        <AnimatePresence>

          {menuOpen && (
            <NavbarMobile setMenuOpen={setMenuOpen} isHover={isHover} setIsHover={setIsHover} />
          )}

        </AnimatePresence>
      </div>





    </motion.section>
  );
}

export default Navbar2;
