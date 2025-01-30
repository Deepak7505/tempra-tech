import React, { useState, useEffect } from 'react';
import Testimonial from './Testimonial';

const testimonialsData = [
  {
    image: 'https://do6gp1uxl3luu.cloudfront.net/banner+and+logos/akshayReactPic.webp',
    name: 'John Doe',
    description: 'This is a fantastic product! It really helped me streamline my workflow and save time.',
  },
  {
    image: 'https://do6gp1uxl3luu.cloudfront.net/banner+and+logos/akshayReactPic.webp',
    name: 'Jane Smith',
    description: 'I absolutely love this service. The customer support is excellent, and the features are great.',
  },
  {
    image: 'https://do6gp1uxl3luu.cloudfront.net/banner+and+logos/akshayReactPic.webp',
    name: 'Alice Johnson',
    description: 'Amazing experience! It’s user-friendly and intuitive to navigate.',
  },
  {
    image: 'https://do6gp1uxl3luu.cloudfront.net/banner+and+logos/akshayReactPic.webp',
    name: 'Bob Brown',
    description: 'I saw a significant improvement in my productivity after using this.',
  },
  {
    image: 'https://do6gp1uxl3luu.cloudfront.net/banner+and+logos/akshayReactPic.webp',
    name: 'Tom Lee',
    description: 'Exceptional service! I recommend it to everyone in my industry.',
  },
  {
    image: 'https://do6gp1uxl3luu.cloudfront.net/banner+and+logos/akshayReactPic.webp',
    name: 'Emma Wilson',
    description: 'It’s been a game-changer for me. I couldn’t imagine working without it.',
  },
];

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    }, 1000); // Change testimonial every 1 second

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  // Get the 6 testimonials that should be displayed in the carousel
  const getDisplayedTestimonials = () => {
    const displayed = [];
    for (let i = 0; i < 6; i++) {
      displayed.push(testimonialsData[(currentIndex + i) % testimonialsData.length]);
    }
    return displayed;
  };

  return (
    <div className="relative">
      <button
        onClick={handlePrev}
        className="absolute left-0 p-2 bg-gray-800 text-white rounded-full shadow-lg z-10"
      >
        &lt;
      </button>

      <div className="overflow-hidden">
        <div className="flex transition-transform duration-500 ease-in-out">
          {getDisplayedTestimonials().map((testimonial, index) => (
            <div
              key={index}
              className={`${
                index === 2 ? 'scale-110' : 'scale-100'
              } transition-transform duration-500 ease-in-out mx-2`}
            >
              <Testimonial
                image={testimonial.image}
                name={testimonial.name}
                description={testimonial.description}
                isCenter={index === 2}
              />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={handleNext}
        className="absolute right-0 p-2 bg-gray-800 text-white rounded-full shadow-lg z-10"
      >
        &gt;
      </button>
    </div>
  );
};

export default TestimonialsCarousel;
