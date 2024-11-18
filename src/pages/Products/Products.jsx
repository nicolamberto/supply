import style from "./Products.module.css";
import { useLocation } from "react-router-dom";
import { products } from "../../data";
import Navbar from "../../components/Navbar/Navbar";
import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";

function Products() {
  const location = useLocation();
  const currentSlug = decodeURIComponent(location.pathname.split("/").pop());

  // Encuentra la categoría correspondiente al slug
  const category = products.find((cat) => cat.slug === currentSlug);

  // Filtra los productos
  const filteredProducts = products.filter(
    (prod) => prod.category === currentSlug
  );
console.log(filteredProducts);

  return <section className={style.products_main}>
    <Navbar/>
    <h2>{currentSlug.replace(/-/g, " ").toUpperCase()}</h2>
    <div className={style.container_products}>
    {filteredProducts.map((item, index) => <Card image={item.image[0]} title={item.name}/>)}
    </div>
    <Footer/>
  </section>;
}

export default Products;
