import "./App.css";
import About from "./Components/About";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Product from "./Components/Product";
import Render from "./Components/Render";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Render" element={<Render />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
