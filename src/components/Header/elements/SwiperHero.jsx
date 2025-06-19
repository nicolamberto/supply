
import { Swiper, SwiperSlide } from 'swiper/react'
import { Scrollbar, A11y, Autoplay, FreeMode } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/free-mode'
import 'swiper/css/autoplay'
import 'swiper/css/scrollbar'
import 'swiper/css/a11y'

import { features } from '../../../data'

export default function SwiperHero() {
    console.log(features);

    return (
        <div className="absolute bottom-10 right-10 z-20 border-2 border-black">
            <Swiper
                modules={[Scrollbar, A11y, Autoplay, FreeMode]}
                spaceBetween={0}
                slidesPerView={1}
                freeMode={true}
                loop={true}
                speed={2000}
                autoplay={{ delay: 0, disableOnInteraction: false }}
                className=''
            >
                {features.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="text-[25px] font-bold text-[#00491f] bg-transparent">
                            <p>{item.title}</p>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
        </div>

    )
}
