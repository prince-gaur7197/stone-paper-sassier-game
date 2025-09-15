let userScore = 0;
let computerScore = 0;

const select = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userrscore = document.querySelector("#user-score");
const computerrscore = document.querySelector("#computer-score");

const genComputerChoice = () => {
   const option = ["rock", "paper", "scisser"];
   const randamIdx = Math.floor(Math.random() * 3);
   return option[randamIdx];
}

const drowGame = () =>{
   msg.innerText = "Match Was Drow";
   msg.style.backgroundColor = "black";
}

const showWinner = (userWin, userChoice, computerChoice) => {
  if(userWin){
    userScore++;
    userrscore.innerText = userScore;
    msg.innerText = `You Win ! Your ${userChoice} beats ${computerChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    computerScore++;
    computerrscore.innerText = computerScore;
    msg.innerText = `You Lose ! ${computerChoice} Your beats ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
}

const playGame = (userChoice) => {
     console.log("user choice = ", userChoice);
     //Generate computer Choice//
     const computerChoice = genComputerChoice();
     console.log("computer Choice =", computerChoice);

     if(userChoice === computerChoice){
     drowGame();
     } else {
      let userWin = true;
      if(userChoice === "rock"){
        // paper scissor//
         userWin = computerChoice === "paper" ? false : true;
      } else if(userChoice === "paper"){
        //rock scissor//
        userWin = computerChoice === "scissor" ? false : true;
      } else if (userChoice === "sessors"){
        userWin = computerChoice === "rock" ?  false : true;
      }
     showWinner(userWin, userChoice, computerChoice); 
   }
}

select.forEach((select) => { 
    select.addEventListener("click", () => {
      const userChoice = select.getAttribute("id");
  console.log( userChoice);
  playGame(userChoice)
    });
});
