import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPhone, faUserGroup } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="bg-white border-b-2 border-blue-100 text-black py-4 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:justify-between">
        {/* Top Section: Logo, Categories */}
        <div className="flex items-center justify-between w-full md:w-auto gap-4">
          {/* Logo */}
          <div className="text-xl font-bold">
            <a href="/" className="text-red-600">
              Tempra Technology
            </a>
          </div>

          {/* Category Button */}
          <button className="text-gray-600 text-lg p-2 flex items-center gap-2 hover:bg-gray-100 rounded-md">
            <FontAwesomeIcon icon={faBars} />
            <span>Categories</span>
          </button>
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
        <div className="flex items-center justify-between w-full md:w-auto mt-4 md:mt-0 gap-6">
          {/* Contact Us */}
          <span className="text-gray-600 text-lg flex items-center gap-2 cursor-pointer ">
            <FontAwesomeIcon icon={faPhone} />
            <span>Contact Us</span>
          </span>

          {/* About Us */}
          <span className="text-gray-600 text-lg flex items-center gap-2 cursor-pointer ">
            <FontAwesomeIcon icon={faUserGroup} />
            <span>About Us</span>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;









// import React from "react";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars, faTimes, faPhone, faAddressBook, faUserGroup } from '@fortawesome/free-solid-svg-icons';

// const Header = () => {
//   return (
//     <header className="bg-white border-b-2 border-blue-100 text-black py-4 px-6">
//       <div className="container mx-auto flex flex-col md:flex-row items-center md:justify-between">
//         {/* Top Section: Logo, Categories */}
//         <div className="flex items-center justify-between w-full md:w-auto gap-12">
//           {/* Logo */}
//           <div className="text-xl font-bold">
//             <a href="/" className="text-red-600">
//               Tempra Technology
//             </a>
//           </div>

//           {/* Category Button */}
//           <button className="text-gray-600 text-lg p-2  ">
//           <FontAwesomeIcon icon={faBars} className='px-3' />
//             Categories
//           </button>
//         </div>

//         {/* Search Bar */}
//         <div className="w-full mt-4 md:mt-0 md:w-[40vw]">
//           <input
//             type="text"
//             placeholder="Search..."
//             className="w-full px-4 py-2 text-gray-700 border-2 border-black bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//         </div>

//         {/* Right Section: About Us, Contact Us */}
//         <div className="flex items-center justify-between w-full md:w-auto mt-4 md:mt-0 gap-12">
//           <div>
//           <span className="text-gray-600 text-lg cursor-pointer hover:underline">
//             <FontAwesomeIcon icon={faPhone} className='px-3' />
//             Contact Us
//           </span>
//           </div>
//           <span className="text-gray-600 text-lg cursor-pointer hover:underline">
//             <FontAwesomeIcon icon={faUserGroup} className='px-3' />
//             About Us
//           </span>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;