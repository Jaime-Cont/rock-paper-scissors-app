function RPSRulesButton() {
  const ShowRulesRPS = () => {
    const rpsRules = document.getElementById("rpsRules");
    const rulesBG = document.getElementById("rulesBG");

    if (rpsRules && rulesBG) {
      rpsRules.style.display = "block";
      rpsRules.style.animationName = "enlargeRules";
      rpsRules.style.animationDuration = "0.5s";

      rulesBG.style.display = "initial";
    }
  };

  return (
    <button
      className="rules-btn barlow-semi-condensed-semibold"
      onClick={ShowRulesRPS}
    >
      Rules
    </button>
  );
}

export default RPSRulesButton;
