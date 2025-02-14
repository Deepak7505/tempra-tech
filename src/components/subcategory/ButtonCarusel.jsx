import { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ButtonCarousel = () => {
  const [buttons] = useState(Array.from({ length: 20 }, (_, i) => i + 1)); // Buttons 1-20
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -100, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 100, behavior: "smooth" });
    }
  };

  return (
    <div className="flex items-center justify-center w-full py-4">
      {/* Left Arrow */}
      {buttons.length > 1 && (
        <button
          onClick={scrollLeft}
          className="p-2 bg-gray-300 rounded-full mx-2 hover:bg-gray-400"
        >
          <FaChevronLeft />
        </button>
      )}

      {/* Carousel Container */}
      <div
        ref={carouselRef}
        className={`flex overflow-x-auto scrollbar-hide ${
          buttons.length === 1 ? "justify-center" : ""
        } space-x-4 p-2 w-[300px] md:w-[500px]`}
      >
        {buttons.map((num) => (
          <button
            key={num}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg min-w-[60px] text-center"
          >
            {num}
          </button>
        ))}
      </div>

      {/* Right Arrow */}
      {buttons.length > 1 && (
        <button
          onClick={scrollRight}
          className="p-2 bg-gray-300 rounded-full mx-2 hover:bg-gray-400"
        >
          <FaChevronRight />
        </button>
      )}
    </div>
  );
};

export default ButtonCarousel;
