import React, { useRef, useState, useEffect } from "react";
import "./PaintCanvas.css";

const PaintCanvas = () => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [lastPosition, setLastPosition] = useState({ x: 0, y: 0 });
  const [color, setColor] = useState("#ff00aa");
  const [lineWidth, setLineWidth] = useState(5);

  const getMouseOrTouchPosition = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    if (e.touches) {
      // Touch event
      return {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top,
      };
    }
    // Mouse event
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const startDrawing = (e) => {
    e.preventDefault(); // Prevent default behavior for touch events
    setIsDrawing(true);
    const position = getMouseOrTouchPosition(e);
    setLastPosition(position);
  };

  const stopDrawing = (e) => {
    e.preventDefault(); // Prevent default behavior for touch events
    setIsDrawing(false);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    e.preventDefault(); // Prevent scrolling on touch events
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const currentPosition = getMouseOrTouchPosition(e);

    ctx.beginPath();
    ctx.moveTo(lastPosition.x, lastPosition.y);
    ctx.lineTo(currentPosition.x, currentPosition.y);
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.stroke();

    setLastPosition(currentPosition);
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
      <h4 className="paint">Take a Break, Draw something!</h4>
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
        width="400"
        height="200"
        onMouseDown={startDrawing}
        onMouseUp={stopDrawing}
        onMouseMove={draw}
        onMouseLeave={stopDrawing}
        onTouchStart={startDrawing} // Added touch events
        onTouchEnd={stopDrawing}
        onTouchMove={draw}
      />
    </div>
  );
};

export default PaintCanvas;
