import { Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./App.css";
import NotFound from "./pages/NotFound/NotFound";
import Products from "./pages/Products/Products";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/" element={<Home />} />
        <Route path="/:seccion" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
