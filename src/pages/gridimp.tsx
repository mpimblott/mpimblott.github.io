import React from 'react';
import ProjectCard, {
  Aws, Docker, Java, Linux, MlFlow, Project, Python, Pytorch, ScikitLearn, SciPy, TensorFlow, Terraform
} from "../components/project_card";
import BarChart from "../components/bar_chart";
import Experience_section from "./experience_section";
import ConnectedNetwork from "../components/connected_network";


const projects: Project[] = [{
  title: "Battery Value Analysis Tool",
  description: "We aimed to understand how battery control systems reshape the demand" +
    " profile to reduce energy costs and carbon emissions, accounting for inaccurate or missing data and " +
    " a variety of possible site configurations. I worked to implement the core algorithm and create the backend" +
    " Java service, integrating with the company's existing data processing pipelines. The project was deployed to" +
    " AWS and now runs daily giving customers a better understanding of their energy consumption.",
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
  link: "#",
  children: <div className="h-30 w-30"><ConnectedNetwork/></div>
}, {
  title: "Market Forecasting",
  description: "Description of the second project highlighting main accomplishments.",
  technologies: [Python, ScikitLearn, SciPy],
  link: "#"
}, {
  title: "ML Infrastructure",
  description: "Details about the fourth project and its impact.",
  technologies: [Aws, Linux, Docker, Terraform],
  link: "#"
}];

/**
 * Experience profile section for Gridimp work
 */
function Gridimp() {
  return (<Experience_section title={"Gridimp"} subtitle={"Software Developer"} subsubtitle={"Aug. 2024 - Present"}
                              children={<>
                                <article className="text-justify mb-6">
                                  <p className="mb-4">I have been working as a software developer in the data science
                                    team at Gridimp since August
                                    2024.
                                    Gridimp is a startup in the energy sector focused on automated control
                                    and analytics for grid-connected assets such as solar and battery systems.
                                    My key focus has been driving the research and development of a new series of
                                    battery control algorithms using
                                    deep reinforcement learning algorithms with the goal of improving return on
                                    investment and reducing carbon emissions.
                                  </p>
                                  <p>
                                    I also lead the development of reporting mechanisms for the company's data analytics
                                    platform to enable users to
                                    understand the day-to-day performance of battery systems.
                                  </p>
                                </article>
                                <h1 className="text-2xl mb-6"><u>Projects</u></h1>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 w-full">
                                  {projects.map((project, index) => (
                                    <ProjectCard key={project.title} project={project} index={index}
                                                 children={project.children}/>))}
                                </div>
                              </>}/>);
}

export default Gridimp;