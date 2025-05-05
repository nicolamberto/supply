import style from "./Products.module.css";
import { Link, useLocation, useParams } from "react-router-dom";
import { products } from "../../data";
import Navbar from "../Navbar/Navbar2";
import Card from "../Card/Card";
import Footer from "../Footer/Footer";
import useTitle from "../../hooks/useTitle";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProducts } from "../../utils/get-products";

function Products({ addToCart, filteredProducts }) {

  const location = useLocation();
  const navigate = useNavigate();


  const currentSlug = decodeURIComponent(location.pathname.split("/").pop());

  // Verificar si la categoría existe
  const isValidCategory = products.some((prod) => prod.category === currentSlug);

  // Redirigir si la categoría no es válida
  if (!isValidCategory) {
    navigate("/404"); // Cambia esto según tu ruta de "NotFound"
    return null;
  }

  // Filtrar productos por categoría
  const filteredProductsLocal = products.filter(
    (prod) => prod.category === currentSlug
  );
  
  useTitle(
    `Supply Argentina | ${currentSlug.replace(/-/g, " ").toUpperCase()}`
  );

  console.log(currentSlug);
  console.log(filteredProductsLocal);
  
  

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

