import React from "react";
import { Carousel } from "react-bootstrap";
import "../../components/TrustedUser/trusted.css";

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 testimonials">
            <div className="training-title">
              <h4 className="aoe-title">Testimonials</h4>
              <div className="line" />
            </div>
            <div className="col-center m-auto">
              <Carousel interval={5000} pause={false} indicators={true}>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqL2MZ94hPxBWhWXByd-D67XZ62xixFtSoSw&s"
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h4 className="carousel-title">Awesome Text to Image Tool!</h4>
                    <div className="carousel-line" />
                    <p className="testimonial">
                      <span>"</span> This text to image tool is fantastic! It's
                      easy to use and produces high-quality images every time. I
                      love how it saves me so much time and effort in creating
                      visuals for my projects.
                    </p>
                    <p className="overview">
                      <b>- John Doe</b>
                    </p>
                    <h6 className="company-name">Graphic Designer</h6>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqL2MZ94hPxBWhWXByd-D67XZ62xixFtSoSw&s"
                    alt="Second slide"
                  />
                  <Carousel.Caption>
                    <h4 className="carousel-title">Incredible Text to Image Converter!</h4>
                    <div className="carousel-line" />
                    <p className="testimonial">
                      <span>"</span> I'm amazed by how easy it is to turn text into
                      stunning images with this tool. It's a game-changer for my
                      content creation process.
                    </p>
                    <p className="overview">
                      <b>- Jane Smith</b>
                    </p>
                    <h6 className="company-name">Content Creator</h6>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqL2MZ94hPxBWhWXByd-D67XZ62xixFtSoSw&s"
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                    <h4 className="carousel-title">Fantastic Text to Image Solution!</h4>
                    <div className="carousel-line" />
                    <p className="testimonial">
                      <span>"</span> This tool has revolutionized the way I create
                      images from text. It's intuitive and produces amazing results.
                    </p>
                    <p className="overview">
                      <b>- Emily Johnson</b>
                    </p>
                    <h6 className="company-name">Social Media Manager</h6>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqL2MZ94hPxBWhWXByd-D67XZ62xixFtSoSw&s"
                    alt="Fourth slide"
                  />
                  <Carousel.Caption>
                    <h4 className="carousel-title">Easy-to-Use Text to Image Tool!</h4>
                    <div className="carousel-line" />
                    <p className="testimonial">
                      <span>"</span> I've tried many text to image tools, but this
                      one stands out for its simplicity and efficiency.
                    </p>
                    <p className="overview">
                      <b>- Alex Williams</b>
                    </p>
                    <h6 className="company-name">Blogger</h6>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqL2MZ94hPxBWhWXByd-D67XZ62xixFtSoSw&s"
                    alt="Fifth slide"
                  />
                  <Carousel.Caption>
                    <h4 className="carousel-title">Impressive Text to Image Generator!</h4>
                    <div className="carousel-line" />
                    <p className="testimonial">
                      <span>"</span> This tool has made my content creation process
                      much smoother. I highly recommend it to anyone needing
                      high-quality images from text.
                    </p>
                    <p className="overview">
                      <b>- Sarah Brown</b>
                    </p>
                    <h6 className="company-name">Digital Marketer</h6>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqL2MZ94hPxBWhWXByd-D67XZ62xixFtSoSw&s"
                    alt="Sixth slide"
                  />
                  <Carousel.Caption>
                    <h4 className="carousel-title">Amazing Text to Image Converter!</h4>
                    <div className="carousel-line" />
                    <p className="testimonial">
                      <span>"</span> I've been using this tool for a while now, and
                      it never fails to impress me with its output quality.
                    </p>
                    <p className="overview">
                      <b>- Michael Smith</b>
                    </p>
                    <h6 className="company-name">Web Developer</h6>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqL2MZ94hPxBWhWXByd-D67XZ62xixFtSoSw&s"
                    alt="Seventh slide"
                  />
                  <Carousel.Caption>
                    <h4 className="carousel-title">Efficient Text to Image Tool!</h4>
                    <div className="carousel-line" />
                    <p className="testimonial">
                      <span>"</span> This tool has significantly sped up my workflow.
                      I'm impressed by how quickly I can create professional-looking
                      images.
                    </p>
                    <p className="overview">
                      <b>- David Johnson</b>
                    </p>
                    <h6 className="company-name">Freelancer</h6>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqL2MZ94hPxBWhWXByd-D67XZ62xixFtSoSw&s"
                    alt="Eighth slide"
                  />
                  <Carousel.Caption>
                    <h4 className="carousel-title">Great Text to Image Solution!</h4>
                    <div className="carousel-line" />
                    <p className="testimonial">
                      <span>"</span> I'm so glad I found this tool. It's been a
                      lifesaver for my graphic design projects.
                    </p>
                    <p className="overview">
                      <b>- Laura Miller</b>
                    </p>
                    <h6 className="company-name">Designer</h6>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
