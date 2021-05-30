let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getCompChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "s") return "Scissors";
  return "Paper";
}

function win(userChoice, compChoice) {
  const smallUserWord = "USER".fontsize(2).sub();
  const smallCompWord = "COMP".fontsize(2).sub();
  userScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(compChoice)}${smallCompWord}.<br />You win 🔥`;
  document.getElementById(userChoice).classList.add("green-glow");
  setTimeout(function () {
    document.getElementById(userChoice).classList.remove("green-glow")
  }, 300);
}

function lose(userChoice, compChoice) {
  const smallUserWord = "USER".fontsize(2).sub();
  const smallCompWord = "COMP".fontsize(2).sub();
  compScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(compChoice)}${smallCompWord}.<br />You lose 💩`;
  document.getElementById(userChoice).classList.add("red-glow");
  setTimeout(() => document.getElementById(userChoice).classList.remove("red-glow"), 300);
}

function draw(userChoice, compChoice) {
  const smallUserWord = "USER".fontsize(2).sub();
  const smallCompWord = "COMP".fontsize(2).sub();
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(compChoice)}${smallCompWord}.<br />It's a draw 👀`;
  document.getElementById(userChoice).classList.add("gray-glow");
  setTimeout(function () {
    document.getElementById(userChoice).classList.remove("gray-glow")
  }, 300);
}

function game(userChoice) {
  const compChoice = getCompChoice();
  switch (userChoice + compChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, compChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, compChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, compChoice);
      break;
  }
}


function main() {
  rock_div.addEventListener('click', function(){
    game("r");
  })
  paper_div.addEventListener('click', function(){
    game("p");
  })
  scissors_div.addEventListener('click', function(){
    game("s");
  })
}

main();
