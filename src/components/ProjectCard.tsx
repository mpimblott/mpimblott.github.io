import React from 'react';
import { motion } from "framer-motion";
import { Technology } from "../types/technology";

const AnimatedContainer = ({children, className}: {
  children: React.ReactNode; className?: string;
}) => (<motion.div
  className={className}
  initial={{opacity: 0}}
  whileInView={{opacity: 1}}
  transition={{
    duration: 0.8, delay: 0.1,
  }}
  viewport={{once: true}}
>
  {children}
</motion.div>);

export interface Project {
  // The main title for the card
  title: string;
  // Description body for the card
  description: string;
  // Technologies to show along the bottom
  technologies?: Technology[];
  // Child content. If this is provided, there is a space for this on the left of the card
  children?: React.ReactNode;
  // A link to learn more about this project.
  onwardLink?: string;
}

const CardBody = ({project, children}: { project: Project, children: React.ReactNode }) => {
  return <div className="flex flex-col justify-between w-full h-full m-2">
    <div className="flow-root h-full">
      {children && (<div className="float-left pr-4 pl-2 pt-2">
        {children}
      </div>)}
      <div>
        <h3 className="text-l font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-300 text-md">{project.description}</p>
      </div>
    </div>
    <div className="flex justify-between items-center pl-1 pb-1">
      <div className="flex flex-wrap gap-2">
        {project.technologies && project.technologies.map((tech, i) => (<div key={i} className="relative group">
          <div className="p-2 rounded-full hover:bg-gray-700 transition-colors duration-200">
            <tech.icon className="w-6 h-6"/>
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block z-100">
              <div className="bg-gray-800 text-white text-sm px-2 py-1 rounded whitespace-nowrap">
                {tech.name}
              </div>
              <div className="w-2 h-2 bg-gray-800 rotate-45 absolute left-1/2 -translate-x-1/2 -bottom-1"></div>
            </div>
          </div>
        </div>))}
      </div>
      {project.onwardLink && (<a href={project.onwardLink} target="_blank" rel="noopener noreferrer"
                                 className="px-4 py-2 mb-1 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition-colors duration-200">
        Learn More
      </a>)}
    </div>
  </div>
}

/**
 *
 * @param project The contents to populate this card.
 * @param index The index of this card if the parent holds multiple.
 * @param children Content for the child position.
 * @param animate If true an animation is applied when coming into view
 */
function ProjectCard({project, children, animate = true}: {
  project: Project; children?: React.ReactNode, animate?: boolean;
}) {

  const containerClasses = "flex flex-row overflow-hidden outline-solid rounded-sm w-full h-full outline-gray-500 p-2";

  return animate ? (<AnimatedContainer
    className={containerClasses}
  >
    <CardBody project={project} children={children}/>
  </AnimatedContainer>) : <div
    className={containerClasses}><CardBody
    project={project} children={children}/></div>;
}

export default ProjectCard;