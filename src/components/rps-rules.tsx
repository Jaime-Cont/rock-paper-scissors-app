import rpsRules from "../assets/image-rules.svg";

import RPSRulesCloseBtn from "./rps-rules-close-btn";

function RPSRules() {
  return (
    <div className="rps-rules" id="rpsRules">
      <div className="rules-container">
        <p className="rules-text barlow-semi-condensed-bold">Rules</p>
        <RPSRulesCloseBtn />
      </div>
      <img
        src={rpsRules}
        alt="Rock, Paper, Scissors Rules"
        className="rules-image"
      ></img>
    </div>
  );
}

export default RPSRules;
