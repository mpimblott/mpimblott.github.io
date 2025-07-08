import React, { useEffect, useState } from 'react';
import * as motion from "motion/react-client";
import { AnimatePresence } from "framer-motion";

interface SkillsCarouselProps {
  items: string[];
  rotateDelayMS: number;
  hoverDelayMS: number;
}

/**
 * A carousel which rotates between a set of text options
 * @param props
 * @constructor
 */
function SkillsCarousel({items = [], rotateDelayMS = 2500, hoverDelayMS = 100}: SkillsCarouselProps) {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [hoverTimeoutId, setHoverTimeoutId] = useState<number | null>(null);

  const [rotateTimeoutId, setRotateTimeoutId] = useState<number | null>(null);
  const [rotateTimeoutStarted, setRotateTimeoutStarted] = useState<number | null>(null);
  const [remainingTime, setRemainingTime] = useState<number | undefined>(rotateDelayMS);

  useEffect(() => {
    // Rotate the index
    if (hovered) return;
    console.log('starting with remaining time', remainingTime);

    // create the timeout for rotation
    const timeoutId = setTimeout(() => {
      setIndex((prev) => (prev + 1) % items.length);
      // on rotate reset the remaining time and use this as the start time of the next rotate
      setRemainingTime(rotateDelayMS);
      setRotateTimeoutStarted(Date.now());
    }, remainingTime);

    setRotateTimeoutStarted(Date.now());
    setRotateTimeoutId(timeoutId);
    return () => clearTimeout(timeoutId);
  }, [index, rotateDelayMS, items.length, hovered, remainingTime]);

  function onHover() {
    // timeout for the pips to appear when hovered
    const timeout = setTimeout(() => {
      // remember the rotate delay so we can resume after
      if (rotateTimeoutId) {
        // clear then store the remaining time
        clearTimeout(rotateTimeoutId);
        setRotateTimeoutId(null);
        setRemainingTime((prev) => prev - (Date.now() - rotateTimeoutStarted));
      }
      setHovered(true);
    }, hoverDelayMS); // 500ms delay
    setHoverTimeoutId(timeout);
  }

  function onLeave() {
    if (hoverTimeoutId) {
      clearTimeout(hoverTimeoutId);
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
      className="relative w-full h-30 overflow-hidden flex items-center justify-center"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onWheel={onWheel}
      animate={{width: "100%"}}
      transition={{type: "spring", stiffness: 10, damping: 40}}
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
              type: "spring", stiffness: 400, damping: 50,
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
              className={`inline-block w-6 h-3 rounded-full transition-all duration-200 ${i === index ? 'bg-blue-500' +
                ' scale-50' : 'bg-gray-300 scale-30'}`}
              style={{boxShadow: i === index ? '0 0 0 2px #3b82f6' : undefined}}
            />))}
        </div>)}
    </motion.div>);
}

export default SkillsCarousel;