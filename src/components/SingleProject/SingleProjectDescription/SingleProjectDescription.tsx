import { useEffect } from "react";
import { useScreenSize } from "../../../hooks/useScreenSize";
import "./singleProjectDescription.scss";

type SingleProjectDescriptionProps = {
  description: string;
  showFullProjectDescription: boolean;
  setShowFullProjectDescription: React.Dispatch<React.SetStateAction<boolean>>;
};

const SingleProjectDescription = ({ description, showFullProjectDescription, setShowFullProjectDescription }: SingleProjectDescriptionProps) => {
  const { windowSize } = useScreenSize();
  const NUMBER_OF_CHARACTERS_TO_DISPLAY_BUTTON_SHOW_MORE = 380;
  const WIDTH_TO_DISPLAY_BUTTON_SHOW_MORE = 1280;

  useEffect(() => {
    if (windowSize.width < WIDTH_TO_DISPLAY_BUTTON_SHOW_MORE) {
      setShowFullProjectDescription(false);
    } else setShowFullProjectDescription(true);
  }, [windowSize.width, setShowFullProjectDescription]);

  return (
    <>
      <p className="singleProjectDataDescription">
        {showFullProjectDescription ? description : `${description.substring(0, NUMBER_OF_CHARACTERS_TO_DISPLAY_BUTTON_SHOW_MORE)}${description.length > NUMBER_OF_CHARACTERS_TO_DISPLAY_BUTTON_SHOW_MORE ? "..." : ""}`}
        {description.length > NUMBER_OF_CHARACTERS_TO_DISPLAY_BUTTON_SHOW_MORE && windowSize.width < WIDTH_TO_DISPLAY_BUTTON_SHOW_MORE && (
          <button
            className="singleProjectDataDescription__btn-show-hide"
            onClick={() => {
              if (showFullProjectDescription) {
                scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }
              setShowFullProjectDescription(!showFullProjectDescription);
            }}
          >
            {showFullProjectDescription ? "Hide" : "Show More"}
          </button>
        )}
      </p>
    </>
  );
};

export default SingleProjectDescription;
