import React, { useState } from "react";
import style from "./Navbar.module.css";
import logo from "../../assets/logos/logo_small.png";
import { VscListUnordered, VscChromeClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { BsTelephone } from "react-icons/bs";
import { CiMail } from "react-icons/ci";

function Navbar({ orders }) {
  
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <section className={style.navbar_main}>
      {/* Parte superior de la navbar */}
      <div className={style.navbar_top}>
        <p>
          <BsTelephone className={style.icon} /> 0810 444 0152
        </p>
        <p>
          <CiMail className={style.icon} /> ventas@supplyargentina.com.ar
        </p>
      </div>
      {/* Parte inferior de la navbar */}
      <div className={style.navbar_bottom}>
        <Link to={"/"}>
          <img className={style.navbar_logo} src={logo} alt="logotipo" />
        </Link>
        <button className={style.navbar_toggle} onClick={toggleMenu}>
          {menuOpen ? (
            <VscChromeClose className={style.icon} />
          ) : (
            <VscListUnordered className={style.icon} />
          )}
        </button>
        <div
          className={`${style.navbar_links} ${
            menuOpen ? style.navbar_links_open : ""
          }`}
        >
          <Link to="/">Inicio</Link>
          <Link to="/productos">Productos</Link>
          <Link to="/presupuesto">
            Presupuestos/Pedidos {orders === 0 ? "" : <span className={style.orders_number}>{orders}</span>}
          </Link>
          <Link to="/servicios">Servicios</Link>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
