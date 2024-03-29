import React from "react";
import "./header.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {

  return(
    <>
    <header className="header-main ">
  <nav className="navbar navbar-expand-lg navbar-dark">
    <div className="container-fluid justify-content-evenly">
      <a className="navbar-brand" href="#">
        <img src="/images/newlogo.png" width={100} alt="" />
      </a>
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
      <div className="collapse navbar-collapse justify-content-around " id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item text-dark">
            <a className="nav-link  " aria-current="page" href="#">
                AI Image Generator
            </a>
        </li>
        <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#">
                Home
            </a>
        </li>
        <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#">
                How to Use
            </a>
        </li>
        <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#">
                Prompt Guide
            </a>
        </li>
        <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#">
                AI Image Prompts
            </a>
        </li>
    </ul>
</div>

      <span className="navbar-text">
        <a href="">login</a>
      </span>
    </div>
  </nav>
</header>

    </>
  )
}
export default Header;