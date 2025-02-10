import React, { useEffect } from "react";
import { useParams, Link, useLocation, useNavigate  } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBaby, faBackward } from "@fortawesome/free-solid-svg-icons";
import { subCategories } from "./constant";
import ProductCard from "../categories/ProductCard";

const SubCategories = () => {
  const { categoryId } = useParams();

    const location = useLocation();
    const navigate = useNavigate();
  
    useEffect(() => {
      const searchParams = new URLSearchParams(location.search);
      const id = searchParams.get("id");
    
      if (id) {
        // Find the element by ID
        const element = document.getElementById(`${id}`);
        console.log("The element is:", element, 'the id is ', id);
    
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });  
        }
    
        // Remove 'id' from query params
        searchParams.delete("id");
        // navigate({ search: searchParams.toString() }, { replace: true });
      }
    }, [location, navigate]);
    
  

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

            <div className="mt-8" key={index}>
              <h2 id={sub?.id} className="text-2xl sm:ml-6 text-center font-extrabold text-gray-700 mb-6">
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
