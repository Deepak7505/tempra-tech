import React, { useState, useRef } from 'react';

const ImageZoom = ({ src, alt }) => {
  const [zoom, setZoom] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const handleMouseEnter = () => setZoom(true);
  const handleMouseLeave = () => setZoom(false);
  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPosition({ x, y });
  };

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <img
        src={src}
        alt={alt}
        className="w-auto h-96 shadow-2xl transition-transform duration-200"
        style={{
          transform: zoom ? `scale(2)`: 'scale(1)',
          transformOrigin: `${position.x}% ${position.y}%`,
        }}
      />
    </div>
  );
};

export default ImageZoom;


