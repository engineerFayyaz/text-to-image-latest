  const drawImages = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // Clear canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    let imagesLoaded = 0; // Counter for loaded images

    generatedImageUrls.forEach((url, index) => {
      const img = new Image();
      img.onload = () => {
        const x = (index % 2) * (canvas.width / 2);
        const y = Math.floor(index / 2) * (canvas.height / 2);
        context.drawImage(img, x, y, canvas.width / 2, canvas.height / 2);

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