import { Link, useParams } from "react-router-dom";
import { projects } from "../Projects/projectsList";
import { useContext, useEffect, useState } from "react";
import { TProjectData, TProjectDataExtended } from "../../types/ProjectTypes";

import "./singleProject.scss";
import { AppContext } from "../../services/Context/AppContext";
import { ACTION_TYPES } from "../../services/Context/appReducer";
import { FaArrowLeft } from "react-icons/fa";

const SingleProject = () => {
  const { dispatch } = useContext(AppContext);
  const { path, type } = useParams();
  const projectsData = projects as TProjectDataExtended[];

  const [project, _setProject] = useState<TProjectData | undefined>(projectsData.filter((projectType) => projectType.type === type)[0].projects.find((item) => item.path === path));

  useEffect(() => {
    dispatch({ type: ACTION_TYPES.SAVE_PREVIOUS_PAGE, payload: "/projects" });
    scrollTo({ top: 0, left: 0, behavior: "smooth" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="project">
      <Link to="/" className="btn btn-primary project__btn-back" style={{ justifySelf: "flex-start", alignSelf: "flex-start", marginLeft: "10%" }}>
        <FaArrowLeft /> BACK TO HOMEPAGE
      </Link>
      <div className="project__data">
        <div className="project__data__left">
          <h1 className="project__data__title">{project?.title.toUpperCase()}</h1>
          <p className="project__data__description">{project?.description}</p>
          <div>
            {project?.availableForPublic ? (
              <a href={project?.liveSiteURL} target="_blank" className="btn btn-secondary">
                LIVE SITE
              </a>
            ) : (
              <p className="project__data__description project__data__notAvailableForPublic">Due to the sensitive nature of the content, the live site cannot be displayed publicly.</p>
            )}
          </div>
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
          <img src={project?.img} className="project__data__image"></img>
          <img src={project?.img} className="project__data__image"></img>
        </div>
      </div>
    </section>
  );
};

export default SingleProject;
