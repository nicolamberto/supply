
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import CategoryCard from "./elements/CategoryCard";
import { useProductContext } from "../../context/products";

function Carrousel({

}) {


    //ARREGLAR TODO EL CODIGO BRO ESTA HECHO UN ASCO
    const {categories} = useProductContext()

  
    

    return (
        <div className='w-[100%] flex flex-col justify-center items-center my-20 relative'>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 items-center gap-8">
                {categories.map((item, index) => (
                    <div className={`relative flex justify-center items-center`} key={index}>
                        <CategoryCard item={item}/>
                    </div>
                ))}
            </div>


        </div>
    );
}

export default Carrousel;
