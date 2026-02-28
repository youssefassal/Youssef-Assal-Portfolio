import React from "react";
import { certifications } from "../Data/constants";

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans"
    >
      {/* Section title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CERTIFICATIONS</h2>
        <div className="w-48 h-1 bg-purple-500 mx-auto mt-2"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Verified credentials and training programs I have completed.
        </p>
      </div>

      {/* Certifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="flex flex-col bg-gray-900 rounded-2xl border border-purple-500 shadow-[0_0_20px_1px_rgba(130,69,236,0.2)] p-6 hover:-translate-y-1 transition-transform duration-300"
          >
            {/* Header: logo + issuer */}
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-white rounded-lg overflow-hidden flex-shrink-0">
                <img
                  src={cert.img}
                  alt={cert.issuer}
                  className="w-full h-full object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div>
                <p className="text-purple-400 text-xs font-semibold uppercase tracking-wide">
                  {cert.issuer}
                </p>
                <p className="text-gray-500 text-xs mt-0.5">{cert.date}</p>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-white font-bold text-lg leading-snug mb-3">
              {cert.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
              {cert.desc}
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 mb-5">
              {cert.skills.map((skill, i) => (
                <span
                  key={i}
                  className="bg-[#8245ec]/20 text-purple-300 text-[10px] font-semibold px-3 py-1 rounded-full border border-purple-500/30"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* View credential button */}
            <a
              href={cert.credential}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center text-sm font-semibold text-gray-300 hover:text-white border-2 border-[#8245ec] hover:bg-[#8245ec] px-4 py-2 rounded-full transition-all duration-300"
            >
              View Credential
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
