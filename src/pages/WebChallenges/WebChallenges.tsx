import { Link } from "react-router-dom";

const WebChallenges = () => {
  return (
    <div>
      Challenges
      <br />
      Frontend Mentor - Rock Paper Scissors
      <Link to={"rock-paper-scissors"}>Site</Link>
      <br />
      Frontend Mentor - IP adress tracker
      <Link to={"ip-adress-tracker"}>Site</Link>
    </div>
  );
};

export default WebChallenges;
