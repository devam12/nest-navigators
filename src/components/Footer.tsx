// components/Footer.tsx

import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Left side with links and social media icons */}
        <div className="flex flex-col mb-4 md:mb-0">
          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row mb-2">
            <a
              href="/about-us"
              className="px-4 py-2 pl-0 hover:underline transition duration-300"
            >
              About Us
            </a>
            <a
              href="/contact"
              className="px-4 py-2 hover:underline transition duration-300"
            >
              Contact
            </a>
            <a
              href="/faqs"
              className="px-4 py-2 hover:underline transition duration-300"
            >
              FAQs
            </a>
            <a
              href="/privacy-policy"
              className="px-4 py-2 hover:underline transition duration-300"
            >
              Privacy Policy
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-6 mb-2">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition duration-300"
            >
              <FaInstagram size={30} />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition duration-300"
            >
              <FaFacebook size={30} />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition duration-300"
            >
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>

        {/* Right side with contact information */}
        <div className="text-center">
          <div className="text-sm mb-2">
            Email:{" "}
            <a href="mailto:info@example.com" className="hover:underline">
              info@example.com
            </a>
          </div>
          <div className="text-sm">Phone: (123) 456-7890</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
