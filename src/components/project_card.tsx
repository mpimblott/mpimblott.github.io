import React from 'react';
import * as motion from "motion/react-client";
import { IconType } from 'react-icons'
import { FaAws, FaJava, FaPython } from "react-icons/fa";
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

export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  technologies: Technology[];
  link: string;
}


function ProjectCard({project, index}: {
  project: Project; index: number;
}) {
  return (<motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{
      duration: 0.5, delay: 0.6,
    }}
    className="flex flex-row overflow-hidden outline-dashed"
  >
    <div className="p-3 flex flex-col justify-between">
      <div>
        <h3 className="text-l font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech, i) => (<div key={i} className="relative group">
          <div className="p-2 rounded-full hover:bg-gray-700 transition-colors duration-200">
            <tech.icon className="w-6 h-6"/>
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block">
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