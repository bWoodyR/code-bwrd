import { useState } from "react";
import "./projectCard.scss";
import { TProjectData } from "../../types/ProjectTypes";
import ProjectCardHoverButtons from "./ProjectCardHoverButtons/ProjectCardHoverButtons";
import ProjectCardUsedTechImages from "./ProjectCardUsedTechImages/ProjectCardUsedTechImages";
import ProjectCardImage from "./ProjectCardImage/ProjectCardImage";

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
      <ProjectCardImage title={title} video={video} img={img[0]} type={type} path={path} />
      <ProjectCardUsedTechImages usedTechImgs={usedTechImgs} />
    </div>
  );
};

export default ProjectCard;
