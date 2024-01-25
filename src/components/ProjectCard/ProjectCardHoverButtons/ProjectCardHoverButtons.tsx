import { Link } from 'react-router-dom';
import "./projectCardHoverButtons.scss"

const ProjectCardHoverButtons = ({ path, liveSiteURL, type, availableForPublic }: { path: string; liveSiteURL: string; type: string; availableForPublic: boolean }) => {
  return (
    <div className="projectCardHoverButtons">
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

export default ProjectCardHoverButtons