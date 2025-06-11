// const services = [
//   {
//     id: 1,
//     title: "Web Design",
//     description: "Designing clean, accessible, and user-friendly websites.",
//   },
//   {
//     id: 2,
//     title: "Frontend Development",
//     description:
//       "Creating responsive, interactive, and dynamic user interfaces with modern web technologies.",
//   },
//   {
//     id: 3,
//     title: "JavaScript Development",
//     description:
//       "Building interactive web applications using JavaScript frameworks like React.",
//   },
//   {
//     id: 4,
//     title: "CSS & HTML",
//     description:
//       "Crafting well-structured, semantic, and visually appealing websites with HTML5 and CSS3.",
//   },
//   {
//     id: 5,
//     title: "Responsive Design",
//     description:
//       "Ensuring websites look great and function properly across devices, from desktops to mobile phones.",
//   },
//   {
//     id: 6,
//     title: "Website Maintenance",
//     description:
//       "Providing ongoing support and improvements for websites to keep them up to date.",
//   },
// ];

// const Service = () => {
//   return (
//     <div
//       className="bg-gradient-to-t from-indigo-900 via-sky-900 to-black text-white py-20 mt-[-10px]"
//       id="service"
//     >
//       <div className="container mx-auto px-8 md:px-16 lg:px-24">
//         <h2 className="text-4xl font-bold text-center mb-12">My Services</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service) => (
//             <div
//               key={service.id}
//               className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform
//               transition-transform duration-300 hover:scale-105"
//             >
//               <div
//                 className="text-right text-2xl font-bold text-transparent bg-clip-text
//               bg-gradient-to-r from-green-600 to-blue-400"
//               >
//                 {service.id}
//               </div>
//               <h3
//                 className="mt-2 text-2xl font-bold text-transparent bg-clip-text
//               bg-gradient-to-r from-sky-400 to-indigo-500"
//               >
//                 {service.title}
//               </h3>
//               <p className="mt-2 text-gray-300">{service.description}</p>
//               {/* <a
//                 href="#"
//                 className="mt-4 inline-block text-sky-400 hover:text-blue-500"
//               >
//                 Read More
//               </a> */}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Service;
const services = [
  {
    id: 1,
    title: "Web Design",
    description: "Designing clean, accessible, and user-friendly websites.",
  },
  {
    id: 2,
    title: "Frontend Development",
    description:
      "Creating responsive, interactive, and dynamic user interfaces with modern web technologies.",
  },
  {
    id: 3,
    title: "JavaScript Development",
    description:
      "Building interactive web applications using JavaScript frameworks like React.",
  },
  {
    id: 4,
    title: "CSS & HTML",
    description:
      "Crafting well-structured, semantic, and visually appealing websites with HTML5 and CSS3.",
  },
  {
    id: 5,
    title: "Responsive Design",
    description:
      "Ensuring websites look great and function properly across devices, from desktops to mobile phones.",
  },
  {
    id: 6,
    title: "Website Maintenance",
    description:
      "Providing ongoing support and improvements for websites to keep them up to date.",
  },
];

const Service = () => {
  return (
    <div className="bg-gray-900 text-gray-100 py-20 mt-[-10px]" id="service">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <div className="text-right text-xl font-bold text-indigo-400">
                {service.id}
              </div>
              <h3 className="mt-2 text-2xl font-bold text-indigo-300">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
