// Loader.js
import React from "react";
import "./Loader.css"; // Import CSS file for styling

const LoaderImage = () => {
  return (
    <>

    <div className="loader-overlay d-flex flex-column">
      <span className="loader"></span>
    </div>
    </>
  );
};

export default LoaderImage;
