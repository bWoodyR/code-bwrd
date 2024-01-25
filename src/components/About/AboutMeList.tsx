import "./aboutMeList.scss";
import { aboutMeListData } from "./AboutMeListData";
import { FaChevronRight } from "react-icons/fa6";

const AboutMeList = () => {
  return (
    <>
      <ul className="aboutMeList">
        {aboutMeListData.map((item, index) => {
          return (
            <li key={index} className="aboutMeList__item">
              <FaChevronRight className="aboutMeList__icon" />
              {item.text}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default AboutMeList;
