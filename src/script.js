var scoreCounter = document.getElementById("headerScore");
var rpsGameBoard = document.getElementById("rpsGameBoard");
var rpslsGameBoard = document.getElementById("rpslsGameBoard");
var rpsRules = document.getElementById("rpsRules");
var rpslsRules = document.getElementById("rpslsRules");

let scoreCount = 0;

function UpdateScore() {
    scoreCount += 1;
    scoreCounter.innerHTML = scoreCount;
}

function CalculateBattleRPS(choice) {
    let aiChoice = Math.floor(Math.random() * 3); //Random number from 0 - 2 (0 = Rock | 1 = Paper | 2 = Scissors)

    if(choice == aiChoice) //If Player and AI chose same
    {
        //Draw
    }
    else
    {
        switch(choice)
        {
            case 0: //If Player chose Rock
                if(aiChoice == 1) //If AI chose Paper
                {
                    //Lose
                }
                else { //If AI chose Scissors
                    //Win
                }
            break;

            case 1: //If Player chose Paper
                if(aiChoice == 2) //If AI chose Scissors
                {
                    //Lose
                }
                else { //If AI chose Rock
                    //Win
                }
            break;

            case 2: //If Player chose Scissors
                if(aiChoice == 0) //If AI chose Rock
                {
                    //Lose
                }
                else { //If AI chose Paper
                    //Win
                }
            break;
        }
    }
}

function CalculateBattleRPSLS(choice) {
    let aiChoice = Math.floor(Math.random() * 5); //Random number from 0 - 4 (0 = Rock | 1 = Paper | 2 = Scissors | 3 = Lizard | 4 = Spock)

    if(choice == aiChoice) //If Player and AI chose same
    {
        //Draw
    }
    else
    {
        switch(choice)
        {
            case 0: //If Player chose Rock
                switch(aiChoice) {
                    case 1: //If AI chose Paper
                        //Lose
                    break;

                    case 2: //If AI chose Scissors
                        //Win
                    break;

                    case 3: //If AI chose Lizard
                        //Win
                    break;

                    case 4: //If AI chose Spock
                        //Lose
                    break;
                }
            break;

            case 1: //If Player chose Paper
                switch(aiChoice) {
                    case 0: //If AI chose Rock
                        //Win
                    break;

                    case 2: //If AI chose Scissors
                        //Lose
                    break;

                    case 3: //If AI chose Lizard
                        //Lose
                    break;

                    case 4: //If AI chose Spock
                        //Win
                    break;
                }
            break;

            case 2: //If Player chose Scissors
                switch(aiChoice) {
                    case 0: //If AI chose Rock
                        //Lose
                    break;

                    case 1: //If AI chose Paper
                        //Win
                    break;

                    case 3: //If AI chose Lizard
                        //Win
                    break;

                    case 4: //If AI chose Spock
                        //Lose
                    break;
                }
            break;

            case 3: //If Player chose Lizard
                switch(aiChoice) {
                    case 0: //If AI chose Rock
                        //Win
                    break;

                    case 1: //If AI chose Paper
                        //Lose
                    break;

                    case 2: //If AI chose Scissors
                        //Lose
                    break;

                    case 4: //If AI chose Spock
                        //Win
                    break;
                }
            break;

            case 4: //If Player chose Spock
                switch(aiChoice) {
                    case 0: //If AI chose Rock
                        //Win
                    break;

                    case 1: //If AI chose Paper
                        //Lose
                    break;

                    case 2: //If AI chose Scissors
                        //Win
                    break;

                    case 3: //If AI chose Lizard
                        //Lose
                    break;
                }
            break;
        }
    }
}