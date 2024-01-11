let playerScore = 0;
let cpuScore = 0;
let gameRounds = 0;
let playerChoice = "";

//Get element references and create button div.
const mainDiv = document.querySelector('#GameArea');
const buttonsDiv = document.createElement('div');
buttonsDiv.setAttribute('id', 'buttonsDiv');

//add Player and CPU Score display
const playerScoreText = document.createElement('p');
playerScoreText.textContent = "Player Score: " + playerScore.toString();

const CPUScoreText = document.createElement('p');
CPUScoreText.textContent = "Computer Score: " + cpuScore.toString();


//add textArea for displaying initial text and outcome
const textDiv = document.createElement('div');
textDiv.setAttribute("class", "textArea");
textDiv.textContent = "Rock Paper or Scissors?";
mainDiv.appendChild(textDiv);

mainDiv.appendChild(playerScoreText);
mainDiv.appendChild(CPUScoreText);

//add 3 buttons
const btnRock = document.createElement('button');
btnRock.textContent = "Rock";

const btnPaper = document.createElement('button');
btnPaper.textContent = "Paper";

const btnScissors = document.createElement('button');
btnScissors.textContent = "Scissors";


buttonsDiv.appendChild(btnRock);
buttonsDiv.appendChild(btnPaper);
buttonsDiv.appendChild(btnScissors);

mainDiv.appendChild(buttonsDiv);

//add restart button
const replayBtn = document.createElement('button');
replayBtn.setAttribute('hidden', 'true');
replayBtn.textContent = "Replay 5 Rounds?";
buttonsDiv.appendChild(replayBtn);


function getComputerChoice()  {
    let choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * 3)].toLowerCase();
};





    btnRock.addEventListener('click', function() {
        
        if(gameRounds <=4 ){
        playerChoice = "rock";
        playRound(playerChoice, getComputerChoice());
        if (gameRounds == 5){
            GameOver();
        };
        }  
    });
        

    btnScissors.addEventListener('click', function() {
        if(gameRounds <=4 ){
            playerChoice = "scissors";
            playRound(playerChoice, getComputerChoice());
            if (gameRounds == 5){
                GameOver();
            };
            }  
        });
        

    btnPaper.addEventListener('click', function() {
        if(gameRounds <=4 ){
            playerChoice = "paper";
            playRound(playerChoice, getComputerChoice());
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

    function GameOver() {

        if(playerScore > cpuScore){
            textDiv.textContent = 'You won with ' + playerScore + " points. Computer had "
            + cpuScore + " points" ;
            btnRock.setAttribute("hidden", "false");
            btnPaper.setAttribute("hidden", "false");
            btnScissors.setAttribute("hidden", "false");
        } else if (playerScore < cpuScore) {
            textDiv.textContent = 'You lost with ' + playerScore + " points. Computer had "
            + cpuScore + " points" ;
            btnRock.setAttribute("hidden", "false");
            btnPaper.setAttribute("hidden", "false");
            btnScissors.setAttribute("hidden", "false");
            
        } else if(playerScore == cpuScore){
            textDiv.textContent = 'you TIED with ' + playerScore + " points.";
            btnRock.setAttribute("hidden", "false");
            btnPaper.setAttribute("hidden", "false");
            btnScissors.setAttribute("hidden", "false");
        }
       
        replayBtn.removeAttribute("hidden", "true");
        
    };

   
      
          
      



    


