const playerScoreEl = document.getElementById("playerScore");
const playerChoiceEl = document.getElementById("playerChoice");
const computerScoreEl = document.getElementById("computerScore");
const computerChoiceEl = document.getElementById("computerChoice");
const resultText = document.getElementById("resultText");
const reset = document.getElementById("reset");

const allGameIcons = document.querySelectorAll(".fas");

const choices = {
  rock: { name: "Rock", defeats: ["scissors", "lizard"] },
  paper: { name: "Paper", defeats: ["rock", "spock"] },
  scissors: { name: "Scissors", defeats: ["paper", "lizard"] },
  lizard: { name: "Lizard", defeats: ["paper", "spock"] },
  spock: { name: "Spock", defeats: ["scissors", "rock"] },
};

let computerChoice = "";
let playerScore = 0;
let computerScore = 0;

function updateScore(playerChoice) {
  resultText.textContent = "";

  if (playerChoice === computerChoice) {
    resultText.textContent = "It's a tie.";
  } else {
    const choice = choices[playerChoice];
    if (choice.defeats.includes(computerChoice)) {
      resultText.textContent = "You Won!";
      playerScore++;
      import("./confetti.js").then((module) => {
        module.startConfetti();
      });
      playerScoreEl.textContent = playerScore;
    } else {
      resultText.textContent = "You Lose!";
      computerScore++;
      computerScoreEl.textContent = computerScore;
      import("./confetti.js").then((module) => {
        module.stopConfetti();
      });
    }
  }
}

function resetSelection() {
  allGameIcons.forEach((el) => el.classList.remove("selected"));
}

// Call functions to process turn
function checkResults(playerChoice) {
  resetSelection();
  computerRandomChoice();
  updateScore(playerChoice);
}

function computerRandomChoice() {
  const randomIndex = Math.floor(Math.random() * 5);

  const computerChoiceName = Object.values(choices)[randomIndex].name;
  const computerSelectedIcon = document.getElementById(
    `computer${computerChoiceName}`,
  );

  computerChoice = computerChoiceName.toLocaleLowerCase();
  computerSelectedIcon.classList.add("selected");
  computerChoiceEl.textContent = ` --- ${computerChoice}`;
}

// Passing player selection value and styling icons
function select(playerChoice) {
  checkResults(playerChoice);

  const playerSElectedIcon = document.getElementById(
    `player${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)}`,
  );

  playerSElectedIcon.classList.add("selected");
  playerChoiceEl.textContent = ` --- ${
    playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)
  }`;
}
// window.select = select;

reset.addEventListener("click", function () {
  playerScore = 0;
  computerScore = 0;
  playerScoreEl.textContent = playerScore;
  playerChoiceEl.textContent = " --- Choice";
  computerScoreEl.textContent = computerScore;
  computerChoiceEl.textContent = " --- Choice";
  resultText.textContent = "Click on the button";
  resetSelection();
  import("./confetti.js").then((module) => {
    module.removeConfetti();
  });
});
