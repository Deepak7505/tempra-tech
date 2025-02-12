import React, { useEffect, useState } from 'react';
import ImageZoom from './ImageZoom';
import { FaArrowLeft, FaWhatsapp } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import RotatingDisclaimer from './RotatingDisclaimer';
import { arrayOfProductIDs } from "./QueryConstatnt";



const ProductPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedSize, setSelectedSize] = useState('M');
  const [isPopupOpen, setIsPopupOpen] = useState(false);
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


  const sizes = ["S", "M", "L", "XL"];
  const colors = [
    { name: "Red", code: "#D20404" },
    { name: "Blue", code: "#142C73" },
    { name: "Green", code: "#198754" },
    { name: "Black", code: "#000000" },
  ];
  const [selectedColor, setSelectedColor] = useState(null);

  return (
    <div className="p-2  bg-gray-50 pb-[24rem]">
      
      <div className='flex sm:flex-row flex-col w-full bg-white'>
        <button
          onClick={() => window.history.back()}
          className="flex items-center text-black border border-gray-400 px-4 py-2 rounded-lg hover:bg-gray-100 transition-all mb-4"
        >
          <FaArrowLeft className="mr-2" /> Back
        </button>
        <div className='flex w-3/4 justify-center md:pl-40 '>
          <RotatingDisclaimer />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 ">
        <div className="flex space-x-4">
          <div className="flex flex-col space-y-2">
            {images.map((image, ind) => (
              <img
                key={ind}
                src={image.img}
                alt={`img`}
                className={`w-20 h-20 cursor-pointer border rounded-md ${selectedImage === image.src ? 'border-blue-500' : 'border-gray-300'}`}
                onMouseEnter={() => setSelectedImage(image.img)}
              />
            ))}
          </div>
          <ImageZoom src={selectedImage} alt="Product Image" className="rounded-lg shadow-lg" />
        </div>

        <div className="space-y-6 gap-6 p-6  bg-white">
          <h2 className="text-3xl font-bold">{selectedProductDetails ?  selectedProductDetails?.prodcutDetails?.prodName : "Loading..."}</h2>
          


          <div className="grid grid-cols-2 gap-6 p-6 border rounded-xl shadow-sm bg-white">
            {/* Size Selection Box cursor-not-allowed opacity-30 */}
            <div className="p-4 border rounded-lg shadow-sm ">
              <h2 className="text-gray-700 font-bold mb-2">Select Size</h2>
              <div className="flex space-x-6">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border rounded-md transition-all ${
                      selectedSize === size
                        ? "border-blue-500 bg-blue-100"
                        : "border-gray-300 hover:border-blue-400"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection Box */}
            <div className="p-4 border rounded-lg shadow-sm ">
              <h2 className="text-gray-700 font-bold mb-2">Select Color</h2>
              <div className="flex space-x-6">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    style={{ backgroundColor: color.code }}
                    className={`w-10 h-10 rounded-full border-2 transition-all ${
                      selectedColor === color.name
                        ? "border-blue-500 scale-110"
                        : "border-gray-300 hover:border-gray-500"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>



          <div className=' flex w-full flex-col'>
          <span className='text-gray-700 font-bold'>How To Order:</span>
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
          <span className='text-gray-700 font-bold'>Inquiry On WhatsApp:</span>
          <button
            onClick={handleWhatsappMessage}
            className="flex items-center w-full justify-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-all"
          >
            <FaWhatsapp size={24} />
            <span>WhatsApp Inquiry</span>
          </button>
          </div>


        </div>
        </div>

      {/* Accordion */}
      <div className="mt-8  pt-4">
          <details open className=" p-4 rounded-md">
            <summary className="font-semibold cursor-pointer">Product Details</summary>
            <div className="grid grid-cols-2 gap-10 mt-2">
              <div>
                <h1 className="font-bold text-lg mb-2">Product Highlights</h1>
                <ul className="list-disc space-y-2 pl-6 text-justify">
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
              </div>
            </div>
          </details>
        </div>
    </div>
  );
};

export default ProductPage;

