import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPhone, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import logo from  "../assets/TEMPRA_LOGO.png";
import CategorieDropdown from "./CategorieDropdown";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="bg-white border-b-2 border-blue-100 text-black py-4 px-8 w-full">
     <div className="max-w-none w-full flex flex-col md:flex-row items-center justify-between">
        {/* Top Section: Logo, Categories */}
        <div className="flex items-center justify-between w-full md:w-auto gap-10">
          {/* Logo */}
          <div className="text-xl font-bold">
              <a href="/">
              <img className="h-6 w-auto" src={logo} alt="Tempra Logo" />
              </a>
          </div>

          {/* Category Button */}
            <div className="text-gray-900 text-lg flex items-center gap-2 cursor-pointer">
              <CategorieDropdown />
            </div>
        </div>

        {/* Search Bar */}
        <div className="w-full mt-4 md:mt-0 md:w-[40vw]">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 text-gray-700 border-2 border-gray-600 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Right Section: About Us, Contact Us */}
        <div className="flex items-center justify-center md:justify-between   w-full md:w-auto mt-4 md:mt-0  gap-6">
          {/* Contact Us */}
          <motion.p
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{ fontSize: "18px" }}
          >
            <span className="text-gray-900 text-lg flex items-center gap-2 cursor-pointer  hover:scale-105 hover:text-gray-900  ">
            <FontAwesomeIcon icon={faPhone} />
            <span className="font-semibold cursor-text">+91 9650 357050</span>
          </span>
        </motion.p>
        </div>
      </div>
    </header>
  );
};

export default Header;