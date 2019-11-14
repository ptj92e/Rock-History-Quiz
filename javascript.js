//Body Variables
let timeEl = document.getElementById("timeLeft");
let questNumEl = document.getElementById("questNum");
let questTextEl = document.getElementById("questText");
let buttonsEl = document.getElementById("buttons");
let startQuizBtn = document.getElementById("startQuiz");
let answersDiv = document.getElementById("answers");
//Question Variables
let questTitle = questions[0].title;
let questChoices = questions[0].choices;
let questAnswer = questions[0].answer;
//Timer Variables
let secondsLeft = 80;
//Start Button
startQuizBtn.addEventListener("click", startQuiz);
//Start Quiz Function
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
   answerChoice();
}
//Creating and Appending Questions and Answers
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

    buttonA.setAttribute("data-answer", questChoices[0]);
    buttonB.setAttribute("data-answer", questChoices[1]);
    buttonC.setAttribute("data-answer", questChoices[2]);  
    buttonD.setAttribute("data-answer", questChoices[3]);  

    answersDiv.appendChild(buttonA);
    answersDiv.appendChild(buttonB);
    answersDiv.appendChild(buttonC);
    answersDiv.appendChild(buttonD);
}
//Circulating Between Questions
function textContent() {
    questTextEl.textContent = questTitle;
    questChoices.forEach(function(event) {
        buttonA.textContent = questChoices[0];
        buttonB.textContent = questChoices[1];
        buttonC.textContent = questChoices[2];
        buttonD.textContent = questChoices[3];
    })
}
//Click Listeners for Answer
answersDiv.addEventListener("click", function(event) {
    if(event.target.matches("button")) {

    }
})

function answerChoice() {
    if (buttonsEl.getAttribute("data-answer") === questAnswer) {
        questions++;
    } else {
        secondsLeft - 10;
    }
}