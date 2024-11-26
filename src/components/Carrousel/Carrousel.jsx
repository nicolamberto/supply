import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import style from "./Carrousel.module.css";
import CarouselIndicator from "../CarouselIndicator/CarouselIndicator";
import { useState } from "react";

function Carrousel({
  images,
  slidesPerView = 1,
  direction = "horizontal", 
  autoplayDelay = 5000, 
  loop = true, 
  indicator = true
}) {
  const [currentSlider, setCurrentSlider] = useState(0);

  function handleSlideChange(index) {
    setCurrentSlider(index.activeIndex);
  }

  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: autoplayDelay }}
      loop={loop}
      className={style.swiper}
      direction={direction}
      slidesPerView={slidesPerView}
      onSlideChange={handleSlideChange}
    >
      {images.map((image, index) => (
        <SwiperSlide className={style.swiper_slider} key={index}>
          <img
            src={image}
            className={style.image}
            alt={`Banner ${index + 1}`}
          />
        </SwiperSlide>
      ))}
      {images.length !== 1 && indicator ? (
        <CarouselIndicator
          currentSlide={currentSlider}
          totalSlides={images.length}
        />
      ) : null}
    </Swiper>
  );
}

export default Carrousel;
