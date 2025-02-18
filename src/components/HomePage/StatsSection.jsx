import React, { useState, useEffect } from "react";
import { FaUsers, FaBox, FaShoppingCart, FaEye } from "react-icons/fa";

const getCurrentHour = () => new Date().getHours();
const getCurrentDay = () => new Date().getDay();

const getLiveVisitorsRange = () => {
  const hour = getCurrentHour();
  const day = getCurrentDay();

  if (day === 6 || day === 0) {
    return [2000, 5000]; // Saturday & Sunday
  }
  if (hour >= 15 && hour <= 22) {
    return [2000, 2500]; // Evening 3 PM - 10 PM
  }
  if (hour >= 8 && hour < 15) {
    return [1500, 1800]; // Morning 8 AM - 3 PM
  }
  return [1500, 2000]; // Night 10 PM - Morning 8 AM
};

const getStoredValue = (key, defaultValue) => {
  const savedData = JSON.parse(localStorage.getItem(key));
  return savedData !== null ? savedData : defaultValue;
};

const saveToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const Counter = ({ title, icon, storageKey, updateInterval, updateFunction, initialValue }) => {
  const [count, setCount] = useState(getStoredValue(storageKey, initialValue));

  useEffect(() => {
    saveToLocalStorage(storageKey, count);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        const newValue = updateFunction(prevCount);
        saveToLocalStorage(storageKey, newValue);
        return newValue;
      });
    }, updateInterval);

    return () => clearInterval(interval);
  }, [storageKey, updateInterval, updateFunction]);

  return (
    <div className="flex flex-col items-center w-1/2 md:w-1/4 mb-6 md:mb-0">
      <div className="text-blue-600 text-5xl mb-3">{icon}</div>
      <p className="text-4xl font-bold text-blue-600">{count.toLocaleString()}</p>
      <p className="text-gray-600 text-lg font-semibold mt-2">{title}</p>
    </div>
  );
};

const StatsSection = () => {
  return (
    <div className="flex flex-wrap justify-center md:justify-between py-12 px-6 md:px-12 rounded-lg">
      <Counter
        title="Live Visitors"
        icon={<FaEye />}
        storageKey="liveVisitors"
        updateInterval={20000}
        updateFunction={() => {
          const [min, max] = getLiveVisitorsRange();
          return Math.floor(Math.random() * (max - min + 1)) + min;
        }}
        initialValue={getLiveVisitorsRange()[0]}
      />
      <Counter
        title="Total Queries Raised"
        icon={<FaBox />}
        storageKey="totalQueries"
        updateInterval={Math.random() * (180000 - 120000) + 120000}
        updateFunction={(prev) => prev + Math.floor(Math.random() * 2) + 1}
        initialValue={100}
      />
      <Counter
        title="Converted Leads"
        icon={<FaShoppingCart />}
        storageKey="convertedLeads"
        updateInterval={300000}
        updateFunction={(prev) => prev + 1}
        initialValue={50}
      />
      <Counter
        title="Happy Customers"
        icon={<FaUsers />}
        storageKey="happyCustomers"
        updateInterval={259200000}
        updateFunction={(prev) => prev + 2}
        initialValue={3000}
      />
    </div>
  );
};

export default StatsSection;




// import React from "react";
// import { FaUsers, FaBox, FaShoppingCart, FaEye } from "react-icons/fa";
// import CustomerCounter from "./CustomerCounter";

// const stats = [
//   { title: "Total Customers", icon: <FaUsers />, initialCount: 1000 },
//   { title: "Orders Completed", icon: <FaBox />, initialCount: 5000 },
//   { title: "Products Sold", icon: <FaShoppingCart />, initialCount: 20000 },
//   { title: "Live Visitors", icon: <FaEye />, initialCount: 150 },
// ];

// const StatsSection = () => {
//   return (
//     <div className="flex flex-wrap justify-center md:justify-between bg-gray-50 py-12 px-6 md:px-12 rounded-lg">
//       {stats.map((stat, index) => (
//         <div key={index} className="flex flex-col bg-gray-50 items-center w-1/2 md:w-1/4 mb-6 md:mb-0">
//           <div className="text-blue-600 text-5xl mb-3">{stat.icon}</div>
//           <CustomerCounter initialCount={stat.initialCount} />
//           <p className="text-gray-600 text-lg font-semibold mt-2">{stat.title}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default StatsSection;
