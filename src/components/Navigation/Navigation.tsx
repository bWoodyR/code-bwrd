import "./navigation.scss";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import Sticker from "../Sticker/Sticker";
import NavigationList from "./NavigationList";

type Props = {
  setSelectedSection: React.Dispatch<React.SetStateAction<string>>;
};

const Navigation = ({ setSelectedSection }: Props) => {
  const [showNavigation, setShowNavigation] = useState(false);

  const handleNavigationLiClick = (navSection: string) => {
    setSelectedSection(navSection);
    setShowNavigation(false);
  };

  return (
    <nav className="navigation">
      <Sticker text="Open to work" callback={() => handleNavigationLiClick("contact")} />
      <FaBars className="navigation__mobile-btn" onClick={() => setShowNavigation(!showNavigation)} />
      <NavigationList showNavigation={showNavigation} handleNavigationLiClick={(navSection) => handleNavigationLiClick(navSection)} />
    </nav>
  );
};

export default Navigation;
