import React, { useState } from 'react';
import ImageZoom from './ImageZoom';
import { FaArrowLeft, FaWhatsapp } from "react-icons/fa";
import Popup from './Popup';
import { useParams } from 'react-router-dom';
import AnimatedStepper from './AnimatedStepper';

const ProductPage = () => {
  const [selectedImage, setSelectedImage] = useState('https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/11/Tshirt-design.jpg?auto=format&q=60&w=2060&h=1158.75&fit=crop&crop=faces');
  const [selectedSize, setSelectedSize] = useState('M');
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const { prodId } = useParams();
 
  const handleWhatsappMessage = () => {
    const whatsappMessage = `Hi, I want to buy this product. Product ID: ${prodId}, Selected Size: ${selectedSize}`;
    const whatsAppIconPath = `https://api.whatsapp.com/send/?phone=%2B919560084893&text=${whatsappMessage}`;
    window.open(whatsAppIconPath);
  };

  const images = [
    { id: 1, src: 'https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/11/Tshirt-design.jpg?auto=format&q=60&w=2060.75&fit=crop&crop=faces' },
    { id: 2, src: 'https://i0.wp.com/bestsellersindia.in/wp-content/uploads/2021/06/Best-Lunch-Box-For-Office-In-India-2.jpg?resize=700%2C700&ssl=1' },
    { id: 3, src: 'https://www.qualitylogoproducts.com/custom-pens/satin-pen-hq.jpg' },
    { id: 4, src: 'https://5.imimg.com/data5/SELLER/Default/2022/4/XW/GL/UG/46441495/promotional-mdf-clip-board-1000x1000.jpeg' },
  ];

  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

  return (
    <div className="p-6 bg-gray-50">
      <button
        onClick={() => window.history.back()}
        className="flex items-center text-black border border-gray-400 px-4 py-2 rounded-lg hover:bg-gray-100 transition-all mb-4"
      >
        <FaArrowLeft className="mr-2" /> Back
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex space-x-4">
          <div className="flex flex-col space-y-2">
            {images.map((image) => (
              <img
                key={image.id}
                src={image.src}
                alt={`Thumbnail ${image.id}`}
                className={`w-20 h-20 cursor-pointer border rounded-md ${selectedImage === image.src ? 'border-blue-500' : 'border-gray-300'}`}
                onMouseEnter={() => setSelectedImage(image.src)}
              />
            ))}
          </div>
          <ImageZoom src={selectedImage} alt="Product Image" className="rounded-lg shadow-lg" />
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Product Title</h2>
          <div className="space-y-2">
            <span className="text-gray-600 font-semibold">Select Size:</span>
            <div className="flex space-x-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded-md transition-all ${selectedSize === size ? 'border-blue-500 bg-blue-100' : 'border-gray-300'}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className=' flex w-full flex-col space-y-3'>
          <span className='text-gray-600 font-semibold'>Inquiry On WhatsApp:</span>
          <button
            onClick={handleWhatsappMessage}
            className="flex items-center w-max space-x-2 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-all"
          >
            <FaWhatsapp size={24} />
            <span>WhatsApp Inquiry</span>
          </button>
          </div>


          <div className=' flex w-full flex-col'>
          <span className='text-gray-600 font-semibold'>How To Order:</span>
            <AnimatedStepper />
          </div>

          <section className='flex flex-col'>
            <span className=' text-2xl text-gray-600 font-semibold'>How To Order</span>
            <button onClick={() => setIsPopupOpen(true)} className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-all">Show Steps</button>
          </section>
          {isPopupOpen && <Popup onClose={() => setIsPopupOpen(false)} />}
        </div>
      </div>

      {/* Accordion */}
      <div className="mt-8 border-t pt-4">
        <details open className="border p-4 rounded-md">
          <summary className="font-semibold cursor-pointer">Product Details</summary>
          <div className="grid grid-cols-2 gap-4 mt-2">
            <div>
              <h1 className="font-bold text-lg mb-2">Product Highlights</h1>
              <ul className="list-disc pl-6 text-justify">
                <li>Made from high-quality materials</li>
                <li>Perfect for daily use</li>
                <li>Elegant and stylish design</li>
                <li>Available in multiple sizes</li>
              </ul>
            </div>
            <div>
              <h1 className="font-bold text-lg mb-2">Product Description</h1>
              <p className="text-justify">
                This product is designed for those who value quality and comfort. It offers durability, sleek aesthetics, and a modern touch. Ideal for casual and professional settings.
              </p>
            </div>
          </div>
        </details>
      </div>
    </div>
  );
};

export default ProductPage;










// import React, { useState } from 'react';
// import ImageZoom from './ImageZoom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBackward } from '@fortawesome/free-solid-svg-icons';
// import Popup from './Popup';
// import { FaWhatsapp } from "react-icons/fa";
// import { useParams } from 'react-router-dom';




// const ProductPage = () => {
//   const [selectedImage, setSelectedImage] = useState('https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/11/Tshirt-design.jpg?auto=format&q=60&w=2060&h=1158.75&fit=crop&crop=faces');
//   const [selectedSize, setSelectedSize] = useState(null);
//   const [isPopupOpen, setIsPopupOpen] = useState(false);

//   const {prodId} = useParams();
//   console.log('the param is ', prodId)
//   const handleWhatsappMessage = () => {
//        const whatsappmessage = `Hi i want to buy this product and want to konw more about your products what you sell, productID:${prodId}, selected Size: ${selectedSize}  `;

//        const whatsAppIconPath = `https://api.whatsapp.com/send/?phone=%2B919560084893&text=${whatsappmessage}&type=phone_number&app_absent=0`;
//        window.open(`${whatsAppIconPath}`);
//   };

  

//   const images = [
//     { id: 1, src: 'https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/11/Tshirt-design.jpg?auto=format&q=60&w=2060&h=1158.75&fit=crop&crop=faces' },
//     { id: 2, src: 'https://i0.wp.com/bestsellersindia.in/wp-content/uploads/2021/06/Best-Lunch-Box-For-Office-In-India-2.jpg?resize=700%2C700&ssl=1' },
//     { id: 3, src: 'https://www.qualitylogoproducts.com/custom-pens/satin-pen-hq.jpg' },
//     { id: 4, src: 'https://5.imimg.com/data5/SELLER/Default/2022/4/XW/GL/UG/46441495/promotional-mdf-clip-board-1000x1000.jpeg' },
//   ];

//   const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

//   return (
//     <div className="p-6">
//       <button
//         onClick={() => window.history.back()}
//         className="text-xl font-bold text-black border-2 border-gray-500 p-2 rounded-md hover:border-gray-950 transition-all mb-4"
//       >
//         <FontAwesomeIcon className="pr-2" icon={faBackward} /> Back
//       </button>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div className="flex space-x-4">
//           <div className="flex flex-col space-y-2">
//             {images.map((image) => (
//               <img
//                 key={image.id}
//                 src={image.src}
//                 alt={`Thumbnail ${image.id}`}
//                 className={`w-20 h-20 cursor-pointer border rounded-md ${selectedImage === image.src ? 'border-blue-500' : 'border-gray-300'}`}
//                 onMouseEnter={() => setSelectedImage(image.src)}
//               />
//             ))}
            
//           </div>
          
//           <ImageZoom src={selectedImage} alt="Product Image" className="rounded-lg shadow-lg" />
          
//         </div>
        

//         <div className="space-y-4">
//           <h2 className="text-3xl font-bold">Product Title</h2>
//           <p className="text-gray-600">A high-quality product you will love. Get yours now!</p>
//           <p className="text-2xl text-red-500 font-semibold">₹1,999</p>
//           <div className="flex items-center space-x-2">
//             <span className="text-yellow-500">&#9733;&#9733;&#9733;&#9733;&#9734;</span>
//             <span className="text-gray-600">(123 reviews)</span>
//           </div>

//           <div className="space-y-2">
//             <span className="text-gray-600 font-semibold">Select Size:</span>
//             <div className="flex space-x-2">
//               {sizes.map((size) => (
//                 <button
//                   key={size}
//                   onClick={() => setSelectedSize(size)}
//                   className={`px-4 py-2 border rounded-md transition-all ${selectedSize === size ? 'border-blue-500 bg-blue-100' : 'border-gray-300'}`}
//                 >
//                   {size}
//                 </button>
//               ))}
//             </div>
//             {selectedSize && <p className="text-sm text-gray-500">Selected Size: {selectedSize}</p>}
//           </div>
          
//           <span className="px-6 py-2 font-semibold text-xl transition-all">Send Query via WhatsApp: </span>
//           <button
//           onClick={handleWhatsappMessage}
//           className="px-6 py-2 bg-green-500 text-white font-semibold rounded-md  transition-all">
//             <FaWhatsapp size={30} className='bg-green-500 hover:scale-125 hover:text-gray-200' />
//           </button>
//           <div>
//             <button onClick={() => setIsPopupOpen(true)} className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-all">Show Steps</button>
//             {isPopupOpen && <Popup onClose={() => setIsPopupOpen(false)} />}
//           </div>
//         </div>
//       </div>

//       {/* Accordion */}
//       <div className="mt-8 border-t pt-4 space-y-2">
//         <details className="border p-4 rounded-md">
//           <summary className="font-semibold cursor-pointer">Description</summary>
//           <p className="text-gray-600 mt-2">This product is made of high-quality materials and is perfect for daily use.</p>
//         </details>
//         <details className="border p-4 rounded-md">
//           <summary className="font-semibold cursor-pointer">Size Chart</summary>
//           <p className="text-gray-600 mt-2">Refer to our size chart to find your perfect fit.</p>
//         </details>
//         <details className="border p-4 rounded-md">
//           <summary className="font-semibold cursor-pointer">Quality</summary>
//           <p className="text-gray-600 mt-2">We ensure the highest quality standards in our products.</p>
//         </details>
//       </div>
//     </div>
//   );
// };

// export default ProductPage;
