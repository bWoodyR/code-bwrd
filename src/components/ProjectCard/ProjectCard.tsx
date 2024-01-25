import { useState } from "react";
import "./projectCard.scss";
import { TProjectData } from "../../types/ProjectTypes";
import ProjectCardHoverButtons from "./ProjectCardHoverButtons/ProjectCardHoverButtons";
import ProjectCardUsedTechImages from "./ProjectCardUsedTechImages/ProjectCardUsedTechImages";

type ProjectCardsProps = {
  data: TProjectData;
  type: string;
};

const ProjectCard = ({ data, type }: ProjectCardsProps) => {
  const [showHoverButtons, setShowHoverButtons] = useState(false);
  const { title, usedTechImgs, img, video, liveSiteURL, path, availableForPublic, inDevelopment } = data;

  return (
    <div className="projectCard" onMouseOver={() => setShowHoverButtons(true)} onMouseLeave={() => setShowHoverButtons(false)} data-type={inDevelopment ? "indevelopment" : null}>
      {showHoverButtons && !video && <ProjectCardHoverButtons path={path} liveSiteURL={liveSiteURL} type={type} availableForPublic={availableForPublic} />}
      {video ? (
        <>
          <iframe src={video} title="YouTube video player" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
          <a href={`/projects/${type}/${path}`} className="projectCard__title link">
            {title}
          </a>
        </>
      ) : (
        <>
          <img src={img[0]} alt={`${title}-project-image`} className="projectCard__thumbnail"></img>
          <h1 className="projectCard__title">{title}</h1>
        </>
      )}
      <ProjectCardUsedTechImages usedTechImgs={usedTechImgs} />
    </div>
  );
};

export default ProjectCard;
