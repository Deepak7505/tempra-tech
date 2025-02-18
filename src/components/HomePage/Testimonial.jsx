import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Customer",
    date: "01/01/2025",
    product: "Strawberry Preserve",
    title: "Best Strawberry Preserve",
    feedback:
      "Absolutely love the strawberry preserve! It’s guilt-free and delicious. The strawberry chunks taste very fresh. Loving farm-to-home products!",
    image:
      "https://my-portfoio-app-f96l.vercel.app/static/media/imageDeepak-removebg.08e112b1454dc12b5e1d.png",
  },
  {
    name: "Sumit Khandelwal",
    date: "12/30/2024",
    product: "Strawberry Preserve",
    title: "Great taste",
    feedback:
      "The strawberry preserve was a fantastic purchase! Perfect balance of sweetness and freshness. I highly recommend trying it out.",
    image: "https://hoyi.farm/cdn/shop/files/7.png?v=1704197631&width=500",
  },
  {
    name: "Ravi Gupta",
    date: "12/10/2024",
    product: "Wildflower Honey",
    title: "Real Honey by Real People",
    feedback:
      "The honey is amazing! Pure, natural, and has a rich flavor. Feels like homemade and directly benefits the communities producing it.",
    image:
      "https://hoyi.farm/cdn/shop/files/3_4a2cf2f4-5501-448b-8b4b-57e1b2a40be3.png?v=1704197450&width=500",
  },
  {
    name: "Neha Sharma",
    date: "12/05/2024",
    product: "Organic Honey",
    title: "Pure and Authentic",
    feedback:
      "This honey is truly organic and fresh. I love the texture and the taste. It’s perfect for my daily tea and breakfast!",
    image: "https://hoyi.farm/cdn/shop/files/Untitled_design_3.png?v=1704275825&width=500",
  },
  {
    name: "Amit Verma",
    date: "11/25/2024",
    product: "Mango Pickle",
    title: "Amazing Flavor!",
    feedback:
      "The mango pickle reminds me of home! It has the perfect balance of tanginess and spice. Will definitely order again!",
    image: "https://hoyi.farm/cdn/shop/files/6_ab533d9b-5f30-4ace-ad20-048c1a35fe57.png?v=1704197812&width=500",
  },
  {
    name: "Priya Desai",
    date: "11/10/2024",
    product: "Organic Jaggery",
    title: "Best Jaggery Ever",
    feedback:
      "This jaggery is so pure and has a rich taste. I use it in all my sweets, and it makes them taste even better!",
    image: "https://hoyi.farm/cdn/shop/files/WhatsApp_Image_2024-01-02_at_5.23.35_PM_1.jpg?v=1704198415&width=500",
  },
];

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3); // Default for large screens

  // Update `itemsPerSlide` dynamically when window resizes
  useEffect(() => {
    const updateItemsPerSlide = () => {
      setItemsPerSlide(window.innerWidth < 768 ? 1 : 3);
    };

    updateItemsPerSlide(); // Set initial value
    window.addEventListener("resize", updateItemsPerSlide); // Listen for resizes

    return () => window.removeEventListener("resize", updateItemsPerSlide); // Cleanup
  }, []);

  const totalSlides = Math.ceil(testimonials.length / itemsPerSlide);

  return (
    <section className="py-12 border-b-4 border-dashed bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-gray-700 mb-6">
          How People See TEMPRA
        </h2>

        {/* Carousel */}
        <div className="overflow-hidden">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="flex space-x-4 justify-center"
          >
            {testimonials
              .slice(currentIndex * itemsPerSlide, (currentIndex + 1) * itemsPerSlide)
              .map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg border rounded-lg p-6 w-80 h-96 flex flex-col items-center"
                >
                  {/* Image */}
                  <img
                    src={testimonial.image}
                    alt={testimonial.product}
                    className="h-20 w-20 rounded-full object-cover border-4 border-gray-200"
                  />

                  {/* Text */}
                  <h3 className="text-lg font-semibold text-gray-900 mt-4">
                    {testimonial.title}
                  </h3>

                  {/* Star Rating */}
                  <div className="flex space-x-1 text-yellow-400 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-lg">★</span>
                    ))}
                  </div>

                  {/* Feedback */}
                  <p className="mt-2 text-gray-600 text-sm text-center">
                    {testimonial.feedback}
                  </p>

                  <div className="mt-4">
                    <p className="text-sm font-medium text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {testimonial.product} - {testimonial.date}
                    </p>
                  </div>
                </div>
              ))}
          </motion.div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition ${
                currentIndex === index ? "bg-gray-900 scale-125" : "bg-gray-400"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;








// import React from 'react';

// const testimonials = [
//   {
//     name: 'Customer',
//     date: '01/01/2025',
//     product: 'Strawberry Preserve',
//     title: 'Best Strawberry Preserve',
//     feedback:
//       'Absolutely love the strawberry preserve for my daughter and myself which we enjoy guilt-free over our bread, pancakes, pound cakes, and even with rotis. The strawberry chunks taste very fresh and love the variety of farm-to-home products from HoYi :)',
//     image: 'https://my-portfoio-app-f96l.vercel.app/static/media/imageDeepak-removebg.08e112b1454dc12b5e1d.png', // Replace with actual image URL
//   },
//   {
//     name: 'Sumit Khandelwal',
//     date: '12/30/2024',
//     product: 'Strawberry Preserve',
//     title: 'Great taste',
//     feedback: 'I loved the strawberry preserve...worth trying...',
//     image: 'https://hoyi.farm/cdn/shop/files/7.png?v=1704197631&width=500', // Replace with actual image URL
//   },
//   {
//     name: 'Ravi Gupta',
//     date: '12/10/2024',
//     product: 'Wildflower Honey',
//     title: 'Real Honey by real people',
//     feedback:
//       'The honey is quite good, with natural sweetness. I have consumed honey from many places and could say this is among the best ones. The best part is you know it\'s like homemade stuff and benefits the communities who made these directly. Keep up the good work!',
//     image: 'https://hoyi.farm/cdn/shop/files/3_4a2cf2f4-5501-448b-8b4b-57e1b2a40be3.png?v=1704197450&width=500', // Replace with actual image URL
//   },
// ];

// const Testimonial = () => {
//   return (
//     <section className="bg-gray-100 py-12">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-3xl font-extrabold text-gray-900 text-center">
//           How people see HoYi
//         </h2>
//         <div className="mt-10 flex justify-between space-x-8 space-y-8">
//           {testimonials.map((testimonial, index) => (
//             <div
//               key={index}
//               className="bg-white w-full h-96 shadow-lg rounded-lg p-6 flex flex-col md:flex-row"
//             >

             

//               {/* Text Section */}
//               <div className="mt-4 md:mt-0 md:ml-6">
//                 <h3 className="text-xl font-semibold text-gray-900">
//                   {testimonial.title}
//                 </h3>
//                 <p className="mt-2 text-gray-600">{testimonial.feedback}</p>
//                 <div className="mt-4">
//                   <p className="text-sm font-medium text-gray-900">
//                     {testimonial.name}
//                   </p>
//                   <p className="text-sm text-gray-500">
//                     {testimonial.product} - {testimonial.date}
//                   </p>
//                 </div>
//               </div>
//               {/* Image Section */}
//               <div className="flex-shrink-0">
//                 <img
//                   src={testimonial.image}
//                   alt={testimonial.product}
//                   className="h-48 w-48 rounded-md object-cover"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonial;







// import React from 'react';

// const Testimonial = ({ image, name, description, isCenter }) => {
//   return (
//     <div
//       className={`transition-transform duration-500 ease-in-out transform ${
//         isCenter ? "scale-110" : "scale-100"
//       } max-w-xs bg-white p-6 rounded-lg shadow-lg hover:shadow-xl`}
//     >
//       <div className="flex items-center space-x-4">
//         <img
//           src={image}
//           alt={name}
//           className="w-16 h-16 rounded-full border-2 border-gray-300"
//         />
//         <div>
//           <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
//           <p className="text-gray-500 text-sm">Customer</p>
//         </div>
//       </div>
//       <p className="mt-4 text-gray-700 text-base">{description}</p>
//     </div>
//   );
// };

// export default Testimonial;
