import React from "react";
import style from "./CarouselIndicator.module.css";


function CarouselIndicator({ totalSlides, currentSlide }) {
console.log(currentSlide);

  return (
    <div className={style.indicator_container}>
      {[...Array(totalSlides)].map((_, index) => {
        return (
          <div
            key={index} // No olvides agregar una key única
            className={`${style.indicator_dot} ${
              currentSlide === index ? style.active : ""
            }`}
          ></div>
        );
      })}
    </div>
  );
}

export default CarouselIndicator;
