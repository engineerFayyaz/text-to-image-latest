import React from "react";
import { Modal, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const CartModal = ({  show, handleClose, cartItems, handleRemoveFromCart }) => {
  // Function to handle navigation to checkout with the image URL
  const handleCheckout = (imageUrl) => {
    handleClose(); // Close the modal before navigating
    // Navigate to checkout with the image URL as state
    window.location.href = `/checkout?imageUrl=${encodeURIComponent(imageUrl)}`;
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Your Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      {cartItems && cartItems.length > 0 ? (
          <div className="cart-items">
            {cartItems.map((url, index) => (
              <div
                key={index}
                className="cart-item d-flex align-items-center justify-content-between bg-dark rounded-2 p-3"
              >
                <div className="thumbnail rounded-5">
                  <img
                    src={url} // Use the URL directly
                    alt={`Item ${index + 1}`}
                    width={100}
                  />
                  {/* You can add name if available */}
                </div>
                <div className="price">
                  <span className="text-light">$5</span>
                </div>
                <button
                  onClick={() => handleRemoveFromCart(url)} // Pass URL to remove function
                  className="bg-danger text-light p-2 shadow-none rounded-2 border-0"
                >
                  <FontAwesomeIcon className="me-2" icon={faClose} />Delete
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-muted">
            Your cart is empty! Add items to proceed
          </p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" disabled={!cartItems || cartItems.length === 0}>
        <span
            className="text-light"
            onClick={() => handleCheckout(cartItems[0])} // Pass the first image URL to handleCheckout
          >
            Proceed To Checkout
          </span>

        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CartModal;
