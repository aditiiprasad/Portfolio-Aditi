import React, { useRef, useState, useEffect } from "react";
import "./PaintCanvas.css";
import eyes from './images/eyes.png'

const PaintCanvas = () => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [lastPosition, setLastPosition] = useState({ x: 0, y: 0 });
  const [color, setColor] = useState("#ff00aa");
  const [lineWidth, setLineWidth] = useState(5);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;

    // Clear the canvas on initial load or when the color or lineWidth is updated
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }, [color, lineWidth]);

  const startDrawing = (e) => {
    setIsDrawing(true);
    setLastPosition(getMousePosition(e));
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const currentPosition = getMousePosition(e);
    ctx.beginPath();
    ctx.moveTo(lastPosition.x, lastPosition.y);
    ctx.lineTo(currentPosition.x, currentPosition.y);
    ctx.stroke();
    setLastPosition(currentPosition);
  };

  const getMousePosition = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleLineWidthChange = (e) => {
    setLineWidth(e.target.value);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <div className="paint-canvas-container">
      
  <h4>Take a Break, Draw something!</h4>
  
      

      <div className="paint-canvas-controls">
        <input
          type="color"
          value={color}
          onChange={handleColorChange}
          className="paint-canvas-color-picker"
        />
        <input
          type="range"
          min="1"
          max="20"
          value={lineWidth}
          onChange={handleLineWidthChange}
          className="paint-canvas-line-width-slider"
        />
        <button onClick={clearCanvas} className="paint-canvas-clear-button">
          Clear
        </button>
      </div>
      <canvas
        ref={canvasRef}
        className="paint-canvas"
        
        height="200"
        onMouseDown={startDrawing}
        onMouseUp={stopDrawing}
        onMouseMove={draw}
        onMouseLeave={stopDrawing}
      />
    </div>
  );
};

export default PaintCanvas;
