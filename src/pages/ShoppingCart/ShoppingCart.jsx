import { useState } from "react";
import style from "./ShoppingCart.module.css";
import useTitle from "../../hooks/useTitle";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function ShoppingCart({ filteredProducts, deleteItem }) {
  useTitle("Presupuestos y consultas | Supply Argentina");

  return (
    <section className={`${style.main}`}>
      <Navbar orders={filteredProducts.length} />
      <div className={style.cartWindow}>
        <h2>Consultas y Pedidos</h2>
        <div className={style.pantallaMovil}>
          <h2>
            Este servicio de pedidos no está disponible para version movil
          </h2>
        </div>
        <div className={style.container_content}>
          <div className={style.container_products}>
            {filteredProducts?.map((item, index) => (
              <section className={style.product}>
                <img src={item.image[0]} alt="" />
                <h2>{item.name}</h2>
                <div className={style.container_input}>
                  <span>Cantidad</span>
                  <input type="number" min={1} max={100} defaultValue={1} />
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
            <form action="/enviar" method="POST" className={style.formulario}>
              <label htmlFor="email" className={style.label}>
                <span>Email:</span>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className={style.input}
                />
              </label>

              <label htmlFor="telefono" className={style.label}>
                <span>Teléfono:</span>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  required
                  className={style.input}
                />
              </label>

              <label htmlFor="nombre" className={style.label}>
                <span>Nombre:</span>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  required
                  placeholder="Opcional"
                  className={style.input}
                />
              </label>

              <label htmlFor="mensaje" className={style.label}>
                <span>Mensaje:</span>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  required
                  className={style.input}
                  placeholder="Opcional"
                ></textarea>
              </label>

              <button type="submit" className={style.button_form}>
                Enviar Pedido
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default ShoppingCart;
