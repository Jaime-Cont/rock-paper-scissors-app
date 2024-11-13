import triangleBG from "../assets/bg-triangle.svg";
import rockIcon from "../assets/icon-rock.svg";
import paperIcon from "../assets/icon-paper.svg";
import scissorsIcon from "../assets/icon-scissors.svg";

import RPSRulesButton from "./rps-rules-btn";
import RPSChangeButton from "./rps-gameboard-change-btn";

function RPSBoard() {
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

  const ChangeBoardToResults = () => {
    let rpsButtons = document.getElementById("rps-buttons");
    let rpsResults = document.getElementById("rps-results");

    if (rpsButtons && rpsResults) {
      rpsButtons.style.animationName = "boardToLeftButtons";
      rpsButtons.style.animationDuration = "0.5s";
      rpsButtons.style.animationFillMode = "forwards";

      rpsResults.style.animationName = "boardToMiddleFromLeftResults";
      rpsResults.style.animationDuration = "0.5s";
      rpsResults.style.animationFillMode = "forwards";
    }
  };

  const RevealPlayerChoiceRock = () => {
    let playerChoiceCoin = document.getElementById("playerChoiceCoin");

    if (playerChoiceCoin) {
      playerChoiceCoin.style.animationName = "revealChoiceRock";
      playerChoiceCoin.style.animationDuration = "0.5s";
      playerChoiceCoin.style.animationDelay = "0.5s";
      playerChoiceCoin.style.animationFillMode = "forwards";
    }
  };

  const RevealPlayerChoicePaper = () => {
    let playerChoiceCoin = document.getElementById("playerChoiceCoin");
    if (playerChoiceCoin) {
      playerChoiceCoin.style.animationName = "revealChoicePaper";
      playerChoiceCoin.style.animationDuration = "0.5s";
      playerChoiceCoin.style.animationDelay = "0.5s";
      playerChoiceCoin.style.animationFillMode = "forwards";
    }
  };

  const RevealPlayerChoiceScissors = () => {
    let playerChoiceCoin = document.getElementById("playerChoiceCoin");
    if (playerChoiceCoin) {
      playerChoiceCoin.style.animationName = "revealChoiceScissors";
      playerChoiceCoin.style.animationDuration = "0.5s";
      playerChoiceCoin.style.animationDelay = "0.5s";
      playerChoiceCoin.style.animationFillMode = "forwards";
    }
  };

  const RevealAIChoice = () => {
    aiChoice = Math.floor(Math.random() * 3); //Random number from 0 - 2 (0 = Rock | 1 = Paper | 2 = Scissors)
    setTimeout(CalculateBattleRPS, 1000); //Calculate Battle after 1 second

    let aiChoiceCoin = document.getElementById("aiChoiceCoin");
    if (aiChoiceCoin) {
      switch (aiChoice) {
        case 0:
          aiChoiceCoin.style.animationName = "revealChoiceRock";
          aiChoiceCoin.style.animationDuration = "0.5s";
          aiChoiceCoin.style.animationDelay = "0.5s";
          aiChoiceCoin.style.animationFillMode = "forwards";
          break;

        case 1:
          aiChoiceCoin.style.animationName = "revealChoicePaper";
          aiChoiceCoin.style.animationDuration = "0.5s";
          aiChoiceCoin.style.animationDelay = "0.5s";
          aiChoiceCoin.style.animationFillMode = "forwards";
          break;

        case 2:
          aiChoiceCoin.style.animationName = "revealChoiceScissors";
          aiChoiceCoin.style.animationDuration = "0.5s";
          aiChoiceCoin.style.animationDelay = "0.5s";
          aiChoiceCoin.style.animationFillMode = "forwards";
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

  const CalculateBattleRPS = () => {
    let resultsTextCon = document.getElementById("results-text-container");
    if (resultsTextCon) {
      resultsTextCon.style.animationName = "fadeIn";
      resultsTextCon.style.animationDuration = "0.5s";
      resultsTextCon.style.animationFillMode = "forwards";
    }

    let resultsText = document.getElementById("results-text");

    if (choice == aiChoice) {
      //If Player and AI chose same
      if (resultsText) {
        resultsText.innerHTML = "Draw";
      }
    } else {
      switch (choice) {
        case 0: //If Player chose Rock
          if (aiChoice == 1) {
            //If AI chose Paper
            if (resultsText) {
              resultsText.innerHTML = "You Lose";
            }
          } else {
            //If AI chose Scissors
            if (resultsText) {
              resultsText.innerHTML = "You Win";
            }
            UpdateScore();
          }
          break;

        case 1: //If Player chose Paper
          if (aiChoice == 2) {
            //If AI chose Scissors
            if (resultsText) {
              resultsText.innerHTML = "You Lose";
            }
          } else {
            //If AI chose Rock
            if (resultsText) {
              resultsText.innerHTML = "You Win";
            }
            UpdateScore();
          }
          break;

        case 2: //If Player chose Scissors
          if (aiChoice == 0) {
            //If AI chose Rock
            if (resultsText) {
              resultsText.innerHTML = "You Lose";
            }
          } else {
            //If AI chose Paper
            if (resultsText) {
              resultsText.innerHTML = "You Win";
            }
            UpdateScore();
          }
          break;
      }
    }
  };

  const PlayAgain = () => {
    let rpsButtons = document.getElementById("rps-buttons");
    let rpsResults = document.getElementById("rps-results");

    let resultsTextCon = document.getElementById("results-text-container");
    if (resultsTextCon) {
      resultsTextCon.style.animationName = "fadeOut";
      resultsTextCon.style.animationDuration = "0.5s";
      resultsTextCon.style.animationFillMode = "forwards";
    }

    if (rpsButtons && rpsResults) {
      rpsButtons.style.animationName = "boardToMiddleFromLeftButtons";
      rpsButtons.style.animationDuration = "0.5s";
      rpsButtons.style.animationFillMode = "forwards";

      rpsResults.style.animationName = "boardToLeftResults";
      rpsResults.style.animationDuration = "0.5s";
      rpsResults.style.animationFillMode = "forwards";
    }

    let playerChoiceCoin = document.getElementById("playerChoiceCoin");
    if (playerChoiceCoin) {
      playerChoiceCoin.style.animationName = "resetCoin";
      playerChoiceCoin.style.animationDuration = "0.5s";
      playerChoiceCoin.style.animationDelay = "0.5s";
      playerChoiceCoin.style.animationFillMode = "forwards";
    }

    let aiChoiceCoin = document.getElementById("aiChoiceCoin");
    if (aiChoiceCoin) {
      aiChoiceCoin.style.animationName = "resetCoin";
      aiChoiceCoin.style.animationDuration = "0.5s";
      aiChoiceCoin.style.animationDelay = "0.5s";
      aiChoiceCoin.style.animationFillMode = "forwards";
    }
  };

  const RefreshScore = () => {
    const headerScore = document.getElementById("headerScore");
    if (headerScore) {
      headerScore.innerHTML = scoreCount.toString();
    }
  };

  return (
    <section className="rps-game-board game-board" id="rpsGameBoard">
      <h1 className="sr-only">RPS Game</h1>

      <div className="rps-buttons">
        <div id="rps-buttons">
          <img
            src={triangleBG}
            alt="Trangle background of game"
            className="game-board-image-tri"
          ></img>
          <button className="paper-btn" onClick={ChoosePaper}>
            <span className="sr-only">Paper</span>
            <img src={paperIcon} alt="Paper symbol"></img>
          </button>
          <button className="scissors-btn" onClick={ChooseScissors}>
            <span className="sr-only">Scissors</span>
            <img src={scissorsIcon} alt="Scissors symbol"></img>
          </button>
          <button className="rock-btn" onClick={ChooseRock}>
            <span className="sr-only">Rock</span>
            <img src={rockIcon} alt="Rock symbol"></img>
          </button>
        </div>

        <div className="rps-results" id="rps-results">
          <div>
            <div className="player-choice" id="playerChoiceCoin"></div>
            <p className="results-text barlow-semi-condensed-semibold">
              You Picked
            </p>
          </div>
          <div>
            <div className="ai-choice" id="aiChoiceCoin"></div>
            <p className="results-text barlow-semi-condensed-semibold">
              The House Picked
            </p>
          </div>
        </div>

        <div className="rps-results-text-container" id="results-text-container">
          <h1
            className="rps-results-text barlow-semi-condensed-bold"
            id="results-text"
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

        <RPSRulesButton />
        <RPSChangeButton />
      </div>
    </section>
  );
}

export default RPSBoard;
