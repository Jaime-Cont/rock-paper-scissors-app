function RPSChangeButton() {
  const ChangeToRPSLS = () => {
    const rpsGameBoard = document.getElementById("rpsGameBoard");
    const rpslsGameBoard = document.getElementById("rpslsGameBoard");

    if (rpsGameBoard && rpslsGameBoard) {
      rpsGameBoard.style.display = "none";
      rpslsGameBoard.style.display = "block";

      const rpsRules = document.getElementById("rpsRules");
      if (rpsRules && rpsRules.style.display != "none") {
        rpsRules.style.display = "none";
      }

      const headerLogoRPS = document.getElementById("headerLogoRPS");
      const headerLogoRPSLS = document.getElementById("headerLogoRPSLS");
      if (headerLogoRPS && headerLogoRPSLS) {
        headerLogoRPS.style.display = "none";
        headerLogoRPSLS.style.display = "block";
      }

      const headerText = document.getElementById("header-text");
      const headerScore = document.getElementById("headerScore");
      if (headerText && headerScore) {
        headerText.innerHTML = "RPSLS Score";
        headerText.style.fontSize = "0.8rem";
        headerScore.innerHTML = "-";
      }
    }
  };

  return (
    <button
      className="game-type-btn barlow-semi-condensed-semibold"
      onClick={ChangeToRPSLS}
    >
      RPSLS
    </button>
  );
}

export default RPSChangeButton;
