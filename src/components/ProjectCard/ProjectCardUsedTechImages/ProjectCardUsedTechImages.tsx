import { TTechImages } from "../../../types/ProjectTypes";
import "./projectCardUsedTechImages.scss"

type Props = {
  usedTechImgs: TTechImages[]
};

const ProjectCardUsedTechImages = ({ usedTechImgs } : Props) => {
  return (
    <div className="projectCardUsedTechImgs">
      {usedTechImgs.map((techImg, index) => {
        return <img key={index} src={techImg.img} className="projectCardUsedTechImgs__img"></img>;
      })}
    </div>
  );
};

export default ProjectCardUsedTechImages