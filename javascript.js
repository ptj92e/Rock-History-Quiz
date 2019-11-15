//Body Variables
let timeEl = document.getElementById("timeLeft");
let questNumEl = document.getElementById("questNum");
let questTextEl = document.getElementById("questText");
let buttonsEl = document.getElementById("buttons");
let startQuizBtn = document.getElementById("startQuiz");
let answersDiv = document.getElementById("answers");
let scoreHistory = document.getElementById("scores");

//Question Variables
let i = 0;

//Timer Variables
let secondsLeft = 80;
let highScore = "";
let playerName = "";

//Start Button
startQuizBtn.addEventListener("click", startQuiz);
answersDiv.addEventListener("click", answerChoice);
//Start Quiz Function
function startQuiz() {
    let timerInterval = setInterval(function () {
        timeEl.textContent = secondsLeft;
        secondsLeft--;

        if (secondsLeft === -1 || i >= 5) {
            clearInterval(timerInterval);
            highScore = secondsLeft;
            scoreScreen();
        }
    }, 1000);
    startQuizBtn.remove();
    createEl();
    textContent();
    viewScores();
}

//Creating and Appending Questions and Answers
function createEl() {
    var buttonA = document.createElement("button");
    var buttonB = document.createElement("button");
    var buttonC = document.createElement("button");
    var buttonD = document.createElement("button");

    buttonA.setAttribute("class", "btn btn-light col-md-4 col-sm-8 m-3");
    buttonB.setAttribute("class", "btn btn-light col-md-4 col-sm-8 m-3");
    buttonC.setAttribute("class", "btn btn-light col-md-4 col-sm-8 m-3");  
    buttonD.setAttribute("class", "btn btn-light col-md-4 col-sm-8 m-3");  

    buttonA.setAttribute("id", "buttonA");
    buttonB.setAttribute("id", "buttonB");
    buttonC.setAttribute("id", "buttonC");  
    buttonD.setAttribute("id", "buttonD");  

    buttonA.setAttribute("data-answer", questions[i].choices[0]);
    buttonB.setAttribute("data-answer", questions[i].choices[1]);
    buttonC.setAttribute("data-answer", questions[i].choices[2]);  
    buttonD.setAttribute("data-answer", questions[i].choices[3]);  

    answersDiv.appendChild(buttonA);
    answersDiv.appendChild(buttonB);
    answersDiv.appendChild(buttonC);
    answersDiv.appendChild(buttonD);
}

//Circulating Between Questions
function textContent() {
    questTextEl.textContent = questions[i].title;
    questions[i].choices.forEach(function(event) {
        buttonA.textContent = questions[i].choices[0];
        buttonB.textContent = questions[i].choices[1];
        buttonC.textContent = questions[i].choices[2];
        buttonD.textContent = questions[i].choices[3];  
        
        buttonA.setAttribute("data-answer", questions[i].choices[0]);
        buttonB.setAttribute("data-answer", questions[i].choices[1]);
        buttonC.setAttribute("data-answer", questions[i].choices[2]);  
        buttonD.setAttribute("data-answer", questions[i].choices[3]);  
    })
}

//Answer Choice Function
function answerChoice() { 
    if (event.target.matches("button") && event.target.getAttribute("data-answer") === questions[i].answer) {
        i++;
        textContent();
    } else {
        secondsLeft -= 10; 
    }   
}

function scoreScreen() {
    answersDiv.remove();
    questTextEl.textContent = "Congratulations! What is your name?";

    let userInput = document.createElement("input");
    let submitButton = document.createElement("button");

    submitButton.setAttribute("class", "btn btn-light col-3 m-auto");
    userInput.setAttribute("class", "form-group col-7 m-auto justify-content-center");
    userInput.setAttribute("id", "full-name");

    submitButton.textContent = "Submit";

    buttonsEl.appendChild(userInput);
    buttonsEl.appendChild(submitButton);
}

function viewScores() {
    scoreHistory.addEventListener("click", function() {
        console.log(highScore);
    })
}
