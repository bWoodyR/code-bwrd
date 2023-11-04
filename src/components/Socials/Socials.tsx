import "./socials.scss";
import React, { useState } from "react";
import { socials } from "./socialsList";
import { useScreenSize } from "../../hooks/useScreenSize";

const Socials = () => {
  const { windowSize } = useScreenSize();

  return (
    <section className="socials">
      <div className="socials__items">
        {socials.map((social: { title: string; icon: React.ReactNode; color: string; url: string }) => {
          return <SocialItem key={social.title} {...social} windowSize={windowSize} />;
        })}
      </div>
    </section>
  );
};

const SocialItem = ({ title, icon, color, url, windowSize }: { title: string; icon: React.ReactNode; color: string; url: string; windowSize: { width: number; height: number } }) => {
  const [showText, setShowText] = useState(false);

  const showFullSocialItem = () => {
    setShowText(true);
  };

  const hideTextInSocialItem = () => {
    setShowText(false);
  };

  return (
    <a href={url} target="_blank" className={`socials__item ${showText || windowSize.width < 700 ? "socials__item__selected" : ""}`} style={{ backgroundColor: color }} onMouseEnter={showFullSocialItem} onMouseLeave={hideTextInSocialItem}>
      {(showText || windowSize.width < 700) && <p>{title}</p>}
      <span className="socials__item__icon">{icon}</span>
    </a>
  );
};

export default Socials;
