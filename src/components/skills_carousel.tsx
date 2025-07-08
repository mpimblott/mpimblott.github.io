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
function SkillsCarousel({items = [], displayTime = 2000}: SkillsCarouselProps) {
  const [index, setIndex] = useState(0);
  
  console.log("carousel mounted")

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIndex((prev) => (prev + 1) % items.length);
      console.log(index);
    }, displayTime + 1000); // + animation duration

    return () => clearTimeout(timeout);
  }, [index, displayTime, items.length]);

  return (
    <div className="relative w-full h-40 overflow-hidden flex items-center justify-center">
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
    </div>
  );
}

export default SkillsCarousel;