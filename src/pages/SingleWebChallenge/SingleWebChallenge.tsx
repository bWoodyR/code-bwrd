import { useState } from "react";
import { useParams } from "react-router-dom";
import RockPaperScissors from "../../components/FrontendMentor/Rock_Paper_Scissors/RockPaperScissors";

const SingleWebChallenge = () => {
  const { name: projectName } = useParams();
  const [challenge, _setChallenge] = useState(projectName || "");

  const showChallengeSite = (challengeName: string) => {
    switch (challengeName) {
      case "123":
        return <RockPaperScissors />;
      default:
        return <div>Challenge not found</div>;
    }
  };

  return <>{showChallengeSite(challenge)}</>;
};

export default SingleWebChallenge;
