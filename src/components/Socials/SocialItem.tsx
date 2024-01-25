import React, { useState } from 'react'
import "./socialItem.scss"

const SocialItem = ({ title, icon, color, url, windowSize }: { title: string; icon: React.ReactNode; color: string; url: string; windowSize: { width: number; height: number } }) => {
  const [showText, setShowText] = useState(false);

  const showFullSocialItem = () => {
    setShowText(true);
  };

  const hideTextInSocialItem = () => {
    setShowText(false);
  };

  return (
    <a href={url} target="_blank" className={`socialItem ${showText || windowSize.width < 700 ? "socialItem__selected" : ""}`} style={{ backgroundColor: color }} onMouseEnter={showFullSocialItem} onMouseLeave={hideTextInSocialItem}>
      {(showText || windowSize.width < 700) && <p>{title}</p>}
      <span className="socialItem__icon">{icon}</span>
    </a>
  );
};

export default SocialItem