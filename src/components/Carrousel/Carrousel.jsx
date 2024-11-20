import { Swiper, SwiperSlide } from "swiper/react";
import style from "./Carrousel.module.css";

function Carrousel({ images }) {
  return (
    <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 6000 }}
        loop={true}
        className={style.swiper}
        direction="vertical"
      >
        {images.map((image, index) => (
          <SwiperSlide className={style.swiper_slider} key={index} >
            <img src={image} alt={`Banner ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
  );
}

export default Carrousel