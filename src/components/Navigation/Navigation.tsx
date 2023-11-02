import "./navigation.scss";
import { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";

type Props = {
  setSelectedSection: React.Dispatch<React.SetStateAction<string>>;
};

const Navigation = ({ setSelectedSection }: Props) => {
  const [showNavigation, setShowNavigation] = useState(false);
  const navigationListRef = useRef<HTMLUListElement>(null);
  const navigationContainerListRef = useRef<HTMLDivElement>(null);

  const handleNavigationLiClick = (section: string) => {
    setSelectedSection(section);
    setShowNavigation(false);
  };

  useEffect(() => {
    if (navigationListRef.current) {
      const navigationListHeight = navigationListRef.current.getBoundingClientRect().height;
      if (showNavigation) {
        navigationContainerListRef.current!.style.height = `${navigationListHeight}px`;
      } else {
        navigationContainerListRef.current!.style.height = "0px";
      }
    }
  }, [showNavigation]);

  return (
    <nav className="navigation" >
      <div>
        <FaBars className="navigation__mobile-btn" onClick={() => setShowNavigation(!showNavigation)} />
      </div>
      <div className="navigation__container" ref={navigationContainerListRef}>
        <ul className={`navigation__list `} ref={navigationListRef}>
          <li className="navigation__list__item" onClick={() => handleNavigationLiClick("intro")}>
            Home
          </li>
          <li className="navigation__list__item" onClick={() => handleNavigationLiClick("about")}>
            About
          </li>
          <li className="navigation__list__item" onClick={() => handleNavigationLiClick("experience")}>
            Experience
          </li>
          <li className="navigation__list__item" onClick={() => handleNavigationLiClick("projects")}>
            Projects
          </li>
          <li className="navigation__list__item" onClick={() => handleNavigationLiClick("contact")}>
            Contact me
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
