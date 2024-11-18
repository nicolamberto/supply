import style from "./Categories.module.css";
import { categories } from "../../data";
import Card from "../Card/Card";
import { Link } from "react-router-dom";

function Categories() {
  return (
    <section className={style.categories_main}>
      <div className={style.header}>
        <h1>PRODUCTOS PLÁSTICOS INDUSTRIALES</h1>
      </div>
      <div className={style.container_categories}>
        {categories.map((item) => (
          <Link style={{textDecoration: "none"}} key={item.id} to={`/${item.slug}`} className={style.item}>
            <img src={item.imagen} alt="" />
            <div className={style.title}>
              <h2>{item.nombre}</h2>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Categories;
