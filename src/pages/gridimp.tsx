import React from 'react';
import * as motion from "motion/react-client";
import ProjectCard, {
  Aws, Java, MlFlow, Project, Python, Pytorch, ScikitLearn, SciPy, TensorFlow, Terraform
} from "../components/project_card";
import BarChart from "../components/bar_chart";


const projects: Project[] = [{
  title: "Battery Value Analysis Tool",
  description: "I led the development of a machine learning service monitoring the" +
    " performance of solar and battery assets, aggregating thousands of site measurements daily. We successfully" +
    " deployed the product for users using AWS.",
  technologies: [Java, Aws, Python],
  link: "#",
  children: <BarChart
    values={[{value: 0.3, colour: '#FF69B4', label: 'Solar Value'}, {
      value: 1, colour: '#00CED1', label: 'Flexibility Value'
    }, {value: 0.6, colour: '#DDA0DD', label: 'Arbitrage Value'}]}/>
}, {
  title: "Reinforcement Learning Battery Control",
  description: "I Researched and prototyped a novel battery control algorithm using deep reinforcement learning with" +
    " a focus on benchmarking against data gathered from site deployments.",
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
  return (<div>
    <motion.div
      initial={{x: -100, opacity: 0}}
      whileInView={{x: 0, opacity: 1}}
      transition={{type: "spring", stiffness: 100, damping: 20}}
      className="text-4xl font-bold mt-12 mb-6"
    >
      Gridimp ~ Software Developer
    </motion.div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
      {projects.map((project, index) => (
        <ProjectCard key={project.title} project={project} index={index} children={project.children}/> // @ts-ignore
      ))}
    </div>

    <article
      style={{
        maxWidth: 500, padding: "20px 20px", display: "flex", flexDirection: "column", gap: 20,
      }}
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aliquam ac rhoncus quam.
      </p>
      <p>
        Fringilla quam urna. Cras turpis elit, euismod eget ligula
        quis, imperdiet sagittis justo. In viverra fermentum ex ac
        vestibulum. Aliquam eleifend nunc a luctus porta. Mauris
        laoreet augue ut felis blandit, at iaculis odio ultrices.
        Nulla facilisi. Vestibulum cursus ipsum tellus, eu tincidunt
        neque tincidunt a.
      </p>
      <h2>Sub-header</h2>
      <p>
        In eget sodales arcu, consectetur efficitur metus. Duis
        efficitur tincidunt odio, sit amet laoreet massa fringilla
        eu.
      </p>
    </article>
  </div>);
}

export default Gridimp;