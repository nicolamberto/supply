import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import style from "./Header.module.css";
import banner1 from "../../assets/banners/bannersupply.png";
import { getHomeInfo } from "../../utils/get-home-info";
import Carrousel from "../Carrousel/Carrousel";
import { useEffect, useState } from "react";
import { getProductCategories } from "../../utils/get-product-categories";
import { getProducts } from "../../utils/get-products";
function Header() {

  let banners = [banner1]
  return (
    <div className={` relative overflow-hidden p-2 xl:px-4 w-full` }>
      <Carrousel indicator={false} images={banners}/>
    </div>
  );
}

export default Header;

