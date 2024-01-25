import SubheaderTitle from "../../components/SubheaderTitle/SubheaderTitle";
import TechnologyCard from "../../components/TechnologyCard/TechnologyCard";
import { technologies } from "./technologies";
import "./experienceTechnologiesList.scss"

const ExperienceTechnologiesList = () => {
  return (
    <div className="experienceList">
      {technologies.map((technology) => {
        return (
          <div key={technology.type} className="experienceList__technology">
            <SubheaderTitle title={technology.type} />
            <div className="experienceList__technology__items">
              {technology.technologies.map((item) => {
                return <TechnologyCard key={item.title} {...item} />;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ExperienceTechnologiesList;
