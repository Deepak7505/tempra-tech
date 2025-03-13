import React, { useEffect, useRef } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { subCategories } from "./constant";
import ProductCard from "../categories/ProductCard";
import RotatingDisclaimer from '../sendQuerys/RotatingDisclaimer';
import { faLessThan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SubCategories = () => {
  const { categoryId } = useParams();
  const location = useLocation();
  const carouselRef = useRef(null);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get("id");

    if (id) {
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });

        setTimeout(() => {
          searchParams.delete("id");
          window.history.replaceState({}, "", `${location.pathname}?${searchParams.toString()}`);
        }, 500);
      }
    }
  }, [location]);

  return (
    <div className=" bg-purple-50">
      <div className='flex sm:flex-row flex-col py-4 px-4 w-full bg-red-600'>
        <button
          onClick={() => window.history.back()}
            className="flex items-center px-8 py-3 text-white text-xl bg-indigo-600 transition-all duration-500 shadow-[6px_6px_0px_black] skew-x-[-15deg] border-none cursor-pointer hover:shadow-[10px_10px_0px_#fbc638] focus:outline-none"
          >
            <span className="skew-x-[15deg] ">
              <FontAwesomeIcon icon={faLessThan} />
            </span>
          <span className="w-12 ml-5 relative top-[1%] transition-all duration-500 group-hover:mr-11">BACK</span>
        </button>
        <div className='flex w-3/4 justify-center md:pl-40 '>
          <RotatingDisclaimer />
        </div>
      </div>

     <div className="w-full flex justify-center items-center">
        <div className="w-full pb-4 py-4 flex flex-col rounded-lg items-center justify-center px-4">
          { (categoryId !== "mugs" && categoryId !== "mousePad") && subCategories[categoryId]?.map((sub, index) => (
            <div className="mt-8 my-8 w-[90%] bg-[#C2D6EF] px-7 py-8 rounded-md" key={index}>
             <div>
             <h2
                id={sub?.id}
                className="text-gray-950 font-poppins text-center text-3xl font-bold mb-8"
              >
                {sub?.name}
              </h2>

              <div className="relative">
                <div
                  ref={carouselRef}
                  className={`overflow-x-auto flex space-x-4 pb-4 scroll-smooth`}
                  style={{ scrollBehavior: "smooth" }}
                >
                  {sub.ProductList.map((prod) => (
                    <Link key={prod.prodId} to={`/product/${prod?.prodId}`}>
                      <div>
                      {/* <h2
                        id={sub?.id}
                        className="text-gray-950 font-poppins text-center text-xl font-bold mb-8"
                      >
                        {sub?.name}
                      </h2> */}
                        <ProductCard product={prod} />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
             </div>
            </div>
          ))}

                    
          { (categoryId === "mugs" || categoryId === "mousePad")   && 
            <div  style={{ scrollBehavior: "smooth" }}
            ref={carouselRef}
             className="my-20 w-[90%] bg-[#C2D6EF] px-7 py-8 rounded-md overflow-x-auto flex space-x-4 pb-4 scroll-smooth">
            {
               subCategories[categoryId]?.map((sub, index) => (
                <div className="" key={index}>
               
                 <div className="relative ">
                   <div

                   >
                     {sub.ProductList.map((prod) => (
                       <Link key={prod.prodId} to={`/product/${prod?.prodId}`}>
                         <div className="">
                         <h2
                           id={sub?.id}
                           className="text-gray-950 font-poppins text-center text-xl font-bold mb-8"
                         >
                           {sub?.name}
                         </h2>
                           <ProductCard product={prod} />
                         </div>
                       </Link>
                     ))}
                   </div>
                 </div>
                </div>
             ))
            }
            </div>
          }
        </div>
     </div>
    </div>
  );
};

export default SubCategories;

