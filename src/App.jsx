import { motion } from "framer-motion";
import Header from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen relative bg-[#FFF5F8] dark:bg-[#0f172a] overflow-x-hidden transition-colors duration-500">
      
      {/* 🔴 CLEAR CIRCLES BACKGROUND - No Blur, Sharp Edges */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        
        {/* Circle 1: Sharp Dark Pink */}
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -right-20 w-80 h-80 md:w-[500px] md:h-[500px] rounded-full 
                     bg-[#ff004f] opacity-15 dark:opacity-20 mix-blend-multiply dark:mix-blend-overlay border border-[#ff004f]/20"
        ></motion.div>

        {/* Circle 2: Sharp Dark Pink */}
        <motion.div
          animate={{ x: [0, -80, 0], y: [0, 80, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/2 -left-32 w-72 h-72 md:w-[450px] md:h-[450px] rounded-full 
                     bg-[#ff004f] opacity-20 dark:opacity-25 mix-blend-multiply dark:mix-blend-overlay border border-[#ff004f]/20"
        ></motion.div>

        {/* Circle 3: Bottom Right */}
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, 100, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 5 }}
          className="absolute -bottom-20 right-20 w-64 h-64 md:w-[400px] md:h-[400px] rounded-full 
                     bg-[#ff004f] opacity-15 dark:opacity-20 mix-blend-multiply dark:mix-blend-overlay"
        ></motion.div>
      </div>

      {/* 🟠 CONTENT LAYER */}
      <div className="relative z-10 bg-transparent">
        <Header />
        <main className="bg-transparent">
          <Home />
          <Services />
          <About />
          <Portfolio />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;