import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faSquarePhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // success | error

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus("success");
        formRef.current.reset();
      })
      .catch((error) => {
        console.error("EMAILJS ERROR:", error);
        setStatus("error");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const socialLinks = [
    { icon: faFacebook, link: "https://facebook.com" },
    { icon: faTwitter, link: "#" },
    { icon: faInstagram, link: "https://www.instagram.com/_suraj_arya/" },
    { icon: faLinkedin, link: "https://www.linkedin.com/in/suraj-arya" }
  ];

  return (
    <section id="contact" className="py-24 bg-[#FFF5F8] dark:bg-[#111827] transition-colors duration-300 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row justify-between gap-16">
          
          {/* --- LEFT SIDE: Info & Socials --- */}
          <div className="md:w-2/5">
            <h3 className="text-[40px] md:text-[55px] font-bold text-black dark:text-white mb-2 leading-tight transition-colors">
              Contact Me
            </h3>
            <div className="w-16 h-1.5 bg-[#ff004f] mb-12 rounded-full"></div>

            <div className="space-y-6">
              <a 
                href="mailto:surajarya460@gmail.com" 
                className="group flex items-center text-gray-700 dark:text-gray-300 text-lg hover:text-[#ff004f] dark:hover:text-[#ff004f] transition-colors cursor-pointer"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white dark:bg-gray-800 shadow-sm mr-4 group-hover:bg-[#ff004f] group-hover:text-white group-active:scale-90 transition-all">
                  <FontAwesomeIcon icon={faPaperPlane} className="text-xl" />
                </div>
                <span className="truncate">surajarya460@gmail.com</span>
              </a>

              <a 
                href="tel:+917509478047" 
                className="group flex items-center text-gray-700 dark:text-gray-300 text-lg hover:text-[#ff004f] dark:hover:text-[#ff004f] transition-colors cursor-pointer"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white dark:bg-gray-800 shadow-sm mr-4 group-hover:bg-[#ff004f] group-hover:text-white group-active:scale-90 transition-all">
                  <FontAwesomeIcon icon={faSquarePhone} className="text-xl" />
                </div>
                +91 7509478047
              </a>
            </div>

            {/* Social Icons */}
            <div className="mt-12 flex gap-4">
              {socialLinks.map((item, i) => (
                <a 
                  key={i} 
                  href={item.link} 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-xl bg-white dark:bg-gray-800 shadow-sm text-gray-400 dark:text-gray-500
                             cursor-pointer transition-all duration-300
                             hover:text-white hover:bg-[#ff004f] hover:-translate-y-1 
                             active:scale-90"
                >
                  <FontAwesomeIcon icon={item.icon} className="text-xl" />
                </a>
              ))}
            </div>

            <a
              href="Suraj Arya Full Stack.pdf"
              download
              className="inline-block bg-[#ff004f] hover:bg-black dark:hover:bg-white dark:hover:text-black text-white mt-12 px-10 py-4 rounded-xl font-bold shadow-lg transition-all transform hover:scale-105 cursor-pointer text-center"
            >
              Download CV
            </a>
          </div>

          {/* --- RIGHT SIDE: Form --- */}
          <div className="md:w-3/5">
            <div className="bg-white dark:bg-gray-800 p-8 md:p-10 rounded-[30px] shadow-xl border border-pink-50 dark:border-gray-700 transition-colors">
              <form ref={formRef} onSubmit={sendEmail} className="space-y-5">
                <div>
                  <label className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest ml-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    required
                    className="w-full bg-gray-50 dark:bg-gray-900 p-4 rounded-xl text-black dark:text-white border border-gray-100 dark:border-gray-700 focus:border-[#ff004f] dark:focus:border-[#ff004f] focus:bg-white dark:focus:bg-gray-950 outline-none transition-all cursor-text"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest ml-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                    className="w-full bg-gray-50 dark:bg-gray-900 p-4 rounded-xl text-black dark:text-white border border-gray-100 dark:border-gray-700 focus:border-[#ff004f] dark:focus:border-[#ff004f] focus:bg-white dark:focus:bg-gray-950 outline-none transition-all cursor-text"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest ml-1">Your Message</label>
                  <textarea
                    rows="5"
                    name="message"
                    placeholder="How can I help you?"
                    required
                    className="w-full bg-gray-50 dark:bg-gray-900 p-4 rounded-xl text-black dark:text-white border border-gray-100 dark:border-gray-700 focus:border-[#ff004f] dark:focus:border-[#ff004f] focus:bg-white dark:focus:bg-gray-950 outline-none transition-all resize-none cursor-text"
                  />
                </div>

                <input type="hidden" name="title" value="Portfolio Contact" />

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-4 rounded-xl font-bold text-white shadow-md transition-all transform active:scale-95 cursor-pointer ${
                    loading ? "bg-gray-400 cursor-not-allowed" : "bg-[#ff004f] hover:bg-black dark:hover:bg-white dark:hover:text-black"
                  }`}
                >
                  {loading ? "Sending Message..." : "Send Message"}
                </button>

                {status === "success" && (
                  <p className="text-green-500 dark:text-green-400 font-bold text-center mt-4 bg-green-50 dark:bg-green-900/20 p-3 rounded-lg animate-pulse transition-colors">
                    ✓ Message sent successfully!
                  </p>
                )}

                {status === "error" && (
                  <p className="text-red-500 dark:text-red-400 font-bold text-center mt-4 bg-red-50 dark:bg-red-900/20 p-3 rounded-lg transition-colors">
                    ✕ Failed to send. Please try again.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;