import style from "./Products.module.css";
import { Link, useLocation } from "react-router-dom";
import { products } from "../../data";
import Navbar from "../../components/Navbar/Navbar";
import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";
import useTitle from "../../hooks/useTitle";
import list from "../../assets/isotipos/lista.png";
function Products({ addToCart, filteredProducts }) {
  const location = useLocation();
  const currentSlug = decodeURIComponent(location.pathname.split("/").pop());

  // Filtra los productos
  const filteredProductsLocal = products.filter(
    (prod) => prod.category === currentSlug
  );
  useTitle(
    `${currentSlug.replace(/-/g, " ").toUpperCase()} | Supply Argentina`
  );

  return (
    <section className={style.products_main}>
      <h2>{currentSlug.replace(/-/g, " ").toUpperCase()}</h2>
      <div className={style.container_products}>
        {filteredProductsLocal.map((item) => (
          <Card
            key={item.id}
            image={item.image[0]}
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
