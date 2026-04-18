import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Saare icons ko ek hi line mein import karo taaki conflict na ho
import {
  faBars,
  faXmark,
  faMoon,
  faSun,
  faCloudMoon,
} from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // 1. Initial State: Check localStorage or System Preference
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  // 2. Force apply class to HTML tag
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "Services", id: "services" },
    { name: "About", id: "about" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className="fixed w-full top-0 left-0 z-[100] p-5 px-6 md:px-12 flex items-center justify-between bg-white dark:bg-[#111827] shadow-md border-b border-pink-50 dark:border-gray-800 transition-all duration-300">
      {/* Logo */}
      <h1 className="text-black dark:text-white font-sans text-2xl md:text-3xl font-extrabold tracking-tighter">
        $<span className="text-[#ff004f]">uraj_</span>
      </h1>

      <div className="flex items-center gap-4">
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10">
          {navLinks.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="text-gray-700 dark:text-gray-300 font-semibold text-sm uppercase tracking-widest relative group transition-colors hover:text-[#ff004f] dark:hover:text-[#ff004f]"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#ff004f] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* 🌓 Minimalist & Animated Toggle Button */}
        <motion.button
          type="button"
          onClick={() => setDarkMode(!darkMode)}
          whileTap={{ scale: 0.9 }}
          whileHover={{ y: -2 }}
          className="relative p-2.5 w-11 h-11 flex items-center justify-center rounded-xl overflow-hidden
             bg-white dark:bg-gray-900 
             border border-pink-100 dark:border-gray-800
             shadow-inner hover:shadow-md
             transition-all duration-300 cursor-pointer group"
        >
          {/* Sun Icon (Light Mode) */}
          <FontAwesomeIcon
            icon={faSun}
            className={`text-xl absolute transition-all duration-500 ease-out
              ${
                darkMode
                  ? "text-gray-400 opacity-0 translate-y-10 rotate-90"
                  : "text-yellow-500 opacity-100 translate-y-0 rotate-0"
              }`}
          />

          {/* CloudMoon Icon (Dark Mode) */}
          <FontAwesomeIcon
            icon={faCloudMoon}
            className={`text-xl absolute transition-all duration-500 ease-out
              ${
                darkMode
                  ? "text-cyan-400 opacity-100 translate-y-0 rotate-0"
                  : "text-gray-300 opacity-0 -translate-y-10 -rotate-90"
              }`}
          />
        </motion.button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black dark:text-white text-2xl p-2"
          onClick={() => setMenuOpen(true)}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[110] md:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              className="fixed top-0 right-0 w-[75%] h-full bg-white dark:bg-[#111827] z-[120] p-8 md:hidden shadow-2xl flex flex-col"
            >
              <div className="flex justify-between items-center mb-12">
                <span className="text-[#ff004f] font-bold text-lg uppercase">
                  Menu
                </span>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-800 dark:text-white text-3xl"
                >
                  <FontAwesomeIcon icon={faXmark} />
                </button>
              </div>
              <ul className="flex flex-col space-y-7">
                {navLinks.map((item) => (
                  <li
                    key={item.id}
                    className="border-b border-gray-50 dark:border-gray-800 pb-2"
                  >
                    <a
                      href={`#${item.id}`}
                      className="text-xl font-bold text-gray-900 dark:text-gray-100 block"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
