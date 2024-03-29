import React, { useState, useRef, useEffect } from 'react';
import './ImageGenerator.css';

const ImageGenerator = () => {
    const [imageUrls, setImageUrls] = useState([]);
    const [loading, setLoading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [errorMessage, setErrorMessage] = useState(""); // State variable for error message
    const [numImages, setNumImages] = useState(1); // State variable for the number of images
    const [aspectRatios, setAspectRatios] = useState(["1:1", "3:4", "4:3"]); // State variable for aspect ratios
    const [selectedAspectRatioIndex, setSelectedAspectRatioIndex] = useState(0); // State variable for selected aspect ratio index
    let inputRef = useRef(null);
    let numImagesRef = useRef(null);

    const imageGenerator = async () => {
        if (inputRef.current.value === "") {
            setErrorMessage("Please enter a description.");
            return;
        }
        setLoading(true);
        setProgress(0);

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
                    prompt: `${inputRef.current.value}`,
                    n: numImages,
                }),
            }
        );

        if (response.ok) {
            let data = await response.json();
            let data_array = data.data;
            if (data_array && data_array.length > 0) {
                const urls = data_array.map(item => item.url);
                setImageUrls(urls);
            } else {
                setErrorMessage("No image data received from the API");
            }
        } else {
            setErrorMessage("Failed to fetch image data from the API");
        }

        setLoading(false);
        setProgress(100); // Update progress to 100 at the end of image generation
    };


    useEffect(() => {
        if (!loading) {
            setTimeout(() => {
                setProgress(0);
            }, 3000); // Reset progress after 3 seconds
        }
    }, [loading]);

    // Function to handle aspect ratio selection
    const selectAspectRatio = (index) => {
        setSelectedAspectRatioIndex(index);
    };

    return (
        <div className='ai-image-generator'>
            <div className="header">
                Ai image <span>generator</span>
            </div>
            
            <div className="img-loading">
                <div className="image-grid">
                    {imageUrls.map((url, index) => (
                        <img key={index} src={url} alt={`Generated Image ${index + 1}`} style={{ aspectRatio: aspectRatios[selectedAspectRatioIndex], width:"250px" }} />
                    ))}
                </div>
                <div className="loading">
                    <div className={loading ? "loading-bar-full" : "loading-bar"} style={{ width: `${progress}%` }}></div>
                    {loading && <div className="loading-text">{`${progress}% Loaded`}</div>}
                </div>
            </div>
            <div className="input-fields">
                <label htmlFor="numImages">Number of Images:</label>
                <input type="number" id="numImages" ref={numImagesRef} value={numImages} onChange={(e) => setNumImages(parseInt(e.target.value))} />
            </div>
            <div className="aspect-ratio-selection">
                {aspectRatios.map((ratio, index) => (
                    <div key={index} className={`aspect-ratio ${index === selectedAspectRatioIndex ? 'selected' : ''}`} onClick={() => selectAspectRatio(index)}>
                        {ratio}
                    </div>
                ))}
            </div>
            <div className="search-box">
                <input type="text" ref={inputRef} className='search-input' placeholder='Describe what you want to see' />
                <div className="generate-btn" onClick={() => { imageGenerator() }}>
                    Generate
                </div>
            </div>
            {/* Popup message */}
            {errorMessage && (
                <div className="popup">
                    <p>{errorMessage}</p>
                    <button onClick={() => setErrorMessage("")}>Close</button>
                </div>
            )}
        </div>
    );
};

export default ImageGenerator;
