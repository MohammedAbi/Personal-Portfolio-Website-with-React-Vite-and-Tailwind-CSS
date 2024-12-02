import React from "react";
import HeroImage from "../assets/profile-pic-3.png";
import ResumeFile from "../assets/ResumeFile.pdf";

function Hero() {
  return (
    <div className="bg-black text-white text-center py-20" id="hero">
      <img
        src={HeroImage}
        alt=""
        className="mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
            transition-transform duration-300 hover:scale-105"
      />
      <h1 className="text-4xl font-bold">
        I'm{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Mohammad Abi
        </span>
        , Full-Stack Developer
      </h1>
      <p className="mt-4 text-lg text-gray-300">
        I specialize in building modern and responsive web applications.
      </p>
      <div className="mt-8 space-x-4">
        {/* Get In Touch Button */}
        <a
          href="#contact" // Navigate to the contact form section
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white
                transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
        >
          <i className="fas fa-envelope mr-2"></i> Get In Touch With Me
        </a>
        {/* Resume Button */}
        <a
          href={ResumeFile} // Link to resume file
          download="Mohammad_Abi_Resume.pdf" // Set download filename
          className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white
                transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
        >
          Resume
        </a>
      </div>
    </div>
  );
}

export default Hero;
