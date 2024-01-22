import { useState } from "react";
import "./projectCard.scss";
import { Link } from "react-router-dom";

type Props = {
  title: string;
  path: string;
  usedTechImgs: {
    img: string;
    title: string;
    labels: string[];
  }[];
  img: string;
  video: string;
  liveSiteURL: string;
  availableForPublic: boolean;
  type: string;
};

const ProjectCard = ({ title, usedTechImgs, img, video, liveSiteURL, path, type, availableForPublic }: Props) => {
  const [showHoverButtons, setShowHoverButtons] = useState(false);

  return (
    <div className="projectCard" onMouseOver={() => setShowHoverButtons(true)} onMouseLeave={() => setShowHoverButtons(false)}>
      {video ? (
        <a href={`/projects/${path}`} className="projectCard__title link">
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
      {/* <hr className="projectCard__devide" /> */}
      {img && <img src={img} alt={`${title}-project-image`} className="projectCard__thumbnail"></img>}
      {/* <p className="projectCard__description">
        {showFullDescription ? description : `${description?.substring(0, 150)}...`}
        <button className="projectCard__description-btn" onClick={() => setShowFullDescrption(!showFullDescription)}>
          {showFullDescription ? "Hide" : "Show more"}
        </button>
      </p> */}
      {video && <iframe width={325} height={200} src={video} title="YouTube video player" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>}
      {/* <div className="projectCard__btn-container">
        {availableForPublic && (
          <a href={liveSiteURL} target="_blank" className={`projectCard__btn ${liveSiteURL ? "" : "projectCard__btn-disabled"}`}>
          {type === "web" ? "Live site" : "Download"}
          </a>
          )}
          {!availableForPublic && <p className="projectCard__notAvailableForPublic">Due to the sensitive nature of the content, the live site cannot be displayed publicly.</p>}
        </div> */}
      {showHoverButtons && !video && <ProjectCardHoverButtons path={path} liveSiteURL={liveSiteURL} type={type} availableForPublic={availableForPublic} />}
    </div>
  );
};

export default ProjectCard;

const ProjectCardHoverButtons = ({ path, liveSiteURL, type, availableForPublic }: { path: string; liveSiteURL: string; type: string; availableForPublic: boolean }) => {
  return (
    <div className="projectCard__hoverButtons">
      <Link to={`/projects/${type}/${path}`} className="btn btn-primary">
        Details
      </Link>
      {availableForPublic && (
        <a href={liveSiteURL} target="_blank" className="btn btn-primary">
          Live site
        </a>
      )}
    </div>
  );
};
