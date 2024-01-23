import { useState } from "react";
import "./projectCard.scss";
import { Link } from "react-router-dom";
import { TProjectData } from "../../types/ProjectTypes";

type ProjectCardsProps = {
  data: TProjectData;
  type: string;
};

const ProjectCard = ({ data, type }: ProjectCardsProps) => {
  const [showHoverButtons, setShowHoverButtons] = useState(false);
  const { title, usedTechImgs, img, video, liveSiteURL, path, availableForPublic } = data;

  return (
    <div className="projectCard" onMouseOver={() => setShowHoverButtons(true)} onMouseLeave={() => setShowHoverButtons(false)}>
      {img.length > 0 && !video && <img src={img[0]} alt={`${title}-project-image`} className="projectCard__thumbnail"></img>}
      {video && <iframe src={video} title="YouTube video player" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>}
      {showHoverButtons && !video && <ProjectCardHoverButtons path={path} liveSiteURL={liveSiteURL} type={type} availableForPublic={availableForPublic} />}

      {video ? (
        <a href={`/projects/${type}/${path}`} className="projectCard__title link">
          {title}
        </a>
      ) : (
        <h1 className="projectCard__title">{title}</h1>
      )}
      <div className="projectCard__usedTechImgs">
        {usedTechImgs.map((techImg, index) => {
          return <img key={index} src={techImg.img} className="projectCard__usedTechImgs__img"></img>;
        })}
      </div>
    </div>
  );
};

export default ProjectCard;

const ProjectCardHoverButtons = ({ path, liveSiteURL, type, availableForPublic }: { path: string; liveSiteURL: string; type: string; availableForPublic: boolean }) => {
  return (
    <div className="projectCard__hoverButtons">
      <Link to={`/projects/${type}/${path}`} className="btn btn-secondary">
        Details
      </Link>
      {availableForPublic && (
        <a href={liveSiteURL} target="_blank" className="btn btn-secondary">
          Live site
        </a>
      )}
    </div>
  );
};
