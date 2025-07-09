import React from 'react';
import { motion } from "framer-motion";
import { FaChevronRight } from 'react-icons/fa';

function Rotate() {
  return (
    <motion.div
      animate={{rotate: 360}}
      transition={{
        duration: 0.5,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
        repeatDelay: 3,
      }}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 5C15.87 5 19 8.13 19 12C19 13.93 18.22 15.68 16.95 16.95L15.89 15.89C16.95 14.83 17.6 13.36 17.6 12C17.6 8.91 15.09 6.4 12 6.4C8.91 6.4 6.4 8.91 6.4 12C6.4 14.29 7.69 16.27 9.58 17.21L8.85 18.94C6.34 17.77 4.6 15.09 4.6 12C4.6 8.13 7.73 5 11.6 5H12Z"
          fill="currentColor"/>
        <path d="M11 8.4L13.5 12.4L11 16.4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    </motion.div>
  );
}

export default Rotate;