import React, { useState } from 'react';
import ImageZoom from './ImageZoom';

const ProductPage = () => {
  const [selectedImage, setSelectedImage] = useState('https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/11/Tshirt-design.jpg?auto=format&q=60&w=2060&h=1158.75&fit=crop&crop=faces');

  const images = [
    { id: 1, src: 'https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/11/Tshirt-design.jpg?auto=format&q=60&w=2060&h=1158.75&fit=crop&crop=faces' },
    { id: 2, src: 'https://i0.wp.com/bestsellersindia.in/wp-content/uploads/2021/06/Best-Lunch-Box-For-Office-In-India-2.jpg?resize=700%2C700&ssl=1' },
    { id: 3, src: 'https://www.qualitylogoproducts.com/custom-pens/satin-pen-hq.jpg' },
    { id: 4, src: 'https://5.imimg.com/data5/SELLER/Default/2022/4/XW/GL/UG/46441495/promotional-mdf-clip-board-1000x1000.jpeg' },
  ];

  return (
    <div className="flex p-4 space-x-4">
      
      <div className="flex flex-col space-y-4">
        {images.map((image) => (
          <img
            key={image.id}
            src={image.src}
            alt={`Image ${image.id}`}
            className={`w-20 h-20 cursor-pointer border ${selectedImage === image.src ? 'border-blue-500' : 'border-gray-300'}`}
            onMouseEnter={() => setSelectedImage(image.src)}
          />
        ))}
      </div>

      <div className="flex-1">
        <ImageZoom src={selectedImage} alt="Product Image" />
      </div>

      <div className="flex-1 space-y-4">
        <h2 className="text-2xl font-bold">Product Title</h2>
        <p className="text-gray-700">Product description goes here. It's a very nice product that you will love!</p>
        <p className="text-xl text-red-500">Price: ₹1,999</p>
        <div className="flex items-center">
          <span className="text-yellow-500">&#9733;&#9733;&#9733;&#9733;&#9734;</span>
          <span className="ml-2 text-gray-600">(123 reviews)</span>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
