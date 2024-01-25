import "./projectCardImage.scss";

type ProjectCardImageProps = {
  title: string;
  video: string;
  img: string;
  type: string;
  path: string;
};

const ProjectCardImage = ({ title, video, img, type, path }: ProjectCardImageProps) => {
  return (
    <>
      {video ? (
        <>
          <iframe src={video} title="YouTube video player" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className="projectCardImage__video"></iframe>
          <a href={`/projects/${type}/${path}`} className="projectCardImage__title link">
            {title}
          </a>
        </>
      ) : (
        <>
          <img src={img} alt={`${title}-project-image`} className="projectCardImage__thumbnail"></img>
          <h1 className="projectCardImage__title">{title}</h1>
        </>
      )}
    </>
  );
};

export default ProjectCardImage;
