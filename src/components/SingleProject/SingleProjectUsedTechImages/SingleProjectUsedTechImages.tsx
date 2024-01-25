import {  TTechImages } from "../../../types/ProjectTypes";
import "./singleProjectUsedTechImages.scss";

type SingleProjectUsedTechImagesProps = {
  projectUsedTechImages: TTechImages[];
};

const SingleProjectUsedTechImages = ({ projectUsedTechImages }: SingleProjectUsedTechImagesProps) => {
  return (
    <div className="singleProjectUsedTechImages">
      <h2 className="singleProjectUsedTechImages__title">Used Stack</h2>
      <div className="singleProjectUsedTechImages__items">
        {projectUsedTechImages?.map((tech) => {
          return (
            <div key={tech.title} className="singleProjectUsedTechImages__item">
              <img src={tech.img} className="singleProjectUsedTechImages__item__img"></img>
              <p className="singleProjectUsedTechImages__item__title">{tech.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SingleProjectUsedTechImages;
