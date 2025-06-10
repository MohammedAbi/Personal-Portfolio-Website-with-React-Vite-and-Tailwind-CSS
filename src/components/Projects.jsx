import imgP1 from "../assets/image-p1.png";
import imgP2 from "../assets/image-p2.png";
import imgP3 from "../assets/image-p3.png";
import imgP4 from "../assets/image-p4.png";
import imgP5 from "../assets/image-p5.png";
import imgP6 from "../assets/image-p6.png";
import imgP7 from "../assets/image-p7.png";
import imgP8 from "../assets/image-p8.png";
import imgP9 from "../assets/image-p9.png";

const projects = [
  {
    id: 1,
    name: "Rainy Days",
    technologies: "HTML CSS Javascript",
    image: imgP1,
    github:
      "https://github.com/MohammedAbi/javaScript-1-Course-Assignment-Mohammed-Abi",
    liveDemo: "https://js-1-course-assignment-mohammedabi.netlify.app/",
  },
  {
    id: 2,
    name: "Community Science Museum",
    technologies: "HTML CSS Javascript",
    image: imgP2,
    github: "https://github.com/MohammedAbi/Semester-Project-1",
    liveDemo: "https://communitysciencemuseum-mohammedabi.netlify.app/",
  },
  {
    id: 3,
    name: "EchoPost",
    technologies: "HTML CSS Javascript",
    image: imgP3,
    github:
      "https://github.com/NoroffFEU/FED1-PE1-MohammedAbi?tab=readme-ov-file",
    liveDemo: "https://echopost.netlify.app/",
  },
  {
    id: 4,
    name: "Currency Converter App",
    technologies: "React, Tailwind CSS, API",
    image: imgP4,
    github:
      "https://github.com/MohammedAbi/Currency-Converter-with-React-JS-and-Tailwind-CSS",
    liveDemo: "https://currency-converter-application-cca.netlify.app/",
  },
  {
    id: 5,
    name: "Travel Agency Website",
    technologies: "REACT, Vite, Tailwind CSS, Express-based API server",
    image: imgP5,
    github: "https://github.com/MohammedAbi/Travel-Agency-full-stack",
    liveDemo: "https://travel-agency-full-stack-am.netlify.app/",
  },
  {
    id: 6,
    name: "Weather App - React & Tailwind CSS",
    technologies: "REACT, Vite, Tailwind CSS, Fetch API",
    image: imgP6,
    github:
      "https://github.com/MohammedAbi/Weather-app-react-tailwind?tab=readme-ov-file",
    liveDemo: "https://weather-app-react-tailwind-es6.netlify.app/",
  },
  {
    id: 7,
    name: "Social Media Application",
    technologies: "JavaScript, Tailwind CSS, Vite, Vitest, fetch API",
    image: imgP7,
    github: "https://github.com/MohammedAbi/css-framework?tab=readme-ov-file",
    liveDemo: "https://sma-social-media-application-2.netlify.app/",
  },
  {
    id: 8,
    name: "Flow State Todo App",
    technologies: "HTML CSS Javascript",
    image: imgP8,
    github: "https://github.com/MohammedAbi/Flow-State-Todo-App",
    liveDemo: "https://flow-state-todo-app.netlify.app/",
  },
  {
    id: 9,
    name: "VivaTrend Store",
    technologies: "React, Tailwind CSS, API",
    image: imgP9,
    github: "https://github.com/MohammedAbi/vivatrend-store",
    liveDemo: "https://vivatrend-store.netlify.app/",
  },
];

const Projects = () => {
  return (
    <div
      className="bg-gradient-to-b from-indigo-900 via-sky-900 to-black text-white py-20 mt-[-10px]"
      id="project"
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
                transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={project.image}
                alt={`Screenshot of the ${project.name} project`}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-2xl font-bold mb-2 truncate">
                {project.name}
              </h3>
              <p className="text-gray-400 mb-4 truncate">
                {project.technologies}
              </p>
              <div className="flex justify-around">
                <a
                  href={project.github}
                  className="inline-block mx-auto bg-gradient-to-r 
                    from-sky-500 to-indigo-500 text-white px-4 py-2 m-2 text-center rounded-full 
                    transform transition-transform duration-300 hover:scale-105 hover:brightness-125"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href={project.liveDemo}
                  className="inline-block mx-auto bg-gradient-to-r 
                    from-sky-500 to-indigo-500 text-white px-4 py-2 m-2 text-center rounded-full 
                    transform transition-transform duration-300 hover:scale-105 hover:brightness-125"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
