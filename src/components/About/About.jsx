import React from "react";
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/Personal circle.png";

function About() {
  const handleMenuItemClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    // <section
    //   id="about"
    //   className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
    // >
    //   {/* section title */}
    //   <div className="text-center mb-8 ">
    //     <h2 className="text-3xl sm:text-4xl font-bold text-white">About Me</h2>
    //     <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
    //     <p className="text-gray-400 mt-4 text-lg font-semibold">
    //       I am a self-taught web developer with a passion for creating engaging
    //       and user-friendly websites.
    //     </p>
    //   </div>

    //   {/* about content */}
    //   <div className="flex flex-col md:flex-row justify-between items-center">
    //     {/* left side */}
    //     <div className="md:w-1/2 text-center md:text-right mt-8 md:mt-0 ">
    //       {/* about image */}
    //       <img
    //         src={profileImage}
    //         alt="about"
    //         className="w-[50%] h-[50%] object-cover rounded-full mx-auto"
    //       />
    //     </div>

    //     {/* right side */}
    //     <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
    //       <p className="text-gray-400 text-lg font-semibold">
    //         I’m an engineering student specializing in Computer and
    //         Communications with a strong passion for front-end development. My
    //         main skills include building responsive and interactive web
    //         applications using React, Vite, CSS, and modern JavaScript tools. In
    //         addition to web development, I’m also exploring DevOps practices
    //         such as cloud infrastructure, automation, and CI/CD, aiming to
    //         bridge the gap between development and operations. I enjoy creating
    //         user-friendly digital experiences and continuously improving my
    //         technical expertise.
    //       </p>

    //       {/* Contact me button */}
    //       <button
    //         onClick={() => handleMenuItemClick("contact")}
    //         className="mt-8 text-gray-300 hover:text-[#8245ec] border-2 border-[#8245ec] px-4 py-2 rounded-4xl"
    //       >
    //         Contact Me
    //       </button>
    //     </div>
    //   </div>
    // </section>

    <section
      id="about"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
    >
      {/* section title */}
      <div className="text-center mb-8 ">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">About Me</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          I am a self-taught web developer with a passion for creating engaging
          and user-friendly websites.
        </p>
      </div>

      {/* about content */}
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* left side */}
        <div className="md:w-1/2 text-center md:text-right mt-8 md:mt-0 ">
          {/* about image */}
          <img
            src={profileImage}
            alt="about"
            className="w-[50%] h-[50%] object-cover rounded-full mx-auto"
          />
        </div>

        {/* right side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <p className="text-gray-400 text-lg font-semibold">
            I’m an engineering student specializing in Computer and
            Communications with a strong passion for front-end development. My
            main skills include building responsive and interactive web
            applications using React, Vite, CSS, and modern JavaScript tools. In
            addition to web development, I’m also exploring DevOps practices
            such as cloud infrastructure, automation, and CI/CD, aiming to
            bridge the gap between development and operations. I enjoy creating
            user-friendly digital experiences and continuously improving my
            technical expertise.
          </p>

          {/* career goals */}
          <p className="text-gray-400 text-lg font-semibold mt-4">
            My career goal is to become a leading front-end developer and
            contribute to the creation of innovative and user-friendly digital
            products. I'm excited to collaborate with like-minded individuals
            and companies to bring new ideas to life.
          </p>

          {/* skills */}
          <ul className="list-none mt-4">
            <li className="text-gray-400 text-lg font-semibold">
              Front-end development (React, Vite, CSS, JavaScript)
            </li>
            <li className="text-gray-400 text-lg font-semibold">
              DevOps practices (cloud infrastructure, automation, CI/CD)
            </li>
          </ul>

          {/* CTA */}
          <p className="text-gray-400 text-lg font-semibold mt-4">
            Let's work together on a project! Check out my latest work and let's
            discuss how we can bring your ideas to life.
          </p>

          {/* contact button */}
          <button
            onClick={() => handleMenuItemClick("contact")}
            className="mt-8 text-gray-300 hover:text-[#8245ec] border-2 border-[#8245ec] px-4 py-2 rounded-4xl"
          >
            Contact Me
          </button>

          
        </div>
      </div>
    </section>
  );
}

export default About;
