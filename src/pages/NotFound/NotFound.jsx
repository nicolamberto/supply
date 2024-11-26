import React from "react";
import style from "./NotFound.module.css";
import useTitle from "../../hooks/useTitle";
import { Link } from "react-router-dom";

function NotFound({}) {
  //Texto de la pestaña del nevegador segun la pantalla que se está mostrando
  useTitle("404 NotFound | Supply Argentina");
  return (
    <section className={style.NotFound_main}>
      <h2 className={style.title}>página no encontrada</h2>
      <span className={style.number}>404</span>
      <Link style={{textDecoration: "none"}} to={"/"}>
      <p className={style.link}>Volver a Inicio</p>
      </Link>
    </section>
  );
}

export default NotFound;
