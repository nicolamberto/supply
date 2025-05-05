import React from 'react'
import style from "./CategoriesProducts.module.css"
import { categories } from "../../data";
import { Link } from "react-router-dom";


function CategoriesProducts() {
  return (
    <div className={` w-full flex flex-col items-center justify-center py-20 bg-[#FDFAF6]`}>
      <h1 className={`w-full flex justify-center items-center font-bold text-[30px] text-black/90 ${style.title}`}>PRODUCTOS PLÁSTICOS INDUSTRIALES</h1>
      <section className={`${style.content} w-[60%] h-auto box-border grid grid-cols-4 gap-5   justify-items-center`}>
        {categories.map((item, index) => (
          <Link
            style={{ textDecoration: "none" }}
            key={item.id}
            to={`/${item.slug}`}
            className={`border-2 border-green-700 rounded-lg bg-[#E4EFE7] w-[100%] h-[100%] flex flex-col flex-nowrap justify-between items-center box-border shadow-sm`}
          >
            <div className={`${style.item} w-[100%] h-[100%] flex flex-col flex-nowrap justify-between items-center box-border`}>
              <div className={`${style.container_image}`}>
                <img
                  className={`${style.image} border-b-2 border-green-700 rounded-t-lg`}
                  src={item.imagen}
                  alt={`Producto numero ${index + 1}°`}
                />
              </div>
              <div className={`${style.container_title}`}>
                <h3 className='text-[#123524] uppercase font-semibold text-[15px]'>{item.nombre}</h3>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  )
}

export default CategoriesProducts