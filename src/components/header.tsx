import rpsLogo from "../assets/logo.svg";
import rpslsLogo from "../assets/logo-bonus.svg";

function Header() {
  return (
    <section className="header-board">
      <h1 className="sr-only">RPS Game</h1>

      <img
        src={rpsLogo}
        alt="Rock, Paper, Scissors Logo"
        className="header-logo rps-logo"
        id="headerLogoRPS"
      ></img>
      <img
        src={rpslsLogo}
        alt="Rock, Paper, Scissors, Lizard, Spock Logo"
        className="header-logo rpsls-logo"
        id="headerLogoRPSLS"
      ></img>
      <div className="header-score">
        <p
          className="header-score-text barlow-semi-condensed-semibold"
          id="header-text"
        >
          RPS Score
        </p>
        <p
          className="header-score-number barlow-semi-condensed-bold"
          id="headerScore"
        >
          0
        </p>
      </div>
    </section>
  );
}

export default Header;
