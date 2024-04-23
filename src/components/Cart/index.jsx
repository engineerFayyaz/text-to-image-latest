import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import "../../components/HomeImages/HomeImages.css";
import CartModal from '../Cart';

export default function HomeImages() {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [showCart, setShowCart] = useState(false); // State to control cart modal
  const [cartItems, setCartItems] = useState([]); // State to manage cart items

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('https://ourbrandtv.com/mobile/public/api/Get_Image');

        console.log('API Response:', response); // Add this debug log

        if (response.data.status === '1') {
          const latestImages = response.data.data.slice(-20); // Slice the array to get the latest 20 images
          setImages(latestImages);
        } else {
          setError("Failed to fetch images from the API");
        }
      } catch (error) {
        setError("Error fetching images: " + error.message);
      }
    };

    fetchImages();
  }, []);

  const addToCart = (imageUrl) => {
    setCartItems([...cartItems, imageUrl]);
  };

  const removeFromCart = (imageUrl) => {
    setCartItems(cartItems.filter(item => item !== imageUrl));
  };

  const handleCheckout = () => {
    setShowCart(false); // Close the cart modal before navigating
    // Navigate to checkout with the image URL as state
    window.location.href = `/checkout?imageUrl=${encodeURIComponent(cartItems[0])}`;
  };

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
        {images.slice().reverse().map(image => (
          <div key={image.id} className="image-container">
            <img
              src={image.cloud_url || image.gen_url}
              alt="AI Generated Images"
              className="image-item"
            />
            <div className="overlay">
              <span onClick={() => addToCart(image.cloud_url || image.gen_url)}>
                <FontAwesomeIcon icon={faCartPlus} />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* CartModal component */}
      <CartModal
        show={showCart}
        handleClose={() => setShowCart(false)}
        cartItems={cartItems}
        handleRemoveFromCart={removeFromCart}
        handleCheckout={handleCheckout}
      />
    </div>
  );
}
