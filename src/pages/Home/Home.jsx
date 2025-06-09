import React from "react";
import style from "./Home.module.css";
import useTitle from "../../hooks/useTitle";
import Header from "../../components/Header/Header";
import CompanyOverview from "../../components/CompanyOverview/CompanyOverview";
import imageWhatsapp from "../../assets/logos/whatsapp.png";
import { openWhatsAppChat } from "../../hooks/openWhatsAppChat";
import Location from "../../components/Location/Location";

import useScrollToTop from "../../hooks/useScrollToTop";
import Features from "../../components/Features/Features";
import CategoriesPage from "../../components/CategoriesProducts/CategoriesPage";
import Faqs from "../../components/Faqs/Faqs";
import ClientsCarousel from "../../components/ClientsCarousel/ClientsCarousel";
import ImagesMobile from "../../components/CompanyOverview/elements/ImagesMobile";


function Home() {
  //Texto de la pestaña del nevegador segun la pantalla que se está mostrando
  useTitle("Pallets Plásticos | Supply Argentina");
  useScrollToTop()

  return (
    <section className={style.home_main}>
      <Header />
      {/* <Categories /> */}
      <CategoriesPage/>
      <CompanyOverview/>
      <ImagesMobile/>
      <Features/>
      <ClientsCarousel/>
      <Faqs/>
      <Location />
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
