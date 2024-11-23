import React from "react";
import { Link } from "react-router-dom";
import style from "./Categories.module.css";
import { categories } from "../../data";

function Categories() {
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
  );
}

export default Categories;
