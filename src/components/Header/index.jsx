import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./header.css"; // Assuming you have a CSS file named Header.css
import { getUserFromLocalStorage } from "../../Utils/localStorage";
import { getAuth } from "firebase/auth";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import CartModal from "../Cart";
const Header = ({ cartItems }) => {
  const [userData, setUserData] = useState(null);
  const auth = getAuth();
  const [showCart, setShowCart] = useState(false);
  const [CartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Fetch user data from local storage when the component mounts
    const user = getUserFromLocalStorage();
    setUserData(user);
  }, []);

  const handleLogout = () => {
    // Remove user data from local storage
    auth.signOut();
    localStorage.removeItem("user");
    // Redirect to login page
    toast.success("user logout successfully");
    window.location.reload(); // Reload the page to reflect logout
  };

  const handleToggleCart = () => {
    setShowCart(!showCart);
  };
  // const handleRemoveItemFromCart = (itemToRemove) => {
  //   const updatedCart = cartItems.filter((item) => item !== itemToRemove);
  //   handleRemoveFromCart(updatedCart); // Invoke handleRemoveFromCart from props

  // };
  const handleRemoveItemFromCart = (itemToRemove) => {
    const index = cartItems.indexOf(itemToRemove);
    if (index !== -1) {
      cartItems.splice(index, 1);
      setCartItems([...cartItems]); // Trigger state update by creating a new array reference
    }
  };

  return (
    <>
      <header className="header-main">
        <ToastContainer />
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container-fluid py-md-0 justify-content-between">
            <Link to="/" className="navbar-brand">
              <img src="/images/logo-3.png" width={80} alt="Logo" />
            </Link>
            <div className="mobile-toggler d-flex d-md-none align-items-center gap-3">
              <FontAwesomeIcon
                icon={faCartShopping}
                onClick={handleToggleCart}
              />
              {userData ? (
                <div class="dropdown open dropstart">
                  <FontAwesomeIcon
                    icon={faUser}
                    className="dropdown-toggle"
                    id="triggerId"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  />
                  <div class="dropdown-menu px-0 pt-0 " aria-labelledby="triggerId">
                    <button class="dropdown-item bg-success text-light w-100 " href="#">
                      {userData.email}
                    </button>
                    <button className="dropdown-item w-100" onClick={handleLogout}>
                      Logout
                    </button>
                  </div>
                </div>
              ) : (
                <div class="dropdown open dropstart">
                  <FontAwesomeIcon
                    icon={faUser}
                    className="dropdown-toggle"
                    id="triggerId"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  />
                  <div class="dropdown-menu" aria-labelledby="triggerId">
                    <button class="dropdown-item" href="#">
                     <a href="/login">Login</a>
                    </button>
                    
                  </div>
                </div>
              )}
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
            </div>

            <div
              className="collapse navbar-collapse justify-content-around"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-5">
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/create-Guide" className="nav-link">
                    Create
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/How-to-use" className="nav-link">
                    Tutorial
                  </Link>
                </li>
              </ul>
            </div>
            <div className="navbar-text border-0 d-none d-md-flex align-items-center ">
              <Button
                onClick={handleToggleCart}
                className="bg-transparent border-0 "
              >
                <FontAwesomeIcon icon={faCartShopping} />
              </Button>
              {userData ? (
                <div className="dropdown dropstart">
                  <button
                    className="btn btn-outline-info navbar-text dropdown-toggle text-light"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {/* {userData.name} */}
                    {userData.email.split("@")[0]}
                  </button>
                  <ul className="dropdown-menu  ">
                    <li>
                      <button className="dropdown-item" onClick={handleLogout}>
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              ) : (
                <div className="d-flex gap-3">
                  <Link
                    to="/authentication"
                    className="nav-link login-text text-light"
                  >
                    Login
                  </Link>
                </div>
              )}
            </div>
          </div>
        </nav>
        {showCart && (
          <CartModal
            show={showCart}
            handleClose={handleToggleCart}
            cartItems={cartItems}
            handleRemoveFromCart={handleRemoveItemFromCart}
          />
        )}
      </header>

      {/* <div className="header-main">
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="javascript:void(0)">
              Logo
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mynavbar"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="mynavbar">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <a className="nav-link" href="javascript:void(0)">
                    Link
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="javascript:void(0)">
                    Link
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="javascript:void(0)">
                    Link
                  </a>
                </li>
              </ul>
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="text"
                  placeholder="Search"
                />
                <button className="btn btn-primary" type="button">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div> */}
    </>
  );
};

export default Header;
