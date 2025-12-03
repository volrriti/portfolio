"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  {
    title: "About",
    content:
      "Aayam Khand is a computer engineering student, exploring creative development and design.",
  },
  {
    title: "Interests",
    content:
      "He's drawn to problem solving. And he deeply enjoys the interconnection between creativity and logic. He's also interested in natural sciences, mathematics, philosphy, human behavior and creative arts.",
  },
  {
    title: "Vision",
    content:
      "To live a life built on intentionality, purpose and growth. He wants to keep learning, creating and improving on the things that matter to him. He aims to have a meaningful life.",
  },
  {
    title: "Current Focus",
    content:
      "Currently developing web projects using Next.js, improving on his physics and math foundations, building soft skills, and working on his creative ventures.",
  },
  {
    title: "Values",
    content:
      "He deeply values authenticity, cuirosity and discipline. He believes in doing his best and helping those around him.",
  },
];

export default function Navbar() {
  const [selected, setSelected] = useState("About");

  const selectedItem = navItems.find((item) => item.title === selected);

  return (
    <div className="min-h-[50%]  flex flex-col items-center">
      {/* Navbar */}
      <nav className="flex justify-center w-full py-6 sticky top-0">
        <ul className="flex gap-2  rounded-full p-1">
          {navItems.map((item) => {
            const isActive = selected === item.title;
            return (
              <button
                key={item.title}
                onClick={() => setSelected(item.title)}
                className={`relative z-10 px-4 py-2 font-medium rounded-full transition-colors duration-300 cursor-crosshair ${
                  isActive ? "text-[#171717]" : "text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                    className="absolute inset-0 bg-white rounded-full -z-10"
                  />
                )}
                {item.title}
              </button>
            );
          })}
        </ul>
      </nav>

      {/* Page Content */}
      <main className="flex-grow flex items-center justify-center text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedItem?.title}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -0 }}
            transition={{ duration: 0.3 }}
            className="max-w-2xl text-lg leading-relaxed"
          >
            {selectedItem?.content}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
