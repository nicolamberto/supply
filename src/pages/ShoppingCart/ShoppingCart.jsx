import { useState, useRef } from "react";
import style from "./ShoppingCart.module.css";
import useTitle from "../../hooks/useTitle";
import Footer from "../../components/Footer/Footer";
import Formulario from "../../components/Formulario/Formulario";
import CardItem from "../../components/CardItem/CardItem";
import logo from "../../assets/logos/logo_small.png"

function ShoppingCart({ filteredProducts, deleteItem, deleteCart }) {
  useTitle("Presupuestos y consultas | Supply Argentina");
  const [productos, setProductos] = useState(filteredProducts);
  console.log(productos, "prod")


  // Función para manejar el cambio de cantidad de un producto
  const handleQuantityChange = (id, value) => {
    setProductos((prevProductos) =>
      prevProductos.map((producto) =>
        producto.id === id
          ? { ...producto, cantidad: value } // Asegurarse de que la cantidad sea un número
          : producto
      )
    );
  };
  // Filtrar productos que tengan cantidad mayor que 0
  const productosConCantidad = productos.map((producto) => ({
    id: producto.id,
    nombre: producto.name,
    categoria: producto.category,
    cantidad: producto.cantidad === undefined ? 1 : producto.cantidad,
  }));
  const removeProductById = (id) => {
    deleteItem(id)
    setProductos((prevProductos) =>
      prevProductos.filter((producto) => producto.id !== id)
    );
  };
  return (
    <section className={`${style.main}`}>
      <div className={style.container}>
        <div className={style.container_products}>
          <img src={logo} className={style.logo} alt="logo" />
          {filteredProducts.length === 0 ? (
            <span className={style.indicator}>No hay productos para cotizar</span>
          ) : null}
           {filteredProducts?.map((item) => {
            return <CardItem key={item.id} image={item.image[0]} name={item.name} handleQuantityChange={handleQuantityChange} id={item.id} removeProductById={removeProductById} />
           })}
        </div>
        <div className={style.container_form}>
          <Formulario
            productos={productosConCantidad}
            deleteCart={deleteCart}
          />
        </div>
      </div>
    </section>
  );
}

export default ShoppingCart;
