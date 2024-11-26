import React from "react";
import style from "./Home.module.css";
import useTitle from "../../hooks/useTitle";
import Header from "../../components/Header/Header";
import CompanyOverview from "../../components/CompanyOverview/CompanyOverview";
import Footer from "../../components/Footer/Footer";
import imageWhatsapp from "../../assets/logos/whatsapp.png";
import { openWhatsAppChat } from "../../hooks/openWhatsAppChat";
import Categories from "../../components/Categories/Categories";
import HeaderPrueba from "../../components/HeaderPrueba/HeaderPrueba";
import Servicios from "../Servicios/Servicios";
import Location from "../../components/Location/Location";
import Carrousel from "../../components/Carrousel/Carrousel";
import image1 from "../../assets/marcas/1.png";
import image2 from "../../assets/marcas/2.png";
import image3 from "../../assets/marcas/3.png";
import useScrollToTop from "../../hooks/useScrollToTop";
import CategoriesProducts from "../../components/categoriesProducts/categoriesProducts";
function Home({ filteredProducts }) {
  //Texto de la pestaña del nevegador segun la pantalla que se está mostrando
  useTitle("Pallets Plásticos | Supply Argentina");
  let images = [image1, image2, image3];
  useScrollToTop()

  return (
    <section className={style.home_main}>
      <Header />
      {/* <Categories /> */}
      <CategoriesProducts/>
      <CompanyOverview />
      <Location />
      <Footer />
      <div
        onClick={() =>
          openWhatsAppChat(
            "5491166823300",
            "Hola, estoy interesado en tus productos. ¿Podrías brindarme más información?"
          )
        }
        className={style.icon_whatsapp}
      >
        <img src={imageWhatsapp} alt="" />
      </div>
    </section>
  );
}

export default Home;
