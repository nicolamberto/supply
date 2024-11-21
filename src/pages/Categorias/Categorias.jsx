import React from "react";
import style from "./Categorias.module.css";
import Categories from "../../components/Categories/Categories";
import Footer from "../../components/Footer/Footer";

function Categorias() {
  return (
    <div className={style.main}>
      <Categories />
      <Footer />
    </div>
  );
}

export default Categorias;
