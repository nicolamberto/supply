import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import style from "./Header.module.css";
import banner1 from "../../assets/banners/1.jpg";
import banner2 from "../../assets/banners/2.jpg";
import banner3 from "../../assets/banners/3.jpg";
import Carrousel from "../Carrousel/Carrousel";

function Header() {

  let banners = [banner1,banner2,banner3]
  return (
    <div className={style.header}>
      <Carrousel indicator={false} images={banners}/>
    </div>
  );
}

export default Header;

