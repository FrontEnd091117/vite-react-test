import heroimage from "../assets/profilepic7.png";
import { TypeAnimation } from "react-type-animation";
export default function Jhaps() {
  const typeSpeed = 1000,
    sequence = [
      "Full Stack",
      typeSpeed,
      "Web Developer",
      typeSpeed,
      "Consultant",
      typeSpeed,
    ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8 bg-black">
      <div className="col-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[400px]">
        <img src={heroimage} alt="hero image" />
      </div>
      <div className="col-span-2 px-5 my-auto">
        <h1 className="text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold">
          <span className="primary-color">I'm a</span>
          <br />
          <TypeAnimation
            sequence={sequence}
            wrapper="span"
            speed={70}
            repeat={Infinity}
          />
        </h1>
        <p className="text-white sm:text-lg my-6 lg:text-xl text-center md:text-left">
          My name is Jestoni (Jhaps) Fajardo and I have 10+ years experience in
          web development.
        </p>
        <div className="py-8">
          <a
            className="px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-orange-500 to-pink-500 text-white"
            href="/"
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="px-6 py-3 w-full rounded-xl mr-4 border border-gray-400 hover:bg-gradient-to-br from-orange-500 to-pink-500 text-white hover:border-none"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
55;
