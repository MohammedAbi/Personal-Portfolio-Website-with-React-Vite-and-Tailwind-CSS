import React from "react";
import AboutImage from "../assets/hero-image-1.png";

function About() {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12 md:items-start">
          <img
            src={AboutImage}
            alt="About me"
            className="w-72 h-80 rounded object-cover mb-8 md:mb-0"
          />
          <div className="flex-1">
            <p className="text-lg mb-8">
              I’m currently navigating my way through the exciting world of
              front-end development, focusing on creating modern, responsive web
              applications. <br />
              <br />
              As a humble student, I’m continuously learning how to blend both
              technical and design skills to build seamless user experiences. My
              journey through the Noroff Front-End Development course has
              equipped me with a solid foundation in web design, HTML, CSS,
              JavaScript, and various frameworks. <br />
              I'm passionate about working in teams to create interactive
              solutions that meet both aesthetic and functional needs.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  HTML & CSS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r  from-sky-500 to-indigo-500 h-2.5 rounded-full 
                        transform transition-transform duration-300 hover:scale-105 w-11/12"
                  ></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="reactjs" className="w-2/12">
                  React JS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r  from-sky-500 to-indigo-500 h-2.5 rounded-full 
                        transform transition-transform duration-300 hover:scale-105 w-10/12"
                  ></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="nodejs" className="w-2/12">
                  Node JS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r  from-sky-500 to-indigo-500 h-2.5 rounded-full 
                        transform transition-transform duration-300 hover:scale-105 w-10/12"
                  ></div>
                </div>
              </div>
            </div>
            <div className="mt-12 flex justify-between text-center">
              <div>
                <h3
                  className="text-2xl font-bold text-transparent bg-clip-text 
                    bg-gradient-to-r  from-sky-400 to-indigo-400"
                >
                  3+
                </h3>
                <p>Years of Learning</p>
              </div>
              <div>
                <h3
                  className="text-2xl font-bold text-transparent bg-clip-text 
                    bg-gradient-to-r from-sky-400 to-indigo-400"
                >
                  20+
                </h3>
                <p>Projects Completed</p>
              </div>
              <div>
                <h3
                  className="text-2xl font-bold text-transparent bg-clip-text 
                    bg-gradient-to-r from-sky-400 to-indigo-400"
                >
                  10+
                </h3>
                <p>Collaborative Experiences</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
