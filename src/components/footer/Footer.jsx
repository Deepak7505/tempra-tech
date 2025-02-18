import React from "react";
import { FaInstagram, FaFacebookF, FaLinkedin, FaWhatsapp, FaAlignLeft, FaGreaterThan } from "react-icons/fa";
import brandLogo from "../assets/tempra - Copy.png";
import { footerDataRow1, footerDataRow2, footerDataRow3, footerText, aboutComData } from "./constant"

const Footer = () => {
  return (
    <footer className="bg-[#C97511] text-white border-t border-gray-200">
        <div className="flex bg-[#C97511]  py-16 justify-evenly flex-row">
            <div className="flex w-[25%]">
                <span className="text-justify text-sm tracking-widest">{footerText}</span>
            </div>
            <div>
                <div className="flex flex-row justify-between w-full mx-5">
                      <ul className="space-y-4 text-justify text-sm">
                          {
                            footerDataRow1.map(( item) => {
                              return (
                              <div key={item.text} className="flex items-center gap-2 cursor-pointer relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-gray-300 after:bottom-0 after:left-0 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">
                                  <FaGreaterThan className="font-thin transition-all transform hover:translate-x-1" size={10} />
                                  <li className="text-sm transition-all">{item.text}</li>
                              </div>
                            )
                            })
                          }
                      </ul>
                </div>
            </div>
            <div>

            <div className="flex flex-row justify-between w-full mx-5">
              <ul className="space-y-4 text-justify text-sm">
                {aboutComData.map((item, ind) => (
                  <li
                    key={ind}
                    className="flex items-center w-80 gap-2 cursor-pointer relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-gray-300 after:bottom-0 after:left-0 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 flex-nowrap"
                  >
                    <span className="font-medium whitespace-nowrap">{item.key}:</span>
                    <span className="text-sm transition-all truncate min-w-0">{item.text}</span>
                  </li>
                ))}
                <span> Near Main Market, Faridabad, Haryana, 121003</span>
              </ul>
            </div>

            </div>
        </div>
        <div className="flex flex-col justify-center items-center pb-4">
            <div className="text-center mt-8 text-base text-white">
                &copy; {new Date().getFullYear()} All rights reserved.
            </div>
            <div className="flex w-full justify-center sm:justify-center sm:pl-1 space-x-4 mt-3">
              <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white  rounded-md hover:text-pink-600 transition-colors "
                >
                  <FaInstagram className="font-bold" size={24} />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-800 transition-colors  rounded-sm"
                >
                  <FaFacebookF size={24} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-800 transition-colors "
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href="https://whatsapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-green-700 transition-colors  rounded-sm"
                >
                  <FaWhatsapp size={24} />
                </a>
            </div>
        </div>

    </footer>
  );
};

export default Footer;



















// import React from "react";
// import { FaInstagram, FaFacebookF, FaLinkedin, FaWhatsapp } from "react-icons/fa";
// import brandLogo from "../assets/tempra - Copy.png";

// const Footer = () => {
//   return (
//     <footer className=" text-white py-8 border-t border-gray-200">
//       <div className="container bg-[#C97511] mx-auto px-4">
//         {/* Footer Content */}
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
//           {/* Quick Links */}
//           <div>
//             <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
//             <ul className="space-y-2">
//               <li>
//                 <a
//                   href="#about-us"
//                   className="text-white hover:text-blue-500 transition-colors font-poppins"
//                 >
//                   About Us
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#contact-us"
//                   className="text-white hover:text-blue-500 transition-colors font-poppins"
//                 >
//                   Contact Us
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#terms"
//                   className="text-white hover:text-blue-500 transition-colors font-poppins"
//                 >
//                   Terms and Conditions
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Help */}
//           <div>
//             <h3 className="text-lg font-semibold text-white mb-4">Help</h3>
//             <ul className="space-y-2">
//               <li>
//                 <a
//                   href="#privacy-policy"
//                   className="text-white hover:text-blue-500 transition-colors font-poppins flex items-center gap-2 cursor-pointer relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-gray-300 after:bottom-0 after:left-0 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
//                 >
//                   Privacy Policy
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#return-refund"
//                   className="text-white hover:text-blue-500 transition-colors font-poppins flex items-center gap-2 cursor-pointer relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-gray-300 after:bottom-0 after:left-0 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
//                 >
//                   Return and Refund
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#cancellation"
//                   className="text-white hover:text-blue-500 transition-colors font-poppins flex items-center gap-2 cursor-pointer relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-gray-300 after:bottom-0 after:left-0 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
//                 >
//                   Cancellation
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Subscribe and Social Links */}
//           <div>

//            <div className="space-y-11">
//             {/* <h1 className=" py-2 font-bold text-5xl text-white">TEMPRA TECHNOLOGY INDUSTRIES</h1> */}
            
//             <h6 className=" py-1 text-2xl font-semibold ">TEMPRA TECHNOLOGY INDUSTRIES </h6> 
//            </div>
            
            
//           </div>
//         </div>

        
//       </div>

//       {/* Footer Bottom */}
//       <div className="flex flex-col justify-center items-center">
//       <div className="text-center mt-8 text-base text-black">
//           &copy; {new Date().getFullYear()} All rights reserved.
//         </div>
//         <div className="flex w-full justify-center sm:justify-center sm:pl-1 space-x-4 mt-6">
//               <a
//                 href="https://instagram.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-pink-500 hover:text-pink-600 transition-colors"
//               >
//                 <FaInstagram size={24} />
//               </a>
//               <a
//                 href="https://facebook.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-blue-900 hover:text-blue-800 transition-colors"
//               >
//                 <FaFacebookF size={24} />
//               </a>
//               <a
//                 href="https://linkedin.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-blue-900 hover:text-blue-800 transition-colors"
//               >
//                 <FaLinkedin size={24} />
//               </a>
//               <a
//                 href="https://whatsapp.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-green-600 hover:text-green-700 transition-colors"
//               >
//                 <FaWhatsapp size={24} />
//               </a>
//             </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
