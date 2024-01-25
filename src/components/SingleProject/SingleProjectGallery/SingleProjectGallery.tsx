import "./singleProjectGallery.scss";

type SingleProjectGalleryProps = {
  projectImages: string[];
};

const SingleProjectGallery = ({ projectImages }: SingleProjectGalleryProps) => {
  return (
    <div className="singleProjectGallery">
      <h2 className="singleProjectGallery__title">Gallery</h2>
      <div className="singleProjectGallery__image-container">
        {projectImages?.map((image) => {
          return <img key={image} src={image} className="singleProjectGallery__image"></img>;
        })}
      </div>
    </div>
  );
};

export default SingleProjectGallery;
