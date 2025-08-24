let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const  msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const DrawGame = () =>{
  console.log("game was draw.");
   msg.innerText = "Game was draw. play agian.";
   msg.style.backgroundColor = "#081b31";
};

const showWinner = (userwin , userChoice, compChoice) =>{
  if(userwin) {
    console.log("you win!");
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `you win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else{
    compScore++;
    compScorePara.innerText = compScore;
    console.log("you lose");
     msg.innerText = `you lose! ${compChoice} beats your ${userChoice}`;
     msg.style.backgroundColor = "red";
  }
};
const genCompChoice = () =>{
  const option = ["rock","paper","scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return option[randIdx];
};


const playGame = (userChoice) =>{
  console.log("user choice", userChoice);
  // Generate computer choice
  const compChoice = genCompChoice();
  console.log("compChoice =" , compChoice);


   if(userChoice === compChoice) {
    // draw game
      DrawGame();
   } else{
     let userwin = true;
     if(userChoice == "rock") {
      // scisssor , paper
      userwin = compChoice === "paper" ? false :true;
     } else if(userChoice == "paper") {
      // scisssor , rock
      userwin = compChoice === "scissor" ? false :true;
     } else{
      //rock, paper
       userwin = compChoice === "rock" ? false : true;
     }

     showWinner(userwin , userChoice, compChoice);

   }
   

};

choices.forEach((choice) =>{
      choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
      });
});