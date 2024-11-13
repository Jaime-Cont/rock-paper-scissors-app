import closeIcon from "../assets/icon-close.svg";

function RPSRulesCloseButton() {
  const CloseRulesRPS = () => {
    const rpsRules = document.getElementById("rpsRules");
    const rulesBG = document.getElementById("rulesBG");

    if (rpsRules && rulesBG) {
      rpsRules.style.animationName = "reduceRules";
      rpsRules.style.animationDuration = "0.5s";
      rpsRules.style.display = "none";

      rulesBG.style.display = "none";
    }
  };

  return (
    <button className="rules-exit-btn" onClick={CloseRulesRPS}>
      <span className="sr-only">X</span>
      <img src={closeIcon} alt="Close symbol"></img>
    </button>
  );
}

export default RPSRulesCloseButton;
