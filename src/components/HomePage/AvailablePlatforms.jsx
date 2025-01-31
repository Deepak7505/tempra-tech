import React from "react";
import StatsSection from "./StatsSection"; // Import the StatsSection component

const platforms = [
  { name: "Amazon", url: "https://www.amazon.in/", image: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "Flipkart", url: "https://www.flipkart.com/", image: "https://s.yimg.com/fz/api/res/1.2/i155bcyO_F7niI0vCmXN_A--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI0MDtxPTgwO3c9MzMy/https://s.yimg.com/zb/imgv1/9adafff1-85af-34ef-95cc-a848ad6b4a4d/t_500x300" },
  { name: "Shopshy", url: "https://www.shopsy.in/", image: "https://tse3.mm.bing.net/th?id=OIP.BCqrjFCZvJAxbLkqyclp2AHaCS&pid=Api&P=0&h=180" },
  { name: "Myntra", url: "https://www.myntra.com/", image: "https://tse2.mm.bing.net/th?id=OIP.bgzOO_V_Y79YKSEobt0dxwHaCU&pid=Api&P=0&h=180" }    
];

const AvailablePlatforms = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-gray-700 mb-6">Also Available On</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-8">
          {platforms.map((platform) => (
            <a key={platform.name} href={platform.url} target="_blank" rel="noopener noreferrer" className="block bg-white p-4 rounded-lg  hover:shadow-xl transition">
              <img src={platform.image} alt={platform.name} className="h-10 w-44 mx-auto" />
            </a>
          ))}
        </div>

        {/* ✅ Include StatsSection Here Instead of Inside CustomerCounter */}
        <div className="mt-12">
          <StatsSection />
        </div>
      </div>
    </section>
  );
};

export default AvailablePlatforms;
