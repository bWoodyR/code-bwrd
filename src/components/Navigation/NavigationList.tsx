import { useEffect, useRef } from "react";
import { navigationSections } from "./NavigationSections";

type NavigationListProps = {
  showNavigation: boolean;
  handleNavigationLiClick: (navSection: string) => void;
};

const NavigationList = ({ showNavigation, handleNavigationLiClick }: NavigationListProps) => {
  const navigationListRef = useRef<HTMLUListElement>(null);
  const navigationContainerListRef = useRef<HTMLDivElement>(null);

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
    <div className="navigation__container" ref={navigationContainerListRef}>
      <ul className={`navigation__list `} ref={navigationListRef}>
        {navigationSections.map((section) => {
          return (
            <li key={section.sectionName} className="navigation__list__item" onClick={() => handleNavigationLiClick(section.sectionName)}>
              {section.sectionNameInCode}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavigationList;
