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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { IconContext } from "react-icons";
import { AiOutlineCheck } from "react-icons/ai";
import CartModal from "../Cart";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const ImageGenerator = () => {
  const [originalImageUrl, setOriginalImageUrl] = useState("");
  const [generatedImageUrls, setGeneratedImageUrls] = useState([]);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [inspirationText, setInspirationText] = useState("");
  const [posterSize, setPosterSize] = useState("A4");
  const [numImages] = useState(1);
  const [isImageGenerated, setIsImageGenerated] = useState(false);
  const inputRef = useRef(null);
  const canvasRef = useRef(null);
  const [cartItems, setCartItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedStyle, setSelectedStyle] = useState("vivid"); // Default style'
  const auth = getAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        toast.error("Please log in to generate images.");
        setTimeout(() => {
          navigate("/authentication");
        }, 1000);
      }
    });

    // Clean up subscription on unmount
    return () => unsubscribe();
  }, [auth, navigate]);

  const imageGenerator = async () => {
    const currentUser = auth.currentUser;
    if (!currentUser) return;

    if (!inputRef.current || !inputRef.current.value) {
      toast.error("Please enter a description.");
      return;
    }

    setLoading(true);
    setProgress(0);

    try {
      const response = await fetch("https://api.openai.com/v1/images/generations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer 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",
          "User-Agent": "Chrome",
        },
        body: JSON.stringify({
          prompt: inputRef.current.value,
          n: numImages,
          style: selectedStyle,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const imageUrls = data.data.map((item) => item.url);
        console.log("Generated Image URLs:", imageUrls);
        setOriginalImageUrl(imageUrls[0]);
        setGeneratedImageUrls(imageUrls);
        setIsImageGenerated(true);

        const db = getFirestore();
        const imageCollectionRef = collection(db, "images");
        imageUrls.forEach(async (imageUrl) => {
          try {
            await addDoc(imageCollectionRef, { imageUrl });
            toast.success("Image URL stored in Firestore: " + imageUrl);
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

  const drawImages = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // Clear canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    let imagesLoaded = 0; // Counter for loaded images

    generatedImageUrls.forEach((url, index) => {
      const img = new Image();
      img.onload = () => {
        const aspectRatio = img.width / img.height;
        let width, height, x, y;

        // Determine size based on selected posterSize
        if (posterSize === "portrait") {
          // Portrait orientation
          width = aspectRatio > 1 ? canvas.width / 2 : canvas.width;
          height = aspectRatio > 1 ? canvas.height : canvas.height / 2;
        } else {
          // Landscape orientation
          width = aspectRatio > 1 ? canvas.width : canvas.width / 2;
          height = aspectRatio > 1 ? canvas.height / 2 : canvas.height;
        }

        x = (index % 2) * (canvas.width / 2);
        y = Math.floor(index / 2) * (canvas.height / 2);

        context.drawImage(img, x, y, width, height);

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


  useEffect(() => {
    if (originalImageUrl && generatedImageUrls.length > 0) {
      drawImages();
    }
  }, [originalImageUrl, generatedImageUrls]);

  return (
    <>
      {/* Header component */}
      <Header cartItems={cartItems} handleRemoveFromCart={handleRemoveFromCart} />
      <ToastContainer />
      <Container fluid>
        <Row className="image-generator mt-20 p-3 gap-4 gap-md-0 align-items-center justify-content-center">
          <Col md={8}>
            <div className="live-preview text-center">
              <h1 className="text-center">
                {/* Convert Your Imagination into Reality with AI */}
              </h1>
              <ProgressBar animated now={progress} label={`${progress}%`} />
              {loading && <p className="pb-0">Please Wait...</p>}
              {isImageGenerated && (
                <div className="image-grid">
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
                          onClick={() => handleAddToCart(url)}
                        >
                          <FontAwesomeIcon icon={faCartShopping} />
                        </Button>
                      </span>
                    </div>
                  ))}
                </div>
              )}
              <canvas ref={canvasRef} className="bg-grey-700 rounded-4 mt-4" />
            </div>
            <Form.Group className="d-flex justify-content-between align-items-center">
              <Form.Check
                type="radio"
                label="Portrait"
                name="posterSize"
                value="portrait"
                checked={posterSize === "portrait"}
                onChange={() => setPosterSize("portrait")}
              />
              <Form.Check
                type="radio"
                label="Landscape"
                name="posterSize"
                value="landscape"
                checked={posterSize === "landscape"}
                onChange={() => setPosterSize("landscape")}
              />
            </Form.Group>


            <div className="generate-boxs d-flex align-items-center flex-column justify-content-center">
              <Card className="mt-2 w-100 w-md-50 shadow-none border-0 text-center">
                <Card.Body>
                  <h2>Choose Your Style</h2>
                  <Form.Group className="d-flex align-items-center justify-content-center gap-4">
                    <IconContext.Provider value={{ size: "2rem", style: { verticalAlign: "middle" } }}>x
                      <Form.Check
                        type="radio"
                        label={
                          <div>
                            <AiOutlineCheck /> Vivid
                          </div>
                        }
                        name="style"
                        value="vivid"
                        checked={selectedStyle === "vivid"}
                        onChange={(e) => setSelectedStyle(e.target.value)}
                      />
                      <Form.Check
                        type="radio"
                        label={
                          <div>
                            <AiOutlineCheck /> Natural
                          </div>
                        }
                        name="style"
                        value="natural"
                        checked={selectedStyle === "natural"}
                        onChange={(e) => setSelectedStyle(e.target.value)}
                      />
                      <Form.Check
                        type="radio"
                        label={
                          <div>
                            <AiOutlineCheck /> Anime
                          </div>
                        }
                        name="style"
                        value="vivid" // Default to 'vivid' for unsupported styles
                        checked={selectedStyle === "vivid"}
                        onChange={(e) => setSelectedStyle(e.target.value)}
                      />
                      <Form.Check
                        type="radio"
                        label={
                          <div>
                            <AiOutlineCheck /> Realistic
                          </div>
                        }
                        name="style"
                        value="vivid" // Default to 'vivid' for unsupported styles
                        checked={selectedStyle === "vivid"}
                        onChange={(e) => setSelectedStyle(e.target.value)}
                      />
                      <Form.Check
                        type="radio"
                        label={
                          <div>
                            <AiOutlineCheck /> Cyberpunk
                          </div>
                        }
                        name="style"
                        value="vivid" // Default to 'vivid' for unsupported styles
                        checked={selectedStyle === "vivid"}
                        onChange={(e) => setSelectedStyle(e.target.value)}
                      />

                    </IconContext.Provider>
                  </Form.Group>
                </Card.Body>
              </Card>
              <Card className="mt-2 w-100">
                <Card.Body>
                  <Form.Group className="d-flex">
                    <Form.Control
                      type="text"
                      ref={inputRef}
                      value={inspirationText}
                      placeholder="Let Your Imagination Work Here...."
                      onChange={(e) => setInspirationText(e.target.value)}
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
    </>
  );
};

export default ImageGenerator;
