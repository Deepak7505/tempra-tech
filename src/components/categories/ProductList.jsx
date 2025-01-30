import React from "react";
import { categories, homePageTrendConstant } from "./constant";
import ProductCard from "./ProductCard";
import "../../../src/index.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Categories from "./Categories";


const ProductList = () => {
    const handleCardClick = (productId) => {
      alert(`Navigate to product info page for ID: ${productId}`);
    };
  
    return (
      <div className="min-h-screen bg-gray-50 p-6 border-b-2">
        <div className="flex flex-col items-center sm:flex-row sm:justify-center sm:items-center relative  gap-5 px-4 text-center">
            <span className="hidden sm:block text-gray-700 flex-grow sm:pb-7">
              ______________________________________________________________
            </span>

            <h1 className="text-2xl sm:text-2xl lg:text-5xl font-bold text-gray-700 mb-8">
                Shop All Categoires
            </h1>
            <span className="hidden sm:block text-gray-700 flex-grow sm:pb-7">
              ______________________________________________________________
            </span>
        </div>
        <div className=" pb-3 border-b-2">
          <Categories />
        </div>

        <div className="">
        {homePageTrendConstant.map((category, index) => (
          <div className=" mt-8" key={index}>
            <h2 className="text-3xl text-center font-extrabold text-gray-700 mb-6">
                {/* <FontAwesomeIcon className="px-3 " icon={category.icon} /> */}
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
      </div>
    );
  };
  
  



export default ProductList;
