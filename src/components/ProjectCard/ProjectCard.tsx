import { useState } from "react";
import "./projectCard.scss";

type Props = {
  title: string;
  description?: string;
  img?: string;
  video?: string;
  liveSiteURL: string;
  type: string;
  availableForPublic: boolean;
};

const ProjectCard = ({ title, description, img, video, liveSiteURL, type, availableForPublic }: Props) => {
  const [showFullDescription, setShowFullDescrption] = useState(false);
  return (
    <div className="projectCard">
      <h1>{title}</h1>
      <hr />
      <p>
        {showFullDescription ? description : `${description?.substring(0, 200)}...`}
        <button className="projectCard__description-btn" onClick={() => setShowFullDescrption(!showFullDescription)}>{showFullDescription ? "Hide" : "Show more"}</button>
      </p>
      {img && <img src={img}></img>}
      {video && <iframe width={350} height={200} src={video} title="YouTube video player" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>}
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
