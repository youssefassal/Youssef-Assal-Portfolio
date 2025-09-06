import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaPhone, FaTwitter } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail, MdEventAvailable } from "react-icons/md";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wtevb67",
        "template_pqmtqwi",
        form.current,
        "ixy7nSgNivFVSjpB8"
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset();
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
        (error) => {
          toast.error("Error Sending Message.", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
    >
      <ToastContainer />

      {/* section title */}
      <div className="text-center mb-16 ">
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-2"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          I’d love to hear from you—reach out for any opportunities or questions!
        </p>
      </div>
      {/* contact content */}
      <div className="mt-8 w-full flex flex-col md:flex-row items-center justify-center">
        {/* contact information */}
        <div className="mt-8 w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700">
          <h3 className="text-xl font-bold text-white text-center">
            Connect Information
          </h3>

          <div className="mt-4 flex flex-col space-y-4">
            <div className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500">
              <h2 className="text-white">
                <IoLocationSharp className="inline mr-2 mb-1 text-purple-500 text-2xl" />Location:
              </h2>
              <h3 className="text-gray-400">Mansoura, Dakahlia, Egypt</h3>
            </div>
            <div className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500">
              <h2 className="text-white">
                <MdEmail className="inline mr-2 mb-1 text-purple-500 text-2xl" />Email:
              </h2>
              <h3 className="text-gray-400">youssefassal7@gmail.com</h3>
            </div>
            <div className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500">
              <h2 className="text-white">
                <FaPhone className="inline mr-2 mb-1 text-purple-500 text-2xl" />Phone:
              </h2>
              <h3 className="text-gray-400">+201003554146</h3>
            </div>
            <div className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500">
              <h2 className="text-white">
                <MdEventAvailable className="inline mr-2 mb-1 text-purple-500 text-2xl" />Availability:
              </h2>
              <h3 className="text-gray-400">Open for opportunities</h3>
            </div>

            {/* Social media icons */}
            <div className="flex flex-wrap justify-around space-x-4 mt-6">
              {[
                { icon: <FaGithub />, link: "https://github.com/youssefassal" },
                { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/yousef-assal/" },
                { icon: <FaTwitter />, link: "https://x.com/youssefassal1_" },
                { icon: <FaInstagram />, link: "https://www.instagram.com/youssef_asssal/" },
                { icon: <FaFacebook />, link: "https://www.facebook.com/youssef.assal.936675/" }
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-2xl hover:text-purple-500 transition-transform transform hover:scale-110"
                >
                  {item.icon}
                </a>
              ))}
            </div>

          </div>
        </div>

        {/* contact form */}
        <div className="mt-8 md:ml-8 w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700 py-11">
          <h3 className="text-xl font-bold text-white text-center">
            Connect With Me Via Email 👇
          </h3>

          <form ref={form} onSubmit={sendEmail} className="mt-4 flex flex-col space-y-4">
            <input type="email" name="user_email" placeholder="Your Email" required
              className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
            />
            <input type="text" name="user_name" placeholder="Your Name" required
              className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
            />
            <input type="text" name="subject" placeholder="Subject" required
              className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
            />
            <textarea name="message" placeholder="Your Message" rows="4"
              className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
            ></textarea>

            {/* send button */}
            <button type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md hover:opacity-90 transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;