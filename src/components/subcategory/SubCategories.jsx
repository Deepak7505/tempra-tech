import React, { useEffect, useRef } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { subCategories } from "./constant";
import ProductCard from "../categories/ProductCard";
import { FaArrowLeft } from "react-icons/fa";
import RotatingDisclaimer from '../sendQuerys/RotatingDisclaimer';

const SubCategories = () => {
  const { categoryId } = useParams();
  const location = useLocation();
  const carouselRef = useRef(null);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get("id");

    if (id) {
      const element = document.getElementById(id);
      console.log("The element is:", element, 'the id is ', id);

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
          <span className="skew-x-[15deg]">BACK</span>
          <span className="w-5 ml-7 relative top-[12%] transition-all duration-500 group-hover:mr-11">
            <svg
              width="50px"
              height="20px"
              viewBox="0 0 66 43"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none" fillRule="evenodd">
                <path
                  className="transition-transform duration-400 translate-x-[-60%] group-hover:translate-x-0 animate-color"
                  d="M40.154 3.895L43.976.139a.49.49 0 0 1 .7.14L65.692 20.785a.74.74 0 0 1 0 1.414l-21.015 20.65a.49.49 0 0 1-.7-.14l-3.822-3.754a.49.49 0 0 1 .7-.7l16.84-16.537a.49.49 0 0 0 0-.707L40.154 4.608a.49.49 0 0 1 0-.713z"
                  fill="white"
                />
                <path
                  className="transition-transform duration-500 translate-x-[-30%] group-hover:translate-x-0 animate-color"
                  d="M20.154 3.895L23.976.139a.49.49 0 0 1 .7.14L45.692 20.785a.74.74 0 0 1 0 1.414l-21.015 20.65a.49.49 0 0 1-.7-.14l-3.822-3.754a.49.49 0 0 1 .7-.7l16.84-16.537a.49.49 0 0 0 0-.707L20.154 4.608a.49.49 0 0 1 0-.713z"
                  fill="white"
                />
                <path
                  className="group-hover:animate-color"
                  d="M0.154 3.895L3.976.139a.49.49 0 0 1 .7.14L25.692 20.785a.74.74 0 0 1 0 1.414l-21.015 20.65a.49.49 0 0 1-.7-.14l-3.822-3.754a.49.49 0 0 1 .7-.7l16.84-16.537a.49.49 0 0 0 0-.707L0.154 4.608a.49.49 0 0 1 0-.713z"
                  fill="white"
                />
              </g>
            </svg>
          </span>
        </button>
        <div className='flex w-3/4 justify-center md:pl-40 '>
          <RotatingDisclaimer />
        </div>
      </div>

     <div className="w-full flex justify-center items-center">
        <div className="w-full pb-4 py-4 flex flex-col rounded-lg items-center justify-center px-4">
          {subCategories[categoryId]?.map((sub, index) => (
            <div className="mt-8 my-8 w-4/5 bg-[#C2D6EF] px-7 py-8 rounded-md" key={index}>
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
                        <ProductCard product={prod} />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
     </div>
    </div>
  );
};

export default SubCategories;













// import React, { useEffect } from "react";
// import { useParams, Link, useLocation } from "react-router-dom";
// import { subCategories } from "./constant";
// import ProductCard from "../categories/ProductCard";
// import { FaArrowLeft } from "react-icons/fa";
// import ButtonCarousel from "./ButtonCarusel";

// const SubCategories = () => {
//   const { categoryId } = useParams();

//     const location = useLocation();
  
//     useEffect(() => {
//       const searchParams = new URLSearchParams(location.search);
//       const id = searchParams.get("id");
  
//           if (id) {
//               const element = document.getElementById(id);
//               console.log("The element is:", element, 'the id is ', id);
      
//               if (element) {
//                   element.scrollIntoView({ behavior: "smooth" });
      
//                   // Delay removing 'id' to allow scrolling to complete
//                   setTimeout(() => {
//                       searchParams.delete("id");
                      
//                       // Use history.replaceState to update the URL without reloading
//                       window.history.replaceState({}, "", `${location.pathname}?${searchParams.toString()}`);
//                   }, 500);
//               }
//           }
//       }, [location]);
  
  

//   return (
//     <div className="px-2">

//       <div className='flex sm:flex-row flex-col w-full bg-white mt-2'>
//         <button
//           onClick={() => window.history.back()}
//           className="flex items-center text-black border border-gray-400 px-4 py-2 rounded-lg hover:bg-gray-100 transition-all mb-4"
//         >
//           <FaArrowLeft className="mr-2" /> Back
//         </button>
//         <div className="flex-1 text-center">
//           <h1 className="text-5xl font-semibold text-gray-700 sm:mr-16">{subCategories[categoryId][0]?.parentCategory}</h1>
//         </div>
//       </div>

          

//       <div className="pb-4">
//           {subCategories[categoryId]?.map((sub, index) => (

//             <div className="mt-8" key={index}>
//               <h2 id={sub?.id} className=" p-1 text-center font-semibold text-xl text-gray-700 mb-3">
//                 {sub?.name} 
//               </h2>

//               <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//                 {sub.ProductList.map((prod) => (
//                   <Link key={prod.prodId} to={`/product/${prod?.prodId}`}>
//                     <div >
//                       <ProductCard product={prod} />
//                     </div>
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           ))}
//       </div>

//     </div>
//   );
// };

// export default SubCategories;






