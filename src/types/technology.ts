import {
  SiFastapi, SiKubernetes, SiMlflow, SiPytorch, SiScikitlearn, SiScipy, SiTensorflow, SiTerraform, SiTypescript
} from "react-icons/si";
import { FaAws, FaDocker, FaJava, FaLinux, FaPython, FaVuejs } from "react-icons/fa";
import { IconType } from "react-icons";

/**
 * Used to define the technology icons which appear along the bottom of the project card
 */
export interface Technology {
  name: string;
  icon: IconType;
}

const createTechnology = (name: string, icon: IconType): Technology => ({
  name, icon
})
export const Aws = createTechnology("AWS", FaAws)
export const Python = createTechnology("Python", FaPython)
export const Pytorch = createTechnology("PyTorch", SiPytorch)
export const ScikitLearn = createTechnology("Scikit-learn", SiScikitlearn)
export const SciPy = createTechnology("SciPy", SiScipy)
export const Java = createTechnology("Java", FaJava)
export const MlFlow = createTechnology("MLFlow", SiMlflow)
export const Terraform = createTechnology("Terraform", SiTerraform)
export const TensorFlow = createTechnology("TensorFlow", SiTensorflow)
export const Linux = createTechnology("Linux", FaLinux)
export const Docker = createTechnology("Docker", FaDocker)
export const Kubernetes = createTechnology("Kubernetes", SiKubernetes)
export const FastAPI = createTechnology("FastAPI", SiFastapi)
export const VueJs = createTechnology("Vue.js", FaVuejs)
export const Typescript = createTechnology("TypeScript", SiTypescript)