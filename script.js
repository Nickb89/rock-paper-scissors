let playerScore = 0;
let cpuScore = 0;
let gameRounds = 0;
let playerChoice = "";





//TO DO

//on mouse enter javascript event listner to enlarge image
//replay button resets game
//not happy with look




//Get element references and create button div.
const mainDiv = document.querySelector('#GameArea');
const buttonsDiv = document.createElement('div');
buttonsDiv.setAttribute('id', 'buttonsDiv');




//add 3 buttons for player choice
const btnRock = document.createElement('button');
btnRock.style.backgroundImage = "url('images/rock.png')";
btnRock.style.backgroundSize = "100px 100px";
btnRock.style.backgroundRepeat = "no-repeat";
btnRock.style.backgroundPosition = "center";

const btnPaper = document.createElement('button');
btnPaper.style.backgroundImage = "url('images/paper.png')";
btnPaper.style.backgroundSize = "100px 100px";
btnPaper.style.backgroundRepeat = "no-repeat";
btnPaper.style.backgroundPosition = "center";

const btnScissors = document.createElement('button');
btnScissors.style.backgroundImage = "url('images/scissors.png')";
btnScissors.style.backgroundSize = "100px 100px";
btnScissors.style.backgroundRepeat = "no-repeat";
btnScissors.style.backgroundPosition = "center";


buttonsDiv.appendChild(btnRock);
buttonsDiv.appendChild(btnPaper);
buttonsDiv.appendChild(btnScissors);

mainDiv.appendChild(buttonsDiv);

//add Player and CPU Score display, current round.
const scoreDiv = document.createElement('div');
scoreDiv.setAttribute("class", "scoreDiv");

const playerScoreText = document.createElement('p');
playerScoreText.textContent = "Player Score: " + playerScore.toString();

const CPUScoreText = document.createElement('p');
CPUScoreText.textContent = "Computer Score: " + cpuScore.toString();

const currentRoundText = document.createElement('p');
currentRoundText.textContent = "Round: " + gameRounds;

scoreDiv.appendChild(playerScoreText);
scoreDiv.appendChild(currentRoundText);
scoreDiv.appendChild(CPUScoreText);


//add textArea for displaying round results

const textDiv = document.createElement('div');
textDiv.setAttribute("class", "textArea");
textDiv.textContent = "Rock Paper or Scissors?";

mainDiv.appendChild(textDiv);
mainDiv.appendChild(scoreDiv);

//add restart button
const replayBtn = document.createElement('button');
replayBtn.setAttribute('class', 'hideItem');
replayBtn.textContent = "Replay";

replayBtn.addEventListener('click', function(){
    gameRounds = 0;
    playerScore = 0;
    cpuScore = 0;
    playerScoreText.textContent = "Player Score: " + playerScore;
    CPUScoreText.textContent = "Computer Score: " + cpuScore;
    currentRoundText. textContent = "Round: " + gameRounds;
    textDiv.textContent = "Rock Paper or Scissors?";
    btnRock.classList.toggle('hideItem');
    btnPaper.classList.toggle('hideItem');
    btnScissors.classList.toggle('hideItem');
    this.setAttribute('class', 'hideItem');


})

buttonsDiv.appendChild(replayBtn);


function getComputerChoice()  {
    let choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * 3)].toLowerCase();
};





    btnRock.addEventListener('click', function() {
        
        if(gameRounds <=4 ){
        playerChoice = "rock";
        playRound(playerChoice, getComputerChoice());
        currentRoundText.textContent = "Round: " + gameRounds;
        if (gameRounds == 5){
            GameOver();
        };
        }  
    });
        

    btnScissors.addEventListener('click', function() {
        if(gameRounds <=4 ){
            playerChoice = "scissors";
            playRound(playerChoice, getComputerChoice());
            currentRoundText.textContent = "Round: " + gameRounds;
            if (gameRounds == 5){
                GameOver();
            };
            }  
        });
        

    btnPaper.addEventListener('click', function() {
        if(gameRounds <=4 ){
            playerChoice = "paper";
            playRound(playerChoice, getComputerChoice());
            currentRoundText.textContent = "Round: " + gameRounds;
            if (gameRounds == 5){
                GameOver();
            };
            }  
        });




function playRound(playerSelection, compSelection) {

    textDiv.textContent = (compSelection + " is computer choice");
   if(playerSelection == compSelection) {
   textDiv.textContent = ("TIE");
   }

   if(playerSelection == "rock") {
    if(compSelection == "paper") {
        textDiv.textContent = "Computer wins with Paper";
        cpuScore++;
        CPUScoreText.textContent = "Computer Score: " + cpuScore;
    }
    else if (compSelection == "scissors") {
        textDiv.textContent = "Player wins with Rock";
        playerScore++;
        playerScoreText.textContent = "Player Score: " + playerScore;
    }
   }

   if(playerSelection == "paper") {
    if(compSelection == "scissors") {
        textDiv.textContent = "Computer wins with scissors";
        cpuScore++;
        CPUScoreText.textContent = "Computer Score: " + cpuScore;
    } else if(compSelection == "rock") {
        textDiv.textContent = "Player wins with paper";
        playerScore++;
        playerScoreText.textContent = "Player Score: " + playerScore;
    }
   }

   if(playerSelection == "scissors"){
    if(compSelection == "rock") {
        textDiv.textContent = "Computer wins with rock";
        cpuScore++;
        CPUScoreText.textContent = "Computer Score: " + cpuScore;
     }
         else if(compSelection == "paper") {
            textDiv.textContent = "Player wins with scissors";
            playerScore++;
            playerScoreText.textContent = "Player Score: " + playerScore;
            }
        }
    gameRounds++
    

};

function checkIfFinalScoreAboveOne(){
    if (playerScore > 1){
        return " points";
    } else if (playerScore <=1){
        return " point";
    }
}

    function GameOver() {

        if(playerScore > cpuScore){
            textDiv.textContent = 'You won with ' + playerScore + checkIfFinalScoreAboveOne() + ". Computer had "
            + cpuScore + " points" ;
            btnRock.setAttribute("hidden", "false");
            btnPaper.setAttribute("hidden", "false");
            btnScissors.setAttribute("hidden", "false");
        } else if (playerScore < cpuScore) {
            textDiv.textContent = 'You lost with ' + playerScore + checkIfFinalScoreAboveOne() + ". Computer had "
            + cpuScore + " points" ;
            btnRock.setAttribute("hidden", "false");
            btnPaper.setAttribute("hidden", "false");
            btnScissors.setAttribute("hidden", "false");
            
        } else if(playerScore == cpuScore){
            textDiv.textContent = 'you TIED with ' + playerScore + checkIfFinalScoreAboveOne() + ".";
            btnRock.setAttribute("hidden", "false");
            btnPaper.setAttribute("hidden", "false");
            btnScissors.setAttribute("hidden", "false");
        }
       
        replayBtn.setAttribute('class', 'replayBtn');
        btnRock.classList.toggle('hideItem');
        btnPaper.classList.toggle('hideItem');
        btnScissors.classList.toggle('hideItem');
        
        
    };

   
      
          
      



    


