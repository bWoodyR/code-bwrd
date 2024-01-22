import { useEffect, useState, useRef, useContext } from "react";
import { Intro, About, Experience, Projects, Contact, Socials } from "../../components";
import "./home.scss";
import Navigation from "../../components/Navigation/Navigation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useBrowserCheck } from "../../hooks/useBrowserCheck";
import { AppContext } from "../../services/Context/AppContext";
import { ACTION_TYPES } from "../../services/Context/appReducer";

const Home = () => {
  const { state, dispatch } = useContext(AppContext);
  const introRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);
  const [selectedSection, setSelectedSection] = useState("");
  useBrowserCheck();

  useEffect(() => {
    const scrollToRef = (ref: React.RefObject<HTMLElement>) => {
      if (ref.current) {
        ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
        setSelectedSection("");
      }
    };

    if (state.previousPage === "/projects") {
      scrollToRef(projectsRef);
      setSelectedSection("projects");
      dispatch({ type: ACTION_TYPES.SAVE_PREVIOUS_PAGE, payload: "" });
    } else {
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
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
