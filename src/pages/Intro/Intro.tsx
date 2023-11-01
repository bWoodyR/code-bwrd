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
        <h2 className="intro__info__job">I'm a Frontend Developer.</h2>
        <p className="intro__info__description">I'm a fronted developer specializing in building exceptional digital experience. Currently, I'm focused on building responsive full-stack web applications</p>
        <button className="intro__info__projects-btn" onClick={() => setSelectedSection("projects")}>
          Check my work
        </button>
      </div>
    </div>
  );
};

export default Intro;
