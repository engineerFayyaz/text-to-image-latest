import React, { useState } from "react";
import "./checkout.css";
import Header from "../../components/Header";
const Checkout = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <>
      <Header />
      <div className="checkout-page mt-5">
        <h1>Checkout</h1>
        <div className="data">
          <div className="row">
            <div className="col-md-6 pt-4">
              <h2 className="text-center title">Product Detail</h2>

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
              <h2 className="text-center title ">Product Detail</h2>
                <div className="product py-4 border-bottom-2 border-darkn d-flex flex-wrap align-items-center justify-content-between px-5">
                    <div className="product-image">
                        <img src="/images/bg5.png" className="rounded-3" alt={"productimage"} width={150} />
                    </div>
                    <div className="product-price">
                        <span>$5</span>
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
