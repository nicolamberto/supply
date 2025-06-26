import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar2";
import useScrollToTop from "./hooks/useScrollToTop";
import { ProductProvider } from "./context/products";
import Footer from "./components/Footer/Footer";
import { DelayedSuspense } from "./wrapper-suspense/DelayedSuspense";
import { BarLoader } from "react-spinners";
import Contact from "./components/Contact/Contact";

const Loader = () => <div className="w-full h-[100vh] flex justify-center items-center text-center py-10">
  <BarLoader color="#00491f" size={100} />
</div>;

const Home = lazy(() => import("./pages/Home/Home"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));
const NewProducts = lazy(() => import("./components/NewProducts/NewProducts"));

function App() {

  /*Hook para llevar las pantallas al top del scroll a la hora de navegar*/
  useScrollToTop();


  return (
    <ProductProvider>

      <div className="app flex justify-center items-center flex-col">
        <DelayedSuspense fallback={<Loader />}>
          <Navbar />
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="/productos" element={<NewProducts />} />
            <Route path="/:slug" element={<NewProducts />} /> 
            <Route path="/" element={<Home />} />
            <Route path="/Presupuesto" element={<Contact />} />
          </Routes>

          <Footer />
        </DelayedSuspense>


      </div>

    </ProductProvider>

  );
}

export default App;
