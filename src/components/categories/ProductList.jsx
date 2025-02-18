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
            
            <div className='text-center mb-5 flex flex-col justify-center '>
              <h1 className='text-[#5D5D5D] leading-[5rem] scale-y-110 font-din text-6xl font-bold'>SHOP ALL</h1>
              <h1 className='text-[#C97511] font-poppins text-5xl font-bold'>CATEGORIES</h1>
            </div>
         
        </div>
        <div className=" pb-6">
          <Categories />
        </div>
        <div className='w-full flex items-center justify-center pb-12'>
            <div className='w-5/6 h-3  border-b-4 border-dashed'></div>     
        </div>

        <div className="">
        {homePageTrendConstant.map((category, index) => (
          <div className=" mt-8" key={index}>
            <h2 className="text-[#5D5D5D] md:leading-[5rem] scale-y-125 font-din text-center text-4xl font-bold mb-8">
                {/* <FontAwesomeIcon className="px-3 " icon={category.icon} /> */}
              {category?.categoryName}
            </h2>

            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
        <div className='w-full flex items-center justify-center pt-20'>
            <div className='w-full h-3 border-b-4 border-dashed'></div>     
        </div>
      </div>
    );
  };
  
  



export default ProductList;
