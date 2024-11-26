import style from "./HeaderPrueba.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import image1 from "../../assets/fondo/1.jpg";
import image2 from "../../assets/fondo/2.jpg";
import image3 from "../../assets/fondo/3.jpg";

function HeaderPrueba() {
  const banners = [
    {
      text: ["AMPLIA", "VARIEDAD,", "AL MEJOR COSTO"],
      image: image1,
    },
    {
      text: ["ENVIOS A", "TODO EL", "PAÍS"],
      image: image2,
    },
    {
      text: ["ATENCIÓN", "PARA", "TU EMPRESA"],
      image: image3,
    },
  ];

  return (
    <div className={style.container}>

    </div>
  );
}

export default HeaderPrueba;
