import React from 'react';
import Experience_section from "./experience_section";
import ProjectCard, {
  Docker,
  FastAPI,
  Kubernetes,
  Linux,
  MlFlow,
  Project,
  Python,
  Pytorch,
  Typescript,
  VueJs
} from "../project_card";
import { SEGMENTATION_PRESENTATION_PATH } from "../../../config";
import { useHasMounted } from "../../hooks/useHasMounted";

const projects: Project[] = [{
  title: "Segmentation User Interface",
  description: "I designed and developed a web user interface for the semantic segmentation tool, bringing the" + " project from inception to deployment company-wide. I used VueJs to build the interface and FastAPI to build" + " the backed integrating with the existing segmentation tools in development within the department. This" + " involved working closely with colleagues to integrate with and understand the internal workings of the tools" + " allowing me to hook into the package enabling the users to fully control their workflow from the web.",
  technologies: [Python, FastAPI, VueJs, Typescript],
}, {
  title: "Generation-Augmented Training",
  description: "I worked on a research project to develop a novel pre-training technique for deep learning models," + " building upon existing research to enhance performance in the context of" + " X-ray tomography. This domain presents challenges due very large, low-contrast, high noise datasets. " + " Due to the huge number of research areas covered at Diamond the content being studied also varies greatly" + " from application to application. This means relevant training data is often sparse and the cost of operating" + " the equipment makes obtaining more prohibitively expensive. I applied synthetic sinogram generation to augment" + " the available training data and produced a successful internal demonstration of the technique.",
  technologies: [Python, Pytorch, MlFlow],
  onwardLink: SEGMENTATION_PRESENTATION_PATH
}, {
  title: "Research Support",
  description: "I delivered regular training and support workshops for visiting researchers including personalised" + " data analysis training. This was also an opportunity to gather feedback from users to feed into the iterative" + " development of the product.",
}, {
  title: "HPC, Kubernetes and Distributed Training",
  description: "I used HPC resources via SLURM and GridEngine to conduct imaging processing and model training" + " including conducting multi-gpu training of PyTorch models. I managed my own infrastructure for my projects on" + " Kubernetes including GitLab runners. I packaged software for deployment company-wide on lab computers.",
  technologies: [Kubernetes, Docker, Linux],
}];

/**
 * Experience profile section for Diamond Light Source work
 */
function Diamond() {
  const hasMounted = useHasMounted();

  const articleContent = (
    <article className="text-justify mb-6">
      <p className="mb-4">I completed a year-long industrial placement at <a
        href="https://www.diamond.ac.uk/Home.html"><u>Diamond Light
        Source</u></a> in Oxford.
        Diamond is the UK's national synchrotron where high luminance light is used to study
        the structure of objects on a small scale.
        I worked as part of the data analysis team, assisting users in applying a computer
        vision
        technique called semantic segmentation. This is the process of classifying regions
        of an image into
        categories. At diamond this is applied to X-ray tomography data to identify features
        within scans.
      </p>
      <p>
        I worked on two projects during the year. The first was a web user interface for
        segmentation tools
        aimed at helping users apply the technique to their own data. The second was a
        research project into a novel
        pre-training technique leveraging synthetic data and generative networks to enhance
        the performance of the models
        and reduce training times when working with X-ray tomography data.
      </p>
    </article>
  );

  return <>
    <Experience_section title={"Diamond Light Source"} subtitle={"Placement Research Software Engineer"}
                        subsubtitle={"2022-2023"}
                        children={articleContent} animate={hasMounted}/>
    <h1 className="text-2xl mb-6"><u>Projects</u></h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 w-full">
      {projects.map((project, index) => (
        <ProjectCard key={project.title} project={project} children={project.children}
                     animate={hasMounted} />))}
    </div>
  </>;
}

export default Diamond;