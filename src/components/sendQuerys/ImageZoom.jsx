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
  // gap-6 p-6 border  bg-white
  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden w-[40rem] h-[36rem] bg-white  border rounded-xl shadow-md"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <img
        src={src}
        alt={alt}
        className=" w-auto h-[36rem] transition-transform rounded-xl duration-200"
        style={{
          transform: zoom ? `scale(2)`: 'scale(1)',
          transformOrigin: `${position.x}% ${position.y}%`,
        }}
      />
    </div>
  );
};

export default ImageZoom;