import "./intro.scss";

type IntroProps = {
  setSelectedSection: React.Dispatch<React.SetStateAction<string>>;
  introRef: React.RefObject<HTMLElement>;
};

const Intro = ({ setSelectedSection, introRef }: IntroProps) => {
  return (
    <section className="intro" ref={introRef}>
      <div className="intro__info">
        <div>
          <p>Hi, my name is</p>
          <h1 className="intro__info__name underline">Roman Ďurek</h1>
        </div>
        <h2 className="intro__info__job">Aspiring Frontend Developer</h2>
        <p className="intro__info__description">
          I'm a budding Frontend Developer with a keen interest in creating engaging digital interfaces. My current focus lies in harnessing the power of React to build responsive and dynamic web applications. Driven by a passion for problem-solving and a thirst for knowledge, I am dedicated to
          perfecting the art of crafting seamless user experiences and intuitive designs.
        </p>
        <button className="intro__info__projects-btn" onClick={() => setSelectedSection("projects")} type="button">
          Check my work
        </button>
      </div>
    </section>
  );
};

export default Intro;
