import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../../components/GameComponent/GameComponent.css";

const GameComponent = ({ onGameComplete }) => {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30); // Game duration in seconds
  const [molePosition, setMolePosition] = useState({ x: 0, y: 0 });
  const [isGameActive, setIsGameActive] = useState(true);

  useEffect(() => {
    // toast("Let's play the game until AI is generating the image", { autoClose: 4000 });

    const timer = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);

        // Randomly move the mole within the game board
        const newX = Math.floor(Math.random() * 10);
        const newY = Math.floor(Math.random() * 10);
        setMolePosition({ x: newX, y: newY });
      } else {
        setIsGameActive(false);
        clearInterval(timer);
        onGameComplete(score);
      }
    }, 1000);

    // Simulating image generation after 5 seconds
    const imageGenerationTimer = setTimeout(() => {
      toast("OMG here is the image");
    }, 5000);

    return () => {
      clearInterval(timer);
      clearTimeout(imageGenerationTimer);
    };
  }, [timeLeft, score, onGameComplete]);

  const handleMoleClick = () => {
    if (isGameActive) {
      setScore((prevScore) => prevScore + 1);
      toast("You got it! Keep playing.");
    }
  };

  const handleRestart = () => {
    setScore(0);
    setTimeLeft(30);
    setIsGameActive(true);
    toast("Game restarted. Keep playing.");
  };

  return (
    <div className="game-container">
      <div className="overlay"></div>
      <ToastContainer />
      <div className="content">
      <h2>Ai Generated Game</h2>
      <p className="score">Score: {score}</p>
      <p className="time-left">Time Left: {timeLeft} seconds</p>
      <div className="game-board">
        {isGameActive && (
          <div
            className="mole"
            style={{
              left: `${molePosition.x * 10}vw`,
              top: `${molePosition.y * 10}vh`,
            }}
            onClick={handleMoleClick}
          />
        )}
      </div>
      {!isGameActive && (
        <div className="game-over">
          <p>Game Over! Your final score: {score}</p>
          <button onClick={handleRestart}>Play Again</button>
        </div>
      )}
      </div>
    </div>
  );
};

export default GameComponent;
