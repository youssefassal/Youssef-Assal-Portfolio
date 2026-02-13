import profileImage from "../assets/Personal circle.png";

function About() {
  const handleMenuItemClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="about"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
    >
      {/* section title */}
      <div className="text-center mb-8 ">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">About Me</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          I build modern full-stack web applications with a strong emphasis on
          scalable architecture, performance optimization, and maintainable
          code.
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
            I’m a Full-Stack Developer specializing in building modern,
            high-performance web applications with a strong focus on scalable
            architecture, security, and user experience. My work spans advanced
            frontend development using React 19, Vite, and Tailwind CSS, as well
            as robust backend systems built with Node.js, Express, and MongoDB.
            I have hands-on experience delivering production-grade e-commerce
            platforms featuring real-time functionality, secure payment
            integrations, admin dashboards, and AI-powered systems including
            recommendation engines and chatbot assistants. I’m driven by
            creating reliable, user-centric digital products while continuously
            refining performance, security, and system design.
          </p>

          {/* career goals */}
          <p className="text-gray-400 text-lg font-semibold mt-4">
            My career goal is to grow as a full-stack engineer working on
            large-scale, production-grade systems that balance performance,
            security, and exceptional user experience. I aim to contribute to
            products that solve real business problems, collaborate with strong
            engineering teams, and take ownership of features across the entire
            stack—from frontend architecture to backend services and
            integrations.
          </p>

          {/* skills */}
          <ul className="list-none mt-4">
            <li className="text-gray-400 text-lg font-semibold">
              Frontend Engineering (React 19, Vite, Tailwind CSS, Redux Toolkit,
              Zustand, React Router).
            </li>
            <li className="text-gray-400 text-lg font-semibold">
              Backend Development (Node.js, Express, MongoDB, REST APIs,
              Authentication & RBAC).
            </li>
            <li className="text-gray-400 text-lg font-semibold">
              Real-Time & Integrations (Socket.io, Payments, Cloudinary, Email
              Services).
            </li>
            <li className="text-gray-400 text-lg font-semibold">
              AI & Intelligent Systems (Python, FastAPI, Chatbots,
              Recommendation Engines).
            </li>
            <li className="text-gray-400 text-lg font-semibold">
              Performance, Security & Deployment (Caching, Security Hardening,
              Vercel, CI/CD Workflows).
            </li>
          </ul>

          {/* CTA */}
          <p className="text-gray-400 text-lg font-semibold mt-4">
            Interested in building something impactful? Explore my work and
            let’s discuss how we can turn ideas into scalable, high-quality
            digital products.
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
