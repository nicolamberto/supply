import React from 'react'
import about1 from '../../../assets/about/about1.png'
import about2 from '../../../assets/about/about2.png'
import about3 from '../../../assets/about/about3.png'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Scrollbar, A11y, Autoplay, FreeMode } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/free-mode'
import 'swiper/css/autoplay'
import 'swiper/css/scrollbar'
import 'swiper/css/a11y'

export default function ImagesMobile() {
    const imagesAbout = [about1, about2, about3] // Repetir para efecto infinito

    return (
        <div className='w-full flex justify-center items-center sm:hidden'>

            <Swiper
                modules={[Scrollbar, A11y, Autoplay, FreeMode]}
                spaceBetween={0}
                slidesPerView="auto"
                freeMode={true}
                loop={true}
                speed={2000}
                autoplay={{ delay: 0, disableOnInteraction: false }}
                className="w-full"
            >
                {imagesAbout.map((img, index) => (
                    // ...existing code...
                    <SwiperSlide key={index}>
                        <div className="w-full h-[240px] flex justify-center items-center my-5">
                            <img src={img} alt={`imagenabout-${index}`} className="w-[80%] h-full object-cover rounded-[30px] overflow-hidden shadow-md" />
                        </div>
                    </SwiperSlide>
                    // ...existing code...
                ))}
            </Swiper>
        </div>
    )
}
