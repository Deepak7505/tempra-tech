import React from "react";
import { categories, homePageTrendConstant } from "./constant";
import ProductCard from "./ProductCard";
import "../../../src/index.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Categories from "./Categories";
import { Link } from "react-router-dom";


const ProductList = () => {
    const handleCardClick = (productId) => {
      alert(`Navigate to product info page for ID: ${productId}`);
    };
  
    return (
      <div className="min-h-screen bg-white p-6">
        <div className="flex flex-col items-center sm:flex-row sm:justify-center sm:items-center relative  gap-5 px-4 text-center">
            
        <div className='text-center mb-5 flex flex-row gap-4 justify-center pt-5 '>
          <span>_______________________________________________________________</span>
        <h1 className='text-[#5D5D5D]  font-poppins text-4xl font-bold'>Shop All</h1>
        <h1 className='text-[#C97511]  font-poppins text-4xl font-bold'>Categories</h1>
        <span>__________________________________________________________________</span>

        </div>
         
        </div>
        <div className=" pb-6">
          <Categories />
        </div>
        <div className='w-full flex items-center justify-center pb-12'>
            <div className='w-5/6 h-3  border-b-4 border-dashed'></div>     
        </div>

        <div className="w-full flex justify-center items-center">
        <div className="w-full pb-4 py-4 flex flex-col rounded-lg items-center justify-center px-4">
        {homePageTrendConstant.map((category, index) => (
          <div className="mt-8 my-8 w-[90%] bg-[#f7f3ee] px-7 py-8 rounded-md" key={index}>
            <h2 className="text-gray-950 font-poppins text-center text-3xl font-bold mb-8">
              {category?.categoryName}
            </h2>

            <div className="overflow-x-auto flex space-x-4 pb-4 scroll-smooth">
              {category.prodcutList.map((prod) => (
                <Link key={prod.prodId} to={`/product/${prod?.prodId}`}>
                <div>
                  <ProductCard product={prod} />
                </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
        </div>
        </div>
        <div className='w-full flex items-center justify-center pt-20'>
            <div className='w-full h-3 border-b-4 border-dashed'></div>     
        </div>
      </div>
    );
  };
  
  



export default ProductList;
