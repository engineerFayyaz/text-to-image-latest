import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./header.css"; // Assuming you have a CSS file named Header.css
import { getUserFromLocalStorage } from "../../Utils/localStorage";
const Header = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch user data from local storage when the component mounts
    const user = getUserFromLocalStorage();
    setUserData(user);
  }, []);

  const handleLogout = () => {
    // Remove user data from local storage
    localStorage.removeItem("user");
    // Redirect to login page
    window.location.reload(); // Reload the page to reflect logout
  };
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
          <div
            className="collapse navbar-collapse justify-content-around"
            id="navbarSupportedContent"
          >
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
          {userData ? (
            <div className="dropdown">
              <Link
                className="navbar-text dropdown-toggle text-light  "
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {userData.name}
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <button className="dropdown-item" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/authentication" className="nav-link text-light">
              Login
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
