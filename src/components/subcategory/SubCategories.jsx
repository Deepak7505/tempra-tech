import React, { useEffect } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { subCategories } from "./constant";
import ProductCard from "../categories/ProductCard";
import { FaArrowLeft } from "react-icons/fa";

const SubCategories = () => {
  const { categoryId } = useParams();

    const location = useLocation();
  
    useEffect(() => {
      const searchParams = new URLSearchParams(location.search);
      const id = searchParams.get("id");
  
          if (id) {
              const element = document.getElementById(id);
              console.log("The element is:", element, 'the id is ', id);
      
              if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
      
                  // Delay removing 'id' to allow scrolling to complete
                  setTimeout(() => {
                      searchParams.delete("id");
                      
                      // Use history.replaceState to update the URL without reloading
                      window.history.replaceState({}, "", `${location.pathname}?${searchParams.toString()}`);
                  }, 500);
              }
          }
      }, [location]);
  
  

  return (
    <div className="px-2">

      <div className='flex sm:flex-row flex-col w-full bg-white mt-2'>
        <button
          onClick={() => window.history.back()}
          className="flex items-center text-black border border-gray-400 px-4 py-2 rounded-lg hover:bg-gray-100 transition-all mb-4"
        >
          <FaArrowLeft className="mr-2" /> Back
        </button>
        <div className="flex-1 text-center">
          <h1 className="text-5xl font-semibold text-gray-700 sm:mr-16">{subCategories[categoryId][0]?.parentCategory}</h1>
        </div>
      </div>

          

      <div className="pb-4">
        {subCategories[categoryId]?.map((sub, index) => (

            <div className="mt-8" key={index}>
              <h2 id={sub?.id} className=" p-1 text-center font-semibold text-xl text-gray-700 mb-3">
                {sub?.name} 
              </h2>

              <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {sub.ProductList.map((prod) => (
                  <Link key={prod.prodId} to={`/product/${prod?.prodId}`}>
                    <div >
                      <ProductCard product={prod} />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
        ))}
      </div>


    </div>
  );
};

export default SubCategories;
