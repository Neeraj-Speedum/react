import React from "react";
import img1 from "N:\react\react1srccomponentsimagesc5.jpeg";

export default function Carousel() {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleCaptions"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner w-100">
        <div className="carousel-item  active">
          <img src={img1} className="d-block w-100" alt="..." />
          <div className=" carousel-caption tea text1">
            <h2>WE ARE BUILDERS</h2>
            <h1>WE WILL BUILD YOUR DREAM</h1>
            <span className="line"></span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
              quaerat.
            </p>

            <div className="btn">
              <a href="/" className="button1">
                OUR PORTFOLIO
              </a>
              <a href="/" className="button2">
                ABOUT US
              </a>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <img src="./images/c4.jpeg" className="d-block w-100" alt="..." />
          <div className="carousel-caption">
            <h4>It all starts with a vision, let us help make it a reality</h4>
          </div>
        </div>

        <div className="carousel-item">
          <img src="./images/c6.jpg" className="d-block w-100" alt="..." />
          <div className="carousel-caption">
            <h5>Connecting Lives with Bridges</h5>
          </div>
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-target="#carouselExampleCaptions"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-target="#carouselExampleCaptions"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </button>
    </div>
  );
}
