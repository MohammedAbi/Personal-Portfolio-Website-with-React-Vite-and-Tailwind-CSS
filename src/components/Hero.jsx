import HeroImage from "../assets/profile-pic-3.png";

function Hero() {
  return (
    <section
      id="hero"
      className="bg-gray-900 text-gray-100 py-32 md:py-40 flex flex-col items-center px-4"
    >
      <img
        src={HeroImage}
        alt="Mohammad Abi"
        className="mb-8 w-60 h-60 rounded-full object-cover shadow-xl transition-transform duration-300 hover:scale-105"
      />

      <h1 className="text-5xl font-extrabold text-center">
        Hi, I&apos;m Mohammad Abi
      </h1>

      <div className="max-w-3xl w-full mt-6">
        <p className="text-left text-gray-300 text-lg font-medium leading-relaxed">
          I&apos;m a recent Front-End Development graduate passionate about
          building clean, responsive websites. Eager to learn, grow, and
          contribute to a collaborative team.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <a
          href="#about"
          className="bg-white text-gray-900 px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
        >
          Learn More About Me
        </a>
      </div>
    </section>
  );
}

export default Hero;
