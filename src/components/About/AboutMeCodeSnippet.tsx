import "./aboutMeCodeSnippet.scss";

const AboutMeCodeSnippet = () => {
  return (
    <div className="aboutMeCodeSnippet">
      {"<"}
      <span className="component">Hi</span>
      <br /> <span className="aboutMeCodeSnippet__prop">introduction</span>=<span className="aboutMeCodeSnippet__value">{'"I\'m Roman"'}</span>
      <br /> <span className="aboutMeCodeSnippet__prop">greeting</span>=<span className="aboutMeCodeSnippet__value">{'"Nice to meet you."'}</span>
      <br />
      <span className="aboutMeCodeSnippet__prop">action</span>=<span className="aboutMeCodeSnippet__value">{'"Please take a look around!"'}</span>
      {" />"}
    </div>
  );
};

export default AboutMeCodeSnippet;
