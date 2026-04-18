export default function Footer() {
  return (
    // bg-transparent aur backdrop-blur-sm zaroori hai
    <footer className="relative w-full py-10 bg-transparent text-gray-600 dark:text-gray-400 border-t border-pink-100/20 dark:border-gray-800 transition-colors">
      <div className="container mx-auto px-6 text-center">
        {/* Logo Section */}
        <div className="mb-6 flex justify-center">
          <h2 className="text-2xl font-bold text-black dark:text-white">
            $<span className="text-[#ff004f]">uraj_</span>
          </h2>
        </div>

        {/* Links Section */}
        <ul className="flex flex-wrap justify-center gap-6 md:gap-10 mb-8 uppercase text-xs md:text-sm font-bold tracking-widest">
          <li>
            <a href="#home" className="hover:text-[#ff004f] transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-[#ff004f] transition-colors">
              About
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="hover:text-[#ff004f] transition-colors"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              className="hover:text-[#ff004f] transition-colors"
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-[#ff004f] transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Copyright Section */}
        <div className="pt-8 border-t border-pink-100/10 dark:border-gray-800/50">
          <p className="text-sm">
            Copyright © 2026{" "}
            <span className="font-bold text-black dark:text-white">
              Suraj Arya
            </span>
            . Made with <span className="text-[#ff004f]">❤️</span> by Suraj
          </p>
          <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-gray-800 dark:text-gray-200 font-medium">
            Full Stack Developer • Next.js Expert
          </p>
        </div>
      </div>
    </footer>
  );
}
