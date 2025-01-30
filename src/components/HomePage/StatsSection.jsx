import React from "react";
import { FaUsers, FaBox, FaShoppingCart, FaEye } from "react-icons/fa";
import CustomerCounter from "./CustomerCounter";

const stats = [
  { title: "Total Customers", icon: <FaUsers />, initialCount: 1000 },
  { title: "Orders Completed", icon: <FaBox />, initialCount: 5000 },
  { title: "Products Sold", icon: <FaShoppingCart />, initialCount: 20000 },
  { title: "Live Visitors", icon: <FaEye />, initialCount: 150 },
];

const StatsSection = () => {
  return (
    <div className="flex flex-wrap justify-center md:justify-between bg-gray-50 py-12 px-6 md:px-12 rounded-lg">
      {stats.map((stat, index) => (
        <div key={index} className="flex flex-col bg-gray-50 items-center w-1/2 md:w-1/4 mb-6 md:mb-0">
          <div className="text-blue-600 text-5xl mb-3">{stat.icon}</div>
          <CustomerCounter initialCount={stat.initialCount} />
          <p className="text-gray-600 text-lg font-semibold mt-2">{stat.title}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;
