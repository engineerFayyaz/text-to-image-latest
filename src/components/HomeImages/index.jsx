import React, { useState, useEffect } from "react";
import "../../components/HomeImages/HomeImages.css";
import { firestore } from "../../firebaseConfig";
import { collection, query, limit, getDocs } from "firebase/firestore";

export default function HomeImages() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        console.log("Fetching images...");
        const imagesRef = collection(firestore, "images");
        const q = query(imagesRef, limit(20));
        const querySnapshot = await getDocs(q);
        const imageData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          url: doc.data().imageUrl,
          alt: doc.data().alt || "Image Alt Text Placeholder", // Use placeholder text if 'alt' is not available
        }));
        console.log("Fetched images:", imageData);
        setImages(imageData);
      } catch (error) {
        console.log("Error fetching images:", error);
        // Handle error (e.g., display error message to user)
      }
    };

    fetchImages();

    // Cleanup function to unsubscribe from Firestore listener
    return () => {
      // Cleanup logic (if needed)
    };
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  useEffect(() => {
    console.log("images: ", images);
  }, [images]);

  return (
    <div className="mt-20">
      <div className="text-center text-gray-900 space-y-4">
        <h1 className="text-5xl font-bold">See AI-made Images</h1>
        <p className="text-2xl p-2">We created a few images</p>
      </div>
      <div className="grid grid-cols-4 gap-2">  
        {images.slice(0,29).map((image) => (
          <div key={image.id} className="image-container">
            <img
              src={image.imageUrl} // Use 'imageUrl' instead of 'url'
              alt={"AI Generated Images"} // Assuming 'alt' is still the field name for the alt text
              className="image-item"
            />
            <div className="overlay">
              <span>{"Ai Generated"}</span> {/* Display alt text as overlay */}
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}
