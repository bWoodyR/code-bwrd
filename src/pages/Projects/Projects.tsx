import ProjectCard from "../../components/ProjectCard/ProjectCard";
import SubheaderTitle from "../../components/SubheaderTitle/SubheaderTitle";
import "./projects.scss";
import { projects } from "./projectsList";

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects__header">
        <h1 className="projects__header__title">My Projects</h1>
      </div>
      <div className="projects__items">
        {projects.map((project) => {
          return (
            <div key={project.type} className="projects__items__section">
              <SubheaderTitle title={project.type.toUpperCase()} />
              <div className="projects__items__cards">
                {project.projects.map((item) => {
                  return <ProjectCard key={item.title} title={item.title} description={item.description} img={item.img} video={item.video} liveSiteURL={item.liveSiteURL} type={project.type} availableForPublic={item.availableForPublic} usedTechImages={item.usedTechImgs} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
