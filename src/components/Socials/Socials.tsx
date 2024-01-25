import "./socials.scss";
import React from "react";
import { socials } from "./socialsList";
import { useScreenSize } from "../../hooks/useScreenSize";
import SocialItem from "./SocialItem";

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

export default Socials;
