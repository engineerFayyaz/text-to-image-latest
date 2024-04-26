import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "react-bootstrap-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
const AboutUs = () => {
    return (
        <>
            <>
                <Header />
                <div className=" p-0  container-fluid banner-top ">
        <div className="banner-title text-center">
          <h2>About AI Image Generator</h2>
          <a href="/"><FontAwesomeIcon icon={faArrowAltCircleLeft} /> go back</a>
        </div>
      </div>
                <div className=" step-section mt-0">
        {/* Back button with ArrowLeft icon */}

        <section id="creating" className="pt-5 pb-20">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6"></div>
              <div className="col-md-6"></div>
            </div>
            <div className="row steps-title text-center mb-4">
              <h4>
               About Us
              </h4>
            </div>
            <div className="container all-steps d-flex flex-column  gap-4    ">
              <div className="row p-3 shadow-none border-0  p-md-5  text-black rounded-xl d-flex flex-column flex-md-row align-items-center justify-content-between">
                <div className="col-md-6 p-0 pe-md-5">
                 
                  <p className="my-3 text-justify ">
                  Unlock the creative potential of artificial intelligence with our AI Image Generator. Seamlessly blending advanced algorithms with intuitive user interfaces, our platform empowers users to effortlessly create stunning visuals. Whether you're a seasoned designer or an aspiring artist, our AI Image Generator offers endless possibilities for generating captivating images, from intricate digital art to photorealistic landscapes. Explore, experiment, and unleash your imagination with our cutting-edge AI technology.
                  </p>
                  
                </div>
                <div className="col-md-6">
                  <img
                    src="/images/registerbg.jpg"
                    alt=""
                    width={"100%"}
                    className="rounded-5"
                  />
                </div>
              </div>

              {/* 2 */}
              <div className="row p-3 shadow-none border-0  p-md-5  text-black rounded-xl d-flex flex-column flex-md-row align-items-center justify-content-between">
                <div className="col-md-6">
                  <img
                    src="/images/registerbg1.jpg"
                    alt=""
                    width={"100%"}
                    className="rounded-5"
                  />
                </div>
                <div className="col-md-6 p-0 ps-md-5">
                  <h3 className="">Features</h3>
                  <p className="my-3 text-justify ">
                  <ul className="list-group list-group-flush">
        <li className="list-group-item">Customizable Styles: Choose from a diverse range of artistic styles to apply to your images, from classic paintings to modern abstracts.</li>
        <li className="list-group-item">Intelligent Composition: Let our AI analyze your input and automatically compose visually pleasing images, ensuring every creation is balanced and captivating.</li>
        <li className="list-group-item">Realistic Rendering: Experience stunning realism with our advanced rendering engine, capable of producing lifelike textures, lighting effects, and shadows.</li>
        <li className="list-group-item">Quick Generation: Generate images in seconds with our efficient algorithms, allowing you to explore multiple concepts and ideas rapidly.</li>
      </ul>
                  </p>
     
                </div>
              </div>
              {/* 3 */}
             
            </div>
          </div>
        </section>
      </div>
                <Footer />
            </>

        </>
    )
}
export default AboutUs;