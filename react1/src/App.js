import "./App.css";
import Carousel from "./components/Carousel";
import Discription from "./components/Discription";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Carousel></Carousel>
      <Discription name="elvo Constructions" /> {/*--->props with value */}
      {/* <Discription name="111"/ > */}
      {/*--->props with proptype*/}
      {/* <Discription/> */} {/*--->props with default value */}
    </>
  );
}

export default App;
