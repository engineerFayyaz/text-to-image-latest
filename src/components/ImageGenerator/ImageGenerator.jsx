import React, { useState, useRef, useEffect } from 'react';
import './ImageGenerator.css';
import { Container, Row, Col, Form, Button, Card, ProgressBar } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../Header';

const ImageGenerator = () => {
    const [originalImageUrl, setOriginalImageUrl] = useState("");
    const [generatedImageUrls, setGeneratedImageUrls] = useState([]);
    const [loading, setLoading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [inspirationText, setInspirationText] = useState("");
    const [colorSaturation, setColorSaturation] = useState(50);
    const [brightness, setBrightness] = useState(50);
    const [contrast, setContrast] = useState(50);
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
                const imageUrls = data.data.map(item => item.url);
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
        const context = canvas.getContext('2d');
    
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
            toast.error("Please upgrade your package to premium to generate more than 3 images.");
        } else {
            setNumImages(value);
            numImagesRef.current = value;
        }
    };

    return (
        <>
            <Header />
            <ToastContainer />
            <Container>
                <Row className='image-generator mt-20'>
                    <Col md={4}>
                        <Card>
                            <Card.Body>
                                <h3>Number of Images</h3>
                                <Button onClick={() => handleNumImagesChange(1)} variant={numImages === 1 ? 'primary' : 'light'}>1</Button>
                                <Button onClick={() => handleNumImagesChange(2)} variant={numImages === 2 ? 'primary' : 'light'}>2</Button>
                                <Button onClick={() => handleNumImagesChange(3)} variant={numImages === 3 ? 'primary' : 'light'}>3</Button>
                                <Button onClick={() => handleNumImagesChange(4)} variant={numImages === 4 ? 'primary' : 'light'}>4</Button>
                            </Card.Body>
                        </Card>
                        <Card className='mt-2'>
                            <Card.Body>
                                <h3>Poster Size</h3>
                                <Form.Group>
                                    <Form.Check
                                        type="radio"
                                        label="A4"
                                        name="posterSize"
                                        checked={posterSize === "A4"}
                                        onChange={() => handlePosterSizeChange("A4")}
                                    />
                                    <Form.Check
                                        type="radio"
                                        label="A3"
                                        name="posterSize"
                                        checked={posterSize === "A3"}
                                        onChange={() => handlePosterSizeChange("A3")}
                                    />
                                </Form.Group>
                            </Card.Body>
                        </Card>
                        <Card className='mt-2'>
                            <Card.Body>
                                <h3>Inspiration Text</h3>
                                <Form.Group>
                                    <Form.Control type="text" ref={inputRef} value={inspirationText} onChange={(e) => handleInspirationTextChange(e.target.value)} />
                                </Form.Group>
                            </Card.Body>
                        </Card>
                        <Card className='mt-2'>
                            <Card.Body>
                                <h3>Customization</h3>
                                <Form.Group>
                                    <Form.Label>Color Saturation:</Form.Label>
                                    <Form.Control type="range" min="0" max="100" value={colorSaturation} onChange={(e) => handleColorSaturationChange(parseInt(e.target.value))} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Brightness:</Form.Label>
                                    <Form.Control type="range" min="0" max="100" value={brightness} onChange={(e) => handleBrightnessChange(parseInt(e.target.value))} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Contrast:</Form.Label>
                                    <Form.Control type="range" min="0" max="100" value={contrast} onChange={(e) => handleContrastChange(parseInt(e.target.value))} />
                                </Form.Group>
                            </Card.Body>
                        </Card>
                        <Card className='mt-2'>
                            <Card.Body>
                                <Button onClick={imageGenerator} variant="primary">Generate</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={8}>
                        <div className="live-preview">
                            <h2>Live Preview</h2>
                            <ProgressBar animated now={progress} label={`${progress}%`} />
                            {loading && <p>Loading...</p>}
                            {/* Display the grid of images */}
                            <div className="image-grid">
                                {/* <img src={originalImageUrl} alt="Original" className="original-image" /> */}
                                {generatedImageUrls.slice(0, numImages).map((url, index) => (
                                    <img key={index} src={url} alt={`Generated ${index + 1}`} className="generated-image" />
                                ))}

                            </div>
                            {/* Use canvas to edit images */}
                            <canvas ref={canvasRef} />
                        </div>
                    </Col>

                </Row>
            </Container>
        </>
    );
};

export default ImageGenerator;
