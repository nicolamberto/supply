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
      <Swiper
        className={style.banner}
        modules={[Autoplay]}
        direction="vertical"
        loop
        autoplay={{ delay: 5000 }}
        speed={1000}
      >
        {banners.map((banner, index) => (
          <SwiperSlide className={style.bannerSlider} key={index}>
            <img
              src={banner.image}
              alt={`Banner ${index + 1}`}
              className={style.bannerImage}
            />
            <div className={style.bannerContent}>
              {banner.text.map((line, i) => (
                <p key={i} className={style.bannerText}>
                  {line}
                </p>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={style.footer}>
        <h1 className={style.footerText}>MATERIALES PLÁSTICOS INDUSTRIALES</h1>
      </div>
    </div>
  );
}

export default HeaderPrueba;
