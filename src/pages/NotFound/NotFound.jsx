import React from "react";
import style from "./NotFound.module.css";
import useTitle from "../../Hooks/useTitle";

function NotFound({}) {
  //Texto de la pestaña del nevegador segun la pantalla que se está mostrando
  useTitle("404 NotFound | Supply Argentina");
  return (
    <section className={style.NotFound_main}>
      <h1>pagina no encontrada</h1>
    </section>
  );
}

export default NotFound;
