import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        scrolled ? "py-8 bg-opacity-100 shadow-lg" : "py-6"
      } bg-gray-900 text-gray-100 fixed top-0 w-full z-50 transition-all duration-300`}
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#hero"
          className="text-xl font-extrabold text-transparent bg-clip-text bg-white"
        >
          Mohammed A.
        </a>

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden text-3xl z-50"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8 font-medium text-2xl">
          <a
            href="#about"
            className="hover:text-indigo-400 transition-colors duration-300"
          >
            About
          </a>
          <a
            href="#service"
            className="hover:text-indigo-400 transition-colors duration-300"
          >
            Services
          </a>
          <a
            href="#project"
            className="hover:text-indigo-400 transition-colors duration-300"
          >
            Projects
          </a>
        </div>

        {/* Call-to-Action Button - Desktop */}
        <a
          href="#contact"
          className="hidden md:inline bg-indigo-600 text-white text-2xl px-6 py-2 rounded-full shadow-lg hover:bg-indigo-700 transition-colors duration-300"
        >
          Contact
        </a>

        {/* Mobile Full-Screen Menu */}
        {menuOpen && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-95 z-40 flex flex-col items-center justify-center space-y-8 text-2xl">
            <a
              href="#about"
              className="hover:text-indigo-400"
              onClick={toggleMenu}
            >
              About Me
            </a>
            <a
              href="#service"
              className="hover:text-indigo-400"
              onClick={toggleMenu}
            >
              Services
            </a>
            <a
              href="#project"
              className="hover:text-indigo-400"
              onClick={toggleMenu}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="bg-indigo-600 text-white px-6 py-2 rounded-full shadow-lg hover:bg-indigo-700 transition-colors duration-300"
              onClick={toggleMenu}
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
