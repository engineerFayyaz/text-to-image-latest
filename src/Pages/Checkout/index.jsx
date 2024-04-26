import React, { useState, useEffect } from "react";
import "./checkout.css";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header";
import { ToastContainer, toast } from "react-toastify";
import { firestore } from "../../firebaseConfig";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const Checkout = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const imageUrl = searchParams.get("imageUrl");

  const [imageUrlState, setImageUrl] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [error, setError] = useState(null);
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    if (imageUrl) {
      setImageUrl(imageUrl);
    }
  }, [imageUrl]);

  const saveCheckoutData = async (paymentMethodId) => {
    try {
      const checkoutRef = firestore.collection("checkouts");
      // Save checkout data to Firestore
      await checkoutRef.add({
        name,
        email,
        address,
        city,
        state,
        zip,
        cardName,
        cardNumber,
        expiry,
        cvv,
        imageUrl: imageUrlState,
        paymentMethodId,
        timestamp: new Date(),
      });
    } catch (error) {
      console.error("Error saving checkout data:", error);
      throw error; // Throw error for better error handling
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement),
        billing_details: {
          name: name,
          email: email,
          address: {
            line1: address,
            city: city,
            state: state,
            postal_code: zip
          }
        }
      });

      if (error) {
        console.error("Error creating payment method:", error);
        setError(error.message);
        return;
      }

      // Payment method created successfully, save checkout data
      await saveCheckoutData(paymentMethod.id);
      toast.success("Your order has been placed successfully");
    } catch (error) {
      console.error("Error processing payment:", error);
      setError("An error occurred while processing your payment");
    }
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
                 <CardElement options={{ style: { base: { fontSize: "16px" } } }} />
                 {error && <div className="error-message">{error}</div>}
                <button type="submit" className="btn btn-primary mb-3">
                  <span className="ps-3">Pay $5</span>
                </button>
              </form>
            </div>
            <div className="col-md-6 product-detail pt-4">
              <div className="product">
              <h2 className="text-center title">Product Detail</h2>
              {imageUrlState && (
                <div className="product-detail pt-4">
                  <div className="product py-4 border-bottom-2 border-dark d-flex flex-wrap align-items-center justify-content-between px-5">
                    <div className="product-image">
                      <img
                        src={imageUrlState}
                        className="rounded-3"
                        alt="product"
                        width={150}
                      />
                    </div>
                    <div className="product-price">
                      <span>$5</span>
                    </div>
                  </div>
                </div>
              )}
              </div>
              <div className="payment-details">
              <div className="card px-4">
            <p className="h8 py-3">Payment Details</p>
            <div className="row gx-3">
              <div className="col-12">
                <div className="d-flex flex-column">
                  <p className="text mb-1">Cardholder Name</p>
                  <input
                    className="form-control mb-3"
                    type="text"
                    placeholder="Name"
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
                    required
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
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    required
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
                    value={expiry}
                    onChange={(e) => setExpiry(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex flex-column">
                  <p className="text mb-1">CVV/CVC</p>
                  <input
                    className="form-control mb-3 pt-2"
                    type="password"
                    placeholder="***"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    required
                  />
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
