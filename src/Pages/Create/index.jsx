import React, { useState } from "react";
import "../../Pages/Create/create.css"; // Import CSS file for styling
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { ArrowLeft } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";

const GuidelinePage = () => {
  const [isOpen, setIsOpen] = useState({});

  // Function to toggle the accordion section
  const toggleAccordion = (section) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <>
      <Header />
      <div className=" p-0  container-fluid banner-top ">
        <div className="banner-title text-center">
          <h2>The Complete Guide to AI Image Generators</h2>
          <a href="/">
            <FontAwesomeIcon icon={faArrowAltCircleLeft} /> go back
          </a>
        </div>
      </div>
      <div className="container all-steps guideline-page">
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
            <h3 className="">Guide</h3>
            <p className="my-3 text-justify ">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                AI image generators are powerful tools to unlock your creative potential and create engaging visuals with ease. You don’t need any technical know-how or prior experience in art to produce amazing artwork. 
                </li>
                <li className="list-group-item">
                As a creator, using an AI image generator gives you lots of artistic freedom. Instead of using the same stock photos as everyone else, you can give your brand a unique look without investing much time or effort.
                </li>
                <li className="list-group-item">
                AI image generators are typically based on deep learning neural networks that are trained on a large dataset of images. The neural network can then be used to generate new images by predicting pixel values based on the patterns it has learned from the training data.
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
      <div className=" mt-0  step-section">
        <div className="page-header steps-title">
          <h4>Image Generator Guideline</h4>
        </div>
        <section className="content">
          <div className="container">
            <div className="accordion">
              {/* How to Use */}
              <div className="accordion-section">
                <button
                  className={`accordion-button ${
                    isOpen["howToUse"] ? "open" : ""
                  }`}
                  onClick={() => toggleAccordion("howToUse")}
                >
                  How to Use{" "}
                  <i
                    className={`fas fa-chevron-${
                      isOpen["howToUse"] ? "up" : "down"
                    }`}
                  />
                </button>
                {isOpen["howToUse"] && (
                  <div className="accordion-content">
                    <ul>
                      <li>
                        <i className="fas fa-user"></i> Log in to your account
                        to access the image generator.
                      </li>
                      <li>
                        <i className="fas fa-cloud-upload-alt"></i> Upload an
                        image or enter text to generate images.
                      </li>
                      <li>
                        <i className="fas fa-paint-brush"></i> Choose the style
                        and size of the poster.
                      </li>
                      <li>
                        <i className="fas fa-magic"></i> Click on the "Generate"
                        button to create images.
                      </li>
                      <li>
                        <i className="fas fa-cart-plus"></i> Add generated
                        images to the cart by clicking on the "Add to Cart"
                        button.
                      </li>
                      <li>
                        <i className="fas fa-shopping-cart"></i> View and manage
                        your cart by clicking on the cart icon.
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Important Notes */}
              <div className="accordion-section">
                <button
                  className={`accordion-button ${
                    isOpen["importantNotes"] ? "open" : ""
                  }`}
                  onClick={() => toggleAccordion("importantNotes")}
                >
                  Important Notes{" "}
                  <i
                    className={`fas fa-chevron-${
                      isOpen["importantNotes"] ? "up" : "down"
                    }`}
                  />
                </button>
                {isOpen["importantNotes"] && (
                  <div className="accordion-content">
                    <ul>
                      <li>
                        <i className="fas fa-user-lock"></i> You need to be
                        logged in to generate images.
                      </li>
                      <li>
                        <i className="fas fa-cloud-lock"></i> Uploaded images
                        are stored securely on Cloudinary.
                      </li>
                      <li>
                        <i className="fas fa-robot"></i> Generated images are
                        created using AI algorithms.
                      </li>
                      <li>
                        <i className="fas fa-palette"></i> You can choose from
                        various art styles for image generation.
                      </li>
                      <li>
                        <i className="fas fa-images"></i> Images can be added to
                        the cart for further processing.
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Additional Information */}
              <div className="accordion-section">
                <button
                  className={`accordion-button ${
                    isOpen["additionalInfo"] ? "open" : ""
                  }`}
                  onClick={() => toggleAccordion("additionalInfo")}
                >
                  Additional Information{" "}
                  <i
                    className={`fas fa-chevron-${
                      isOpen["additionalInfo"] ? "up" : "down"
                    }`}
                  />
                </button>
                {isOpen["additionalInfo"] && (
                  <div className="accordion-content">
                    <ul>
                      <li>
                        <i className="fas fa-envelope"></i> For any further
                        assistance or queries, please contact our customer
                        support.
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default GuidelinePage;
