import React, { useState, useEffect } from "react";
import { categorieDropdown_data } from "./constant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faGreaterThan } from "@fortawesome/free-solid-svg-icons";

const CategorieDropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [timeoutId, setTimeoutId] = useState(null);

  const handleToggleDropdown = (event) => {
    event.stopPropagation(); // Prevent the dropdown from closing when toggling
    setShowDropdown((prev) => !prev);
  };

  const handleMouseEnter = (subCategories) => {
    setActiveCategory(subCategories);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setShowDropdown(false);
      setActiveCategory(null);
    }, 200); // Delayed close
    setTimeoutId(id);
  };

  const handleMouseEnterDropdown = () => {
    if (timeoutId) {
      clearTimeout(timeoutId); // Cancel the close timeout
      setTimeoutId(null);
    }
  };

  useEffect(() => {
    const handleDocumentClick = () => {
      setShowDropdown(false); // Close the dropdown if clicked outside
      setActiveCategory(null);
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <div
      onClick={(e) => e.stopPropagation()} // Prevent dropdown from closing when clicking inside
      className="w-full bg-white relative opacity-100 z-50"
    >
      {/* Toggle Button */}
      <button
        onMouseEnter={handleToggleDropdown}
        className="flex items-center hover:scale-105 hover:text-gray-900"
      >
        <FontAwesomeIcon className="pr-2" icon={faBars} />
        Categories
      </button>

      {/* Dropdown */}
      {showDropdown && (
        <div
          className="absolute top-12 left-0 shadow-lg flex w-max z-40"
          onMouseEnter={handleMouseEnterDropdown} // Prevent immediate closing
          onMouseLeave={handleMouseLeave} // Delayed close
        >
          {/* Categories List */}
          <div className="w-max bg-black p-4 text-white rounded-l-lg border-gray-300">
            <ul className="w-[16rem] grid grid-cols-1 gap-x-10 gap-y-4">
              {categorieDropdown_data.map((val, ind) => (
                <React.Fragment key={ind}>
                  <li
                    onMouseEnter={() => handleMouseEnter(val.subCategories)}
                    className="py-4 px-4 space-x-4 flex w-full text-nowrap text-sm font-semibold justify-between items-center text-slate-50 hover:text-white hover:underline hover:scale-105 transition-transform cursor-pointer"
                  >
                    {val.categoryName}
                    {/* <FontAwesomeIcon icon={faGreaterThan} /> */}
                  </li>
                </React.Fragment>
              ))}
            </ul>
          </div>

          {/* Subcategories List */}
          <div className="w-[18rem] rounded-r-lg bg-gray-900 p-4">
            {activeCategory && activeCategory.length > 0 ? (
              <ul>
                {activeCategory.map((sub, ind) => (
                  <li
                    key={ind}
                    className="py-4 px-4 flex w-full text-sm font-semibold justify-between items-center text-slate-50 hover:text-white  hover:underline hover:scale-105 transition-transform cursor-pointer"
                  >
                    {sub.subcategoriName}
                  </li>
                ))}
              </ul>
            ) : (
              <ul>
                <li
                  className="py-4 px-4 flex w-full text-sm font-semibold justify-between items-center  text-slate-50 hover:text-white hover:scale-105 transition-transform cursor-pointer"
                >
                  {categorieDropdown_data[0]?.subCategories[0]?.subcategoriName}
                </li>
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CategorieDropdown;
