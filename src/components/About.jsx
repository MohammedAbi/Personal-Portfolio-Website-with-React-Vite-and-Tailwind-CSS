function About() {
  const skills = [
    { label: "HTML & CSS", level: "w-11/12" },
    { label: "JavaScript", level: "w-11/12" },
    { label: "TypeScript", level: "w-10/12" },
    { label: "React JS", level: "w-10/12" },
    { label: "Node JS", level: "w-10/12" },
    { label: "Tailwind CSS", level: "w-9/12" },
    { label: "Git & GitHub", level: "w-9/12" },
    { label: "REST APIs", level: "w-9/12" },
  ];

  const stats = [
    { number: "3+", label: "Years of Learning" },
    { number: "20+", label: "Projects Completed" },
    { number: "10+", label: "Team Experiences" },
  ];

  return (
    <section id="about" className="bg-gray-900 text-gray-100 py-20">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12 tracking-wide">
          About Me
        </h2>

        <div className="max-w-3xl mx-auto space-y-8">
          <p className="text-lg leading-relaxed text-gray-300">
            I enjoy creating clean, responsive websites using modern tools and
            frameworks. My training gave me a strong foundation in HTML, CSS,
            JavaScript, and React. I focus on building user-friendly, accessible
            web applications that provide seamless experiences.
          </p>
          <p className="text-lg leading-relaxed text-gray-300">
            I’m motivated by continuous learning and excited to contribute to
            collaborative teams that value creativity and growth.
          </p>

          {/* Skills */}
          <div className="space-y-5">
            {skills.map(({ label, level }) => (
              <div key={label} className="flex items-center gap-4">
                <span className="w-32 font-medium text-gray-300">{label}</span>
                <div className="flex-1 bg-gray-800 rounded-full h-3 overflow-hidden">
                  <div
                    className={`bg-gray-600 h-3 rounded-full transition-transform duration-300 hover:scale-x-105 ${level}`}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-12 flex justify-around text-center text-gray-300">
            {stats.map(({ number, label }) => (
              <div key={label} className="space-y-1">
                <h3 className="text-3xl font-bold">{number}</h3>
                <p className="uppercase text-sm tracking-wider">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
