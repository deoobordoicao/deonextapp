
"use client"
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useRouter } from "next/navigation";
import "./globals.css";
import Logo from "./components/logo";


const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
 
  const router = useRouter();
  return (
    <nav className="bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            {/* <h2 className="text-lg font-bold text-white"><Logo /></h2> */} 
            <Logo/>
            <button className="md:hidden ml-4 text-white focus:outline-none" onClick={toggleMenu}>
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>

          <ul className={`md:flex flex-col md:flex-row ${isOpen ? "block" : "hidden"}`}>
            <li>
              <a href="/" className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-300 mr-4 isHome">
                Home
              </a>
            </li>

            <li>
              <a href="/blogs" className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-300 mr-4 isBlogs">
                Blogs
              </a>
            </li>
            <li>
              <a href="/about" className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-300 mr-4 isAbout">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-300 mr-4 classMenu">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
  
};

export default Navigation;
