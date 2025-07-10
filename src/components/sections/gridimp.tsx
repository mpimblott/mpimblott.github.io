import React from 'react';
import ProjectCard, {
  Aws, Docker, Java, Linux, MlFlow, Project, Python, Pytorch, ScikitLearn, SciPy, TensorFlow, Terraform
} from "../project_card";
import BarChart from "../bar_chart";
import Experience_section from "./experience_section";
import ConnectedNetwork from "../connected_network";
import { useHasMounted } from "../../hooks/useHasMounted";


/**
 * Experience profile section for Gridimp work
 */
function Gridimp() {
  const hasMounted = useHasMounted();

  const projects: Project[] = [{
    title: "Battery Value Analysis Tool",
    description: "We aimed to understand how battery control systems reshape the demand" + " profile to reduce energy costs and carbon emissions, accounting for inaccurate or missing data and " + " a variety of possible site configurations. I worked to implement the core algorithm and create the backend" + " Java service, integrating with the company's existing data processing pipelines. The project was deployed to" + " AWS and now runs daily giving customers a better understanding of their energy consumption.",
    technologies: [Java, Aws, Python],
    children: <BarChart animate={hasMounted}
      values={[{value: 0.3, colour: '#FF69B4', label: 'Solar Value'}, {
        value: 1, colour: '#00CED1', label: 'Flexibility Value'
      }, {value: 0.6, colour: '#DDA0DD', label: 'Arbitrage Value'}]}/>
  }, {
    title: "Reinforcement Learning Battery Control",
    description: "I researched and prototyped a novel battery control algorithm applying deep reinforcement. I evaluated a range of approaches including value function approximation " + "methods and transformer-based models to find the right approach balancing performance, flexibility and cost. We used MLFlow " + "to manage the lifecycle of our models and created a pipeline to prepare models for site deployments. I also spent some time " + "porting the existing algorithms from TensorFlow to PyTorch to enable access to new algorithms.",
    technologies: [Python, Pytorch, MlFlow, TensorFlow],
    children: <div className="h-30 w-30"><ConnectedNetwork/></div>
  }, {
    title: "Market Forecasting",
    description: "I worked on the development of a market forecasting model for day ahead energy prices to feed into battery control algorithms. " + "This required exploratory analysis and evaluation of a variety of approaches.",
    technologies: [Python, ScikitLearn, SciPy],
  }, {
    title: "ML Infrastructure",
    description: "I helped maintain the existing ML infrastructure for the company's data analytics processes and deployed " + "a new model training pipeline to AWS utilising containerised serverless compute. I created a pipeline to containerise and launch training " + "and trialed infrastructure as code using terraform to improve maintainability and scalability.",
    technologies: [Aws, Linux, Docker, Terraform],
  }];

  const articleContent = <article className="text-justify mb-6">
    <p className="mb-4">I have been working as a software developer in the data science
      team at <a href="https://www.gridimp.com/"><u>Gridimp</u></a> since August
      2024.
      Gridimp is a startup in the energy sector focused on automated control
      and analytics for grid-connected assets such as solar and battery systems.
      My key focus has been driving the research and development of a new series of
      battery control algorithms using
      deep reinforcement learning algorithms with the goal of improving return on
      investment and reducing carbon emissions.
    </p>
    <p>
      I also led the development of reporting mechanisms for the company's data analytics
      platform to enable users to
      understand the day-to-day performance of battery systems.
    </p>
  </article>;

  return (<><Experience_section title={"Gridimp"} subtitle={"Software Developer"} subsubtitle={"Aug. 2024 - Present"}
                                children={articleContent}/>
    <div>
      <h1 className="text-2xl mb-6"><u>Projects</u></h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 w-full">
        {projects.map((project, index) => (<ProjectCard key={project.title} project={project} index={index}
                                                        children={project.children} animate={hasMounted}/>))}
      </div>
    </div>
  </>);
}

export default Gridimp;