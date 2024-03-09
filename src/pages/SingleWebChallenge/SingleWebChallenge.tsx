import { useParams } from "react-router-dom";
import RockPaperScissors from "../../components/FrontendMentor/Rock_Paper_Scissors/RockPaperScissors";

const SingleWebChallenge = () => {
  const { name: projectName } = useParams();

  const showChallengeSite = (challengeName: string = "") => {
    switch (challengeName) {
      case "rock-paper-scissors":
        return <RockPaperScissors />;
      case "ip-adress-tracker":
        return;
      default:
        return <div>Challenge not found</div>;
    }
  };

  return <>{showChallengeSite(projectName)}</>;
};

export default SingleWebChallenge;
