import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/Pages/Home"
import HowToUse from "./Pages/HowToUse";
import PromptGuide from "./Pages/PromptGuide";
import Authentication from "./Pages/Authentication";
// import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/How-to-use" element={<HowToUse/>}/>
          <Route path="/Prompt-guide" element={<PromptGuide/>}/>
          <Route path="/Authentication" element={<Authentication/>}/>
          {/* <Route path="*" element={<NotFound />} /> */}
          
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
