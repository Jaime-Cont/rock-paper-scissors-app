import rpslsRules from "../assets/image-rules-bonus.svg";

import RPSLSRulesCloseBtn from "./rpsls-rules-close-btn";

function RPSLSRules() {
  return (
    <div className="rpsls-rules" id="rpslsRules">
      <div className="rules-container">
        <p className="rules-text barlow-semi-condensed-bold">Rules</p>
        <RPSLSRulesCloseBtn />
      </div>
      <img
        src={rpslsRules}
        alt="Rock, Paper, Scissors, Lizard, Spock Rules"
        className="rules-image"
      ></img>
    </div>
  );
}

export default RPSLSRules;
