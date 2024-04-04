import React from 'react';


export default function HomeImages() {
  return (
    <div className="conatiner overflow-hidden">
  {/* Gallery */}
  <div className="row p-4">
    <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
      <img
        src="https://mdbcdn.b-cdn.net/img/new/fluid/city/030.jpg
        "
        className="w-100 shadow-1-strong rounded mb-4"
        alt="Boat on Calm Water"
      />
    </div>
    <div className="col-lg-4 mb-4 mb-lg-0">
      <img
        src="https://mdbcdn.b-cdn.net/img/new/fluid/city/050.jpg
        "
        className="w-100 shadow-1-strong rounded mb-4"
        alt="Mountains in the Clouds"
      />
  
    </div>
    <div className="col-lg-4 mb-4 mb-lg-0">
      <img
        src="https://mdbcdn.b-cdn.net/img/new/fluid/city/040.jpg
        "
        className="w-100 shadow-1-strong rounded mb-4"
        alt="Waves at Sea"
      />
    </div>
  </div>
  {/* Gallery */}


    </div>
  );
}