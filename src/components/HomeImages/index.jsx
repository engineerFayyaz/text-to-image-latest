import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../../components/HomeImages/HomeImages.css"
export default function HomeImages() {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('https://ourbrandtv.com/mobile/public/api/Get_Image');

        console.log('API Response:', response); // Add this debug log

        if (response.data.status === '1') {
          setImages(response.data.data);
        } else {
          setError("Failed to fetch images from the API");
        }
      } catch (error) {
        setError("Error fetching images: " + error.message);
      }
    };

    fetchImages();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  console.log('Images:', images); // Add this debug log

  const reversedImageUrls = images.slice().reverse();

  return (
    <div className="mt-20">
      <div className="text-center text-gray-900 space-y-4">
        <h1 className="text-5xl font-bold">See AI-made Images</h1>
        <p className="text-2xl p-2">We created a few images</p>
      </div>
      <div className="grid grid-cols-4 gap-2">  
        {reversedImageUrls.map(image => (
          <div key={image.id} className="image-container">
            <img
              src={image.cloud_url || image.gen_url} // Assuming 'cloud_url' contains the URL of the image
              alt={`Image ${image.id}`}
              className="image-item"
            />
            {/* Assuming 'gen_url' is for generating URL */}
            <div className="overlay">
              {/* <span>{image.gen_url}</span> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
