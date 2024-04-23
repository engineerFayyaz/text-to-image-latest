import React, { useState } from 'react';
import '../../Pages/Create/create.css'; // Import CSS file for styling
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { ArrowLeft } from "react-bootstrap-icons";
import { Link } from 'react-router-dom';

const GuidelinePage = () => {
  const [isOpen, setIsOpen] = useState({});

  // Function to toggle the accordion section
  const toggleAccordion = (section) => {
    setIsOpen(prevState => ({
      ...prevState,
      [section]: !prevState[section]
    }));
  };

  return (
    <>
      <Header />
      <div className="guideline-page">
      <div className="back-link align-items-center justify-content-center d-md-flex">
          <div className=" link">
            <Link to="/">
              <ArrowLeft size={24} /> Back
            </Link>
          </div>
        </div>
        <div className="page-header">
          <h1>Welcome to Image Generator Guideline Page</h1>
        </div>
        <section className="content">
          <div className="accordion">
            {/* How to Use */}
            <div className="accordion-section">
              <button className={`accordion-button ${isOpen['howToUse'] ? 'open' : ''}`} onClick={() => toggleAccordion('howToUse')}>
                How to Use <i className={`fas fa-chevron-${isOpen['howToUse'] ? 'up' : 'down'}`} />
              </button>
              {isOpen['howToUse'] && (
                <div className="accordion-content">
                  <ul>
                    <li><i className="fas fa-user"></i> Log in to your account to access the image generator.</li>
                    <li><i className="fas fa-cloud-upload-alt"></i> Upload an image or enter text to generate images.</li>
                    <li><i className="fas fa-paint-brush"></i> Choose the style and size of the poster.</li>
                    <li><i className="fas fa-magic"></i> Click on the "Generate" button to create images.</li>
                    <li><i className="fas fa-cart-plus"></i> Add generated images to the cart by clicking on the "Add to Cart" button.</li>
                    <li><i className="fas fa-shopping-cart"></i> View and manage your cart by clicking on the cart icon.</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Important Notes */}
            <div className="accordion-section">
              <button className={`accordion-button ${isOpen['importantNotes'] ? 'open' : ''}`} onClick={() => toggleAccordion('importantNotes')}>
                Important Notes <i className={`fas fa-chevron-${isOpen['importantNotes'] ? 'up' : 'down'}`} />
              </button>
              {isOpen['importantNotes'] && (
                <div className="accordion-content">
                  <ul>
                    <li><i className="fas fa-user-lock"></i> You need to be logged in to generate images.</li>
                    <li><i className="fas fa-cloud-lock"></i> Uploaded images are stored securely on Cloudinary.</li>
                    <li><i className="fas fa-robot"></i> Generated images are created using AI algorithms.</li>
                    <li><i className="fas fa-palette"></i> You can choose from various art styles for image generation.</li>
                    <li><i className="fas fa-images"></i> Images can be added to the cart for further processing.</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Additional Information */}
            <div className="accordion-section">
              <button className={`accordion-button ${isOpen['additionalInfo'] ? 'open' : ''}`} onClick={() => toggleAccordion('additionalInfo')}>
                Additional Information <i className={`fas fa-chevron-${isOpen['additionalInfo'] ? 'up' : 'down'}`} />
              </button>
              {isOpen['additionalInfo'] && (
                <div className="accordion-content">
                  <ul>
                    <li><i className="fas fa-envelope"></i> For any further assistance or queries, please contact our customer support.</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default GuidelinePage;
