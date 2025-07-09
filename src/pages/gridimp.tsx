import React from 'react';
import ProjectCard, {
  Aws, Java, MlFlow, Project, Python, Pytorch, ScikitLearn, SciPy, TensorFlow, Terraform
} from "../components/project_card";
import BarChart from "../components/bar_chart";
import Experience_section from "./experience_section";


const projects: Project[] = [{
  title: "Battery Value Analysis Tool",
  description: "I led the development of a machine learning service monitoring the" + " performance of solar and battery assets, aggregating thousands of site measurements daily. We successfully" + " deployed the product for users using AWS.",
  technologies: [Java, Aws, Python],
  link: "#",
  children: <BarChart
    values={[{value: 0.3, colour: '#FF69B4', label: 'Solar Value'}, {
      value: 1, colour: '#00CED1', label: 'Flexibility Value'
    }, {value: 0.6, colour: '#DDA0DD', label: 'Arbitrage Value'}]}/>
}, {
  title: "Reinforcement Learning Battery Control",
  description: "I Researched and prototyped a novel battery control algorithm using deep reinforcement learning with" + " a focus on benchmarking against data gathered from site deployments.",
  technologies: [Python, Pytorch, MlFlow, TensorFlow],
  link: "#"
}, {
  title: "Market Forecasting",
  description: "Description of the second project highlighting main accomplishments.",
  technologies: [Python, ScikitLearn, SciPy],
  link: "#"
}, {
  title: "ML Infrastructure",
  description: "Details about the fourth project and its impact.",
  technologies: [Aws, MlFlow, Terraform],
  link: "#"
}];


function Gridimp(props) {
  return (<Experience_section title={"Gridimp ~ Software Developer"} children={<>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} children={project.children}/> // @ts-ignore
        ))}
      </div>
    </>} />);
}

export default Gridimp;