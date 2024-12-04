// import React, { useState, useEffect } from "react";
// import { FaBars } from "react-icons/fa";
// import { FaTimes } from "react-icons/fa";

// function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   // Toggle menu
//   const toggleMenu = () => {
//     setMenuOpen((prev) => !prev);
//   };

//   // Manage body scroll when menu state changes
//   useEffect(() => {
//     document.body.style.overflow = menuOpen ? "hidden" : "auto";
//     return () => {
//       document.body.style.overflow = "auto"; // Cleanup to restore scrolling on unmount
//     };
//   }, [menuOpen]);

//   // Close menu on window resize if width is above mobile
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 768 && menuOpen) {
//         setMenuOpen(false);
//       }
//     };
//     window.addEventListener("resize", handleResize);
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, [menuOpen]);

//   return (
//     <nav className="bg-black text-white px-8 md:px-16 lg:px-24 fixed top-0 w-full z-50">
//       <div className="container mx-auto py-4 flex justify-between items-center border-b border-gray-600">
//         {/* Logo */}
//         <div className="text-2xl font-bold">
//           <a href="#hero">Mohammed A.</a>
//         </div>

//         {/* Hamburger Icon for Mobile */}
//         <button
//           className="md:hidden text-2xl z-50"
//           onClick={toggleMenu}
//           aria-label="Toggle menu"
//         >
//           {menuOpen ? <FaTimes /> : <FaBars />}
//         </button>

//         {/* Desktop Navigation Links */}
//         <div className="hidden md:flex space-x-6">
//           <a href="#about" className="hover:text-gray-400">
//             About
//           </a>
//           <a href="#service" className="hover:text-gray-400">
//             Services
//           </a>
//           <a href="#project" className="hover:text-gray-400">
//             Projects
//           </a>
//         </div>

//         {/* Connect Button for Desktop */}
//         <button
//           className="hidden md:inline bg-gradient-to-r from-blue-400 to-blue-900 text-white
//                      transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
//         >
//           <a href="#contact" className="hover:text-gray-400">
//             Contact
//           </a>
//         </button>

//         {/* Full-Screen Mobile Menu */}
//         {menuOpen && (
//           <div className="fixed inset-0 bg-black bg-opacity-90 z-40 flex flex-col items-center justify-center">
//             <div className="flex flex-col space-y-6 text-center text-2xl">
//               <a
//                 href="#about"
//                 className="hover:text-gray-400"
//                 onClick={toggleMenu}
//               >
//                 About Me
//               </a>
//               <a
//                 href="#service"
//                 className="hover:text-gray-400"
//                 onClick={toggleMenu}
//               >
//                 Services
//               </a>
//               <a
//                 href="#project"
//                 className="hover:text-gray-400"
//                 onClick={toggleMenu}
//               >
//                 Projects
//               </a>
//               <button
//                 className="bg-gradient-to-r from-blue-400 to-blue-900 text-white mt-4 px-6 py-2 rounded-full"
//                 onClick={toggleMenu}
//               >
//                 <a href="#contact" className="hover:text-gray-400">
//                   Contact
//                 </a>
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Toggle menu
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // Manage body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto"; // Restore scrolling on unmount
    };
  }, [menuOpen]);

  // Close menu on window resize for larger screens
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

  // Add scroll effect to shrink navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Shrink navbar after 50px scroll
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        scrolled ? "py-2 bg-opacity-100 shadow-lg" : "py-4"
      } bg-black text-white fixed top-0 w-full z-50 transition-all duration-300`}
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#hero"
          className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-500"
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
        <div className="hidden md:flex space-x-8 font-medium">
          <a
            href="#about"
            className="hover:text-sky-400 transition-colors duration-300"
          >
            About
          </a>
          <a
            href="#service"
            className="hover:text-sky-400 transition-colors duration-300"
          >
            Services
          </a>
          <a
            href="#project"
            className="hover:text-sky-400 transition-colors duration-300"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:text-sky-400 transition-colors duration-300"
          >
            Contact
          </a>
        </div>

        {/* Call-to-Action Button */}
        <a
          href="#contact"
          className="hidden md:inline bg-gradient-to-r from-sky-500 to-indigo-500 text-white px-6 py-2 rounded-full 
            shadow-lg transform transition-transform duration-300 hover:scale-110"
        >
          Contact
        </a>

        {/* Mobile Full-Screen Menu */}
        {menuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-95 z-40 flex flex-col items-center justify-center space-y-8 text-2xl">
            <a
              href="#about"
              className="hover:text-sky-400"
              onClick={toggleMenu}
            >
              About Me
            </a>
            <a
              href="#service"
              className="hover:text-sky-400"
              onClick={toggleMenu}
            >
              Services
            </a>
            <a
              href="#project"
              className="hover:text-sky-400"
              onClick={toggleMenu}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="bg-gradient-to-r from-sky-500 to-indigo-500 text-white px-6 py-2 rounded-full shadow-lg"
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
