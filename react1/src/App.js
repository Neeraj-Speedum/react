import "./App.css";
import About from "./components/About";
import Carousel from "./components/Carousel";
import Description from "./components/Description";
import Navbar from "./components/Navbar";
import {  Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Carousel></Carousel>
      <Description name="elvo Constructions" /> {/*--->props with value */}
      {/* <Discription name="111"/ > */}
      {/*--->props with proptype*/}
      {/* <Discription/> */} {/*--->props with default value */}
      {/* <Allnavlinks /> */}
      <Routes>
        <Route path="/About" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
