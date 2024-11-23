import React from "react";
import style from "./Categorias.module.css";
import Footer from "../../components/Footer/Footer";
import Categories from "../../components/Categories/Categories"

function Categorias() {
  return (
    <div className={style.main}>
      <Categories/>
      <Footer />
    </div>
  );
}

export default Categorias;
