import React, { useState, useEffect } from "react";
import { categories } from "./constant"; 

const Categories = () => {
    const [isMobileScreen, setIsMobileScreen] = useState(window.innerWidth <= 768); 
    const handleResize = () => {
      setIsMobileScreen(window.innerWidth <= 768);
    };
  

    useEffect(() => {
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  return (
    <div className="max-w-screen-xl text-justify mx-auto p-4">

        
        {isMobileScreen ? (
           <div className="grid grid-cols-2 sm:grid-cols-5 gap-6">
           {categories.map((category, index) => (
             <div
               key={index}
               className="flex flex-col items-center text-center group cursor-pointer"
             >
               {/* Category Image */}
               <div className="w-24 h-24 sm:w-36 sm:h-36 rounded-full bg-gray-100 overflow-hidden ">
                 <img
                   src={category.img}
                   alt={category.categoryName}
                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                 />
               </div>
               {/* Category Name */}
               <h3 className="text-sm font-semibold text-gray-800 group-hover:text-black">
                 {category.categoryName}
               </h3>
             </div>
           ))}
         </div>
        ) : (
          <div>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-6">
        {categories.slice(0, 5).map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center group cursor-pointer"
          >
            {/* Category Image */}
            <div className="w-24 h-24 sm:w-36 sm:h-36 rounded-full bg-gray-100 overflow-hidden shadow-md mb-3">
              <img
                src={category.img}
                alt={category.categoryName}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            {/* Category Name */}
            <h3 className="text-sm font-semibold text-gray-800 group-hover:text-black">
              {category.categoryName}
            </h3>
          </div>
        ))}
      </div>

      {/* Centered Second Row */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-[7.5rem] mt-11 cursor-pointer">
        {categories.slice(5).map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center group"
          >
            {/* Category Image */}
            <div className="w-24 h-24 sm:w-36 sm:h-36 rounded-full bg-gray-200 overflow-hidden shadow-md mb-3">
              <img
                src={category.img}
                alt={category.categoryName}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 shadow-lg"
              />
            </div>
            {/* Category Name */}
            <h3 className="text-sm font-semibold text-gray-800 group-hover:text-black">
              {category.categoryName}
            </h3>
          </div>
        ))}
      </div>
          </div>
        )}

    </div>
  );
};

export default Categories;

