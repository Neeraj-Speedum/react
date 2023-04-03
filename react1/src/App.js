import "./App.css";
import About from "./Components/About";
import Carousel from "./Components/Carousel";
import Description from "./Components/Description";
import Navbar from "./Components/Navbar";
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
