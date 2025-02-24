import React, { useState, useEffect } from "react";

const HeroCarousel = () => {
  
  const images = [
    "https://raw.githubusercontent.com/Deepak7505/myimages/refs/heads/main/for%20front%20page/for%20front%20page/1.png",
    "https://raw.githubusercontent.com/Deepak7505/myimages/refs/heads/main/for%20front%20page/for%20front%20page/2.jpg",
    "https://raw.githubusercontent.com/Deepak7505/myimages/refs/heads/main/for%20front%20page/for%20front%20page/3.jpg",
    "https://raw.githubusercontent.com/Deepak7505/myimages/refs/heads/main/for%20front%20page/for%20front%20page/4.jpg",
    "https://raw.githubusercontent.com/Deepak7505/myimages/refs/heads/main/for%20front%20page/for%20front%20page/5.jpg",
    "https://raw.githubusercontent.com/Deepak7505/myimages/refs/heads/main/for%20front%20page/for%20front%20page/6.png"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Autoplay: change slides every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className=" flex bg-gray-50 justify-center  ">
      <div className="relative w-full md:w-full">
        {/* Image Section md:w-[90vw] */}
      <div className="relative h-[400px] md:h-[600px]  overflow-hidden">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-fill transition-opacity duration-500 ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          />
        ))}
      </div>

      {/* Previous Button */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-100 z-50 text-white p-3 rounded-full focus:outline-none hover:bg-opacity-100"
        onClick={handlePrev}
      >
        &#8592;
    
      </button>

      {/* Next Button */}
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-100 z-50 text-white p-3 rounded-full focus:outline-none hover:bg-opacity-75"
        onClick={handleNext}
      >
        &#8594;
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform opacity-100 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 opacity-100 z-50 rounded-full ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
      </div>
    </div>

  );
};

export default HeroCarousel;