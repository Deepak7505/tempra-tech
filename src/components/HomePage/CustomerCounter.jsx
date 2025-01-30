import React, { useState, useEffect } from "react";

const CustomerCounter = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);
  const EXPIRY_DAYS = 30;

  const isExpired = (storedTime) => {
    const currentTime = new Date().getTime();
    return currentTime - storedTime > EXPIRY_DAYS * 24 * 60 * 60 * 1000;
  };

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("customerCounter"));
    if (savedData && !isExpired(savedData.timestamp)) {
      setCount(savedData.count);
    } else {
      localStorage.setItem("customerCounter", JSON.stringify({ count: initialCount, timestamp: new Date().getTime() }));
      setCount(initialCount);
    }
  }, [initialCount]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        const updatedCount = prevCount + Math.floor(Math.random() * 3) + 1;
        localStorage.setItem("customerCounter", JSON.stringify({ count: updatedCount, timestamp: new Date().getTime() }));
        return updatedCount;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return <p className="text-4xl font-bold text-blue-600">{count.toLocaleString()}</p>;
};

export default CustomerCounter;





// import React, { useState, useEffect } from "react";
// import { FaUsers, FaBox, FaShoppingCart, FaEye } from "react-icons/fa";

// const stats = [
//   { title: "Total Customers", icon: <FaUsers />, initialCount: 1000 },
//   { title: "Orders Completed", icon: <FaBox />, initialCount: 5000 },
//   { title: "Products Sold", icon: <FaShoppingCart />, initialCount: 20000 },
//   { title: "Live Visitors", icon: <FaEye />, initialCount: 150 },
// ];

// const StatsSection = () => {
//   return (
//     <div className="flex flex-wrap justify-center md:justify-between bg-white py-12 px-6 md:px-12 shadow-lg rounded-lg">
//       {stats.map((stat, index) => (
//         <div key={index} className="flex flex-col items-center w-1/2 md:w-1/4 mb-6 md:mb-0">
//           <div className="text-blue-600 text-5xl mb-3">{stat.icon}</div>
//           <CustomerCounter initialCount={stat.initialCount} />
//           <p className="text-gray-600 text-lg font-semibold mt-2">{stat.title}</p>
//         </div>
//       ))}
//     </div>
//   );
// };




// const CustomerCounter = () => {
//   const [count, setCount] = useState(0);
//   const INITIAL_COUNT = 1000;
//   const EXPIRY_DAYS = 30;

//   const isExpired = (storedTime) => {
//     const currentTime = new Date().getTime();
//     return currentTime - storedTime > EXPIRY_DAYS * 24 * 60 * 60 * 1000;
//   };

//   useEffect(() => {
//     const savedData = JSON.parse(localStorage.getItem("customerCounter"));
//     if (savedData && !isExpired(savedData.timestamp)) {
//       setCount(savedData.count);
//     } else {
//       const newCount = INITIAL_COUNT;
//       localStorage.setItem("customerCounter", JSON.stringify({ count: newCount, timestamp: new Date().getTime() }));
//       setCount(newCount);
//     }
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCount((prevCount) => {
//         const updatedCount = prevCount + Math.floor(Math.random() * 3) + 1;
//         localStorage.setItem("customerCounter", JSON.stringify({ count: updatedCount, timestamp: new Date().getTime() }));
//         return updatedCount;
//       });
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="text-center bg-gray-50 py-6 ">
//       <h2 className="text-3xl font-extrabold text-gray-700 mb-6">Customers Served</h2>
//       <p className="text-5xl font-extrabold text-blue-600 mt-2">{count.toLocaleString()}</p>
//       <div>
//         <StatsSection />
//       </div>
//     </div>
//   );
// };



// // Main Section for Platforms + Counter
// const AvailablePlatforms = () => {
//   const platforms = [
//     { name: "Amazon", url: "https://www.amazon.in/", image: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
//     { name: "Flipkart", url: "https://www.flipkart.com/", image: "https://s.yimg.com/fz/api/res/1.2/i155bcyO_F7niI0vCmXN_A--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI0MDtxPTgwO3c9MzMy/https://s.yimg.com/zb/imgv1/9adafff1-85af-34ef-95cc-a848ad6b4a4d/t_500x300" },
//     { name: "Shopshy", url: "https://www.shopsy.in/", image: "https://tse3.mm.bing.net/th?id=OIP.BCqrjFCZvJAxbLkqyclp2AHaCS&pid=Api&P=0&h=180" },
//     { name: "Myntra", url: "https://www.myntra.com/", image: "https://tse2.mm.bing.net/th?id=OIP.bgzOO_V_Y79YKSEobt0dxwHaCU&pid=Api&P=0&h=180" }    
// ];

//   return (
//     <section className="bg-gray-50 py-12">
//       <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
//         <h2 className="text-3xl font-extrabold text-gray-700 mb-6">Also Available On</h2>
//         <div className="mt-8 flex flex-wrap justify-center gap-8">
//           {platforms.map((platform) => (
//             <a key={platform.name} href={platform.url} target="_blank" rel="noopener noreferrer" className="block bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition">
//               <img src={platform.image} alt={platform.name} className="h-16 w-52 mx-auto" />
//               {/* <p className="text-lg font-semibold text-gray-800 mt-2">{platform.name}</p> */}
//             </a>
//           ))}
//         </div>

//         {/* Customer Counter Inside the Section */}
//         <div className="mt-12">
//           <CustomerCounter />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AvailablePlatforms;



// import React, { useState, useEffect } from "react";






// import React, { useState, useEffect } from "react";

// const CustomerCounter = () => {
//   const [count, setCount] = useState(0); // State to hold the customer count
//   const INITIAL_COUNT = 1000; // Base count if no local data is found
//   const EXPIRY_DAYS = 30; // Local data expiry in days

//   // Helper to calculate if the localStorage data is expired
//   const isExpired = (storedTime) => {
//     const currentTime = new Date().getTime();
//     const thirtyDaysInMs = EXPIRY_DAYS * 24 * 60 * 60 * 1000;
//     return currentTime - storedTime > thirtyDaysInMs;
//   };

//   // Retrieve the saved count or initialize it
//   useEffect(() => {
//     const savedData = JSON.parse(localStorage.getItem("customerCounter"));
//     const currentTime = new Date().getTime();

//     if (savedData && !isExpired(savedData.timestamp)) {
//       // If data exists and is not expired, use the stored count
//       setCount(savedData.count);
//     } else {
//       // Otherwise, set the initial count and save it in localStorage
//       const newCount = INITIAL_COUNT;
//       localStorage.setItem(
//         "customerCounter",
//         JSON.stringify({ count: newCount, timestamp: currentTime })
//       );
//       setCount(newCount);
//     }
//   }, []);

//   // Increment the count every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCount((prevCount) => {
//         const updatedCount = prevCount + Math.floor(Math.random() * 3) + 1; // Increment by 2-3
//         localStorage.setItem(
//           "customerCounter",
//           JSON.stringify({
//             count: updatedCount,
//             timestamp: new Date().getTime(),
//           })
//         );
//         return updatedCount;
//       });
//     }, 5000); // Every 5 seconds

//     return () => clearInterval(interval); // Cleanup on component unmount
//   }, []);

//   return (
//     <div className="text-center bg-gray-50 py-10">
//       <h2 className="text-3xl text-center font-extrabold text-gray-700 ">Customers Served</h2>
//       <p className="text-6xl font-extrabold text-blue-600 mt-2">{count.toLocaleString()}</p>
//     </div>
//   );
// };

// export default CustomerCounter;
