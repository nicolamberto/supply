import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import style from "./Carrousel.module.css";
import CarouselIndicator from "../CarouselIndicator/CarouselIndicator";
import Button from './Button'
import { useState } from "react";
import { motion } from "framer-motion";


function Carrousel({
  images,
  slidesPerView = 1,
  direction = "horizontal",
  autoplayDelay = 5000,
  loop = true,
  indicator = true
}) {
  const [currentSlider, setCurrentSlider] = useState(0);
  const [isHoveringButton, setIsHoveringButton] = useState(false);
  

  function handleSlideChange(index) {
    setCurrentSlider(index.activeIndex);
  }

  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: autoplayDelay }}
      loop={loop}
      className='rounded-[20px]'
      direction={direction}
      slidesPerView={slidesPerView}
      onSlideChange={handleSlideChange}
    >
      {images.map((image, index) => (
        <SwiperSlide className={`relative ${style.swiper_slider}`} key={index}>
          <div className="absolute inset-0 bg-gray-500 opacity-10 z-10"></div>

          {/* Imagen del slider */}
          <img
            src={image}
            className={`${style.image} h-[700px] blur-[1px]`}
            alt={`Banner ${index + 1}`}
          />

          {/* Contenido centrado */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-20 ">
            
            <h2 className="text-[30px] md:text-4xl font-bold mb-0 uppercase text-center">productos plasticos industriales</h2>
            <p className="text-lg mb-0 text-center opacity-70 px-5">
              Soluciones resistentes, funcionales y a medida para tu industria.
            </p>
            <Button />

          </div>
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
