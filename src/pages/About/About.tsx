import "./abouts.scss";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import AboutMeList from "../../components/About/AboutMeList";
import AboutMeCodeSnippet from "../../components/About/AboutMeCodeSnippet";

type AboutProps = {
  aboutRef: React.RefObject<HTMLElement>;
};

const About = ({ aboutRef }: AboutProps) => {
  return (
    <section className="about" ref={aboutRef}>
      <SectionHeader sectionName="About Me" />
      <div className="about__info">
        <AboutMeCodeSnippet />
        <AboutMeList />
      </div>
    </section>
  );
};

export default About;
