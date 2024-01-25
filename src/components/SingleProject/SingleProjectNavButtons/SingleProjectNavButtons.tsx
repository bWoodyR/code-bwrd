import { useEffect, useState } from "react";
import "./singleProjectNavButtons.scss";
import { FaArrowLeft, FaHome } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { TProjectData } from "../../../types/ProjectTypes";

type SingleProjectNavButtonsProps = {
  currentProjectIndex: number;
  projectTypeArr: TProjectData[];
  type: string | undefined;
};

const SingleProjectNavButtons = ({ currentProjectIndex: projectIndex, projectTypeArr, type }: SingleProjectNavButtonsProps) => {
  const [nextProjectPath, setNextProjectPath] = useState("");
  const [previousProjectPath, setPreviousProjectPath] = useState("");

  useEffect(() => {
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
    <div className="singleProjectNavButtons">
      <Link to={`/projects/${type}/${previousProjectPath}`} className="btn btn-primary singleProjectNavButtons__btn-back">
        <FaArrowLeft />
      </Link>
      <Link to="/" className="btn btn-primary singleProjectNavButtons__btn-back">
        <FaHome />
      </Link>
      <Link to={`/projects/${type}/${nextProjectPath}`} className="btn btn-primary singleProjectNavButtons__btn-back">
        <FaArrowRight />
      </Link>
    </div>
  );
};

export default SingleProjectNavButtons;
