import "./navigation.scss";
import { useContext, useState } from "react";
import { FaBars } from "react-icons/fa";
import Sticker from "../Sticker/Sticker";
import NavigationList from "./NavigationList";
import { AppContext } from "../../services/Context/AppContext";
import { ACTION_TYPES } from "../../services/Context/appReducer";

const Navigation = () => {
  const {dispatch} = useContext(AppContext) 
  const [showNavigation, setShowNavigation] = useState(false);

  const handleNavigationLiClick = (navSection: string) => {
    dispatch({type: ACTION_TYPES.SET_SELECTED_SECTION, payload: navSection})
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
