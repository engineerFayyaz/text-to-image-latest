import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./header.css"; // Assuming you have a CSS file named Header.css

const Header = () => {
  return (
    <header className="header-main">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid justify-content-evenly">
          <Link to="/" className="navbar-brand">
            <img src="/images/newlogo.png" width={100} alt="Logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse justify-content-around" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link to="#" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#" className="nav-link">
                  AI Image Generator
                </Link>
              </li>
             
              <li className="nav-item">
                <Link to="/How-to-use" className="nav-link">
                  How to Use
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Prompt-guide" className="nav-link">
                  Prompt Guide
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#" className="nav-link">
                  AI Image Prompts
                </Link>
              </li>
            </ul>
          </div>
          <span className="navbar-text">
            <Link to="#" className="nav-link">Login</Link>
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
