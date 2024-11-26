import React from "react";
import style from "./Categorias.module.css";
import Footer from "../../components/Footer/Footer";
import CategoriesProducts from "../../components/categoriesProducts/categoriesProducts";

function Categorias() {
  return (
    <div className={style.main}>
      <CategoriesProducts/>
      <Footer />
    </div>
  );
}

export default Categorias;
