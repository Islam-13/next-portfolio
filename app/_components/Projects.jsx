import CardContainer from "./CardContainer";
import TransitionLink from "./TransitionLink";
import { projectsHome } from "../../constants/constants";

function Projects() {
  return (
    <section id="projects" className="py-20 bg-[--color-grey-100]">
      <div className="wrapper">
        <h3 className="heading">Projects</h3>

        <CardContainer projects={projectsHome} />

        <div className="mt-8 text-center text-2xl">
          <TransitionLink href="/projects" styles="link">
            Explore more projects
          </TransitionLink>
        </div>
      </div>
    </section>
  );
}

export default Projects;
