import "./App.css";
import About from "./Components/About";

import { BrowserRouter, Routes, Route,    } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Product from "./Components/Product";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Product"element={<Product/>}/>
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
