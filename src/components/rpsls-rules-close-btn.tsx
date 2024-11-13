import closeIcon from "../assets/icon-close.svg";

function RPSLSRulesCloseButton() {
  const CloseRulesRPSLS = () => {
    const rpslsRules = document.getElementById("rpslsRules");
    const rulesBG = document.getElementById("rulesBG");

    if (rpslsRules && rulesBG) {
      rpslsRules.style.animationName = "reduceRules";
      rpslsRules.style.animationDuration = "0.5s";
      rpslsRules.style.display = "none";

      rulesBG.style.display = "none";
    }
  };

  return (
    <button className="rules-exit-btn" onClick={CloseRulesRPSLS}>
      <span className="sr-only">X</span>
      <img src={closeIcon} alt="Close symbol"></img>
    </button>
  );
}

export default RPSLSRulesCloseButton;
