import React from 'react';
import * as motion from "motion/react-client";
import { IconType } from 'react-icons'
import { FaAws, FaDocker, FaJava, FaLinux, FaPython } from "react-icons/fa";
import { SiMlflow, SiPytorch, SiScikitlearn, SiScipy, SiTensorflow, SiTerraform } from "react-icons/si";


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

export interface Project {
  title: string;
  description: string;
  technologies: Technology[];
  link: string;
  children?: React.ReactNode;
}


function ProjectCard({project, index, children}: {
  project: Project; index: number, children?: React.ReactNode;
}) {
  // fade in the card
  return (<motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{
      duration: 0.8, delay: 0.1,
    }}
    className="flex flex-row overflow-hidden outline-solid rounded-sm w-full h-full outline-gray-500 p-2"
  >
    <div className="flow-root flex-col h-full justify-between">
      {children && (<div className="float-left pr-4 pl-2 pt-2">
        {children}
      </div>)}
      <div>
        <h3 className="text-l font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech, i) => (<div key={i} className="relative group">
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
    </div>
  </motion.div>);
}


export default ProjectCard;