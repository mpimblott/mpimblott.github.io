import React, { useEffect, useState, useRef, useCallback } from 'react';
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

interface SkillsCarouselProps {
  items: string[];
  rotateDelayMS?: number;
  hoverDelayMS?: number;
  scrollOnHover?: boolean;
}

function CarouselIndicator({index, totalItems, currentIndex}: {
  index: number;
  totalItems: number;
  currentIndex: number;
}) {
  const isActive = index === currentIndex;
  return (
    <span
      key={index}
      className={`inline-block w-6 h-3 rounded-full transition-all duration-200 
        ${isActive ? 'bg-blue-500 scale-50' : 'bg-gray-300 scale-30'}`}
      style={{boxShadow: isActive ? '0 0 0 2px #3b82f6' : undefined}}
    />
  );
}

/**
 * Carousel navigation logic
 * @param itemsLength Total number of items in the carousel
 * @param scrollOnHover If true, can scroll through the carousel items on hover
 * @param rotateDelayMS Delay between rotations
 */
function useCarouselNavigation(itemsLength: number, scrollOnHover: boolean, rotateDelayMS: number) {
  const [index, setIndex] = useState(0);
  const [lastDirection, setLastDirection] = useState<"forward" | "backward">("forward");
  const [hovered, setHovered] = useState(false);
  const [hoverTimeoutId, setHoverTimeoutId] = useState<number | null>(null);
  const [rotateTimeoutId, setRotateTimeoutId] = useState<number | null>(null);
  const [rotateTimeoutStarted, setRotateTimeoutStarted] = useState<number | null>(null);
  const [remainingTime, setRemainingTime] = useState<number>(rotateDelayMS);

  const updateIndex = (delta: number) => {
    setLastDirection(delta > 0 ? "forward" : "backward");
    setIndex((prev) => (prev + delta + itemsLength) % itemsLength);
  };

  const handleRotation = useCallback(() => {
    if (hovered) return;

    const timeoutId = setTimeout(() => {
      updateIndex(1);
      setRemainingTime(rotateDelayMS);
      setRotateTimeoutStarted(Date.now());
      handleRotation(); // Add this line to trigger the next rotation
    }, remainingTime);

    setRotateTimeoutStarted(Date.now());
    // @ts-ignore
    setRotateTimeoutId(timeoutId);
    return () => clearTimeout(timeoutId);
  }, [hovered, remainingTime, rotateDelayMS, itemsLength]);

  useEffect(() => {
    const cleanup = handleRotation();
    return () => cleanup && cleanup();
  }, [handleRotation]);

  const handleWheel = (e: React.WheelEvent) => {
    if (!hovered) return;
    updateIndex(e.deltaY > 0 ? 1 : -1);
  };

  const handleHover = (hoverDelayMS: number) => {
    if (!scrollOnHover) return;
    const timeout = setTimeout(() => {
      if (rotateTimeoutId) {
        clearTimeout(rotateTimeoutId);
        setRotateTimeoutId(null);
        setRemainingTime((prev) =>
                           rotateTimeoutStarted ? prev - (Date.now() - rotateTimeoutStarted) : rotateDelayMS
        );
      }
      setHovered(true);
    }, hoverDelayMS);
    // @ts-ignore
    setHoverTimeoutId(timeout);
  };

  const handleLeave = () => {
    if (hoverTimeoutId) {
      clearTimeout(hoverTimeoutId);
    }
    setHovered(false);
  };

  return {
    index,
    lastDirection,
    hovered,
    handleWheel,
    handleHover,
    handleLeave
  };
}

const containerStyles = {
  className: "relative w-full h-30 overflow-hidden flex items-center justify-center",
  animate: {width: "100%"},
  transition: {type: "spring", stiffness: 10, damping: 60},
  style: {cursor: "pointer"}
} as const;

const itemAnimationProps = (lastDirection: "forward" | "backward") => ({
  initial: {
    x: lastDirection === "forward" ? "-100%" : "100%",
    opacity: 0
  },
  animate: {x: "0%", opacity: 1},
  exit: {
    x: lastDirection === "forward" ? "100%" : "-100%",
    opacity: 0
  },
  transition: {
    x: {type: "spring", stiffness: 400, damping: 50}
  }
});

function SkillsCarousel({
                          items = [],
                          rotateDelayMS = 2000,
                          hoverDelayMS = 100,
                          scrollOnHover = false
                        }: SkillsCarouselProps) {
  const containerRef = useRef(null);
  const {
    index,
    lastDirection,
    hovered,
    handleWheel,
    handleHover,
    handleLeave
  } = useCarouselNavigation(items.length, scrollOnHover, rotateDelayMS);

  useEffect(() => {
    if (!scrollOnHover) return;
    const el = containerRef.current as HTMLElement | null;
    if (!el) return;

    const handler = (e: WheelEvent) => e.preventDefault();
    el.addEventListener('wheel', handler, {passive: false});
    return () => el.removeEventListener('wheel', handler);
  }, [scrollOnHover]);

  return (
    <motion.div
      ref={containerRef}
      {...containerStyles}
      onMouseEnter={() => handleHover(hoverDelayMS)}
      onMouseLeave={handleLeave}
      onWheel={handleWheel}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="absolute text-2xl font-bold"
          {...itemAnimationProps(lastDirection)}
        >
          {items[index]}
        </motion.div>
      </AnimatePresence>

      {hovered && (
        <div className="absolute bottom-2 left-0 w-full flex justify-center gap-1">
          {items.map((_, i) => (
            <CarouselIndicator
              key={i}
              index={i}
              totalItems={items.length}
              currentIndex={index}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
}

export default SkillsCarousel;