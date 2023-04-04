import React from "react";
import Carousel from "./Carousel";
import Description from "./Description";

export default function Home() {
  return (
    <>
      <Carousel></Carousel>
      <Description name="elvo Constructions" /> {/*--->props with value */}
      {/* <Discription name="111"/ > */}
      {/*--->props with proptype*/}
      {/* <Discription/> */} {/*--->props with default value */}
      {/* <Allnavlinks /> */}
    </>
  );
}
