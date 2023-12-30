
"use client"
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import "./globals.css";
import Logo from "./components/logo";



const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
 
  return (
    <nav className="bg-gray-800 w-full flex items-center justify-center mx-auto">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <div className="animate-pulse">
              <a href="/">
                <Logo src="/logo.png" width={80} height={80} alt="Image" />
              </a>
            </div>
            <button className="md:hidden ml-4 px-4 py-2 text-white focus:outline-none" onClick={toggleMenu}>
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>

          <ul className={`md:flex flex-col md:flex-row ${isOpen ? "block" : "hidden"}`}>
            <li>
              <a href="/" className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-300 mr-4  active:animate-pulse">
                Home
              </a>
            </li>

            <li>
              <a href="/blogs" className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-300 mr-4 active:animate-pulse">
                Blogs
              </a>
            </li>
            <li>
              <a href="/about" className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-300 mr-4  active:animate-pulse">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-300 mr-4 active:animate-pulse">
                Contact
              </a>
            </li>
            <li>
              <a href="/video" className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-300 mr-4active:animate-pulse">
                Video
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
  
};

export default Navigation;
