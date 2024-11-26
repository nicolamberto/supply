import React from 'react'
import style from "./CategoriesProducts.module.css"
import { categories } from "../../data";
import { Link } from "react-router-dom";


function CategoriesProducts() {
  return (
    <div className={style.main}>
      <h1 className={style.title}>PRODUCTOS PLÁSTICOS INDUSTRIALES</h1>
      <section className={style.content}>
        {categories.map((item, index) => (
          <Link
            style={{ textDecoration: "none" }}
            key={item.id}
            to={`/${item.slug}`}
            className={style.item}
          >
            <div className={style.item}>
              <div className={style.container_image}>
                <img
                  className={style.image}
                  src={item.imagen}
                  alt={`Producto numero ${index + 1}°`}
                />
              </div>
              <div className={style.container_title}>
                <h3>{item.nombre}</h3>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  )
}

export default CategoriesProducts