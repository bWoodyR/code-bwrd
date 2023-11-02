import { useEffect, useState, useRef } from "react";
import { Intro, About, Experience, Projects, Contact, Socials } from "../../components";
import "./home.scss";
import Navigation from "../../components/Navigation/Navigation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const introRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);
  const [selectedSection, setSelectedSection] = useState("");

  useEffect(() => {
    const scrollToRef = (ref: React.RefObject<HTMLElement>) => {
      if (ref.current) {
        ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
        setSelectedSection("");
      }
    };

    switch (selectedSection) {
      case "intro":
        scrollToRef(introRef);
        break;
      case "about":
        scrollToRef(aboutRef);
        break;
      case "experience":
        scrollToRef(experienceRef);
        break;
      case "projects":
        scrollToRef(projectsRef);
        break;
      case "contact":
        scrollToRef(contactRef);
        break;
    }
  }, [selectedSection]);

  return (
    <>
      <Navigation setSelectedSection={setSelectedSection} />
      <section ref={introRef}>
        <Intro setSelectedSection={setSelectedSection} />
      </section>
      <section ref={aboutRef}>
        <About />
      </section>
      <section ref={experienceRef}>
        <Experience />
      </section>
      <section ref={projectsRef}>
        <Projects />
      </section>
      <section ref={contactRef}>
        <Contact />
      </section>
      <Socials />
      <ToastContainer theme="dark" pauseOnHover={false} draggable={false} hideProgressBar={true} autoClose={3500} position="bottom-left" />
    </>
  );
};

export default Home;
