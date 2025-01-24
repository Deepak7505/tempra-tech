import React, { useState, useEffect } from "react";
import { categorieDropdown_data } from "./constant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars} from "@fortawesome/free-solid-svg-icons";

const CategorieDropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showSubcategories, setShowSubcategories] = useState(false);
  const [subcategoriesData, setSubcategoriesData] = useState(null);

  const handleCategoryClick = (subCategoryDataArray) => {
    setShowSubcategories(true);
    setSubcategoriesData(subCategoryDataArray);
  };

  const handleBackClick = () => {
    setShowSubcategories(false);
    setSubcategoriesData(null);
  };

  const handleToggleDropdown = (event) => {
    event.stopPropagation(); // Prevent the dropdown from closing when toggling
    setShowDropdown((prev) => !prev);
  };

  const handleClickOutside = () => {
    setShowDropdown(false); // Close the dropdown if clicked outside
    setShowSubcategories(false);
    setSubcategoriesData(null);
  };

  useEffect(() => {
    const handleDocumentClick = () => {
      handleClickOutside();
    };

    // Add global click listener
    document.addEventListener("click", handleDocumentClick);

    return () => {
      // Clean up the event listener on unmount
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
        onClick={handleToggleDropdown}
        className="flex items-center"
      >
      <FontAwesomeIcon className="pr-2" icon={faBars} />
        Categories
      </button>

      {/* Dropdown */}
      {showDropdown && (
        <div className="absolute top-12 right-3 md:left-[-2rem] bg-white shadow-md rounded p-4 w-48 z-40">
          {showSubcategories && subcategoriesData ? (
            <>
              <button
                onClick={handleBackClick}
                className="text-sm font-bold text-gray-700 hover:text-gray-900 mb-2"
              >
              {'<'} Back
              </button>
              <ul>
                {subcategoriesData.map((val, ind) => (
                  <li
                    key={ind}
                    className="py-2 text-sm px-4 text-gray-700 border-b-2 border-gray-600 hover:text-gray-950 transition cursor-pointer"
                  >
                    {val.subcategoriName}
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <div className="w-full bg-white">
                <h1 className="font-bold text-gray-700 text-xl">All categories
                </h1>
                <ul>
              {categorieDropdown_data.map((val, ind) => (
                <li
                  key={ind}
                  onClick={() => handleCategoryClick(val?.subCategories)}
                  className="py-2 px-4 text-sm border-b-2 border-gray-600 text-gray-700 hover:text-gray-950 transition cursor-pointer"
                >
                  {val.categoryName}
                </li>
              ))}
            </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CategorieDropdown;
