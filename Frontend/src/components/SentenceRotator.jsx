import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const sentences = [
  "Not Just Colleges,\nReal People.\n Real Stories.",
  "Ask A Senior!\n One Conversation Can\nChange Your Life.",
  "Know The Truth\n Behind The\nCampus Walls.",
];

const SentenceRotator = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState("up");

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection("up");
      setActiveIndex((prev) => (prev + 1) % sentences.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[25vh] w-[400px] overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={activeIndex}
          custom={direction}
          initial={{ y: direction === "up" ? 150 : -150, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: direction === "up" ? -150 : 150, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute w-full text-3xl font-bold text-end"
        >
          {sentences[activeIndex].split("\n").map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default SentenceRotator;
