import React from "react";
import style from "./Carrito.module.css";
import Formulario from "../../components/Formulario/Formulario";
import { useState } from "react";
import useTitle from "../../hooks/useTitle";
function Carrito({ filteredProducts, deleteItem, deleteCart }) {
  useTitle("Presupuestos y consultas | Supply Argentina");
  const [productos, setProductos] = useState(filteredProducts);
  // Función para manejar el cambio de cantidad de un producto

  // Filtrar productos que tengan cantidad mayor que 0
  const productosConCantidad = productos.map((producto) => ({
    nombre: producto.name,
    categoria: producto.category,
    cantidad: producto.cantidad === undefined ? 1 : producto.cantidad,
  }));
  return (
    <div className={style.main}>
      <div className={style.container}>
        <div className={style.container_products}></div>
        <div className={style.container_form}>
          <Formulario  productos={productosConCantidad} deleteCart={deleteCart} />
        </div>
      </div>
    </div>
  );
}

export default Carrito;
