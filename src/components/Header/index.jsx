import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./header.css"; // Assuming you have a CSS file named Header.css
import { getUserFromLocalStorage } from "../../Utils/localStorage";
import { getAuth } from "firebase/auth";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import CartModal from "../Cart";
const Header = ({ cartItems, handleRemoveFromCart }) => {
  console.log("Props in Header:", cartItems, handleRemoveFromCart);
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
    localStorage.removeItem("user");
    // Redirect to login page
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
    <header className="header-main">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid justify-content-between">
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-5">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#" className="nav-link">
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
          <div className="navbar-text border-0 d-flex align-items-center ">
          <Button onClick={handleToggleCart} className="bg-transparent border-0 " >
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
      {showCart && <CartModal 
      show={showCart} 
      handleClose={handleToggleCart} 
      cartItems={cartItems}
      handleRemoveFromCart={handleRemoveItemFromCart}
      />}
    </header>
  );
};

export default Header;
