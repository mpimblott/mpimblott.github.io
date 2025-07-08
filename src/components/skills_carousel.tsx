import React, { useEffect, useState } from 'react';
import * as motion from "motion/react-client";
import { AnimatePresence } from "framer-motion";

interface SkillsCarouselProps {
  items: string[];
  rotateDelayMS?: number;
  hoverDelayMS?: number;
}

/**
 * A carousel which rotates between a set of text options
 * @param props
 * @constructor
 */
function SkillsCarousel({items = [], rotateDelayMS = 2500, hoverDelayMS = 200}: SkillsCarouselProps) {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<number | null>(null);

  useEffect(() => {
    // Rotate the index
    if (hovered) return;
    const timeout = setTimeout(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, rotateDelayMS + 1000);
    return () => clearTimeout(timeout);
  }, [index, rotateDelayMS, items.length, hovered]);

  function onHover() {
    const timeout = setTimeout(() => {
      setHovered(true);
    }, hoverDelayMS); // 500ms delay
    setHoverTimeout(timeout);
  }

  function onLeave() {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
    }
    setHovered(false);
  }

  return (<motion.div
      className="relative w-full h-40 overflow-hidden flex items-center justify-center"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      animate={{
        height: 160, width: "100%",
      }}
      transition={{type: "spring", stiffness: 300, damping: 30}}
      style={{cursor: "pointer"}}
    >
      {hovered ? (// When hovered show all the items
        <motion.div
          className="grid grid-cols-3 gap-4 w-full p-6"
          initial={{opacity: 0, scale: 0.95}}
          animate={{opacity: 1, scale: 1}}
          exit={{opacity: 0, scale: 0.95}}
          transition={{duration: 0.3}}
        >
          {items.map((item, i) => (<div
              key={i}
              className="text-xl font-semibold text-center p-2"
            >
              {item}
            </div>))}
        </motion.div>) : (// When not hovered show the carousel
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="absolute text-2xl font-bold"
            initial={{x: "-100%", opacity: 0}}
            animate={{x: "0%", opacity: 1}}
            exit={{x: "100%", opacity: 0}}
            transition={{
              x: {
                type: "spring", stiffness: 300, damping: 30,
              },
            }}
          >
            {items[index]}
          </motion.div>
        </AnimatePresence>)}
    </motion.div>);
}

export default SkillsCarousel;