import React from 'react';
import { motion, useScroll } from "motion/react"

function ScrollTracker(props) {
  /**
   * Adapted from example: https://examples.motion.dev/react/scroll-linked
   */
  const {scrollYProgress} = useScroll()

  return (<motion.div
      id="scroll-indicator"
      style={{
        scaleX: scrollYProgress,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 10,
        originX: 0,
        backgroundColor: "#ffffff",
      }}
    />)
}

export default ScrollTracker;