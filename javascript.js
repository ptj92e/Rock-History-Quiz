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
let playerName = "";

//Score Variables
let userScore = 0

//Start Button
startQuizBtn.addEventListener("click", startQuiz);
//Click listener for Answer Choices
answersDiv.addEventListener("click", answerChoice);

//Start Quiz Function
function startQuiz() {
    //This is setting up the timer variable that runs the quiz
    let timerInterval = setInterval(function () {
        //This line is allowing the seconds left to be displayed on the screen
        timeEl.textContent = secondsLeft;
        //This is subtracting seconds from the timer
        secondsLeft--;
        //This if statement is saying that if the seconds left are less than one or if the question numbers is greater than five, then clear the interval and it calls the scoreScreen function
        if (secondsLeft === -1 || i >= 5) {
            clearInterval(timerInterval);
            scoreScreen();
        }
        //This seconds left are less than or equal to 0, it sets the text of the timer to an empty string and clears the interval
        if (secondsLeft <= 0) {
            timeEl.textContent = "";
            clearInterval(timerInterval);
            scoreScreen();
        }
    //This line sets the interval to 1000 milliseconds 
    }, 1000);
    //This removes the start button from the home page
    startQuizBtn.remove();
    //This function populates the questions on the screen
    createEl();
    //This fills in the text content of the first question
    textContent();
};
//Creating and Appending Questions and Answers
function createEl() {
    //Creates buttons
    var buttonA = document.createElement("button");
    var buttonB = document.createElement("button");
    var buttonC = document.createElement("button");
    var buttonD = document.createElement("button");
    //Sets classes to those buttons
    buttonA.setAttribute("class", "btn btn-light col-md-4 col-sm-8 m-3");
    buttonB.setAttribute("class", "btn btn-light col-md-4 col-sm-8 m-3");
    buttonC.setAttribute("class", "btn btn-light col-md-4 col-sm-8 m-3");  
    buttonD.setAttribute("class", "btn btn-light col-md-4 col-sm-8 m-3");  
    //Sets ids to those buttons
    buttonA.setAttribute("id", "buttonA");
    buttonB.setAttribute("id", "buttonB");
    buttonC.setAttribute("id", "buttonC");  
    buttonD.setAttribute("id", "buttonD");  
    //Sets attributes to those buttons
    buttonA.setAttribute("data-answer", questions[i].choices[0]);
    buttonB.setAttribute("data-answer", questions[i].choices[1]);
    buttonC.setAttribute("data-answer", questions[i].choices[2]);  
    buttonD.setAttribute("data-answer", questions[i].choices[3]);  
    //Appends buttons to the HTML
    answersDiv.appendChild(buttonA);
    answersDiv.appendChild(buttonB);
    answersDiv.appendChild(buttonC);
    answersDiv.appendChild(buttonD);
};
//Circulating Between Questions
function textContent() {
    //If the question doesn't exist, then it returns out of the function
    if (questions[i] === undefined) {
        return;
    };
    //Populates the title of each question
    questTextEl.textContent = questions[i].title;
    //This loops through each question and fills in the text content of each button
    questions[i].choices.forEach(function(event) {
        buttonA.textContent = questions[i].choices[0];
        buttonB.textContent = questions[i].choices[1];
        buttonC.textContent = questions[i].choices[2];
        buttonD.textContent = questions[i].choices[3];  
        //This resets the data attribute to the answer choice
        buttonA.setAttribute("data-answer", questions[i].choices[0]);
        buttonB.setAttribute("data-answer", questions[i].choices[1]);
        buttonC.setAttribute("data-answer", questions[i].choices[2]);  
        buttonD.setAttribute("data-answer", questions[i].choices[3]);  
    });
};
//This function creates a screen that congratulates the user and creates elements to input their name
function scoreScreen() {
    //This recmoves the div that the answer choices are created in
    answersDiv.remove();
    //This congratulates the user with their score and asks for their name
    questTextEl.textContent = "Congratulations! You scored: " + userScore + "! What is your name?";
    //Creates elements to input name and submit
    let userInput = document.createElement("input");
    let submitButton = document.createElement("button");
    //This sets classes and ids to the input and submit button
    submitButton.setAttribute("class", "btn btn-light col-3 m-auto");
    submitButton.setAttribute("id", "submit");
    userInput.setAttribute("class", "form-group col-7 m-auto justify-content-center");
    userInput.setAttribute("id", "full-name");
    //This sets the text content of the submit button
    submitButton.textContent = "Submit";
    //This appends the input and the submit button to the div
    buttonsEl.appendChild(userInput);
    buttonsEl.appendChild(submitButton);   
    //This adds a click listener to the submit button
    submitButton.addEventListener("click", submitScore);
};
//Answer Choice Function
function answerChoice() { 
    //This if statement says that if the click on the div does not match a button, then return out of the click event
    if (!event.target.matches("button")) {
        return;
    };
    //If the event clicks on a button and the data attribute matches the questions answer, then increase the user score and change the question. If it does not, take 10 seconds off of the clock and change the answer
    if (event.target.matches("button") && event.target.getAttribute("data-answer") === questions[i].answer) {
        i++;
        userScore++;
        textContent();
    } else {
        secondsLeft -= 10; 
        i++;
        textContent();
    };   
};
//This function submits the score the user earned
function submitScore() {
    let nameValue = document.getElementById("full-name").value;
    playerName = nameValue.trim();
    localStorage.setItem("playerName", playerName);
    localStorage.setItem("highScore", userScore);
    window.location.href="scores.html";
};


