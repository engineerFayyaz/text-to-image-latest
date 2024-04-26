import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from "react-bootstrap";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../components/HomeImages/HomeImages.css";
import CartModal from '../Cart';
import { toast } from "react-toastify";

export default function HomeImages() {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('https://ourbrandtv.com/mobile/public/api/Get_Image');

        console.log('API Response:', response);

        if (response.data.status === '1') {
          const latestImages = response.data.data.slice(-24);
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

  const handleAddToCart = (url) => {
    if (!cartItems.includes(url)) {
      setCartItems([...cartItems, url]);
      setShowModal(true);
    } else {
      toast.info("Item is already in the cart.");
    }
  };

  const handleRemoveFromCart = (imageUrl) => {
    const updatedCart = cartItems.filter((item) => item !== imageUrl);
    setCartItems(updatedCart);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const addToCart = (imageUrl) => {
    setCartItems([...cartItems, imageUrl]);
  };



  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="mt-20">
      <div className="text-center text-gray-900 space-y-4 home-images-title">
        <h1 className="text-5xl font-bold">Your history</h1>
        <p className="text-2xl p-2">what your brain has imagined</p>
      </div>
      <div className="grid grid-cols-4 gap-2 images-grid">
        {images.slice().reverse().map(image => (
          <div key={image.id} className="image-container img-grid-container">
            <Button
              title="Add to Cart"
              onClick={() => handleAddToCart(image.cloud_url || image.gen_url)}
              className='img-cart-btn'
            >
              <FontAwesomeIcon icon={faCartShopping} />
            </Button>
            <img
              src={image.cloud_url || image.gen_url}
              alt="AI Generated Images"
              className="image-item"
            />

            



            {/* <div className="overlay">
              <span >
               Generated History
              </span>
            </div> */}
          </div>
        ))}
      </div>

      <CartModal
        show={showModal}
        handleClose={handleCloseModal}
        cartItems={cartItems}
        handleRemoveFromCart={handleRemoveFromCart}
      />
    </div>
  );
}
