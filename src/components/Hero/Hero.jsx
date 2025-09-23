import React from "react";
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/Personal circle.png";

const About = () => {
  return (
    <section
      id="hero"
      className="py-4 mb-20 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* left side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Youssef Assal
          </h2>
          {/* Skills heading with typing effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <TypeAnimation
              sequence={[
                "Frontend Developer",
                2000,
                "DevOps Engineer",
                2000,
                "App Developer",
                2000,
                "UI/UX Designer",
                2000,
                "Coder",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </h3>
          {/* About me paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            A Front-End Developer passionate about creating modern, responsive,
            and user-friendly web applications. Skilled in React, Vite, and
            Tailwind, with growing expertise in DevOps practices such as
            automation and cloud deployment. Always learning, always building
          </p>
          {/* Resume button */}
          <a
            href="https://drive.google.com/file/d/1t2BacO3XIiX0-MVnQ1ikfxJ1_Z6YDWir/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
            }}
          >
            DOWNLOAD CV
          </a>
        </div>
        {/* right side */}
        <div className="md:w-1/2 flex justify-center md:justify-end ">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Youssef Assal"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
