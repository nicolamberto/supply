import { marcas } from '../../data'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Scrollbar, A11y, Autoplay, FreeMode } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/free-mode'
import 'swiper/css/autoplay'
import 'swiper/css/scrollbar'
import 'swiper/css/a11y'

export default function ClientsCarousel() {
    const marcasDup = [...marcas, ...marcas, ...marcas, ...marcas] // Repetir para efecto infinito

    return (
        <div className='w-full flex justify-center items-center pb-10 relative'>

            <Swiper
                modules={[Scrollbar, A11y, Autoplay, FreeMode]}
                spaceBetween={20}
                slidesPerView={6}
                freeMode={true}
                loop={true}
                speed={200000}
                autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: false }}
                slidesPerGroup={44}
                allowTouchMove={false}       // Desactiva el swipe manual
                simulateTouch={false}
                className="w-full"
                breakpoints={{
                    0: { slidesPerView: 3 },
                    640: { slidesPerView: 4 },
                    768: { slidesPerView: 5 },
                    1024: { slidesPerView: 6 },
                    1380: { slidesPerView: 8 },
                }}
            >
                {marcasDup.map((marca, index) => (
                    <SwiperSlide key={index}>
                        <div className="w-[150px] h-[140px] flex justify-center items-center">
                            <img src={marca.img} alt={`marca-${index}`} className="" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div
                className="absolute inset-0 w-full h-full"
                style={{ pointerEvents: 'all', background: 'transparent', zIndex: 10 }}
            />
        </div>
    )
}
