import "./navigation.scss";
import { useState, useEffect, useRef } from "react";
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

  useEffect(() => {
    if (navigationListRef.current) {
      if (!showNavigation) {
        navigationListRef.current.style.display = "none";
      } else {
        navigationListRef.current.style.display = "flex";
      }
    }
  }, [showNavigation]);

  return (
    <nav className="navigation" ref={navigationRef}>
      <ul className="navigation__list" ref={navigationListRef}>
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
      {showNavigation ? <FaTimes className="navigation__bars" onClick={() => setShowNavigation(false)} /> : <FaBars className="navigation__bars" onClick={() => setShowNavigation(true)} />}
    </nav>
  );
};

export default Navigation;
