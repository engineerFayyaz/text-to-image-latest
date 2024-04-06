import React, { useState } from "react";
import "./checkout.css";
import Header from "../../components/Header";
import { ToastContainer, toast } from "react-toastify";
const Checkout = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("your records have been send successfully");
    // Handle form submission
  };

  return (
    <>
      <Header />
      <ToastContainer />
      <div className="checkout-page mt-5">
        <h1>Checkout</h1>
        <div className="data">
          <div className="row">
            <div className="col-md-6 pt-4">
              <h2 className="text-center title">Personal Detail</h2>

              <form onSubmit={handleSubmit} className="w-100">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />

                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                <label htmlFor="address">Address:</label>
                <input
                  type="text"
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />

                <label htmlFor="city">City:</label>
                <input
                  type="text"
                  id="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                />

                <label htmlFor="state">State:</label>
                <input
                  type="text"
                  id="state"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  required
                />

                <label htmlFor="zip">Zip:</label>
                <input
                  type="text"
                  id="zip"
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                  required
                />

                <button type="submit">Submit</button>
              </form>
            </div>
            <div className="col-md-6 product-detail pt-4">
              <div>
                <h2 className="text-center title ">Product Detail</h2>
                <div className="product py-4 border-bottom-2 border-darkn d-flex flex-wrap align-items-center justify-content-between px-5">
                  <div className="product-image">
                    <img
                      src="/images/bg5.png"
                      className="rounded-3"
                      alt={"productimage"}
                      width={150}
                    />
                  </div>
                  <div className="product-price">
                    <span>$5</span>
                  </div>
                </div>
              </div>
              {/* card details */}
              <div className="container p-0 payment-details">
                <div className="card px-4">
                  <p className="h8 py-3">Payment Details</p>
                  <div className="row gx-3">
                    <div className="col-12">
                      <div className="d-flex flex-column">
                        <p className="text mb-1">Person Name</p>
                        <input
                          className="form-control mb-3"
                          type="text"
                          placeholder="Name"
                          defaultValue="Barry Allen"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="d-flex flex-column">
                        <p className="text mb-1">Card Number</p>
                        <input
                          className="form-control mb-3"
                          type="text"
                          placeholder="1234 5678 435678"
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="d-flex flex-column">
                        <p className="text mb-1">Expiry</p>
                        <input
                          className="form-control mb-3"
                          type="text"
                          placeholder="MM/YYYY"
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="d-flex flex-column">
                        <p className="text mb-1">CVV/CVC</p>
                        <input
                          className="form-control mb-3 pt-2 "
                          type="password"
                          placeholder="***"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="btn btn-primary mb-3">
                        <span className="ps-3">Pay $243</span>
                        <span className="fas fa-arrow-right" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
