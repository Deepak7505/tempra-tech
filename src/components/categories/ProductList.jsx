import React from "react";
import { categories } from "./constant";
import ProductCard from "./ProductCard";
import "../../../src/index.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBeerMugEmpty, faBottleWater, faBox, faMugHot, faMugSaucer,  } from "@fortawesome/free-solid-svg-icons";


const ProductList = () => {
    const handleCardClick = (productId) => {
      alert(`Navigate to product info page for ID: ${productId}`);
    };
  
    return (
      <div className="min-h-screen  p-6">
        <div className="flex flex-col border-b-2 pb-10 items-center sm:flex-row sm:justify-center sm:items-center relative top-14 gap-5 px-4 text-center">
            <span className="hidden sm:block text-white flex-grow">
                __________________
            </span>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-700 mb-8">
                Tailor Your Dreams – Customize Your Perfect Product Today!
            </h1>
            <span className="hidden sm:block text-white flex-grow">
                ______________________
            </span>
        </div>

        {categories.map((category, index) => (
          <div className="mb-12 mt-24" key={index}>
            <h2 className="text-5xl w-full text-center font-semibold text-gray-700 mb-6">
                <FontAwesomeIcon className="px-3 " icon={category.icon} />
              {category?.categoryName}
            </h2>

            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {category.prodcutList.map((prod) => (
                <div key={prod.prodId} onClick={() => handleCardClick(prod.prodId)}>
                  <ProductCard product={prod} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  



export default ProductList;
