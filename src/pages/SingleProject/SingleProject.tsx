import { Link, useParams } from "react-router-dom";
import { projects } from "../Projects/projectsList";
import { useContext, useEffect, useState } from "react";
import { TProjectData, TProjectDataExtended } from "../../types/ProjectTypes";

import "./singleProject.scss";
import { AppContext } from "../../services/Context/AppContext";
import { ACTION_TYPES } from "../../services/Context/appReducer";

const SingleProject = () => {
  const { dispatch } = useContext(AppContext);
  const { path, type } = useParams();
  const projectsData = projects as TProjectDataExtended[];

  const [project, _setProject] = useState<TProjectData | undefined>(projectsData.filter((projectType) => projectType.type === type)[0].projects.find((item) => item.path === path));

  useEffect(() => {
    dispatch({ type: ACTION_TYPES.SAVE_PREVIOUS_PAGE, payload: "/projects" });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="project">
      <Link to="/" style={{ color: "white" }}>
        Back from Link
      </Link>
      <div>
        <h1>{project?.title}</h1>
        <p>add label: {type?.toUpperCase()}</p>
        <div>
          <h2>USED STACK</h2>
          <div className="project__usedTechImgs">
            {project?.usedTechImgs.map((tech) => {
              return (
                <div key={tech.title} className="project__usedTechImgs__item">
                  <img src={tech.img} className="project__usedTechImgs__item__img"></img>
                  <p className="project__usedTechImgs__title">{tech.title}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <p>{project?.description}</p>
        </div>
        <div>
          <img src={project?.img}></img>
        </div>
      </div>
      <div>
        <a href={project?.liveSiteURL}>Live site</a>
      </div>
    </section>
  );
};

export default SingleProject;
