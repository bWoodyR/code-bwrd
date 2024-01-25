import { useContext } from "react";
import "./intro.scss";
import { AppContext } from "../../services/Context/AppContext";
import { ACTION_TYPES } from "../../services/Context/appReducer";

type IntroProps = {
  introRef: React.RefObject<HTMLElement>;
};

const Intro = ({ introRef }: IntroProps) => {
  const { dispatch } = useContext(AppContext);

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
        <button className="intro__info__projects-btn" onClick={() => dispatch({ type: ACTION_TYPES.SET_SELECTED_SECTION, payload: "projects" })} type="button">
          Check my work
        </button>
      </div>
    </section>
  );
};

export default Intro;
