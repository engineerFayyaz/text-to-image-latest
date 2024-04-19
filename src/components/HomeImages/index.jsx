import React, { useState, useEffect } from 'react';
import "../../components/HomeImages/HomeImages.css"
import { firestore } from "../../firebaseConfig";
import { collection, getDocs } from 'firebase/firestore';

export default function HomeImages() {
  const [images, setImages] = useState([]);
  
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const imagesRef = collection(firestore, "images");
        const querySnapshot = await getDocs(imagesRef);
        const imageData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setImages(imageData);
      } catch (error) {
        console.error("Error fetching images:", error);
        // Handle error (e.g., display error message to user)
      }
    };

    fetchImages();

    // Cleanup function to unsubscribe from Firestore listener
    return () => {
      // Cleanup logic (if needed)
    };
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  return (
    <div className="mt-20">
      <div className="text-center text-gray-900 space-y-4">
        <h1 className="text-5xl font-bold">See AI-made Images</h1>
        <p className="text-2xl p-2">We created a few images</p>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {images.map((image) => (
          <div key={image.id} className="image-container">
            <img
              src={image.url} // Assuming 'url' is the field name in your Firestore document that contains the image URL
              alt={image.alt} // Assuming 'alt' is the field name in your Firestore document that contains the image alt text
              className="image-item"
            />
            <div className="overlay">
              <span>{image.alt}</span> {/* Display alt text as overlay */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
