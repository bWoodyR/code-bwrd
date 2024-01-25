import { useState } from "react";
import { Intro, About, Experience, Projects, Contact, Socials } from "..";
import "./home.scss";
import Navigation from "../../components/Navigation/Navigation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useBrowserCheck } from "../../hooks/useBrowserCheck";
import { useScrollToSection } from "../../hooks/useScrollToSection";

const Home = () => {
  const [selectedSection, setSelectedSection] = useState("");
  const { introRef, aboutRef, experienceRef, projectsRef, contactRef } = useScrollToSection({ selectedSection, setSelectedSection });
  useBrowserCheck();

  return (
    <>
      <Navigation setSelectedSection={setSelectedSection} />
      <Intro setSelectedSection={setSelectedSection} introRef={introRef} />
      <About aboutRef={aboutRef} />
      <Experience experienceRef={experienceRef} />
      <Projects projectsRef={projectsRef} />
      <Contact contactRef={contactRef} />
      <Socials />
      <ToastContainer theme="dark" pauseOnHover={false} draggable={false} hideProgressBar={true} autoClose={3500} position="bottom-left" />
    </>
  );
};

export default Home;
