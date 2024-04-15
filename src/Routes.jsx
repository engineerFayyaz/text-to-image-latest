import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/Pages/Home"
import HowToUse from "./Pages/HowToUse";
import PromptGuide from "./Pages/PromptGuide";
import Authentication from "./Pages/Authentication";
import Generate from "./Pages/Generate";
import Checkout from "./Pages/Checkout";
import "./components/Cart/index"
import ContactUs from "./Pages/ContactUs";
import AboutUs from "./Pages/AboutUs";
// import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  const [cartItems, setCartItems] = useState([]);
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/How-to-use" element={<HowToUse/>}/>
          <Route path="/Prompt-guide" element={<PromptGuide/>}/>
          <Route path="/Authentication" element={<Authentication/>}/>
          <Route path="/Generate" element={<Generate/>}/>
          <Route path="/Contact-us" element={<ContactUs/>}/>
          <Route path="/About-us" element={<AboutUs/>}/>
          {/* <Route path="*" element={<NotFound />} /> */}
          <Route path="/checkout" element={<Checkout/>} render={(props) => <Checkout {...props} cartItems={cartItems} />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
