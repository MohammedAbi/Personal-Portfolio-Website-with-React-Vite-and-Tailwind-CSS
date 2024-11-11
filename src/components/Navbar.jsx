import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      // Disable scrolling when the menu is open
      document.body.style.overflow = "hidden";
    } else {
      // Enable scrolling when the menu is closed
      document.body.style.overflow = "auto";
    }
  };

  // Close menu on window resize if width is above mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && menuOpen) {
        setMenuOpen(false);
        document.body.style.overflow = "auto";
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [menuOpen]);

  return (
    <nav className="bg-black text-white px-8  md:px-16 lg:px-24 fixed top-0 w-full z-50">
      <div className="container py-4 flex justify-between items-center  border-b border-gray-600">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="#hero">Mohammed A.</a>
        </div>

        {/* Hamburger Icon for Mobile */}
        <button className="md:hidden text-2xl" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <a href="#about" className="hover:text-gray-400">
            About
          </a>
          <a href="#service" className="hover:text-gray-400">
            Services
          </a>
          <a href="#project" className="hover:text-gray-400">
            Projects
          </a>
        </div>

        {/* Connect Button for Desktop */}
        <button
          className="hidden md:inline bg-gradient-to-r from-blue-400 to-blue-900 text-white
                     transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
        >
          <a href="#contact" className="hover:text-gray-400">
            Contact
          </a>
        </button>

        {/* Full-Screen Mobile Menu */}
        {menuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col items-center justify-center">
            <div className="flex flex-col space-y-6 text-center text-2xl">
              <a
                href="#about"
                className="hover:text-gray-400"
                onClick={toggleMenu}
              >
                About Me
              </a>
              <a
                href="#service"
                className="hover:text-gray-400"
                onClick={toggleMenu}
              >
                Services
              </a>
              <a
                href="#project"
                className="hover:text-gray-400"
                onClick={toggleMenu}
              >
                Projects
              </a>

              <button
                className="bg-gradient-to-r from-blue-400 to-green-500 text-white mt-4 px-6 py-2 rounded-full"
                onClick={toggleMenu}
              >
                <a
                  href="#contact"
                  className="hover:text-gray-400"
                  onClick={toggleMenu}
                >
                  Contact
                </a>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
