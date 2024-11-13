function RPSLSChangeButton() {
  const ChangeToRPS = () => {
    const rpsGameBoard = document.getElementById("rpsGameBoard");
    const rpslsGameBoard = document.getElementById("rpslsGameBoard");

    if (rpsGameBoard && rpslsGameBoard) {
      rpsGameBoard.style.display = "block";
      rpslsGameBoard.style.display = "none";

      const rpslsRules = document.getElementById("rpslsRules");
      if (rpslsRules && rpslsRules.style.display != "none") {
        rpslsRules.style.display = "none";
      }

      const headerLogoRPS = document.getElementById("headerLogoRPS");
      const headerLogoRPSLS = document.getElementById("headerLogoRPSLS");
      if (headerLogoRPS && headerLogoRPSLS) {
        headerLogoRPS.style.display = "block";
        headerLogoRPSLS.style.display = "none";
      }

      const headerText = document.getElementById("header-text");
      const headerScore = document.getElementById("headerScore");
      if (headerText && headerScore) {
        headerText.innerHTML = "RPS Score";
        headerText.style.fontSize = "0.8rem";
        headerScore.innerHTML = "-";
      }
    }
  };

  return (
    <button
      className="game-type-btn barlow-semi-condensed-semibold"
      onClick={ChangeToRPS}
    >
      RPS
    </button>
  );
}

export default RPSLSChangeButton;
