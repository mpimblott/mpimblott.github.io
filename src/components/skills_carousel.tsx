import React, { useEffect, useState } from 'react';
import * as motion from "motion/react-client";
import { AnimatePresence } from "framer-motion";

interface SkillsCarouselProps {
  items: string[];
  displayTime?: number;
}

/**
 * A carousel which rotates between a set of text options
 * @param props
 * @constructor
 */
function SkillsCarousel({ items = [], displayTime = 2500 }: SkillsCarouselProps) {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (hovered) return;
    const timeout = setTimeout(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, displayTime + 1000);
    return () => clearTimeout(timeout);
  }, [index, displayTime, items.length, hovered]);

  return (
    <motion.div
      className="relative w-full h-40 overflow-hidden flex items-center justify-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      animate={{
        height: 160,
        width: "100%",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      style={{ cursor: "pointer" }}
    >
      {hovered ? (
        <motion.div
          className="grid grid-cols-3 gap-4 w-full p-6"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          {items.map((item, i) => (
            <div
              key={i}
              className="text-xl font-semibold text-center p-2"
            >
              {item}
            </div>
          ))}
        </motion.div>
      ) : (
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="absolute text-2xl font-bold"
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: "0%", opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{
              x: {
                type: "spring",
                stiffness: 300,
                damping: 30,
              },
            }}
          >
            {items[index]}
          </motion.div>
        </AnimatePresence>
      )}
    </motion.div>
  );
}

export default SkillsCarousel;