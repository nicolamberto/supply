import { useState, useRef } from "react";
import style from "./ShoppingCart.module.css";
import useTitle from "../../hooks/useTitle";
import Footer from "../../components/Footer/Footer";
import Formulario from "../../components/Formulario/Formulario";

function ShoppingCart({ filteredProducts, deleteItem }) {
  useTitle("Presupuestos y consultas | Supply Argentina");
  const [productos, setProductos] = useState(filteredProducts);

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
    nombre: producto.name,
    cantidad: producto.cantidad === undefined ? 1 : producto.cantidad,
  }));
  return (
    <section className={`${style.main}`}>
      <h2>Consultas y Pedidos</h2>
      <div className={style.cartWindow}>
        <div className={style.container_products}>
          {filteredProducts.length === 0 ? (
            <h2>No hay productos para cotizar</h2>
          ) : null}
          {filteredProducts?.map((item, index) => (
            <section key={item.id} className={style.product}>
              <img src={item.image[0]} alt="" />
              <span>{item.name}</span>
              <div className={style.container_input}>
                <span>Cantidad</span>
                <input
                  type="number"
                  onChange={(e) =>
                    handleQuantityChange(item.id, e.target.value)
                  }
                  min={1}
                  max={100}
                  defaultValue={1}
                />
              </div>

              <button
                onClick={() => deleteItem(item.id)}
                className={style.button}
              >
                X
              </button>
            </section>
          ))}
        </div>
        <div className={style.container_form}>
          <Formulario productos={productosConCantidad} />
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default ShoppingCart;
