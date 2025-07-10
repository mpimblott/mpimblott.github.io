import React from 'react';
import * as motion from "motion/react-client";

function ExperienceSection({title, subtitle, subsubtitle, children, animate = true}: {
  title: string, subtitle?: string, subsubtitle?: string, children: React.ReactNode, animate?: boolean
}) {

  const content = <div className="text-4xl font-bold mt-12 mb-12 text-center">
    <u>{title}</u>
    {subtitle && <div className="text-xl font-normal mt-2">{subtitle}</div>}
    {subsubtitle && <div className="text-sm font-normal mt-2 text-gray-500">{subsubtitle}</div>}
  </div>

  return (<>
      {animate ? (<motion.div
          initial={{x: -100, opacity: 0}}
          whileInView={{x: 0, opacity: 1}}
          viewport={{once: true}}
          transition={{type: "spring", stiffness: 100, damping: 20}}
        >
          {content}
        </motion.div>) : (content)}
      {children}
    </>);
}

export default ExperienceSection;