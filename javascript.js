let timeEl = document.getElementById("timeLeft");
let questNumEl = document.getElementById("questNum");
let questTextEl = document.getElementById("questText");
let buttonsEl = document.getElementById("buttons");
let startQuizBtn = document.getElementById("startQuiz");

let secondsLeft = 80;

startQuizBtn.addEventListener("click", startQuiz);

function startQuiz() {
    let timerInterval = setInterval(function () {
        timeEl.textContent = secondsLeft;
        secondsLeft--;

        if (secondsLeft === -1) {
            clearInterval(timerInterval);
        }
   }, 1000);
}



