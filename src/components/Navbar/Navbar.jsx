import React, { useState } from "react";
import style from "./Navbar.module.css";
import logo from "../../assets/logos/logo_small.png";
import { VscListUnordered, VscChromeClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdOutlineAlternateEmail } from "react-icons/md";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <section className={style.navbar_main}>
      {/* Parte superior de la navbar */}
      <div className={style.navbar_top}>
        <p>
         <BsFillTelephoneFill/> 0810 444 0152 
        </p>
        <p>
         <MdOutlineAlternateEmail/> ventas@supply.com.ar 
        </p>
      </div>
      {/* Parte inferior de la navbar */}
      <div className={style.navbar_bottom}>
        <Link to={"/"}><img className={style.navbar_logo} src={logo} alt="logotipo" /></Link>
        <button className={style.navbar_toggle} onClick={toggleMenu}>
          {menuOpen ? < VscChromeClose /> : <VscListUnordered />}
        </button>
        <div
          className={`${style.navbar_links} ${
            menuOpen ? style.navbar_links_open : ""
          }`}
        >
          <a href="#">Inicio</a>
          <a href="#">Productos</a>
          <a href="#">Contacto/Pedidos</a>
          <a href="#">Servicios</a>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
