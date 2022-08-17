const playerScoreEl = document.getElementById("playerScore");
const playerChoiceEl = document.getElementById("playerChoice");
const computerScoreEl = document.getElementById("computerScore");
const computerChoiceEl = document.getElementById("computerChoice");
const resultText = document.getElementById("resultText");

const allGameIcons = document.querySelectorAll(".fas");

const choices = {
  rock: { name: "Rock", defeats: ["scissors", "lizard"] },
  paper: { name: "Paper", defeats: ["rock", "spock"] },
  scissors: { name: "Scissors", defeats: ["paper", "lizard"] },
  lizard: { name: "Lizard", defeats: ["paper", "spock"] },
  spock: { name: "Spock", defeats: ["scissors", "rock"] },
};

let computerChoice = "";

function resetSelection() {
  allGameIcons.forEach((el) => el.classList.remove("selected"));
}

// Call functions to process turn
function checkResults() {
  resetSelection();
  computerRandomChoice();
}

function computerRandomChoice() {
  const randomIndex = Math.floor(Math.random() * 5);

  const computerChoice = Object.values(choices)[randomIndex].name;
  const computerSelectedIcon = document.getElementById(
    `computer${computerChoice}`,
  );

  computerSelectedIcon.classList.add("selected");
  computerChoiceEl.textContent = ` --- ${computerChoice}`;
}

// Passing player selection value and styling icons
function select(playerChoice) {
  checkResults();

  const playerSElectedIcon = document.getElementById(
    `player${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)}`,
  );

  playerSElectedIcon.classList.add("selected");
  playerChoiceEl.textContent = ` --- ${
    playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)
  }`;
}
