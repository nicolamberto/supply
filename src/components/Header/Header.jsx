import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import style from "./Header.module.css";
import banner1 from "../../assets/banners/1.png";
import banner2 from "../../assets/banners/2.png";
import banner3 from "../../assets/banners/3.png";
import Carrousel from "../Carrousel/Carrousel";

function Header() {

  let banners = [banner1,banner2,banner3]
  return (
    <div className={style.header}>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 4000 }}
        loop={true}
        className={style.swiper}
        direction="vertical"
      >
        {banners.map((banner, index) => (
          <SwiperSlide className={style.swiper_slider} key={index} >
            <img src={banner} alt={`Banner ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Header;

