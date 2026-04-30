import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FaGithub } from "react-icons/fa";

export default function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(null);
  const cardRefs = useRef([]);

  const works = [
    {
      img: "inter.png",
      title: "Internshala Clone (Full-Stack)",
      company: "Elevance Skills",
      tech: ["Next.js", "TypeScript", "Firebase", "MongoDB"],
      desc: "Developed as a technical internship task. Features include Google Auth, dynamic job postings, and a recruiter dashboard for application management (Approve/Reject).",
      link: "https://clone-internshala.vercel.app/",
      github: "https://github.com/surajarya1999/clone_internshala", // 🟢 GitHub link yahan dalo
    },
    {
      img: "hub.png",
      title: "InternshipHub - SaaS Platform",
      company: "Elevance Skills",
      tech: ["Next.js", "TypeScript", "Razorpay", "Nodemailer"],
      desc: "A core internship assignment featuring subscription-based access, Razorpay gateway integration, and automated email notifications for user onboarding.",
      link: "https://internship-platfrom.vercel.app/",
      github: "https://github.com/surajarya1999/Internship-platfrom-task6", // 🟢 GitHub link yahan dalo
    },
    {
      img: "car2.png",
      title: "Car Rental Full-Stack App",
      company: "",
      tech: ["MERN", "Razorpay", "Context API"],
      desc: "A fully responsive car rental platform with booking management and secure payment integration using the MERN stack.",
      link: "https://car-rental-with-suraj.netlify.app/",
      github: "https://github.com/surajarya1999/Full_Stack_CAR_RENTAL", // 🟢 GitHub link yahan dalo
    },
    {
      img: "public.png",
      title: "PublicSpace - Social Networking App",
      company: "Elevance Skills",
      tech: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Tailwind"],
      desc: "A professional social platform with engagement features like Like, Comment, and Share. It features a unique dynamic post-limit logic based on friend count (1 friend = 1 post/day, 10+ friends = unlimited), showcasing advanced backend state management.",
      link: "https://public-space-wine.vercel.app/",
      github: "https://github.com/surajarya1999/public-space", // 🟢 GitHub link yahan dalo
    },
    {
      img: "Ai.png",
      title: "AI Study Buddy",
      company: " College Workshop task",
      tech: ["React", "AI API", "Tailwind"],
      desc: "AI-powered tool that generates topic-wise learning cards to help students grasp complex concepts through structured learning.",
      link: "https://polite-pegasus-0170ea.netlify.app/",
      github: "https://github.com/surajarya1999/ai-study-buddy", // 🟢 GitHub link yahan dalo
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveIndex(Number(entry.target.dataset.index));
          }
        });
      },
      { threshold: 0.6 },
    );
    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="portfolio"
      className="py-24 px-6 md:px-12 lg:px-20 bg-[#FFF5F8] dark:bg-[#111827] transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        <h3 className="text-[40px] md:text-[55px] font-bold text-black dark:text-white mb-2 transition-colors">
          My Work
        </h3>
        <div className="w-16 h-1.5 bg-[#ff004f] mb-12 rounded-full"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
          {works.map((work, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              data-index={index}
              className={`flex flex-col bg-white dark:bg-gray-800 rounded-[25px] overflow-hidden transition-all duration-500 border border-pink-50 dark:border-gray-700 group ${
                activeIndex === index
                  ? "shadow-2xl -translate-y-2 border-[#ff004f]/20 dark:border-[#ff004f]/40"
                  : "shadow-sm"
              }`}
            >
              {/* --- IMAGE SECTION: Browser Frame Style --- */}
              <div className="relative w-full h-[220px] sm:h-[260px] p-4 bg-gray-50/50 dark:bg-gray-900/50 transition-colors">
                {/* Browser Buttons */}
                <div className="absolute top-6 left-8 flex gap-1.5 z-10">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                </div>

                <div className="w-full h-full rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 relative bg-white dark:bg-gray-900 shadow-inner">
                  <img
                    src={work.img}
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={work.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-[#ff004f] w-14 h-14 flex items-center justify-center rounded-full shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                    >
                      <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                        className="text-xl"
                      />
                    </a>
                  </div>
                </div>
              </div>

              {/* --- CONTENT SECTION --- */}
              <div className="p-8 flex flex-col gap-4">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col gap-1">
                    {work.company && (
                      <span className="text-[10px] font-extrabold text-[#ff004f] uppercase tracking-[2px]">
                        Internship Task @ {work.company}
                      </span>
                    )}
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white leading-tight tracking-tight transition-colors">
                      {work.title}
                    </h4>
                  </div>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2">
                  {work.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-[#FFF5F8] dark:bg-gray-900 text-[#ff004f] text-[10px] font-bold uppercase rounded-md border border-pink-100 dark:border-gray-700 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-3 transition-colors">
                  {work.desc}
                </p>

                <div className="pt-4 border-t border-gray-50 dark:border-gray-700 flex items-center justify-between transition-colors">
                  {/* 🟢 Live Demo Link */}
                  <a
                    href={work.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#ff004f] font-bold text-sm flex items-center gap-2 group/link"
                  >
                    Live Demo
                    <span className="transition-transform group-hover/link:translate-x-1">
                      →
                    </span>
                  </a>

                  {/* 🔵 GitHub Repository Link (New) */}
                  <a
                    href={work.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-all duration-300 font-semibold text-sm group/git"
                  >
                    <FaGithub className="text-lg group-hover/git:scale-110 transition-transform" />
                    <span className="hidden sm:inline">Code</span>{" "}
                    {/* Mobile par sirf icon dikhega, bade screen par 'Code' likha aayega */}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
