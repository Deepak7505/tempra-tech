import React from "react";
import { AiFillStar } from "react-icons/ai";

const ProductCard = ({ product }) => {
    const { cardImage, prodName, price, discountedPrize, rating, prodDetails } = product;
  
    return (
      <div className="max-w-xs mx-auto bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform border border-gray-200">

        <div className="relative h-56">
          <img
            src={cardImage}
            alt={prodName}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
            Bestsellers
          </div>
        </div>
  
        {/* Product Details */}
        <div className="p-4">
          <h2 className="text-lg font-bold text-gray-800 truncate">{prodName}</h2>
          <h4 className="font-bold text-gray-800 truncate">{prodDetails}</h4>

  
          {/* Ratings */}
          <div className="flex items-center mt-2">
            {Array.from({ length: 5 }, (_, index) => (
              <AiFillStar
                key={index}
                className={`h-5 w-5 ${
                  index < rating ? "text-yellow-500" : "text-gray-300"
                }`}
              />
            ))}
          </div>
  
          {/* Pricing */}
          <div className="mt-3 flex items-center">
            <span className="text-gray-500 line-through text-sm">${price}</span>
            <span className="text-green-600 font-bold text-xl ml-2">
              ${discountedPrize}
            </span>
          </div>
  
          {/* Shop Now Button */}
          {/* <button className="mt-4 w-full bg-blue-500 text-white text-sm font-semibold py-2 rounded-lg hover:bg-blue-600 transition-colors">
            Shop Now
          </button> */}
        </div>
      </div>
    );
  };


export default ProductCard;
