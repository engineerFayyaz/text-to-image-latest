import React, { useState, useRef, useEffect } from "react";
import "./ImageGenerator.css";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  ProgressBar,
} from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../Header";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CartModal from "../Cart";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import {getFirestore, collection, addDoc} from "firebase/firestore"
// import { FaShoppingCart } from 'react-icons/fa';
const ImageGenerator = () => {
  const [originalImageUrl, setOriginalImageUrl] = useState("");
  const [generatedImageUrls, setGeneratedImageUrls] = useState([]);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [inspirationText, setInspirationText] = useState("");
  const [colorSaturation, setColorSaturation] = useState(0);
  const [brightness, setBrightness] = useState(0);
  const [contrast, setContrast] = useState(0);
  const [posterSize, setPosterSize] = useState("A4");
  const [numImages, setNumImages] = useState(1);
  const [isImageGenerated, setIsImageGenerated] = useState(false);
  const inputRef = useRef(null);
  const numImagesRef = useRef(null);
  const canvasRef = useRef(null);
  const [cartItems, setCartItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const auth = getAuth();
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
      } else {      
      }
    });

    // Clean up subscription on unmount
    return () => unsubscribe();
  }, [auth]);

  const imageGenerator = async () => {


    const currentUser = auth.currentUser;
    if (!currentUser) {
      toast.error("Please log in to generate images.");

      setTimeout(() => {
        navigate("/authentication")
    },1000)
      return;
    
    }
    
    if (!inputRef.current || !inputRef.current.value) {
      toast.error("Please enter a description.");
      return;
    }

    setLoading(true);
    setProgress(0);

    try {
      const response = await fetch(
        "https://api.openai.com/v1/images/generations",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer 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",
            "User-Agent": "Chrome",
          },
          body: JSON.stringify({
            prompt: inputRef.current.value,
            n: numImages,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        const imageUrls = data.data.map((item) => item.url);
        console.log("Generated Image URLs:", imageUrls);
        setOriginalImageUrl(imageUrls[0]);
        setGeneratedImageUrls(imageUrls);
        setIsImageGenerated(true);
        // console.log("setGeneratedImageUrls", imageUrls.slice(1));

        const db = getFirestore();
        const imageCollectionRef = collection(db, "images");
        imageUrls.forEach(async (imageUrl) => {
          try {
            await addDoc(imageCollectionRef, { imageUrl });
            toast.sucess("Image URL stored in Firestore:", imageUrl);
          } catch (error) {
            console.error("Error storing image URL in Firestore:", error);
          }
        });
      } else {
        toast.error("Failed to fetch image data from the API");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred while fetching image data");
    }

    setLoading(false);
    setProgress(100);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleAddToCart = (imageUrl) => {
    if (!cartItems.includes(imageUrl)) {
      console.log("Image URL fetched successfully:", imageUrl);
      setCartItems([...cartItems, imageUrl]);
      handleShowModal(); // Show the modal after adding the item to the cart
    } else {
      toast.info("Item is already in the cart.");
    }
  };
  const handleRemoveFromCart = (imageUrl) => {
    const updatedCart = cartItems.filter((item) => item !== imageUrl);
    setCartItems(updatedCart);
  };
  // const handleRemoveFromCart = (index) => {
  //   const updatedCart = cartItems.filter((item, i) => i !== index);
  //   setCartItems(updatedCart);
  // };

  useEffect(() => {
    if (!loading) {
      setTimeout(() => {
        setProgress(0);
      }, 3000);
    }
  }, [loading]);

  useEffect(() => {
    if (originalImageUrl && generatedImageUrls.length > 0) {
      drawImages();
    }
  }, [originalImageUrl, generatedImageUrls]);

  const drawImages = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // Clear canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    let imagesLoaded = 0; // Counter for loaded images

    generatedImageUrls.forEach((url, index) => {
      const img = new Image();
      img.onload = () => {
        const x = (index % 2) * canvas.width;
        const y = Math.floor(index / 2) * canvas.height;
        context.drawImage(img, x, y, canvas.width, canvas.height);

        // Increment the counter
        imagesLoaded++;

        // If all images are loaded, do something
        if (imagesLoaded === generatedImageUrls.length) {
          console.log("All images loaded!");
          // You can do something here if needed
        }
      };
      img.src = url;
    });
  };

  const handleInspirationTextChange = (text) => {
    setInspirationText(text);
  };

  const handleColorSaturationChange = (value) => {
    setColorSaturation(value);
  };

  const handleBrightnessChange = (value) => {
    setBrightness(value);
  };

  const handleContrastChange = (value) => {
    setContrast(value);
  };

  const handlePosterSizeChange = (size) => {
    setPosterSize(size);
  };

  const handleNumImagesChange = (value) => {
    if (value === 4) {
      toast.error(
        "Please upgrade your package to premium to generate more than 3 images."
      );
    } else {
      setNumImages(value);
      numImagesRef.current = value;
    }
  };

  useEffect(() => {
    const disableRightClick = (e) => {
      e.preventDefault();
      toast.error("Right-clicking is disabled for this website.");
    };

    // Disable right-click context menu
    window.addEventListener("contextmenu", disableRightClick);

    return () => {
      // Cleanup
      window.removeEventListener("contextmenu", disableRightClick);
    };
  }, []);

  useEffect(() => {
    const disableScreenshots = (e) => {
      e.preventDefault();
      toast.error("Screenshotting is disabled for this website.");
    };

    // Disable screenshotting
    window.addEventListener("keydown", (e) => {
      if ((e.ctrlKey || e.metaKey) && (e.key === "s" || e.key === "S")) {
        // Ctrl + S
        disableScreenshots(e);
      } else if ((e.ctrlKey || e.metaKey) && (e.key === "c" || e.key === "C")) {
        // Ctrl + C
        disableScreenshots(e);
      }
    });
  });

  useEffect(() => {
    // Select all elements with data-bs-toggle="tooltip"
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );

    // Convert NodeList to an array and map over it to create tooltips
    const tooltipList = Array.from(tooltipTriggerList).map(
      (tooltipTriggerEl) => {
        return new window.bootstrap.Tooltip(tooltipTriggerEl);
      }
    );

    // Cleanup function to destroy tooltips when component unmounts
    return () => {
      tooltipList.forEach((tooltip) => {
        tooltip.dispose();
      });
    };
  }, []); // Run only once when component mounts

  return (
    <>
      <Header
        cartItems={cartItems}
        handleRemoveFromCart={handleRemoveFromCart}
      />
      <ToastContainer />
      <Container fluid>
        <Row className="image-generator mt-20 p-3 gap-4 gap-md-0 align-items-center justify-content-center  ">
          <Col md={8}>
            <div className="live-preview text-center">
              <h1 className="text-center">
                {/* Convert Your Imagination into Reality with AI */}
              </h1>
              <ProgressBar animated now={progress} label={`${progress}%`} />
              {/* Add this line */}
              {loading && <p className="pb-0">Please Wait...</p>}
              {/* Display the grid of images */}
              {isImageGenerated && (
                <div className="image-grid">
                  {/* <img src={originalImageUrl} alt="Original" className="original-image" /> */}
                  {generatedImageUrls.slice(0, numImages).map((url, index) => (
                    <div key={index} className="image-container">
                      <img
                        src={url}
                        alt={`Generated ${index + 1}`}
                        className="generated-image rounded-5"
                      />
                      <span>
                        <Button
                          title="Add to Cart"
                          data-bs-toggle="tooltip"
                          onClick={() => handleAddToCart(url)} // Pass the image URL to handleAddToCart
                        >
                          <FontAwesomeIcon icon={faCartShopping} />
                        </Button>
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Use canvas to edit images */}
              <canvas ref={canvasRef} className="bg-grey-700  rounded-4 mt-4" />
            </div>
            <div className="generate-boxs d-flex align-items-center flex-column justify-content-center  ">
              <Card className="mt-2 w-100 w-md-50 shadow-none border-0 text-center">
                <Card.Body>
                  <h2>Choose Your Style</h2>
                  <Form.Group className="d-flex align-items-center justify-content-center gap-4">
                    <Form.Check
                      type="radio"
                      label="Portrait"
                      name="posterSize"
                      checked={posterSize === "Portrait"}
                      onChange={() => handlePosterSizeChange("Portrait")}
                    />
                    <Form.Check
                      type="radio"
                      label="Landscape"
                      name="posterSize"
                      checked={posterSize === "Landscape"}
                      onChange={() => handlePosterSizeChange("Landscape")}
                    />
                  </Form.Group>
                </Card.Body>
              </Card>
              <Card className="mt-2 w-100">
                <Card.Body>
                  {/* <h3>Inspiration Text</h3> */}
                  <Form.Group className="d-flex">
                    <Form.Control
                      type="text"
                      ref={inputRef}
                      value={inspirationText}
                      placeholder="Let Your Imagination Work Here...."
                      onChange={(e) =>
                        handleInspirationTextChange(e.target.value)
                      }
                      className="user-input"
                    />
                    <Button onClick={imageGenerator} variant="primary">
                      Generate
                    </Button>
                  </Form.Group>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
      <CartModal
        show={showModal}
        handleClose={handleCloseModal}
        cartItems={cartItems}
        handleRemoveFromCart={handleRemoveFromCart}
      />

      {/* {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <h2>Items in Cart</h2>
            <div className="cart-items">
              {cartItems.map((item, index) => (
                <img key={index} src={item} alt={`Item ${index + 1}`} />
              ))}
            </div>
          </div>
        </div>
      )} */}
    </>
  );
};

export default ImageGenerator;