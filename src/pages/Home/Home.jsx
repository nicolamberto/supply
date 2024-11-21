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
import imageWhatsapp from "../../assets/logos/whatsapp.png"
import list from "../../assets/isotipos/lista.png";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import About from "../../components/About/About";
function Home({ filteredProducts }) {
  //Texto de la pestaña del nevegador segun la pantalla que se está mostrando
  useTitle("Pallets Plásticos | Supply Argentina");

  return (
    <section className={style.home_main}>
      <Header />
      <Categories />
      {/* <About/> */}
      <CompanyOverview />
      <Footer />
      <div className={style.icon_whatsapp}>
        <img src={imageWhatsapp} alt="" />
      </div>
    </section>
  );
}

export default Home;
