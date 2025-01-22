import React, { useState, useEffect } from "react";

const HeroCarousel = () => {
  const images = [
    "https://i.etsystatic.com/37826877/r/il/c294c4/4245841858/il_fullxfull.4245841858_7we3.jpg",
    "https://keyboardgear.com/wp-content/uploads/2020/12/Best-Gaming-Mouse-Pads-2021.jpg",
    "https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/11/Tshirt-design.jpg?auto=format&q=60&w=2060&h=1158.75&fit=crop&crop=faces",
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
    <div className=" flex justify-center md:mt-4 ">
      <div className="relative w-full md:w-[90vw]">
        {/* Image Section */}
      <div className="relative h-[400px] md:h-[500px]  overflow-hidden">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-fill md:rounded-2xl transition-opacity duration-500 ${
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
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
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