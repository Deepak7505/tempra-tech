import React, { useState, useEffect } from "react";
import { categorieDropdown_data } from "./constant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChevronDown, faChevronRight, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CategorieDropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [subMenuPosition, setSubMenuPosition] = useState({ top: 0, left: 0 });

  const handleToggleDropdown = (event) => {
    event.stopPropagation();
    setShowDropdown((prev) => !prev);
  };

  const handleMouseEnter = (event, subCategories) => {
    if (!subCategories || subCategories.length === 0) return;
  
    const rect = event.target.getBoundingClientRect();  // Get the position of the hovered category
    const parentDropdown = event.target.closest(".parent-dropdown");  // Find the closest parent dropdown
    if (!parentDropdown) return;
  
    const parentRect = parentDropdown.getBoundingClientRect();  // Get the position of the parent dropdown
  
    // Adjust the position of the subcategory and reduce top by 20px
    setSubMenuPosition({
      top: rect.bottom - parentRect.top - 85,  // Reduced 20px from the calculated top
      left: rect.left - parentRect.left + rect.width,  // Position on the right
    });
  
    setActiveCategory(subCategories);  // Set the active subcategory to display
  };
  

  const handleMouseLeave = () => {
    setTimeout(() => {
      setActiveCategory(null);
    }, 200);
  };

  useEffect(() => {
    const handleDocumentClick = () => {
      setShowDropdown(false);
      setActiveCategory(null);
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <div className="relative w-full z-50 parent-dropdown" onClick={(e) => e.stopPropagation()}>
      {/* Toggle Button */}
      <button
        onMouseEnter={handleToggleDropdown}
        className="flex items-center font-semibold font-poppins text-lg text-gray-900 hover:scale-105 hover:text-gray-900"
      >
        Categories
      <FontAwesomeIcon
          className="pl-2"
          icon={showDropdown ? faChevronUp : faChevronDown}
        />
      </button>

      {/* Dropdown */}
      {showDropdown && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          className="absolute top-12 left-0 shadow-lg flex w-max z-40 bg-white rounded-lg"
          onMouseLeave={handleMouseLeave}
        >
          {/* Categories List */}
          <div className="w-max bg-gray-50 p-4 text-gray-800 rounded-l-lg border-gray-300">
            <ul className="w-[16rem] grid grid-cols-1 gap-y-1">
              {categorieDropdown_data.map((val, ind) => (
                <li
                  key={ind}
                  onMouseEnter={(e) => handleMouseEnter(e, val.subCategories)}
                  className="py-3 px-4 flex justify-between items-center text-sm font-semibold text-gray-700 hover:bg-gray-100 transition-all cursor-pointer"
                >
                  {val.categoryName}
                  {val.subCategories && val.subCategories.length > 0 && (
                    <FontAwesomeIcon icon={faChevronRight} />
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Subcategories List (Dynamically Positioned) */}
          {activeCategory && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute bg-gray-50 shadow-md border rounded-lg mb-3 p-4 w-max"
              style={{
                top: subMenuPosition.top ,
                left: subMenuPosition.left,
              }}
            >
              <ul>
                {activeCategory.map((sub, ind) => (
                  <Link to={`${sub?.route}?id=${sub.id}`} key={ind}>
                    <li
                      onClick={() => setShowDropdown(false)}
                      className="py-3 px-4 text-sm font-semibold text-gray-700 hover:bg-gray-100 transition-all cursor-pointer"
                    >
                      {sub.subcategoriName}
                    </li>
                  </Link>
                ))}
              </ul>

              
            </motion.div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default CategorieDropdown;