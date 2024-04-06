import React from "react";
import { Modal, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const CartModal = ({ show, handleClose, cartItems, handleRemoveFromCart }) => {

    
  return (
    <Modal show={show} onHide={handleClose} centered  large >
      <Modal.Header closeButton>
        <Modal.Title>Your Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cartItems.length > 0 ? (
          <div className="cart-items">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="cart-item d-flex align-items-center justify-content-between bg-dark rounded-2 p-3"
              >
                <img
                  src={item}
                  alt={`Item ${index + 1}`}
                  className="thumbnail rounded-5"
                  width={100}
                />
                <div className="price">
                  <span className="text-light">$5</span>
                </div>
                <button
                  onClick={() => handleRemoveFromCart(item)}
                  className="bg-danger text-light p-2 shadow-none rounded-2 border-0"
                >
                  <FontAwesomeIcon className="me-2" icon={faClose} />Delete
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-muted">Your cart is empty! Add items to proceed</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" disabled={cartItems.length === 0}>
          <Link to={"/checkout"} className="text-light" >
         Proceed To Checkout
         </Link>
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CartModal;
