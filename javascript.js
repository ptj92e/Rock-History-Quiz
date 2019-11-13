let timeEl = document.getElementById("timeLeft");
let questNumEl = document.getElementById("questNum");
let questTextEl = document.getElementById("questText");
let buttonsEl = document.getElementById("buttons");
let startQuizBtn = document.getElementById("startQuiz");
let buttonsAB = document.getElementById("answerAB");
let buttonsCD = document.getElementById("answerCD");

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
   startQuizBtn.remove();
   createEl();
   textContent();
}

function createEl() {
    let buttonA = document.createElement("button");
    let buttonB = document.createElement("button");
    let buttonC = document.createElement("button");
    let buttonD = document.createElement("button");

    buttonA.setAttribute("class", "btn btn-light col-md-4 col-sm-8 m-3");
    buttonB.setAttribute("class", "btn btn-light col-md-4 col-sm-8 m-3");
    buttonC.setAttribute("class", "btn btn-light col-md-4 col-sm-8 m-3");  
    buttonD.setAttribute("class", "btn btn-light col-md-4 col-sm-8 m-3");  

    buttonA.addEventListener("click", selectAnswer);
    buttonB.addEventListener("click", selectAnswer);
    buttonC.addEventListener("click", selectAnswer);
    buttonD.addEventListener("click", selectAnswer);

    buttonA.setAttribute("id", "buttonA");
    buttonB.setAttribute("id", "buttonB");
    buttonC.setAttribute("id", "buttonC");  
    buttonD.setAttribute("id", "buttonD");  

    buttonsAB.appendChild(buttonA);
    buttonsAB.appendChild(buttonB);
    buttonsCD.appendChild(buttonC);
    buttonsCD.appendChild(buttonD);
}

function textContent() {
    
}

function selectAnswer() {
    
}

