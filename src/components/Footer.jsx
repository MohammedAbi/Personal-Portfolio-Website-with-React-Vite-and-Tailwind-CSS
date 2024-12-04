import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-indigo-900 via-sky-900 to-black text-gray-400 py-8 mt-[-10px]">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div
          className="border-t border-gray-600 pt-4 flex flex-col md:flex-row 
          justify-between items-center"
        >
          <p>
            &copy; {new Date().getFullYear()} Mohammed A. All rights reserved.
          </p>
          <div className="flex space-x-4 my-4 md:my-0">
            <a
              href="https://www.linkedin.com/in/mohammedabdulabi/"
              className=" hover:text-white"
              aria-label="Visit my LinkedIn profile"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/MohammedAbi"
              className=" hover:text-white"
              aria-label="Visit my GitHub profile"
            >
              <FaGithub />
            </a>
          </div>
          <div className="flex space-x-4">
            <a
              href="./"
              className=" hover:text-white"
              aria-label="Privacy policy"
            >
              Privacy
            </a>
            <a
              href="./"
              className="hover:text-white"
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
