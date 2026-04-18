import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function About() {
  const [activeTab, setActiveTab] = useState("skills");

  const tabs = [
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-[#FFF5F8] dark:bg-[#111827] text-[#312d2d] dark:text-gray-200 transition-colors duration-300 overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* --- LEFT SIDE: Image Fixed on Left --- */}
          <div className="w-full md:w-[45%] flex justify-center items-center relative order-1 px-4">
            {/* Background Pink Frame */}
            <div className="absolute top-4 left-6 w-full h-full border-2 border-[#ff004f] rounded-[20px] opacity-20 translate-x-2 translate-y-2 hidden md:block -z-10"></div>

            {/* Main Image Card */}
            <div className="relative z-10 w-full max-w-[400px] rounded-[20px] overflow-hidden shadow-2xl bg-white dark:bg-gray-800 border-[8px] border-white dark:border-gray-800 transition-all duration-300">
              <img
                src="Lumii_20220507_.jpg"
                alt="About Suraj"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 w-full h-1.5 bg-[#ff004f]"></div>
            </div>
          </div>

          {/* --- RIGHT SIDE: Content --- */}
          <div className="w-full md:w-[55%] order-2">
            <h3 className="text-[40px] md:text-[55px] font-bold text-black dark:text-white mb-2 leading-tight transition-colors">
              About Me
            </h3>
            <div className="w-16 h-1.5 bg-[#ff004f] mb-8 rounded-full"></div>

            <p className="text-[15px] md:text-[16px] leading-7 text-gray-700 dark:text-gray-300 transition-colors">
              Hi, I’m{" "}
              <span className="text-[#ff004f] font-bold">Suraj Arya</span>, a
              passionate <b>Full Stack Developer</b> who enjoys creating modern,
              responsive, and user-friendly web applications. I work with{" "}
              <b>MERN Stack, Next.js, and TypeScript</b>.
            </p>

            <p className="mt-4 text-[15px] md:text-[16px] leading-7 text-gray-700 dark:text-gray-300 transition-colors">
              I have completed a <b>1-year internship at PN Infosys</b> where I
              gained real-world experience in full-stack development and UI/UX improvements.
            </p>

            {/* --- TABS HEADER --- */}
            <div className="flex mt-10 gap-6 md:gap-10 border-b border-gray-200 dark:border-gray-700 overflow-x-auto scrollbar-hide">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`pb-3 text-[16px] md:text-[18px] font-bold transition-all relative whitespace-nowrap ${
                    activeTab === tab.id
                      ? "text-[#ff004f]"
                      : "text-gray-400 dark:text-gray-500 hover:text-black dark:hover:text-white"
                  }`}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="tabLine"
                      className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#ff004f]"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* --- TAB CONTENT --- */}
            <div className="mt-8 min-h-[220px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {activeTab === "skills" && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <p className="text-[#ff004f] font-bold text-[12px] uppercase">Frontend</p>
                        <p className="text-gray-800 dark:text-gray-200 transition-colors">
                          HTML, CSS, JavaScript, Next.js, React.js, Tailwind CSS, <b>Bootstrap</b>
                        </p>
                      </div>
                      <div>
                        <p className="text-[#ff004f] font-bold text-[12px] uppercase">Backend & Database</p>
                        <p className="text-gray-800 dark:text-gray-200 transition-colors">
                          Node.js, Express.js, REST API, MongoDB, Mongoose, <b>Firebase Console</b>
                        </p>
                      </div>
                      <div>
                        <p className="text-[#ff004f] font-bold text-[12px] uppercase">Other Skills</p>
                        <p className="text-gray-800 dark:text-gray-200 transition-colors">
                          UI/UX, Git & GitHub, Responsive Design, Deployment, Razorpay ,Vercel, Netlify ,Render
                        </p>
                      </div>
                    </div>
                  )}

                  {activeTab === "experience" && (
                    <ul className="space-y-4">
                      <li className="border-l-4 border-[#ff004f] pl-4">
                        <span className="text-[#ff004f] font-bold text-sm">2024 - 2025</span>
                        <p className="font-bold text-black dark:text-white">
                          Full Stack Developer Internship at PN Infosys (1 Year)
                        </p>
                      </li>
                      <li className="border-l-4 border-[#ff004f]/40 pl-4">
                        <span className="text-[#ff004f] font-bold text-sm">2024 - 2025</span>
                        <p className="font-bold text-black dark:text-white">
                          Freelance Web Designer (UI/UX + Web Projects)
                        </p>
                      </li>
                    </ul>
                  )}

                  {activeTab === "education" && (
                    <ul className="space-y-4">
                      <li className="border-l-4 border-[#ff004f] pl-4">
                        <span className="text-[#ff004f] font-bold text-sm">2026</span>
                        <p className="font-bold text-black dark:text-white transition-colors">
                          MCA – RGPV University
                        </p>
                      </li>
                      <li className="border-l-4 border-[#ff004f]/20 pl-4">
                        <span className="text-[#ff004f] font-bold text-sm">2023</span>
                        <p className="font-bold text-black dark:text-white transition-colors">
                          BSc (Computer Science) – Jiwaji University
                        </p>
                      </li>
                    </ul>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}