import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./App.css";
import NotFound from "./pages/NotFound/NotFound";
import Products from "./components/Products/Products";
import { useState, useRef } from "react";
import { products } from "./data";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import Navbar from "./components/Navbar/Navbar";
import Categorias from "./pages/Categorias/Categorias";
import Servicios from "./pages/Servicios/Servicios";
import Productos from "./components/Categories/Categories";
import HeaderPrueba from "./components/HeaderPrueba/HeaderPrueba";
import useScrollToTop from "./hooks/useScrollToTop";
import Carrito from "./pages/Carrito/Carrito";

function App() {
  const [productsCart, setProductsCart] = useState([]); // IDs del carrito
  const [filteredProducts, setFilteredProducts] = useState([]); // Productos seleccionados
  const containerRef = useRef();
  /*Hook para llevar las pantallas al top del scroll a la hora de navegar*/
  useScrollToTop(containerRef);

  function addToCart(id) {
    if (!productsCart.includes(id)) {
      const newCart = [...productsCart, id];
      setProductsCart(newCart);
      updateFilteredProducts(newCart); // Actualiza los productos seleccionados
    }
  }

  function deleteCart() {
    setProductsCart([]);
    updateFilteredProducts([]); // Actualiza los productos seleccionados
  }

  function deleteItem(id) {
    const newCart = productsCart.filter((productId) => productId !== id);
    setProductsCart(newCart); // Actualiza el estado del carrito
    updateFilteredProducts(newCart); // Actualiza los productos filtrados
  }

  function updateFilteredProducts(cartIds) {
    const selectedProducts = products.filter((product) =>
      cartIds.includes(product.id)
    );
    setFilteredProducts(selectedProducts);
  }

  React.useEffect(() => {
    updateFilteredProducts(productsCart);
  }, [productsCart]);

  return (
    <div ref={containerRef} className="app">
      <Navbar orders={productsCart.length} />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/carrito" element={<Carrito setFilteredProducts={filteredProducts} deleteItem={deleteItem} deleteCart={deleteCart} />} />
        <Route path="/404" element={<NotFound />} />

        <Route path="/Productos" element={<Categorias />} />
        <Route
          path="/"
          element={<Home filteredProducts={filteredProducts} />}
        />
        <Route
          path="/:seccion"
          element={
            <Products
              addToCart={addToCart}
              filteredProducts={filteredProducts}
            />
          }
        />
        <Route
          path="/Presupuesto"
          element={
            <ShoppingCart
              deleteItem={deleteItem}
              filteredProducts={filteredProducts}
              deleteCart={deleteCart}
            />
          }
        />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/about" element={<HeaderPrueba />} />
      </Routes>
    </div>
  );
}

export default App;
