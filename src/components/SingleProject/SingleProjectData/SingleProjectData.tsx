import { TProjectData } from "../../../types/ProjectTypes";
import "./singleProjectData.scss";
import SingleProjectHeader from "../SingleProjectHeader/SingleProjectHeader";
import SingleProjectDescription from "../SingleProjectDescription/SingleProjectDescription";
import SingleProjectLiveSiteButton from "../SingleProjectLiveSiteButton/SingleProjectLiveSiteButton";

type SingleProjectDataProps = {
  project: TProjectData;
  showFullProjectDescription: boolean;
  setShowFullProjectDescription: React.Dispatch<React.SetStateAction<boolean>>;
};

const SingleProjectData = ({ project, showFullProjectDescription, setShowFullProjectDescription }: SingleProjectDataProps) => {
  return (
    <div className="singleProjectData">
      <SingleProjectHeader title={project.title} inDevelopment={project.inDevelopment} />
      <SingleProjectDescription description={project.description} showFullProjectDescription={showFullProjectDescription} setShowFullProjectDescription={setShowFullProjectDescription} />
      <SingleProjectLiveSiteButton availableForPublic={project.availableForPublic} video={project.video} demoSiteURL={project.demoSiteURL} liveSiteURL={project.liveSiteURL} />
    </div>
  );
};

export default SingleProjectData;
