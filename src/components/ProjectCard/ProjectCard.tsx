import { useState } from "react";
import "./projectCard.scss";

type Props = {
  title: string;
  usedTechImages: string[];
  description?: string;
  img?: string;
  video?: string;
  liveSiteURL: string;
  type: string;
  availableForPublic: boolean;
};

const ProjectCard = ({ title, usedTechImages, description, img, video, liveSiteURL, type, availableForPublic }: Props) => {
  const [showFullDescription, setShowFullDescrption] = useState(false);
  return (
    <div className="projectCard">
      <h1>{title}</h1>
      <div className="projectCard__usedTechImgs">
        {usedTechImages.map((techImg, index) => {
          return <img key={index} src={techImg} className="projectCard__usedTechImgs__img"></img>;
        })}
      </div>
      <hr />
      <p className="test">
        {showFullDescription ? description : `${description?.substring(0, 200)}...`}
        <button className="projectCard__description-btn" onClick={() => setShowFullDescrption(!showFullDescription)}>
          {showFullDescription ? "Hide" : "Show more"}
        </button>
      </p>
      {img && <img src={img}></img>}
      {video && <iframe width={325} height={200} src={video} title="YouTube video player" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>}
      <div className="projectCard__btn-container">
        {availableForPublic && (
          <a href={liveSiteURL} target="_blank" className={`projectCard__btn ${liveSiteURL ? "" : "projectCard__btn-disabled"}`}>
            {type === "web" ? "Live site" : "Download"}
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;


