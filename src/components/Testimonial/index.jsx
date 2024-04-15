import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "./testi.css";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleIndicatorClick = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <section className="testimonial">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-none d-lg-block">
            <ol className="carousel-indicators tabs">
              <li
                onClick={() => handleIndicatorClick(0)}
                className={activeIndex === 0 ? "active" : ""}
              >
                <figure>
                  <img
                    src="https://livedemo00.template-help.com/wt_62267_v8/prod-20823-one-service/images/testimonials-01-179x179.png"
                    className="img-fluid"
                    alt=""
                  />
                </figure>
              </li>
              <li
                onClick={() => handleIndicatorClick(1)}
                className={activeIndex === 1 ? "active" : ""}
              >
                <figure>
                  <img
                    src="https://livedemo00.template-help.com/wt_62267_v8/prod-20823-one-service/images/testimonials-02-306x306.png"
                    className="img-fluid"
                    alt=""
                  />
                </figure>
              </li>
              <li
                onClick={() => handleIndicatorClick(2)}
                className={activeIndex === 2 ? "active" : ""}
              >
                <figure>
                  <img
                    src="https://livedemo00.template-help.com/wt_62267_v8/prod-20823-one-service/images/testimonials-03-179x179.png"
                    className="img-fluid"
                    alt=""
                  />
                </figure>
              </li>
            </ol>
          </div>
          <div className="col-lg-6 d-flex justify-content-center align-items-center">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
              <h1>TESTIMONIALS</h1>
              <Carousel activeIndex={activeIndex} onSelect={(selectedIndex) => setActiveIndex(selectedIndex)} interval={null}>
                <Carousel.Item>
                  <div className="quote-wrapper">
                    <p>I'm so glad I found this tool. It's been a lifesaver for my graphic design projects.</p>
                    <h3>peter lee</h3>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="quote-wrapper">
                    <p>I'm amazed by how easy it is to turn text into stunning images with this tool. It's a game-changer for my content creation process.</p>
                    <h3>peter lee</h3>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="quote-wrapper">
                    <p>This tool has made my content creation process much smoother. I highly recommend it to anyone needing high-quality images from text.</p>
                    <h3>peter lee</h3>
                  </div>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
