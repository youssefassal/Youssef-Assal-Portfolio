import React, { useState, useEffect } from "react";
import { projects } from "../Data/constants";

const PROJECTS_PER_PAGE = 6;

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);
  const paginatedProjects = projects.slice(
    (currentPage - 1) * PROJECTS_PER_PAGE,
    currentPage * PROJECTS_PER_PAGE,
  );

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);

  return (
    <section
      id="work"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      {/* section title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-2"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/* Project Grid */}
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {paginatedProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="border border-purple-500 bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="p-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-xl"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-500 mb-4 pt-5 line-clamp-3">
                {project.description}
              </p>
              <div className="mb-4 flex flex-wrap gap-2">
                {project.tags.slice(0, 5).map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-[#251f38] text-xs font-semibold text-purple-500 px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 5 && (
                  <span className="inline-block bg-black text-xs font-semibold text-purple-500 px-2 py-1 rounded-full">
                    +{project.tags.length - 5} more
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-3 mt-14">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded-full border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed text-sm font-semibold"
          >
            ← Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`w-9 h-9 rounded-full border text-sm font-bold transition-all ${
                currentPage === page
                  ? "bg-purple-600 border-purple-600 text-white shadow-[0_0_12px_rgba(130,69,236,0.6)]"
                  : "border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white"
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded-full border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed text-sm font-semibold"
          >
            Next →
          </button>
        </div>
      )}

      {/* Modal container */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={handleCloseModal}
        >
          <div
            className="bg-gray-900 rounded-xl shadow-2xl lg:w-full w-[90%] max-w-3xl max-h-[90vh] overflow-y-auto relative custom-scrollbar"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 z-10 flex justify-end p-4 bg-gray-900/40 backdrop-blur-md">
              <button
                onClick={handleCloseModal}
                className="text-white text-3xl font-bold hover:text-purple-500 transition-colors"
              >
                &times;
              </button>
            </div>
            <div className="flex flex-col">
              <div className="w-full flex justify-center bg-gray-900 px-4">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="lg:w-full w-[95%] object-cover rounded-xl shadow-2xl"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="lg:p-8 p-6">
                <h3 className="lg:text-3xl font-bold text-white mb-4 text-2xl">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-400 mb-6 lg:text-base text-xs">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block bg-[#251f38] text-xs font-semibold text-purple-500 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {selectedProject.github ? (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-1/2 bg-gray-800 hover:bg-purple-800 text-gray-400 lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-lg text-sm font-semibold text-center transition-all"
                    >
                      View Code
                    </a>
                  ) : (
                    <span className="w-1/2 bg-gray-800/40 text-gray-600 lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-lg text-sm font-semibold text-center cursor-not-allowed select-none">
                      Private Repo
                    </span>
                  )}
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 bg-purple-600 hover:bg-purple-800 text-white lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-lg text-sm font-semibold text-center transition-all"
                  >
                    View Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
