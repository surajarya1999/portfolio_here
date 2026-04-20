import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaLinkedin,
  FaDownload,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
} from "react-icons/si";

export default function Home() {
  const techIcons = [
    { icon: <SiNextdotjs />, color: "text-black dark:text-white" },
    { icon: <SiJavascript />, color: "text-[#F0DB4F]" },
    { icon: <SiTypescript />, color: "text-[#3178C6]" },
    { icon: <FaReact />, color: "text-cyan-400" },
    { icon: <FaNodeJs />, color: "text-green-600" },
    { icon: <SiExpress />, color: "text-black dark:text-white" },
    { icon: <SiMongodb />, color: "text-green-500" },
  ];

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col items-center justify-center pt-28 pb-10 px-6 sm:px-12 md:px-20 lg:px-32 bg-[#FFF5F8] dark:bg-[#111827] transition-colors duration-300 overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-[-10%] left-[-5%] w-[350px] h-[350px] bg-[#ff004f]/10 dark:bg-[#ff004f]/5 rounded-full blur-[90px] -z-0"></div>

      <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between gap-10">
        {/* --- Left Content (Same as before) --- */}
        <div className="w-full md:w-1/2 text-left">
          <div className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 px-3 py-1 rounded-full mb-5 border border-[#ff004f]/20 dark:border-gray-700 shadow-sm transition-colors">
            <span className="text-gray-900 dark:text-gray-100 font-bold text-[11px] sm:text-xs uppercase tracking-wider">
              Next.js & MERN Developer
            </span>
            <FaReact className="text-cyan-500 text-base animate-spin" style={{ animationDuration: "8s" }} />
          </div>

          <h2 className="text-[35px] sm:text-[50px] lg:text-[65px] font-extrabold text-black dark:text-white leading-[1.1] mb-6 transition-colors">
            Hi, I'm <span className="text-[#ff004f]">Suraj</span> <br />
            Arya From India
          </h2>

          <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm md:text-base max-w-lg mb-8 leading-relaxed transition-colors">
            I'm a passionate Full-Stack Developer specializing in building high-performance SaaS applications with <strong>Next.js</strong> and <strong>TypeScript</strong>.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <a href="https://wa.me/917509478047" target="_blank" rel="noreferrer" className="bg-[#ff004f] text-white px-6 py-2.5 rounded-lg font-bold shadow-md transition-all active:scale-95">
              Hire Me
            </a>
            <a href="/Suraj_Arya_CV.pdf" download className="flex items-center gap-2 px-6 py-2.5 rounded-lg font-bold border-2 border-black dark:border-white text-black dark:text-white transition-all active:scale-95">
              Download CV <FaDownload className="text-xs" />
            </a>
          </div>

          <div className="flex gap-5 text-xl text-gray-400 dark:text-gray-500">
            <a href="https://github.com/repos" className="hover:text-[#ff004f] transition-colors"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/suraj-arya460/" className="hover:text-[#ff004f] transition-colors"><FaLinkedin /></a>
          </div>
        </div>

        {/* --- Right Content (Photo) --- */}
        <div className="relative w-full md:w-1/2 flex justify-center md:justify-end items-center">
          <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[420px] lg:h-[420px]">
            <div className="w-full h-full rounded-full border-[6px] border-[#ff004f]/20 dark:border-[#ff004f]/10 shadow-2xl overflow-hidden bg-transparent relative z-10">
              <img src="surajb.png" alt="Suraj Arya" className="w-full h-full object-cover object-top" />
            </div>
            <div className="absolute inset-0 bg-[#ff004f]/10 dark:bg-[#ff004f]/20 rounded-full -z-10 scale-110 blur-sm"></div>
          </div>
        </div>
      </div>

      {/* --- 🟢 ROLLING & BOUNCING MARQUEE (The Final Magic) --- */}
      <div className="w-screen  relative  ml-[-50vw] mr-[-50vw] overflow-hidden py-15 mt-3">
        <motion.div
          className="flex whitespace-nowrap gap-16 md:gap-24" // Gap badha diya hai yahan
          animate={{ x: [-1500, 0] }} // Right to Left
          transition={{
            duration: 22,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {[...techIcons, ...techIcons, ...techIcons].map((tech, i) => (
            <div key={i} className="relative">
              <motion.div
                /* 🔴 ROLLING BOUNCE: Jump + Squash + Rotate */
                animate={{
                  y: [0, -60, 0], // Ucha jump
                  rotate: [0, 360], // 🟢 Gol-Gol ghumne ke liye
                  scaleY: [1, 0.8, 1.1, 1], // Thappa effect
                }}
                transition={{
                  duration: 1.2, // Thoda slow aur smooth jump
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.2, // Wave effect
                }}
                className={`flex items-center justify-center bg-white dark:bg-gray-800 w-[70px] h-[70px] md:w-[55px] md:h-[55px] rounded-2xl   border-pink-100 dark:border-gray-700 ${tech.color}`}
              >
                <div className="text-2xl md:text-4xl">{tech.icon}</div>
              </motion.div>

              {/* Dynamic Shadow */}
              <motion.div
                animate={{
                  scale: [1, 0.3, 1],
                  opacity: [0.3, 0.05, 0.3],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.2,
                }}
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-black/20 rounded-full blur-md"
              />
            </div>
          ))}
        </motion.div>

        {/* Side Fades */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r  to-transparent z-20"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l   to-transparent z-10"></div>
      </div>
    </section>
  );
}