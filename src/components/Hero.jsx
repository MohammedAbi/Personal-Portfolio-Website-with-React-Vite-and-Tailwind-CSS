import HeroImage from "../assets/profile-pic-3.png";
import ResumeFile from "../assets/ResumeFile.pdf";

function Hero() {
  return (
    <div
      className="bg-gradient-to-t from-indigo-900 via-sky-900 to-black text-white py-40 flex flex-col items-center"
      id="hero"
    >
      {/* Profile Image */}
      <img
        src={HeroImage}
        alt="Mohammad Abi"
        className="mb-8 w-60 h-60 rounded-full object-cover shadow-lg transform 
          transition-transform duration-300 hover:scale-105"
      />

      {/* Heading */}
      <h1 className="text-5xl font-extrabold text-center">
        Hi, I&apos;m{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-500">
          Mohammad Abi
        </span>
      </h1>
      <p className="mt-4 text-xl font-medium text-gray-300 text-center max-w-3xl">
        As an enthusiastic Front-End Developer, I am dedicated to creating
        intuitive, user-focused web experiences. I am excited to contribute my
        skills, learn from others, and grow within a collaborative, innovative
        team environment.
      </p>

      {/* Call-to-Actions */}
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        {/* Get In Touch Button */}
        <a
          href="#contact"
          className="bg-gradient-to-r from-sky-500 to-indigo-500 text-white px-6 py-3 rounded-full 
            shadow-lg transform transition-transform duration-300 hover:scale-110 hover:shadow-xl"
        >
          Get In Touch
        </a>
        {/* Resume Button */}
        <a
          href={ResumeFile}
          download="Mohammad_Abi_Resume.pdf"
          className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-full 
            shadow-lg transform transition-transform duration-300 hover:scale-110 hover:shadow-xl"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}

export default Hero;
