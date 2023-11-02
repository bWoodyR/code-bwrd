import "./abouts.scss";
import { FaChevronRight } from "react-icons/fa6";

const About = () => {
  return (
    <div className="about">
      <div className="about__header">
        <h1>About me</h1>
      </div>
      <div className="about__info">
        <h2 className="about__info__left">
          {"<"}
          <span className="component">Hi</span>
          <br /> <span className="prop">name</span>=<span className="value">{'"I\'m Roman"'}</span>
          <br /> <span className="prop">greeting</span>=<span className="value">{'"Nice to meet you."'}</span>
          <br />
          <span className="prop">action</span>=<span className="value">{'"Please take a look around!"'}</span>
          {" />"}
        </h2>
        <ul className="about__info__list">
          <li className="about__info__list__item">
            <FaChevronRight className="about__info__list__item__icon" />I am currently based in Slovakia {"(TN)"}.
          </li>
          <li className="about__info__list__item">
            <FaChevronRight className="about__info__list__item__icon" />I am passionate about building software that improves the lives of those around me.
          </li>
          <li className="about__info__list__item">
            <FaChevronRight className="about__info__list__item__icon" />
            In my spare time, I delve into the realm of game development, exploring the exciting possibilities offered by the Unreal Engine.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
