import "./intro.scss";

type Props = {
  setSelectedSection: React.Dispatch<React.SetStateAction<string>>;
};

const Intro = ({ setSelectedSection }: Props) => {
  return (
    <div className="intro">
      <div className="intro__info">
        <p>Hi, my name is</p>
        <h1 className="intro__info__name">Roman Ďurek</h1>
        <h2 className="intro__info__job">Aspiring Frontend Developer</h2>
        <p className="intro__info__description">
          I'm a budding Frontend Developer with a keen interest in creating engaging digital interfaces. My current focus lies in harnessing the power of React to build responsive and dynamic web applications. Driven by a passion for problem-solving and a thirst for knowledge, I am dedicated to
          perfecting the art of crafting seamless user experiences and intuitive designs.
        </p>
        <button className="intro__info__projects-btn" onClick={() => setSelectedSection("projects")}>
          Check my work
        </button>
      </div>
    </div>
  );
};

export default Intro;
