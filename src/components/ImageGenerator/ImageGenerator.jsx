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
  Modal,
} from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import CartModal from "../Cart";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import GameComponent from "../GameComponent"; // Assuming GameComponent is in the correct location

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
  const [artStyle, setArtStyle] = useState("vivid");
  const [showGame, setShowGame] = useState(false); // Change to false initially
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
            prompt: `${inputRef.current.value} - Style: ${artStyle} ${posterSize}`,
            n: numImages,
            style: setArtStyle,
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

        const db = getFirestore();
        const imageCollectionRef = collection(db, "images");
        imageUrls.forEach(async (imageUrl) => {
          try {
            await addDoc(imageCollectionRef, { imageUrl });
          } catch (error) {
            console.error("Error storing image URL in Firestore:", error);
          }
        });

        setShowGame(false); // Close the game modal after images are generated
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
      handleShowModal();
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

    context.clearRect(0, 0, canvas.width, canvas.height);

    let imagesLoaded = 0;

    generatedImageUrls.forEach((url, index) => {
      const img = new Image();
      img.onload = () => {
        const aspectRatio = img.width / img.height;
        let width, height, x, y;

        if (posterSize === "portrait") {
          width = aspectRatio > 1 ? canvas.width / 2 : canvas.width;
          height = aspectRatio > 1 ? canvas.height : canvas.height / 2;
        } else {
          width = aspectRatio > 1 ? canvas.width : canvas.width / 2;
          height = aspectRatio > 1 ? canvas.height / 2 : canvas.height;
        }

        x = (index % 2) * (canvas.width / 2);
        y = Math.floor(index / 2) * (canvas.height / 2);

        context.drawImage(img, x, y, width, height);

        imagesLoaded++;

        if (imagesLoaded === generatedImageUrls.length) {
          console.log("All images loaded!");
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
      <Container fluid>
        <Row className="image-generator mt-20 p-0 p-md-3 gap-4 gap-md-0 align-items-center justify-content-center">
          <Col md={8}>
            <div className="live-preview text-center">
              <h1 className="text-center"></h1>
              <ProgressBar animated now={progress} label={`${progress}%`} />
              {loading ? null : isImageGenerated ? (
                <div className="image-grid p-4 d-flex flex-column">
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
                  <canvas
                    ref={canvasRef}
                    className="rounded-4 mt-4 canvas d-none"
                  />
                </div>
              ) : null}
            </div>
            <Form.Group className="d-flex justify-content-between align-items-center mt-2">
              <Card className="mt-2 w-100 w-md-50 text-center">
                <Card.Body>
                  <Form.Group className="d-flex align-items-center justify-content-evenly gap-4 flex-wrap ">
                    <h3 className="mb-0">Choose the Pattern</h3>
                    <Form.Check
                      type="radio"
                      label="Portrait"
                      name="posterSize"
                      value="portrait"
                      checked={posterSize === "portrait"}
                      onChange={() => setPosterSize("portrait")}
                      className="portrait"
                    />
                    <Form.Check
                      type="radio"
                      label="Landscape"
                      name="posterSize"
                      value="landscape"
                      checked={posterSize === "landscape"}
                      onChange={() => setPosterSize("landscape")}
                      className="landscape"
                    />
                  </Form.Group>
                </Card.Body>
              </Card>
            </Form.Group>

            <div className="generate-boxs d-flex align-items-center flex-column justify-content-center mb-5">
              <Card className="mt-2 w-100 w-md-50 shadow-none border-0 text-center">
                <Card.Body>
                  <h2>Choose Your Style</h2>
                  <Form.Group className="d-flex align-items-center justify-content-center gap-4">
                    <Form.Select
                      value={artStyle}
                      onChange={(e) => setArtStyle(e.target.value)}
                      className="d-flex align-items-center justify-content-center gap-4 "
                      style={{fontWeight: '600', fontSize: '18px'}}
                    >
                      <option value="vivid">Vivid</option>
                      <option value="natural">Natural</option>
                      <option value="Anime">Anime</option>
                      <option value="Realistic">Realistic</option>
                      <option value="Impressionism">Impressionism</option>
                      <option value="Post-Impressionism">
                        Post-Impressionism
                      </option>
                      <option value="Pointillism">Pointillism</option>
                      <option value="Cubism">Cubism</option>
                      <option value="Fauvism">Fauvism</option>
                      <option value="Pop Art">Pop Art</option>
                      <option value="Minimalism">Minimalism</option>
                      <option value="Abstract Expressionism">
                        Abstract Expressionism
                      </option>
                      <option value="Surrealism">Surrealism</option>
                      <option value="Hyperrealism">Hyperrealism</option>
                    </Form.Select>
                  </Form.Group>
                </Card.Body>
              </Card>
              <Card className="mt-2 w-100">
                <Card.Body>
                  <Form.Group >
                    <Form.Control
                      type="text"
                      ref={inputRef}
                      value={inspirationText}
                      placeholder="Let Your Imagination Work Here...."
                      onChange={(e) => setInspirationText(e.target.value)}
                      className="user-input"
                    />

                    <Button
                      onClick={() => {
                        imageGenerator();
                        setShowGame(true);
                      }}
                      className="btn-53"
                      variant="primary"
                    >
                      <div className="original">Generate</div>
                      <div className="letters">
                        <span>L</span>
                        <span>E</span>
                        <span>T'</span>
                        <span>s</span>
                        <span>G</span>
                        <span>O</span>
                      </div>
                      {/* Generate */}
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
      <Modal
        show={showGame}
        onHide={() => setShowGame(false)}
        centered
        size="xl"
        backdrop="static"
      >
        <Modal.Header closeButton className="p-2">
          <Modal.Title>Interactive Game</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0">
          <GameComponent
            onGameComplete={(score) => {
              console.log("Game score:", score);
              setShowGame(false);
            }}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ImageGenerator;
