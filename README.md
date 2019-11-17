## Rock-History-Quiz

For this task, I have been asked to create a quiz using javascript that saves high scores, and changes questions based off of certain parameters. 

## Walkthrough

# Start Quiz

Upon opening the quiz, you are prompted with a button to start the quiz. When you click on the quiz, the text on the screen changes and there are four buttons that are created on the screen that include the answer choices. There is also a timer that starts in the upper right hand corner that counts down from 80 seconds. When the Start Button is clicked, there are a series of events that happen which change the look of the screen. 

1. Buttons are created that will contain the answer choices. 
2. Those buttons are given classes, ids, and data values which help with identifying the answer choices. 
3. Text is added to the buttons displaying the answer choices. 
4. Those buttons are then appended to the answers div located on the index.
-------
# Answer Choices

Next, there is an event listener located on that answers div that checks the data values of the buttons clicked. If the data value of the button clicked matches the data value of the answer in the questions.js sheet, then the index of the questions in the variable changes and a new question and selection of answer choices is brought in. If the wrong answer is clicked, then 10 seconds is taken off of the clock. Also, in that function, if what is clicked is not a button, propogation is stopped and nothing happens and tha quiz runs like normal. 
-------
# Score Screen

When all of the correct answer choices have been selected, the timer is stopped and the screen asks you for your name. Once you input your name, hit the submit button and it takes you to the high scores page where you can see your name next to the score you received on the quiz. 
-------
