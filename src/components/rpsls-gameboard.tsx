import pentagonBG from "../assets/bg-pentagon.svg";
import rockIcon from "../assets/icon-rock.svg";
import paperIcon from "../assets/icon-paper.svg";
import scissorsIcon from "../assets/icon-scissors.svg";
import lizardIcon from "../assets/icon-lizard.svg";
import spockIcon from "../assets/icon-spock.svg";

import RPSLSRulesButton from "./rpsls-rules-btn";
import RPSLSChangeButton from "./rpsls-gameboard-change-btn";

function RPSLSBoard() {
  let choice = 0;
  let scoreCount = 0;
  let aiChoice = 0;

  const ChooseRock = () => {
    choice = 0;
    RefreshScore();
    ChangeBoardToResults();
    RevealPlayerChoiceRock();
    RevealAIChoice();
  };
  const ChoosePaper = () => {
    choice = 1;
    RefreshScore();
    ChangeBoardToResults();
    RevealPlayerChoicePaper();
    RevealAIChoice();
  };
  const ChooseScissors = () => {
    choice = 2;
    RefreshScore();
    ChangeBoardToResults();
    RevealPlayerChoiceScissors();
    RevealAIChoice();
  };
  const ChooseLizard = () => {
    choice = 3;
    RefreshScore();
    ChangeBoardToResults();
    RevealPlayerChoiceLizard();
    RevealAIChoice();
  };
  const ChooseSpock = () => {
    choice = 4;
    RefreshScore();
    ChangeBoardToResults();
    RevealPlayerChoiceSpock();
    RevealAIChoice();
  };

  const ChangeBoardToResults = () => {
    let rpslsButtons = document.getElementById("rpsls-buttons");
    let rpslsResults = document.getElementById("rpsls-results");

    if (rpslsButtons && rpslsResults) {
      rpslsButtons.style.animationName = "boardToLeftButtons";
      rpslsButtons.style.animationDuration = "0.5s";
      rpslsButtons.style.animationFillMode = "forwards";

      rpslsResults.style.animationName = "boardToMiddleFromLeftResults";
      rpslsResults.style.animationDuration = "0.5s";
      rpslsResults.style.animationFillMode = "forwards";
    }
  };

  const RevealPlayerChoiceRock = () => {
    let playerChoiceCoinRPSLS = document.getElementById(
      "playerChoiceCoinRPSLS"
    );

    if (playerChoiceCoinRPSLS) {
      playerChoiceCoinRPSLS.style.animationName = "revealChoiceRock";
      playerChoiceCoinRPSLS.style.animationDuration = "0.5s";
      playerChoiceCoinRPSLS.style.animationDelay = "0.5s";
      playerChoiceCoinRPSLS.style.animationFillMode = "forwards";
    }
  };

  const RevealPlayerChoicePaper = () => {
    let playerChoiceCoinRPSLS = document.getElementById(
      "playerChoiceCoinRPSLS"
    );
    if (playerChoiceCoinRPSLS) {
      playerChoiceCoinRPSLS.style.animationName = "revealChoicePaper";
      playerChoiceCoinRPSLS.style.animationDuration = "0.5s";
      playerChoiceCoinRPSLS.style.animationDelay = "0.5s";
      playerChoiceCoinRPSLS.style.animationFillMode = "forwards";
    }
  };

  const RevealPlayerChoiceScissors = () => {
    let playerChoiceCoinRPSLS = document.getElementById(
      "playerChoiceCoinRPSLS"
    );
    if (playerChoiceCoinRPSLS) {
      playerChoiceCoinRPSLS.style.animationName = "revealChoiceScissors";
      playerChoiceCoinRPSLS.style.animationDuration = "0.5s";
      playerChoiceCoinRPSLS.style.animationDelay = "0.5s";
      playerChoiceCoinRPSLS.style.animationFillMode = "forwards";
    }
  };

  const RevealPlayerChoiceLizard = () => {
    let playerChoiceCoinRPSLS = document.getElementById(
      "playerChoiceCoinRPSLS"
    );
    if (playerChoiceCoinRPSLS) {
      playerChoiceCoinRPSLS.style.animationName = "revealChoiceLizard";
      playerChoiceCoinRPSLS.style.animationDuration = "0.5s";
      playerChoiceCoinRPSLS.style.animationDelay = "0.5s";
      playerChoiceCoinRPSLS.style.animationFillMode = "forwards";
    }
  };

  const RevealPlayerChoiceSpock = () => {
    let playerChoiceCoinRPSLS = document.getElementById(
      "playerChoiceCoinRPSLS"
    );
    if (playerChoiceCoinRPSLS) {
      playerChoiceCoinRPSLS.style.animationName = "revealChoiceSpock";
      playerChoiceCoinRPSLS.style.animationDuration = "0.5s";
      playerChoiceCoinRPSLS.style.animationDelay = "0.5s";
      playerChoiceCoinRPSLS.style.animationFillMode = "forwards";
    }
  };

  const RevealAIChoice = () => {
    aiChoice = Math.floor(Math.random() * 4); //Random number from 0 - 2 (0 = Rock | 1 = Paper | 2 = Scissors | 3 = Lizard | 4 = Spock)
    setTimeout(CalculateBattleRPSLS, 1000); //Calculate Battle after 1 second

    let aiChoiceCoinRPSLS = document.getElementById("aiChoiceCoinRPSLS");
    if (aiChoiceCoinRPSLS) {
      switch (aiChoice) {
        case 0:
          aiChoiceCoinRPSLS.style.animationName = "revealChoiceRock";
          aiChoiceCoinRPSLS.style.animationDuration = "0.5s";
          aiChoiceCoinRPSLS.style.animationDelay = "0.5s";
          aiChoiceCoinRPSLS.style.animationFillMode = "forwards";
          break;

        case 1:
          aiChoiceCoinRPSLS.style.animationName = "revealChoicePaper";
          aiChoiceCoinRPSLS.style.animationDuration = "0.5s";
          aiChoiceCoinRPSLS.style.animationDelay = "0.5s";
          aiChoiceCoinRPSLS.style.animationFillMode = "forwards";
          break;

        case 2:
          aiChoiceCoinRPSLS.style.animationName = "revealChoiceScissors";
          aiChoiceCoinRPSLS.style.animationDuration = "0.5s";
          aiChoiceCoinRPSLS.style.animationDelay = "0.5s";
          aiChoiceCoinRPSLS.style.animationFillMode = "forwards";
          break;

        case 3:
          aiChoiceCoinRPSLS.style.animationName = "revealChoiceLizard";
          aiChoiceCoinRPSLS.style.animationDuration = "0.5s";
          aiChoiceCoinRPSLS.style.animationDelay = "0.5s";
          aiChoiceCoinRPSLS.style.animationFillMode = "forwards";
          break;

        case 4:
          aiChoiceCoinRPSLS.style.animationName = "revealChoiceSpock";
          aiChoiceCoinRPSLS.style.animationDuration = "0.5s";
          aiChoiceCoinRPSLS.style.animationDelay = "0.5s";
          aiChoiceCoinRPSLS.style.animationFillMode = "forwards";
          break;
      }
    }
  };

  const UpdateScore = () => {
    const scoreCounter = document.getElementById("headerScore");
    scoreCount += 1;

    if (scoreCounter) {
      scoreCounter.innerHTML = scoreCount.toString();
    }
  };

  const CalculateBattleRPSLS = () => {
    let resultsTextCon = document.getElementById("results-text-containerRPSLS");
    if (resultsTextCon) {
      resultsTextCon.style.animationName = "fadeIn";
      resultsTextCon.style.animationDuration = "0.5s";
      resultsTextCon.style.animationFillMode = "forwards";
    }

    let resultsText = document.getElementById("results-textRPSLS");

    if (choice == aiChoice) {
      //If Player and AI chose same
      if (resultsText) {
        resultsText.innerHTML = "Draw";
      }
    } else {
      switch (choice) {
        case 0: //If Player chose Rock
          switch (aiChoice) {
            case 1: //If AI chose Paper
              if (resultsText) {
                resultsText.innerHTML = "You Lose";
              }
              break;

            case 2: //If AI chose Scissors
              if (resultsText) {
                resultsText.innerHTML = "You Win";
              }
              UpdateScore();
              break;

            case 3: //If AI chose Lizard
              if (resultsText) {
                resultsText.innerHTML = "You Win";
              }
              UpdateScore();
              break;

            case 4: //If AI chose Spock
              if (resultsText) {
                resultsText.innerHTML = "You Lose";
              }
              break;
          }
          break;

        case 1: //If Player chose Paper
          switch (aiChoice) {
            case 0: //If AI chose Rock
              if (resultsText) {
                resultsText.innerHTML = "You Win";
                UpdateScore();
              }
              break;

            case 2: //If AI chose Scissors
              if (resultsText) {
                resultsText.innerHTML = "You Lose";
              }
              break;

            case 3: //If AI chose Lizard
              if (resultsText) {
                resultsText.innerHTML = "You Lose";
              }
              break;

            case 4: //If AI chose Spock
              if (resultsText) {
                resultsText.innerHTML = "You Win";
                UpdateScore();
              }
              break;
          }
          break;

        case 2: //If Player chose Scissors
          switch (aiChoice) {
            case 0: //If AI chose Rock
              if (resultsText) {
                resultsText.innerHTML = "You Lose";
              }
              break;

            case 1: //If AI chose Paper
              if (resultsText) {
                resultsText.innerHTML = "You Win";
                UpdateScore();
              }
              break;

            case 3: //If AI chose Lizard
              if (resultsText) {
                resultsText.innerHTML = "You Win";
                UpdateScore();
              }
              break;

            case 4: //If AI chose Spock
              if (resultsText) {
                resultsText.innerHTML = "You Lose";
              }
              break;
          }
          break;

        case 3: //If Player chose Lizard
          switch (aiChoice) {
            case 0: //If AI chose Rock
              if (resultsText) {
                resultsText.innerHTML = "You Lose";
              }
              break;

            case 1: //If AI chose Paper
              if (resultsText) {
                resultsText.innerHTML = "You Win";
              }
              UpdateScore();
              break;

            case 2: //If AI chose Scissors
              if (resultsText) {
                resultsText.innerHTML = "You Lose";
              }
              break;

            case 4: //If AI chose Spock
              if (resultsText) {
                resultsText.innerHTML = "You Win";
                UpdateScore();
              }
              break;
          }
          break;

        case 4: //If Player chose Spock
          switch (aiChoice) {
            case 0: //If AI chose Rock
              if (resultsText) {
                resultsText.innerHTML = "You Win";
                UpdateScore();
              }
              break;

            case 1: //If AI chose Paper
              if (resultsText) {
                resultsText.innerHTML = "You Lose";
              }
              break;

            case 2: //If AI chose Scissors
              if (resultsText) {
                resultsText.innerHTML = "You Win";
                UpdateScore();
              }
              break;

            case 3: //If AI chose Lizard
              if (resultsText) {
                resultsText.innerHTML = "You Lose";
              }
              break;
          }
          break;
      }
    }
  };

  const PlayAgain = () => {
    let rpslsButtons = document.getElementById("rpsls-buttons");
    let rpslsResults = document.getElementById("rpsls-results");

    let resultsTextCon = document.getElementById("results-text-containerRPSLS");
    if (resultsTextCon) {
      resultsTextCon.style.animationName = "fadeOut";
      resultsTextCon.style.animationDuration = "0.5s";
      resultsTextCon.style.animationFillMode = "forwards";
    }

    if (rpslsButtons && rpslsResults) {
      rpslsButtons.style.animationName = "boardToMiddleFromLeftButtons";
      rpslsButtons.style.animationDuration = "0.5s";
      rpslsButtons.style.animationFillMode = "forwards";

      rpslsResults.style.animationName = "boardToLeftResults";
      rpslsResults.style.animationDuration = "0.5s";
      rpslsResults.style.animationFillMode = "forwards";
    }

    let playerChoiceCoinRPSLS = document.getElementById(
      "playerChoiceCoinRPSLS"
    );
    if (playerChoiceCoinRPSLS) {
      playerChoiceCoinRPSLS.style.animationName = "resetCoin";
      playerChoiceCoinRPSLS.style.animationDuration = "0.5s";
      playerChoiceCoinRPSLS.style.animationDelay = "0.5s";
      playerChoiceCoinRPSLS.style.animationFillMode = "forwards";
    }

    let aiChoiceCoinRPSLS = document.getElementById("aiChoiceCoinRPSLS");
    if (aiChoiceCoinRPSLS) {
      aiChoiceCoinRPSLS.style.animationName = "resetCoin";
      aiChoiceCoinRPSLS.style.animationDuration = "0.5s";
      aiChoiceCoinRPSLS.style.animationDelay = "0.5s";
      aiChoiceCoinRPSLS.style.animationFillMode = "forwards";
    }
  };

  const RefreshScore = () => {
    const headerScore = document.getElementById("headerScore");
    if (headerScore) {
      headerScore.innerHTML = scoreCount.toString();
    }
  };

  return (
    <section className="rpsls-game-board game-board" id="rpslsGameBoard">
      <h1 className="sr-only">RPSLS Game</h1>

      <div className="rpsls-buttons">
        <div className="rpsls-buttons-fix" id="rpsls-buttons">
          <img
            src={pentagonBG}
            alt="Trangle background of game"
            className="game-board-image-pen"
          ></img>
          <button className="scissors-btn-ls" onClick={ChooseScissors}>
            <span className="sr-only">Scissors</span>
            <img src={scissorsIcon} alt="Scissors symbol"></img>
          </button>
          <button className="spock-btn-ls" onClick={ChooseSpock}>
            <span className="sr-only">Spock</span>
            <img src={spockIcon} alt="Spock symbol"></img>
          </button>
          <button className="paper-btn-ls" onClick={ChoosePaper}>
            <span className="sr-only">Paper</span>
            <img src={paperIcon} alt="Paper symbol"></img>
          </button>
          <button className="lizard-btn-ls" onClick={ChooseLizard}>
            <span className="sr-only">Lizard</span>
            <img src={lizardIcon} alt="Lizard symbol"></img>
          </button>
          <button className="rock-btn-ls" onClick={ChooseRock}>
            <span className="sr-only">Rock</span>
            <img src={rockIcon} alt="Rock symbol"></img>
          </button>
        </div>

        <div className="rpsls-results" id="rpsls-results">
          <div>
            <div className="player-choice" id="playerChoiceCoinRPSLS"></div>
            <p className="results-text barlow-semi-condensed-semibold">
              You Picked
            </p>
          </div>
          <div>
            <div className="ai-choice" id="aiChoiceCoinRPSLS"></div>
            <p className="results-text barlow-semi-condensed-semibold">
              The House Picked
            </p>
          </div>
        </div>

        <div
          className="rpsls-results-text-container"
          id="results-text-containerRPSLS"
        >
          <h1
            className="rpsls-results-text barlow-semi-condensed-bold"
            id="results-textRPSLS"
          >
            You Win
          </h1>
          <button
            className="play-again-btn barlow-semi-condensed-semibold"
            onClick={PlayAgain}
          >
            Play Again
          </button>
        </div>

        <RPSLSRulesButton />
        <RPSLSChangeButton />
      </div>
    </section>
  );
}

export default RPSLSBoard;
