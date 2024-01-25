import "./singleProjectLiveSiteButton.scss";

type SingleProjectLiveSiteButtonProps = {
  availableForPublic: boolean;
  video: string;
  demoSiteURL: string;
  liveSiteURL: string;
};
const SingleProjectLiveSiteButton = ({ availableForPublic, video, demoSiteURL, liveSiteURL }: SingleProjectLiveSiteButtonProps) => {
  return (
    <>
      {availableForPublic ? (
        <a href={video ? demoSiteURL : liveSiteURL} target="_blank" className="btn btn-secondary singleProjectLiveSiteButton__btn-live-site">
          {video ? "DOWNLOAD" : "LIVE SITE"}
        </a>
      ) : (
        <p className="singleProjectLiveSiteButton__notAvailableForPublic">Due to the sensitive nature of the content, the live site cannot be displayed publicly.</p>
      )}
    </>
  );
};

export default SingleProjectLiveSiteButton;
