import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/Pages/Home";
import HowToUse from "./Pages/HowToUse";
import PromptGuide from "./Pages/PromptGuide";
import Authentication from "./Pages/Authentication";
import Generate from "./Pages/Generate";
import Checkout from "./Pages/Checkout";
import ContactUs from "./Pages/ContactUs";
import AboutUs from "./Pages/AboutUs";
import Create from "./Pages/Create";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_live_51OWvQIFgKHDpomfgNwdCL517Au8V3EBr36RRilRzQlMtvhwWsHEwohfZN5nZE0CtxQaT6HOMA4amJwMrniC2ifRS00xCGhWqmZ");

const ProjectRoutes = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Perform any initial state updates here
    setCartItems(/* initial value */);
  }, []);

  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/How-to-use" element={<HowToUse />} />
          <Route path="/Prompt-guide" element={<PromptGuide />} />
          <Route path="/Authentication" element={<Authentication />} />
          <Route path="/Generate" element={<Generate />} />
          <Route path="/Contact-us" element={<ContactUs />} />
          <Route path="/About-us" element={<AboutUs />} />
          <Route path="/create-Guide" element={<Create />} />
          <Route
            path="/checkout"
            element={
              <Elements stripe={stripePromise}>
                <Checkout cartItems={cartItems} />
              </Elements>
            }
          />
        </Routes>
      </Router>
    </React.Suspense>
  );
};

export default ProjectRoutes;
