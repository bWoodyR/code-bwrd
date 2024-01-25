import ExperienceTechnologiesList from "../../components/ExperienceTechnologiesList/ExperienceTechnologiesList";
import SectionHeader from "../../components/SectionHeader/SectionHeader";

import "./experience.scss";

type ExperienceProps = {
  experienceRef: React.RefObject<HTMLElement>;
};

const Experience = ({ experienceRef }: ExperienceProps) => {
  return (
    <section className="experience" ref={experienceRef}>
      <SectionHeader sectionName="Experience" sectionInfoText="// These are the technologies I've worked with" />
      <ExperienceTechnologiesList />
    </section>
  );
};

export default Experience;
