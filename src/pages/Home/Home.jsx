import React from "react";
import style from "./Home.module.css";
import useTitle from "../../hooks/useTitle";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import CompanyOverview from "../../components/CompanyOverview/CompanyOverview";
import Footer from "../../components/Footer/Footer";
import Contact from "../../components/Contact/Contact";
import Categories from "../../components/Categories/Categories";
import { categories } from "../../data";
import list from "../../assets/isotipos/lista.png"
function Home({filteredProducts}) {
  
  //Texto de la pestaña del nevegador segun la pantalla que se está mostrando
  useTitle("Pallets Plásticos | Supply Argentina");
  
  return (
    <section className={style.home_main}>
      <Navbar />
      {/* <div className={style.icon}>
      <img src={list} alt="carrito" />
      <span>{filteredProducts.length}</span>
      </div> */}
      <Header />
      <Categories/>
      <CompanyOverview/>
      {/* <Contact/> */}
      <Footer/>
    </section>
  );
}

export default Home;
