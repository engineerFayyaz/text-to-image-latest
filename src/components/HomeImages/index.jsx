import React, { useState, useEffect } from 'react';
import "../../components/HomeImages/HomeImages.css";
import axios from 'axios';

const cloudinaryConfig = {
  cloudName: 'lms-empty',
  apiKey: '465825886714436',
  apiSecret: '_XtyARctyPki8NutUmKpElof_Cw',
  uploadPreset: 'vikings',
  // uploadUrl: 'https://api.cloudinary.com/v1_1/lms-empty/image/upload'
};

export default function HomeImages() {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(`https://api.cloudinary.com/v1_1/${cloudinaryConfig.cloudName}/resources/image`, {
          params: {
            type: 'upload', // Fetch only uploaded images
            max_results: 20 // Limit the number of results per page
          },
          headers: {
            Authorization: `Basic ${btoa(`${cloudinaryConfig.apiKey}:${cloudinaryConfig.apiSecret}`)}`
          }
        });

        if (response.status === 200) {
          setImages(response.data.resources);
        } else {
          setError("Failed to fetch images from Cloudinary");
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

  return (
    <div className="mt-20">
      <div className="text-center text-gray-900 space-y-4">
        <h1 className="text-5xl font-bold">See AI-made Images</h1>
        <p className="text-2xl p-2">We created a few images</p>
      </div>
      <div className="grid grid-cols-4 gap-2">  
        {images.map(image => (
          <div key={image.public_id} className="image-container">
            <img
              src={image.secure_url}
              alt={image.public_id}
              className="image-item"
            />
            <div className="overlay">
              <span>{image.public_id}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
