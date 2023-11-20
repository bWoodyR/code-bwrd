import SubheaderTitle from "../../components/SubheaderTitle/SubheaderTitle";
import TechnologyCard from "../../components/TechnologyCard/TechnologyCard";
import "./experience.scss";
import { technologies } from "./technologies";

const Experience = () => {
  return (
    <div className="experience">
      <div className="experience__header">
        <h1 className="experience__header__title">Experience</h1>
        <p className="experience__header__infoText">// These are the technologies I've worked with</p>
      </div>
      <div className="experience__technologies">
        {technologies.map((technology) => {
          return (
            <div key={technology.type} className="experience__technology">
              <SubheaderTitle title={technology.type} />
              <div className="experience__technology__items">
                {technology.technologies.map((item) => {
                  return <TechnologyCard key={item.title} {...item} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
