import React from "react";
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBaby, faBackward } from "@fortawesome/free-solid-svg-icons";
import { subCategories } from "./constant";
import ProductCard from "../categories/ProductCard";

const SubCategories = () => {
  const { categoryId } = useParams();
  

  return (
    <div>

        <div className="flex items-center w-full py-4 px-6 md:px-12">
            <button
              onClick={() => window.history.back()}
              className="text-xl  font-extrabold text-black border-2 border-gray-500 p-3 rounded-md hover:border-gray-950 transition-all sm:ml-6"
            >
              <FontAwesomeIcon className="pr-2 hover:scale-110 transition-transform" icon={faBackward} />
            </button>

            <div className="flex-1 text-center">
              <h1 className="text-5xl font-extrabold text-gray-700">{subCategories[categoryId][0]?.parentCategory}</h1>
            </div>
         </div>

      <div className="pb-4">
        {subCategories[categoryId]?.map((sub, index) => (

            <div className=" mt-8" key={index}>
              <h2 className="text-2xl sm:ml-6 text-center font-extrabold text-gray-700 mb-6">
                  {/* <FontAwesomeIcon className="px-3 " icon={faBaby} /> */}
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
