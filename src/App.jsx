import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./App.css";
import NotFound from "./pages/NotFound/NotFound";
import Products from "./pages/Products/Products";
import { useState } from "react";
import { products } from "./data";
import list from "../src/assets/isotipos/lista.png";
import Orders from "./pages/Orders/Orders";



function App() {
  const [productsCart, setProductsCart] = useState([]); // IDs del carrito
  const [filteredProducts, setFilteredProducts] = useState([]); // Productos seleccionados

  // Función para agregar al carrito evitando duplicados
  function addToCart(id) {
    if (!productsCart.includes(id)) {
      const newCart = [...productsCart, id];
      setProductsCart(newCart);
      updateFilteredProducts(newCart); // Actualiza los productos seleccionados
    }
  }

  // Función para actualizar los productos seleccionados
  function updateFilteredProducts(cartIds) {
    const selectedProducts = products.filter((product) =>
      cartIds.includes(product.id)
    );
    setFilteredProducts(selectedProducts);
  }

  // Llamada inicial para sincronizar los productos filtrados (opcional)
  React.useEffect(() => {
    updateFilteredProducts(productsCart);
  }, [productsCart]);

  console.log(filteredProducts);

  return (
    <div className="app">
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home filteredProducts={filteredProducts} />} />
        <Route
          path="/:seccion"
          element={
            <Products
              addToCart={addToCart}
              filteredProducts={filteredProducts}
            />
          }
        />
        <Route path="/Presupuesto" element={<Orders filteredProducts={filteredProducts}/>}/>
      </Routes>
    </div>
  );
}

export default App;
