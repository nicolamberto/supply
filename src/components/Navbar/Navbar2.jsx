import { useState } from "react";
import { Link } from "react-router-dom";

import { useMotionValueEvent, useScroll, motion, AnimatePresence } from "framer-motion";

import NavbarDesktop from "./elements/NavbarDesktop";
import logoverde from "../../assets/logos/logo_small.png";
import logoblanco from "../../assets/logos/logoblanco.png";
import logomobile from '../../assets/logos/logoverde.png'
import logoblancomobile from '../../assets/logos/logosimpleblanco.png'
import NavbarMobile from "./elements/NavbarMobile";
import { AnimatedHamburgerButton } from "./elements/AnimatedHamburgerButton";

function Navbar2() {
  const [isHover, setIsHover] = useState(false);

  const [isHoverCart, setIsHoverCart] = useState(false)

  const [openMenu, setOpenMenu] = useState(false);

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
        opacity: 1,
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
              <img className='w-[50px] block md:hidden ' src={logomobile} alt="logotipo" />
              :
              <img className='w-[70px] block md:hidden pl-5' src={logoblancomobile} alt="logotipo" />
          }

        </Link>


        {/* MENU DESKTOP */}
        <NavbarDesktop isHover={isHover} setIsHover={setIsHover} isScrolled={isScrolled} isHoverCart={isHoverCart} setIsHoverCart={setIsHoverCart} />

        {/* MENU MOBILE */}
        {/*         <HamburgerButton setIsHover={setIsHover} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        <AnimatePresence>

            <NavbarMobile setMenuOpen={setMenuOpen} isHover={isHover} setIsHover={setIsHover} />

        </AnimatePresence> */}
        <NavbarMobile isScrolled={isScrolled} openMenu={openMenu} />
        <AnimatedHamburgerButton setOpenMenu={setOpenMenu} openMenu={openMenu} isScrolled={isScrolled} />

        {/* BACKGROUND BLUR ON MENUMOBILE */}
        <AnimatePresence>
          {openMenu && (
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpenMenu(false)}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-10 sm:hidden"
            />
          )}
        </AnimatePresence>

      </div>





    </motion.section>
  );
}

export default Navbar2;
