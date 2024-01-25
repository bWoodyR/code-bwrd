import "./projectList.scss";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import SubheaderTitle from "../../components/SubheaderTitle/SubheaderTitle";
import { projects } from "./projectsList";

const ProjectList = () => {
  return (
    <div className="projectList">
      {projects.map((project) => {
        return (
          <div key={project.type} className="projectList__section">
            <SubheaderTitle title={project.type.toUpperCase()} />
            <div className="projectList__cards">
              {project.projects.map((item) => {
                return <ProjectCard key={item.title} type={project.type} data={item} />;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectList;
