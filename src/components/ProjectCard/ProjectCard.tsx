import "./projectCard.scss";

type Props = {
  title: string;
  description?: string;
  img?: string;
  video?: string;
  liveSiteURL: string;
  type: string;
};

const ProjectCard = ({ title, description, img, video, liveSiteURL, type }: Props) => {
  return (
    <div className="projectCard">
      <h1>{title}</h1>
      <hr />
      <p>{description}</p>
      {img && <img src={img}></img>}
      {video && <iframe width={350} height={200} src={video} title="YouTube video player" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>}
      <div className="projectCard__btn-container">
        <a href={liveSiteURL} target="_blank" className={`projectCard__btn ${liveSiteURL ? "" : "projectCard__btn-disabled"}`}>
          {type === "web" ? "Live site" : "Download"}
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
