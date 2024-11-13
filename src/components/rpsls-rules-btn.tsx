function RPSLSRulesButton() {
  const ShowRulesRPSLS = () => {
    const rpslsRules = document.getElementById("rpslsRules");
    const rulesBG = document.getElementById("rulesBG");

    if (rpslsRules && rulesBG) {
      rpslsRules.style.display = "block";
      rpslsRules.style.animationName = "enlargeRules";
      rpslsRules.style.animationDuration = "0.5s";

      rulesBG.style.display = "initial";
    }
  };

  return (
    <button
      className="rules-btn barlow-semi-condensed-semibold"
      onClick={ShowRulesRPSLS}
    >
      Rules
    </button>
  );
}

export default RPSLSRulesButton;
