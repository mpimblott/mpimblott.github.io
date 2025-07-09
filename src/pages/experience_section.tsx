import React from 'react';
import * as motion from "motion/react-client";

function ExperienceSection({title, children}: { title: string, children: React.ReactNode }) {
  return (
    <>
      <motion.div
        initial={{x: -100, opacity: 0}}
        whileInView={{x: 0, opacity: 1}}
        transition={{type: "spring", stiffness: 100, damping: 20}}
        className="text-4xl font-bold mt-12 mb-12"
      >
        {title}
      </motion.div>
      {children}
    </>
  );
}

export default ExperienceSection;