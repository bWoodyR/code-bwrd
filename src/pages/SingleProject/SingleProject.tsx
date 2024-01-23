import { Link, useParams } from "react-router-dom";
import { projects } from "../Projects/projectsList";
import { useContext, useEffect, useState } from "react";
import { TProjectDataExtended } from "../../types/ProjectTypes";

import "./singleProject.scss";
import { AppContext } from "../../services/Context/AppContext";
import { ACTION_TYPES } from "../../services/Context/appReducer";
import { FaArrowLeft, FaHome } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

const SingleProject = () => {
  const { dispatch } = useContext(AppContext);
  const { path, type } = useParams();
  const projectsData = projects as TProjectDataExtended[];
  const [projectTypeArr, _setProjectTypeArr] = useState(projectsData.filter((projectType) => projectType.type === type)[0].projects);
  const [projectIndex, setProjectIndex] = useState(0);
  const [project, setProject] = useState(projectTypeArr[projectIndex]);
  const [nextProjectPath, setNextProjectPath] = useState("");
  const [previousProjectPath, setPreviousProjectPath] = useState("");

  useEffect(() => {
    dispatch({ type: ACTION_TYPES.SAVE_PREVIOUS_PAGE, payload: "/projects" });
    scrollTo({ top: 0, left: 0, behavior: "smooth" });
    setProjectIndex(() => projectTypeArr.findIndex((item) => item.path === path));
  }, [path, projectTypeArr, dispatch]);

  useEffect(() => {
    setProject(projectTypeArr[projectIndex]);
    setNextProjectPath(() => {
      if (projectIndex + 1 < projectTypeArr.length) {
        return projectTypeArr[projectIndex + 1].path;
      } else return projectTypeArr[0].path;
    });
    setPreviousProjectPath(() => {
      if (projectIndex - 1 < 0) {
        return projectTypeArr[projectTypeArr.length - 1].path;
      } else return projectTypeArr[projectIndex - 1].path;
    });
  }, [projectIndex, projectTypeArr]);

  return (
    <section className="project">
      <div className="project__btn-container">
        <Link to={`/projects/${type}/${previousProjectPath}`} className="btn btn-primary project__btn-back">
          <FaArrowLeft /> 
        </Link>
        <Link to="/" className="btn btn-primary project__btn-back">
          <FaHome /> 
        </Link>
        <Link to={`/projects/${type}/${nextProjectPath}`} className="btn btn-primary project__btn-back">
          
          <FaArrowRight />
        </Link>
      </div>

      <div className="project__data">
        <div className="project__data__left">
          <h1 className="project__data__title">{project?.title}</h1>
          <p className="project__data__description">{project?.description}</p>
          {project?.availableForPublic ? (
            <a href={project.video ? project.demoSiteURL : project?.liveSiteURL} target="_blank" className="btn btn-secondary project__btn-live-site">
              {project.video ? "DOWNLOAD" : "LIVE SITE"}
            </a>
          ) : (
            <p className="project__data__description project__data__notAvailableForPublic">Due to the sensitive nature of the content, the live site cannot be displayed publicly.</p>
          )}
          <div className="project__usedTechImgs">
            <h2 className="project__usedTechImgs__title">Used Stack</h2>
            <div className="project__usedTechImgs__items">
              {project?.usedTechImgs.map((tech) => {
                return (
                  <div key={tech.title} className="project__usedTechImgs__item">
                    <img src={tech.img} className="project__usedTechImgs__item__img"></img>
                    <p className="project__usedTechImgs__item__title">{tech.title}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="project__data__right">
          <h2 className="project__data__right__title">Gallery</h2>
          <div className="project__data__right__image-container">
            {project?.img.map((image) => {
              return <img key={image} src={image} className="project__data__right__image"></img>;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProject;