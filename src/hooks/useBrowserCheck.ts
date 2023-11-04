import { useEffect } from "react";

export const useBrowserCheck = () => {
  useEffect(() => {
    if (navigator.userAgent.match(/samsung/i)) {
      alert(`Your browser (Samsung Internet) may not show this website correctly.\n\nPlease consider using a standards-compliant browser instead.\n\nWe recommend Firefox, Microsoft Edge, or Google Chrome.`);
    }
  }, []);
};
