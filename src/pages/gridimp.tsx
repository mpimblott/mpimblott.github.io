import React from 'react';
import * as motion from "motion/react-client";
import ProjectCard, {
  Aws, Java, MlFlow, Project, Python, Pytorch, ScikitLearn, SciPy, TensorFlow, Terraform
} from "../components/project_card";


const projects: Project[] = [{
  title: "Battery Value Analysis Tool",
  description: "I led the research, development and deployment of a new tool tracking the value delivered by" +
    " client's solar and battery assets over time. This was part of a flagship cloud platform release.",
  imageUrl: "https://placehold.co/400x300",
  technologies: [Java, Aws, Python],
  link: "#"
}, {
  title: "Reinforcement Learning Battery Control",
  description: "A brief description of the first project and its key features.",
  imageUrl: "https://placehold.co/400x300",
  technologies: [Python, Pytorch, MlFlow, TensorFlow],
  link: "#"
}, {
  title: "Market Forecasting",
  description: "Description of the second project highlighting main accomplishments.",
  imageUrl: "https://placehold.co/400x300",
  technologies: [Python, ScikitLearn, SciPy],
  link: "#"
}, {
  title: "ML Infrastructure",
  description: "Details about the fourth project and its impact.",
  imageUrl: "https://placehold.co/400x300",
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ma-12">
      {projects.map((project, index) => (<ProjectCard key={project.title} project={project} index={index}/> // @ts-ignore
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