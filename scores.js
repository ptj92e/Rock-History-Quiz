let playerName = localStorage.getItem("playerName");
let highScore = localStorage.getItem("highScore");

let nameDisplay = document.getElementById("player-name");
let scoreDisplay = document.getElementById("high-score");

nameDisplay.textContent = playerName;
scoreDisplay.textContent = highScore;
