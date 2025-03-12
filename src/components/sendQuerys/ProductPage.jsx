import React, { useEffect, useState } from 'react';
import ImageZoom from './ImageZoom';
import { FaArrowLeft, FaWhatsapp, FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import RotatingDisclaimer from './RotatingDisclaimer';
import { arrayOfProductIDs } from "./QueryConstatnt";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import VibratingBall from './VibratingBall';
import { faArrowLeft, faArrowRight, faGreaterThan, faLeftRight, faLessThan } from '@fortawesome/free-solid-svg-icons';



const ProductPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedProductDetails, setSelectedProductDetails] = useState(null);
  const [images, setImages] = useState([]);
 

  const { prodId } = useParams();


  useEffect(() => {
    const filteredObject = arrayOfProductIDs.filter((val, index) => Number(prodId) === Number(val.id));
    setSelectedProductDetails(filteredObject[0]);
    setSelectedImage(filteredObject[0].prodcutDetails.cardImage);
    setImages(filteredObject[0].prodcutDetails.allProductImages);
    console.log('the selected product details is ', selectedProductDetails);
  },[]);
 
  const handleWhatsappMessage = () => {
    const whatsappMessage = `Hi, I want to buy this product. Product ID: ${prodId}, Selected Size: ${selectedSize}`;
    const whatsAppIconPath = `https://api.whatsapp.com/send/?phone=%2B919650357050&text=${whatsappMessage}`;
    window.open(whatsAppIconPath);
  };


  return (
    <div className=" bg-gray-50 ">
      
      <div className='flex sm:flex-row flex-col py-4 mb-4 px-4 w-full bg-red-600'>
        <button
        onClick={() => window.history.back()}
          className="flex items-center px-8 py-3 text-white text-xl bg-indigo-600 transition-all duration-500 shadow-[6px_6px_0px_black] skew-x-[-15deg] border-none cursor-pointer hover:shadow-[10px_10px_0px_#fbc638] focus:outline-none"
        >
          <span className="skew-x-[15deg] ">
            {/* <svg
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
            </svg> */}
          

            <FontAwesomeIcon icon={faLessThan} />
          </span>
          <span className="w-12 ml-5 relative top-[1%] transition-all duration-500 group-hover:mr-11">BACK</span>
        </button>
        <div className='flex w-3/4 justify-center md:pl-40 '>
          <RotatingDisclaimer />
        </div>
      </div>

      <div className="grid grid-cols-1 px-4 md:grid-cols-2 gap-0 bg-white ">
        <div className="flex space-x-4">
          <div className="flex flex-col space-y-2">
            {images.map((image, ind) => (
              <img
                key={ind}
                src={image.img}
                alt={`img`}
                className={`w-20 h-20 cursor-pointer border rounded-md ${selectedImage === image.img ? 'border-blue-500' : 'border-gray-300'}`}
                onMouseEnter={() => setSelectedImage(image.img)}
              />
            ))}
          </div>
          <ImageZoom src={selectedImage} alt="Product Image" className="rounded-lg shadow-lg" />
        </div>

        <div className="space-y-6 gap-6 pl-8 pr-6 bg-white ">
          <h2 className="text-3xl font-bold ">{selectedProductDetails ?  selectedProductDetails?.prodcutDetails?.prodName : "Loading..."}</h2>
      

          <div className="w-max flex flex-wrap items-center justify-center md:justify-evenly space-y-2 md:space-y-0">
            {/* Stars */}
            <div className="flex space-x-1">
              <FaStar className="text-yellow-500 text-lg" />
              <FaStar className="text-yellow-500 text-lg" />
              <FaStar className="text-yellow-500 text-lg" />
              <FaStar className="text-yellow-500 text-lg" />
              <FaStarHalfAlt className="text-yellow-500 text-lg" />
            </div>

            {/* Review Count */}
            <div className="flex items-center space-x-1 md:pl-4">
              <span className="text-[5px]">🟢</span>
              <span className="font-semibold text-sm text-gray-500 underline">
                18 Reviews
              </span>
            </div>

            {/* Review Summary */}
            <div className="flex items-center space-x-1 md:pl-4">
              <span className="text-[5px]">🟢</span>
              <span className="font-semibold text-sm text-gray-500">
                Reviews As Per Market Demand.
              </span>
            </div>
          </div>


          <div className='flex flex-col space-y-3'>
            <div className=' flex items-center justify-start'>
            <VibratingBall />
            <span className='font-semibold ml-6'> In Stock</span>
            </div>
          {/* <span className='font-semibold'>🟢  In Stock</span> */}
          <span className='font-semibold'>✅ Ready To Ship </span>
          </div>
          


        



          <div className=' mt-8 flex w-full flex-col'>
          <span className='text-gray-700 font-bold pb-5'>How To Order:</span>
            <div>
              <ul className="list-decimal space-y-2 pl-6 text-gray-600 text-justify font-semibold">
                <li>Choose the product & click on whatsapp inquiry button</li>
                <li>Clear you all query related to rates, delvivry etc.</li>
                <li>After confirm the order make the paymetn and share payment advice</li>
                <li>Share your cusomtom logo on whatsapp or mail. </li>
                <li>We will Dispatch between 7-10 days, after confirm the custom design.</li>
              </ul>
            </div>
          </div>

          <div className='  flex w-full flex-col space-y-3'>
          <span className='text-gray-700 font-bold pb-5 pt-5'>Inquiry On WhatsApp:</span>
          <button
            onClick={handleWhatsappMessage}
            className="flex items-center w-full justify-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-all"
          >
            <FaWhatsapp size={24} />
            <span>WhatsApp Inquiry</span>
          </button>
          </div>

          <div className="flex items-center w-full justify-center space-x-2 font-semibold text-red-700 px-4  rounded-md">
                Minimum Order Quantity For This Product Is {selectedProductDetails?.prodcutDetails?.minimumOrderquantity } PCS.
          </div>

        </div>
        </div>

      {/* Accordion */}
      <div className="mt-8 bg-gray-100 px-4 py-4 pb-14">
        <h1 className='text-center pb-5 text-xl font-semibold'>About this item</h1>
          <details open className={`rounded-sm p-4  ${ selectedProductDetails?.prodcutDetails?.discriptionBlocks ? 'md:h-full md:pb-40' : 'md:h-[40rem] md:pb-20'} bg-gray-50`}>
            <summary className="font-semibold cursor-pointer">Product Details</summary>
            <div className="grid grid-cols-2 gap-10 mt-2 ">
              <div className='border-r-2 h-full pr-4'>
                <h1 className="font-bold text-lg mb-2">Product Highlights</h1>
                <ul className="list-disc space-y-5 pl-6 text-justify">
                {
                  selectedProductDetails ?   
                      selectedProductDetails?.prodcutDetails?.arrayOfHeighlight.map(( item ) => {
                        return ( <li className='text-gray-700 text-justify font-semibold' key={item}>{item}</li>)
                     }
                    
                  ) : 'Loading...'
                
                }
                </ul>
              </div>
              <div>
                <h1 className="font-bold text-lg mb-2">Product Description</h1>
                <p className="text-justify space-y-2 gap-2 text-gray-700 font-semibold">
                {
                  selectedProductDetails ?   
                      selectedProductDetails?.prodcutDetails?.totalDiscription
                  : 'Loading...'
                
                }
                </p>

                {
                  selectedProductDetails?.prodcutDetails?.discriptionBlocks &&  (
                    
                  <ul className="text-justify space-y-6 gap-2 text-gray-700 font-semibold">
                    {
                      selectedProductDetails?.prodcutDetails?.discriptionBlocks.map(( item, ind ) => {
                        return ( <li className='text-gray-700 text-justify list-none font-semibold' key={ind}>{item}</li>)
                    })
                    }
                  </ul>
                  )
                }

              </div>
            </div>
          </details>
        </div>
    </div>
  );
};

export default ProductPage;

