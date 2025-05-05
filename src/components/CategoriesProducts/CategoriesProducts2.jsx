
import CarouselIndicator from "../CarouselIndicator/CarouselIndicator";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import CategoryCard from "./elements/CategoryCard";
import { getProductCategories } from "../../utils/get-product-categories";

function Carrousel({
    images,
    slidesPerView = 4,
    direction = "horizontal",
    autoplayDelay = 5000,
    loop = false,
    autoplay = false
}) {


    //ARREGLAR TODO EL CODIGO BRO ESTA HECHO UN ASCO
    const [categories , setCategories] = useState([]);

    useEffect(() => {
      getProductCategories().then((data) => {
        setCategories(data);
      });
    }, []);
  
    

    return (
        <Swiper
            modules={[Navigation, Scrollbar]}
            autoplay={{ delay: autoplayDelay }}
            
            loop={loop}
            navigation
            breakpoints={{
                0: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                },
                520: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                1380: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
            }}
            className=' h-[500px] w-[100%] flex flex-col justify-center items-center my-20 px-10 relative'
            direction={direction}
            slidesPerView={slidesPerView}
        >
            <div className="">
                {categories.map((item, index) => (
                    <SwiperSlide className={`relative flex justify-center items-center`} key={index}>
                        <CategoryCard item={item}/>
                    </SwiperSlide>
                ))}
            </div>


        </Swiper>
    );
}

export default Carrousel;
