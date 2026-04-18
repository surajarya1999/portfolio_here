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
} from "react-icons/si";

export default function Home() {
  const techIcons = [
    {
      icon: <SiNextdotjs />,
      color: "text-black dark:text-white",
      name: "Next.js",
    },
    { icon: <SiTypescript />, color: "text-[#3178C6]", name: "TypeScript" },
    { icon: <FaReact />, color: "text-cyan-400", name: "React" },
    { icon: <FaNodeJs />, color: "text-green-600", name: "Node.js" },
    {
      icon: <SiExpress />,
      color: "text-black dark:text-white",
      name: "Express",
    },
    { icon: <SiMongodb />, color: "text-green-500", name: "MongoDB" },
  ];

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col items-center justify-center pt-28 pb-10 px-6 sm:px-12 md:px-20 lg:px-32 bg-[#FFF5F8] dark:bg-[#111827] transition-colors duration-300 overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-[-10%] left-[-5%] w-[350px] h-[350px] bg-[#ff004f]/10 dark:bg-[#ff004f]/5 rounded-full blur-[90px] -z-0"></div>

      <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="w-full md:w-1/2 text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 px-3 py-1 rounded-full mb-5 border border-[#ff004f]/20 dark:border-gray-700 shadow-sm transition-colors">
            <span className="text-gray-900 dark:text-gray-100 font-bold text-[11px] sm:text-xs uppercase tracking-wider">
              Next.js & MERN Developer
            </span>
            <FaReact
              className="text-cyan-500 text-base animate-spin"
              style={{ animationDuration: "8s" }}
            />
          </div>

          {/* Heading */}
          <h2 className="text-[35px] sm:text-[50px] lg:text-[65px] font-extrabold text-black dark:text-white leading-[1.1] mb-6 transition-colors">
            Hi, I'm <span className="text-[#ff004f]">Suraj</span> <br />
            Arya From India
          </h2>

          <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm md:text-base max-w-lg mb-8 leading-relaxed transition-colors">
            I'm a passionate Full-Stack Developer specializing in building
            high-performance SaaS applications with <strong>Next.js</strong> and{" "}
            <strong>TypeScript</strong>.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <a
              href="https://wa.me/917509478047?text=Hi%20Suraj,%20I'm%20interested%20in%20hiring%20you!"
              target="_blank"
              rel="noreferrer"
              className="bg-[#ff004f] hover:bg-black dark:hover:bg-white dark:hover:text-black text-white px-6 py-2.5 rounded-lg font-bold shadow-md transition-all text-sm active:scale-95 inline-block"
            >
              Hire Me
            </a>
            <a
              href="/Suraj_Arya_CV.pdf"
              download="Suraj_Arya_Resume.pdf"
              className="flex items-center gap-2 px-6 py-2.5 rounded-lg font-bold transition-all text-sm active:scale-95 border-2 !border-solid !border-black dark:!border-white text-black dark:text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black"
              style={{
                borderStyle: "solid",
                borderWidth: "2px",
                borderColor: "inherit", // Ye dark/light mode ke colors ko pick karega
              }}
            >
              Download CV <FaDownload className="text-xs" />
            </a>
          </div>

          <div className="flex gap-5 text-xl text-gray-400 dark:text-gray-500">
            <a
              href="https://github.com/repos"
              target="_blank"
              className="hover:text-[#ff004f] transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/suraj-arya"
              target="_blank"
              className="hover:text-[#ff004f] transition-colors"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Right Content: Photo Circle */}
        <div className="relative w-full md:w-1/2 flex justify-center md:justify-end items-center">
          <div className="relative w-[250px] h-[250px] sm:w-[320px] sm:h-[320px] lg:w-[400px] lg:h-[400px]">
            <div className="w-full h-full rounded-full border-[8px] border-white dark:border-gray-800 shadow-2xl overflow-hidden bg-white dark:bg-gray-900 relative z-10 transition-colors">
              <img
                src="Lumii_20230825_211427600.jpg"
                alt="Suraj Arya"
                className="w-full h-full object-cover object-right"
              />
            </div>
            <div className="absolute inset-0 bg-[#ff004f]/5 dark:bg-[#ff004f]/10 rounded-full -z-10 scale-105"></div>
          </div>
        </div>
      </div>

      {/* --- Tech Stack Icons --- */}
      <div className="w-full mt-12 md:mt-16 overflow-visible flex justify-center md:justify-start">
        <motion.div
          className="flex flex-wrap gap-4 md:gap-6 items-center"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {techIcons.map((tech, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { x: -50, opacity: 0 },
                visible: {
                  x: 0,
                  opacity: 1,
                  transition: {
                    type: "spring",
                    stiffness: 70,
                    damping: 10,
                    duration: 1.2,
                  },
                },
              }}
              whileHover={{ y: -5, scale: 1.1 }}
              className={`flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-xl shadow-sm border border-pink-50 dark:border-gray-700 transition-colors ${tech.color}`}
            >
              <div className="text-xl md:text-2xl">{tech.icon}</div>
              <span className="text-[10px] font-bold text-gray-600 dark:text-gray-300 uppercase tracking-tight">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
