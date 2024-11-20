import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import style from "./Header.module.css";
import banner1 from "../../assets/banners/1.png";
import banner2 from "../../assets/banners/2.png";
import banner3 from "../../assets/banners/3.png";

function Header() {
  return (
    <div className={style.header}>
      <div className={style.image_container}>
        <img src={banner1} className={style.banner} alt="Banner 1" />
        <img src={banner2} className={style.banner} alt="Banner 2" />
        <img src={banner3} className={style.banner} alt="Banner 3" />
      </div>
    </div>
  );
}

export default Header;

