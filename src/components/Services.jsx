import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { SiMongodb } from "react-icons/si";

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: false });
  }, []);

  /* 📱 SCROLL DETECTION LOGIC */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.dataset.index);
          if (entry.isIntersecting) {
            setActiveIndex(index);
          }
        });
      },
      { threshold: 0.7, rootMargin: "0px 0px -10% 0px" } 
    );

    cardRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const services = [
    {
      iconType: "fa",
      icon: faCode,
      color: "text-blue-400",
      title: "Full Stack Web Development",
      text: "I build complete, scalable web applications using MERN Stack — from frontend UI to backend APIs and database integration.",
    },
    {
      iconType: "fa",
      icon: faReact,
      color: "text-cyan-400",
      title: "Frontend Development",
      text: "Crafting responsive, user-friendly interfaces using React, Next.js, and modern UI/UX practices for smooth user experiences.",
    },
    {
      iconType: "react",
      icon: SiMongodb,
      color: "text-green-500",
      title: "Backend & API Development",
      text: "Developing secure REST APIs, authentication systems, CRUD features, and backend logic using Node.js, Express & MongoDB.",
    },
  ];

  return (
    <section 
      id="services" 
      className="py-24 px-6 md:px-12 lg:px-20 bg-[#FFF5F8] dark:bg-[#111827] transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        <h3 className="text-[40px] md:text-[55px] font-bold text-black dark:text-white mb-2 transition-colors">
          My Services
        </h3>
        <div className="w-16 h-1.5 bg-[#ff004f] mb-12 rounded-full"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-12">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              data-index={index}
              data-aos="fade-up"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              onClick={() => setActiveIndex(index)}
              className="relative group h-full"
            >
              {/* --- INNER CARD --- */}
              <div
                className={`
                  rounded-2xl p-10 cursor-pointer h-full
                  transition-all duration-500 transform
                  ${
                    activeIndex === index
                      ? "bg-[#ff004f] -translate-y-4 shadow-[0_20px_40px_rgba(255,0,79,0.3)] text-white"
                      : "bg-white dark:bg-gray-800 text-[#3e3a3b] dark:text-gray-200 shadow-xl border border-pink-50 dark:border-gray-700"
                  }
                `}
              >
                {/* Icon Container */}
                <div className={`
                  mb-6 inline-block p-4 rounded-xl transition-colors
                  ${activeIndex === index ? "bg-white/20" : "bg-gray-50/50 dark:bg-gray-900/50"}
                `}>
                  {service.iconType === "fa" && (
                    <FontAwesomeIcon
                      icon={service.icon}
                      className={`text-[40px] ${
                        activeIndex === index ? "text-white" : service.color
                      } transition-colors duration-500`}
                    />
                  )}

                  {service.iconType === "react" && (
                    <service.icon
                      className={`text-[40px] ${
                        activeIndex === index ? "text-white" : service.color
                      } transition-colors duration-500`}
                    />
                  )}
                </div>

                <h2 className="text-xl font-bold mb-4">{service.title}</h2>
                <p className={`text-sm leading-7 mb-6 transition-opacity ${activeIndex === index ? "opacity-100" : "opacity-80 dark:opacity-70"}`}>
                  {service.text}
                </p>

                {/* Learn More link */}
                <div className="flex items-center gap-2 group cursor-pointer">
                   <span className={`text-xs font-bold uppercase tracking-widest ${activeIndex === index ? 'text-white' : 'text-[#ff004f]'}`}>
                     Learn more
                   </span>
                   <div className={`w-6 h-0.5 ${activeIndex === index ? 'bg-white' : 'bg-[#ff004f]'} transition-all group-hover:w-10`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}