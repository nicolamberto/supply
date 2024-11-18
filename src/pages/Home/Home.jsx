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
import iconWts from "../../assets/icons/whatsapp.svg"
function Home({}) {
  
  //Texto de la pestaña del nevegador segun la pantalla que se está mostrando
  useTitle("Pallets Plásticos | Supply Argentina");
  console.log(categories);
  
  return (
    <section className={style.home_main}>
      <Navbar />
      <Header />
      <Categories/>
      <CompanyOverview/>
      {/* <Contact/> */}
      <img className={style.icon} src={iconWts} alt="whatsapp" />
      <Footer/>
    </section>
  );
}

export default Home;
