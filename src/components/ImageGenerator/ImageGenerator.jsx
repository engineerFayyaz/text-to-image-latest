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

  const inputRef = useRef(null);
  const numImagesRef = useRef(null);
  const canvasRef = useRef(null);

  const imageGenerator = async () => {
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
        setOriginalImageUrl(imageUrls[0]);
        setGeneratedImageUrls(imageUrls.slice(1));
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

    const generatedImages = generatedImageUrls.map((url, index) => {
      const img = new Image();
      img.onload = () => {
        const x = (index % 2) * (canvas.width / 2);
        const y = Math.floor(index / 2) * (canvas.height / 2);
        context.drawImage(img, x, y, canvas.width / 2, canvas.height / 2);
      };
      img.src = url;
      return img;
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

  return (
    <>
      <Header />
      <ToastContainer />
      <Container fluid>
        <Row className="image-generator mt-20 p-3 gap-4 gap-md-0">
          <Col md={4} className="d-flex flex-column gap-4 mt-5">
            <Card className="">
              <Card.Body>
                <h3>Number of Images</h3>
                <Button
                  onClick={() => handleNumImagesChange(1)}
                  variant={numImages === 1 ? "primary" : "light"}
                  className="number-images"
                  id="num-images"
                >
                  1
                </Button>
              </Card.Body>
            </Card>
            <Card >
              <Card.Body className="d-flex flex-column gap-3">
              <h3>Adjust</h3>
                <Form.Group>
                  <Form.Label>Color Saturation:</Form.Label>
                  <Form.Control
                    className="input-range  "
                    type="range"
                    min="-100"
                    max="100"
                    value={colorSaturation}
                    onChange={(e) =>
                      handleColorSaturationChange(parseInt(e.target.value))
                    }
                    style={{
                      background:
                        colorSaturation > 0
                          ? `linear-gradient(to right, #c3b1e1 50%, #c3b1e1 ${colorSaturation}%, #d3d3d3 ${colorSaturation}%, #d3d3d3 100%)`
                          : colorSaturation === 0
                          ? `linear-gradient(to right, #c3b1e1 50%, #c3b1e1 0, #d3d3d3 0, #d3d3d3 100%)`
                          : `linear-gradient(to right, #d3d3d3 50%, #d3d3d3 100%)`,
                    }}
                  />
                  <output className="output-box">{colorSaturation}</output>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Brightness:</Form.Label>
                  <Form.Control
                    className="input-range"
                    type="range"
                    min="-100"
                    max="100"
                    value={brightness}
                    onChange={(e) =>
                      handleBrightnessChange(parseInt(e.target.value))
                    }
                    style={{
                      background:
                        brightness > 0
                          ? `linear-gradient(to right, #c3b1e1 50%, #c3b1e1 ${brightness}%, #d3d3d3 ${brightness}%, #d3d3d3 100%)`
                          : brightness === 0
                          ? `linear-gradient(to right, #c3b1e1 50%, #c3b1e1 0, #d3d3d3 0, #d3d3d3 100%)`
                          : `linear-gradient(to right, #d3d3d3 50%, #d3d3d3 100%)`,
                    }}
                  />
                  <output>{brightness}</output>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Contrast:</Form.Label>
                  <Form.Control
                    className="input-range"
                    type="range"
                    min="-100"
                    max="100"
                    value={contrast}
                    onChange={(e) =>
                      handleContrastChange(parseInt(e.target.value))
                    }
                    style={{
                      background:
                        contrast > 0
                          ? `linear-gradient(to right, #c3b1e1 50%, #c3b1e1 ${contrast}%, #d3d3d3 ${contrast}%, #d3d3d3 100%)`
                          : contrast === 0
                          ? `linear-gradient(to right, #c3b1e1 50%, #c3b1e1 0, #d3d3d3 0, #d3d3d3 100%)`
                          : `linear-gradient(to right, #d3d3d3 50%, #d3d3d3 100%)`,
                    }}
                  />
                  <output>{contrast}</output>
                </Form.Group>
              </Card.Body>
            </Card>
          </Col>
          <Col md={8}>
            <div className="live-preview text-center">
              <h1 className="text-center">Convert Your Imagination into Reality with AI</h1>
              <ProgressBar animated now={progress} label={`${progress}%`} />
              {/* Add this line */}
              {loading && <p className="pb-0">Please Wait...</p>}
              {/* Display the grid of images */}
              <div className="image-grid  " >
                {/* <img src={originalImageUrl} alt="Original" className="original-image" /> */}
                {generatedImageUrls.slice(0, numImages).map((url, index) => (
                  <img
                    key={index}
                    src={url}
                    alt={`Generated ${index + 1}`}
                    className="generated-image"
                  />
                ))}
              </div>
              {/* Use canvas to edit images */}
              <canvas ref={canvasRef} className="bg-grey-700 mt-4  rounded-4"  />
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
                   <Button
                  onClick={imageGenerator}
                  variant="primary"
                >
                  Generate
                </Button>
                </Form.Group>
              </Card.Body>
            </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ImageGenerator;
