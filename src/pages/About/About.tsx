import "./abouts.scss";
import { FaChevronRight } from "react-icons/fa6";

const About = () => {
  const aboutMeList = [
    {
      title: "Location",
      text: "Currently based in Trenčín (SK)",
    },
    {
      title: "Education",
      text: "Pursuing studies at the University of Ss. Cyril and Methodius in Trnava (SK) in the field of Mass Media Communication, with a focus on the Theory of Digital Games.",
    },
    {
      title: "Passion for Software Development",
      text: "I'm passionate about building software that improves the lives of those around me as well as others.",
    },
    {
      title: "React Development",
      text: "I'm delving deeper into React development.",
    },
    {
      title: "Tech Enthusiast",
      text: "An avid PC gamer and enthusiast of the latest tech trends, I am always exploring new software and hardware innovations.",
    },
    {
      title: "Game Development",
      text: "In my spare time, I delve into the realm of game development, exploring the exciting possibilities offered by the Unreal Engine 5.",
    },
  ];

  return (
    <div className="about">
      <div className="about__header">
        <h1 className="about__header__title">About me</h1>
      </div>
      <div className="about__info">
        <h2 className="about__info__left">
          {"<"}
          <span className="component">Hi</span>
          <br /> <span className="prop">introduction</span>=<span className="value">{'"I\'m Roman"'}</span>
          <br /> <span className="prop">greeting</span>=<span className="value">{'"Nice to meet you."'}</span>
          <br />
          <span className="prop">action</span>=<span className="value">{'"Please take a look around!"'}</span>
          {" />"}
        </h2>
        <ul className="about__info__list">
          {aboutMeList.map((item, index) => {
            return (
              <li key={index} className="about__info__list__item">
                <FaChevronRight className="about__info__list__item__icon" />
                {item.text}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default About;
