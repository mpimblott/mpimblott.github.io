import React from 'react';
import { IconType } from 'react-icons'
import { FaAws, FaDocker, FaJava, FaLinux, FaPython, FaVuejs } from "react-icons/fa";
import {
  SiFastapi,
  SiKubernetes,
  SiMlflow,
  SiPytorch,
  SiScikitlearn,
  SiScipy,
  SiTensorflow,
  SiTerraform,
  SiTypescript
} from "react-icons/si";
import { motion } from "framer-motion";

/**
 * Used to define the technology icons which appear along the bottom of the project card
 */
export interface Technology {
  name: string;
  icon: IconType;
}

export const Aws: Technology = {
  name: "AWS", icon: FaAws
}

export const Python: Technology = {
  name: "Python", icon: FaPython
}

export const Pytorch: Technology = {
  name: "PyTorch", icon: SiPytorch
}

export const ScikitLearn: Technology = {
  name: "Scikit-learn", icon: SiScikitlearn
}

export const SciPy: Technology = {
  name: "SciPy", icon: SiScipy
}

export const Java: Technology = {
  name: "Java", icon: FaJava
}

export const MlFlow: Technology = {
  name: "MLFlow", icon: SiMlflow
}

export const Terraform: Technology = {
  name: "Terraform", icon: SiTerraform
}

export const TensorFlow: Technology = {
  name: "TensorFlow", icon: SiTensorflow
}

export const Linux: Technology = {
  name: "Linux", icon: FaLinux
}

export const Docker: Technology = {
  name: "Docker", icon: FaDocker
}

export const Kubernetes: Technology = {
  name: "Kubernetes", icon: SiKubernetes
}

export const FastAPI: Technology = {
  name: "FastAPI", icon: SiFastapi
}

export const VueJs: Technology = {
  name: "Vue.js", icon: FaVuejs
}

export const Typescript: Technology = {
  name: "TypeScript", icon: SiTypescript
}

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
  // fade in the card when it first comes into view

  const content = <div className="flex flex-col justify-between w-full h-full m-2">
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

  return animate ? (<motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{
      duration: 0.8, delay: 0.1,
    }}
    viewport={{once: true}}
    className="flex flex-row overflow-hidden outline-solid rounded-sm w-full h-full outline-gray-500 p-2"
  >
    {content}
  </motion.div>) : <div className="flex flex-row overflow-hidden outline-solid rounded-sm w-full h-full outline-gray-500 p-2">{content}</div>;
}

export default ProjectCard;