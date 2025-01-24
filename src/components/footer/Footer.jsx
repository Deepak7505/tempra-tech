import React from "react";
import { FaInstagram, FaFacebookF, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import brandLogo from "../assets/tempra - Copy.png";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white py-8 border-t border-gray-200">
      <div className="container mx-auto px-4">
        {/* Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about-us"
                  className="text-white hover:text-blue-500 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact-us"
                  className="text-white hover:text-blue-500 transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#terms"
                  className="text-white hover:text-blue-500 transition-colors"
                >
                  Terms and Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Help</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#privacy-policy"
                  className="text-white hover:text-blue-500 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#return-refund"
                  className="text-white hover:text-blue-500 transition-colors"
                >
                  Return and Refund
                </a>
              </li>
              <li>
                <a
                  href="#cancellation"
                  className="text-white hover:text-blue-500 transition-colors"
                >
                  Cancellation
                </a>
              </li>
            </ul>
          </div>

          {/* Subscribe and Social Links */}
          <div>

           <div className="">
            <h1 className=" py-2 font-bold text-5xl text-white">T E M P R A</h1>
            <h6 className=" py-1 text-sm font-semibold ml-32">TEMPRA TECHNOLOGY INDUSTRIES </h6> 
           </div>
            
            <div className="flex justify-center sm:justify-start sm:pl-1 space-x-4 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-800 transition-colors"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-800 transition-colors"
              >
                <FaFacebookF size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-900 transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:text-green-800 transition-colors"
              >
                <FaWhatsapp size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-8 text-sm text-white">
          &copy; {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
