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
function SkillsCarousel({items = [], rotateDelayMS = 2500, hoverDelayMS = 100}: SkillsCarouselProps) {
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

  // Handle scroll wheel to change index
  function onWheel(e: React.WheelEvent) {
    if (!hovered) return;
    e.preventDefault();
    if (e.deltaY > 0) {
      setIndex((prev) => (prev + 1) % items.length);
    } else if (e.deltaY < 0) {
      setIndex((prev) => (prev - 1 + items.length) % items.length);
    }
  }

  return (<motion.div
      className="relative w-full h-40 overflow-hidden flex items-center justify-center"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onWheel={onWheel}
      animate={{height: 160, width: "100%"}}
      transition={{type: "spring", stiffness: 300, damping: 30}}
      style={{cursor: "pointer"}}
    >
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
      </AnimatePresence>
      {/* Pips at the bottom */}
      {hovered && (<div className="absolute bottom-2 left-0 w-full flex justify-center gap-2">
          {items.map((_, i) => (<span
              key={i}
              className={`inline-block w-3 h-3 rounded-full transition-all duration-200 ${i === index ? 'bg-blue-500 scale-125' : 'bg-gray-300 scale-100'}`}
              style={{boxShadow: i === index ? '0 0 0 2px #3b82f6' : undefined}}
            />))}
        </div>)}
    </motion.div>);
}

export default SkillsCarousel;