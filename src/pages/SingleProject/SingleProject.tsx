import "./singleProject.scss";
import { useParams } from "react-router-dom";
import { projects } from "../../components/ProjectList/projectsList";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../services/Context/AppContext";
import { ACTION_TYPES } from "../../services/Context/appReducer";
import { useScreenSize } from "../../hooks/useScreenSize";
import SingleProjectNavButtons from "../../components/SingleProject/SingleProjectNavButtons/SingleProjectNavButtons";
import SingleProjectUsedTechImages from "../../components/SingleProject/SingleProjectUsedTechImages/SingleProjectUsedTechImages";
import SingleProjectGallery from "../../components/SingleProject/SingleProjectGallery/SingleProjectGallery";
import SingleProjectData from "../../components/SingleProject/SingleProjectData/SingleProjectData";

const SingleProject = () => {
  const { dispatch } = useContext(AppContext);
  const { path, type } = useParams();

  const [projectTypeArr, _setProjectTypeArr] = useState(projects.filter((projectType) => projectType.type === type)[0].projects);
  const [projectIndex, setProjectIndex] = useState(0);
  const [project, setProject] = useState(projectTypeArr[projectIndex]);

  const [showFullProjectDescription, setShowFullProjectDescription] = useState(false);
  const { windowSize } = useScreenSize();

  useEffect(() => {
    dispatch({ type: ACTION_TYPES.SAVE_PREVIOUS_PAGE, payload: "/projects" });
    scrollTo({ top: 0, left: 0, behavior: "smooth" });
    setProjectIndex(() => projectTypeArr.findIndex((item) => item.path === path));

    if (windowSize.width < 1280) {
      setShowFullProjectDescription(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path, projectTypeArr, dispatch]);

  useEffect(() => {
    setProject(projectTypeArr[projectIndex]);
  }, [projectIndex, projectTypeArr]);

  return (
    <section className="project">
      <SingleProjectNavButtons currentProjectIndex={projectIndex} projectTypeArr={projectTypeArr} type={type} />
      <div className="project__wrapper">
        <div className="project__left">
          <SingleProjectData project={project} showFullProjectDescription={showFullProjectDescription} setShowFullProjectDescription={setShowFullProjectDescription} />
          <SingleProjectUsedTechImages projectUsedTechImages={project.usedTechImgs} />
        </div>
        <SingleProjectGallery projectImages={project.img} />
      </div>
    </section>
  );
};

export default SingleProject;
