import style from "./Products.module.css";
import { Link, useLocation } from "react-router-dom";
import { products } from "../../data";
import Navbar from "../Navbar/Navbar";
import Card from "../Card/Card";
import Footer from "../Footer/Footer";
import useTitle from "../../hooks/useTitle";

function Products({ addToCart, filteredProducts }) {
  const location = useLocation();
  const currentSlug = decodeURIComponent(location.pathname.split("/").pop());

  // Filtrar productos por categoría
  const filteredProductsLocal = products.filter(
    (prod) => prod.category === currentSlug
  );
  useTitle(
    `Supply Argentina | ${currentSlug.replace(/-/g, " ").toUpperCase()}`
  );

  return (
    <section className={style.productsPage}>
      <h2 className={style.pageTitle}>
        {currentSlug.replace(/-/g, " ").toUpperCase()}
      </h2>
      <div className={style.productsGrid}>
        {filteredProductsLocal.map((item) => (
          <Card
            key={item.id}
            image={item.image}
            name={item.name}
            description={item.description}
            technicalDetails={item.technicalDetails}
            addToCart={addToCart}
            id={item.id}
          />
        ))}
      </div>
      <Footer />
    </section>
  );
}

export default Products;
