import ProjectList from "../../components/ProjectList/ProjectList";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import "./projects.scss";

type ProjectType = {
  projectsRef: React.RefObject<HTMLElement>;
};

const Projects = ({ projectsRef }: ProjectType) => {
  return (
    <section className="projects" ref={projectsRef}>
      <SectionHeader sectionName="My Projects" />
      <ProjectList />
    </section>
  );
};

export default Projects;
