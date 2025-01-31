import React, { useState } from 'react';

const Popup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h3 className="text-xl font-bold mb-4">Steps to Complete the Task</h3>
        <ol className="space-y-2">
          <li className="p-3 bg-gray-100 rounded-md">Step 1: Select the product size</li>
          <li className="p-3 bg-gray-100 rounded-md">Step 2: Add the product to the cart</li>
          <li className="p-3 bg-gray-100 rounded-md">Step 3: Proceed to checkout</li>
          <li className="p-3 bg-gray-100 rounded-md">Step 4: Complete the payment</li>
        </ol>
        <button onClick={onClose} className="mt-4 px-4 py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition-all">Close</button>
      </div>
    </div>
  );
};

export default Popup;