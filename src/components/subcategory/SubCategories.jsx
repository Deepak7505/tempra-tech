import React from "react";
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBaby } from "@fortawesome/free-solid-svg-icons";
import { subCategories } from "./constant";
import ProductCard from "../categories/ProductCard";

const SubCategories = () => {
  const { categoryId } = useParams();
  // const subCategories = {
  //   mugs: [{ id: "mobiles", name: "Mobiles" }, { id: "laptops", name: "Laptops" }],
  //   fashion: [{ id: "mens-clothing", name: "Men's Clothing" }, { id: "womens-clothing", name: "Women's Clothing" }],
  // };

  return (
    <div>
      <h1>Subcategories for {categoryId}</h1>
      {/* {subCategories[categoryId]?.map((sub) => (
        <Link key={sub.id} to={`/categories/${categoryId}/${sub.id}`} className="block text-green-600">
          {sub.name}
        </Link>
      )) || <p>No subcategories found.{categoryId}</p>} */}



      <div className="">
        {subCategories[categoryId]?.map((sub, index) => (
          <div className=" mt-8" key={index}>
            <h2 className="text-3xl text-center font-extrabold text-gray-700 mb-6">
                <FontAwesomeIcon className="px-3 " icon={faBaby} />
              {sub?.name} 
            </h2>

            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {sub.ProductList.map((prod) => (
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

export default SubCategories;
