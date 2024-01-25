import { useContext, useEffect, useRef } from "react";
import { AppContext } from "../services/Context/AppContext";
import { ACTION_TYPES } from "../services/Context/appReducer";

type Props = {
  selectedSection: string;
  setSelectedSection: React.Dispatch<React.SetStateAction<string>>;
};

export const useScrollToSection = ({ selectedSection, setSelectedSection }: Props) => {
  const { state, dispatch } = useContext(AppContext);
  const introRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

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
  }, [selectedSection, setSelectedSection, dispatch, state.previousPage]);

  return { introRef, aboutRef, experienceRef, projectsRef, contactRef };
};
