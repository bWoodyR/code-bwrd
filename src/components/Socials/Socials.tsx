import "./socials.scss";
import React, { useState, useRef } from "react";
import { socials } from "./socialsList";

const Socials = () => {
  return (
    <section className="socials">
      <div>
        {socials.map((social: { title: string; icon: React.ReactNode; color: string; url: string }) => {
          return <SocialItem key={social.title} {...social} />;
        })}
      </div>
    </section>
  );
};

const SocialItem = ({ title, icon, color, url }: { title: string; icon: React.ReactNode; color: string; url: string }) => {
  const [showText, setShowText] = useState(false);
  const socialItemRef = useRef<HTMLAnchorElement>(null);

  const showFullSocialItem = () => {
    setShowText(true);
  };

  const hideTextInSocialItem = () => {
    setShowText(false);
  };

  return (
    <a href={url} target="_blank" className={`socials__item ${showText ? "socials__item__selected" : ""}`} style={{ backgroundColor: color }} onMouseEnter={showFullSocialItem} onMouseLeave={hideTextInSocialItem} ref={socialItemRef}>
      {showText && <p>{title}</p>}
      <span className="socials__item__icon">{icon}</span>
    </a>
  );
};

export default Socials;
