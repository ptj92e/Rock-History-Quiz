let timeEl = document.getElementById("timeLeft");
let questNumEl = document.getElementById("questNum");
let questTextEl = document.getElementById("questText");
let buttonsEl = document.getElementById("buttons");
let startQuizBtn = document.getElementById("startQuiz");
let answersDiv = document.getElementById("answers");

let questTitle = questions[0].title;

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

    buttonA.setAttribute("id", "buttonA");
    buttonB.setAttribute("id", "buttonB");
    buttonC.setAttribute("id", "buttonC");  
    buttonD.setAttribute("id", "buttonD");  

    answersDiv.appendChild(buttonA);
    answersDiv.appendChild(buttonB);
    answersDiv.appendChild(buttonC);
    answersDiv.appendChild(buttonD);
}

function textContent() {
    questTextEl.textContent = questTitle;
    questions[0].choices.forEach(function(choice) {
        buttonA.textContent = questions[0].choices[0];
        buttonB.textContent = questions[0].choices[1];
        buttonC.textContent = questions[0].choices[2];
        buttonD.textContent = questions[0].choices[3];
    })
}

