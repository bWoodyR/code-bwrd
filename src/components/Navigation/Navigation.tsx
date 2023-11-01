import "./navigation.scss";
import { useState, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

type Props = {
  setSelectedSection: React.Dispatch<React.SetStateAction<string>>;
};


const Navigation = ({ setSelectedSection }: Props) => {
  const [showNavigation, setShowNavigation] = useState(false);
  const navigationListRef = useRef<HTMLUListElement>(null);
  const navigationRef = useRef<HTMLElement>(null);

  const handleNavigationClick = (section: string) => {
    setSelectedSection(section);
    setShowNavigation(false);
  };

  return (
    <nav className="navigation" ref={navigationRef}>
      <ul className={`navigation__list ${showNavigation ? "" : "navigation__hide"}`} ref={navigationListRef}>
        <li className="navigation__list__item" onClick={() => handleNavigationClick("intro")}>
          Home
        </li>
        <li className="navigation__list__item" onClick={() => handleNavigationClick("about")}>
          About
        </li>
        <li className="navigation__list__item" onClick={() => handleNavigationClick("experience")}>
          Experience
        </li>
        <li className="navigation__list__item" onClick={() => handleNavigationClick("projects")}>
          Projects
        </li>
        <li className="navigation__list__item" onClick={() => handleNavigationClick("contact")}>
          Contact me
        </li>
      </ul>
      <FaBars className="navigation__mobile-btn" onClick={() => setShowNavigation(!showNavigation)} />
    </nav>
  );
};

export default Navigation;
