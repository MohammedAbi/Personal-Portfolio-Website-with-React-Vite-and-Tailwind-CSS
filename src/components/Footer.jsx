// import { FaGithub, FaLinkedin } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="bg-gradient-to-b from-indigo-900 via-sky-900 to-black text-gray-400 py-8 mt-[-10px]">
//       <div className="container mx-auto px-8 md:px-16 lg:px-24">
//         <div
//           className="border-t border-gray-600 pt-4 flex flex-col md:flex-row
//           justify-between items-center"
//         >
//           <p>
//             &copy; {new Date().getFullYear()} Mohammed A. All rights reserved.
//           </p>
//           <div className="flex space-x-4 my-4 md:my-0">
//             <a
//               href="https://www.linkedin.com/in/mohammedabdulabi/"
//               className=" hover:text-white"
//               aria-label="Visit my LinkedIn profile"
//             >
//               <FaLinkedin />
//             </a>
//             <a
//               href="https://github.com/MohammedAbi"
//               className=" hover:text-white"
//               aria-label="Visit my GitHub profile"
//             >
//               <FaGithub />
//             </a>
//           </div>
//           <div className="flex space-x-4">
//             <a
//               href="./"
//               className=" hover:text-white"
//               aria-label="Privacy policy"
//             >
//               Privacy
//             </a>
//             <a
//               href="./"
//               className="hover:text-white"
//               aria-label="Terms of service"
//             >
//               Terms of Service
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 mt-[-10px]">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-6 gap-6">
          {/* Copyright */}
          <p className="text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Mohammed A. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-6 text-2xl">
            <a
              href="https://www.linkedin.com/in/mohammedabdulabi/"
              className="hover:text-indigo-400 transition-colors duration-300"
              aria-label="Visit my LinkedIn profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/MohammedAbi"
              className="hover:text-indigo-400 transition-colors duration-300"
              aria-label="Visit my GitHub profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </div>

          {/* Footer Links */}
          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="hover:text-indigo-400 transition-colors duration-300"
              aria-label="Privacy policy"
            >
              Privacy
            </a>
            <a
              href="#"
              className="hover:text-indigo-400 transition-colors duration-300"
              aria-label="Terms of service"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
