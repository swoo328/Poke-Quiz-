//select ids to label for the answers
var answerA = document.querySelector("#answer1");
var answerB = document.querySelector("#answer2");
var answerC = document.querySelector("#answer3");
var answerD = document.querySelector("#answer4");
//select ids to label the choices of the question
var choiceA = document.querySelector("#choiceA");
var choiceB = document.getElementById("choiceB");
var choiceC = document.getElementById("choiceC");
var choiceD = document.getElementById("choiceD");
//start button
var startButton = document.querySelector("#start");
//questionList id
var questionList = document.querySelector("#questionList");
//question id
var questionTitle= document.querySelector("#questionTitle");
//form id
var questionForm = document.querySelector("#questionForm");
//time id
var time = document.querySelector("#time");
//seconds
var secondsLeft = 90;
//index for the questionList
var currentQuestion = 0;
//user choice 
var userChoice = "";
//correct choice
var correcChoice = "";
//score
var score = 0; 
//endscreen
var finalResult = document.querySelector("#finalResult")
//score count
var scoreCount = document.querySelector("#scoreCount");
//message id
var message = document.querySelector("#message");
//submit with name id
var playerName = document.querySelector("#playerName");
//Enter your name: id
var yourName = document.querySelector("#yourName");
//submit
var submitButton = document.querySelector("#submit");

//To Start
function start() {
    var quizButton = document.querySelector(".startingPoint");
    //takes out the the starting point class when the start button is click
    quizButton.setAttribute("style", "display: none;");
    //removes the class so we can see the questions and the radio button
    questionForm.removeAttribute("class");
}

//Timer 
function timer() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        time.textContent = "Timing remaining: " + secondsLeft + " seconds";
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            alert("No more time left");
        }
    }, 1000);
}

function outputQuestion() {
    //the new variable set here grabs the index of the questions list 
    var thisQuestion = questionlist[currentQuestion];
    //in index.html, the question title will be displayed in the questionList id div element
    questionTitle.innerHTML = thisQuestion.question;
    choiceA.textContent = thisQuestion.choices.a;
    choiceB.textContent = thisQuestion.choices.b;
    choiceC.textContent = thisQuestion.choices.c;
    choiceD.textContent = thisQuestion.choices.d;
    correctChoice = thisQuestion.correct;
    //message
    message.textContent = ("");
    finalResult.textContent = ("");
}

function correctAnswer(){
    //if the userChoice is the same as the correctChoice you get one point 
    //and a message will be display saying correct
    if(userChoice === correctChoice){
        score+=1;
        scoreCount.innerHTML = "Score: " + score;
        message.textContent = "Correct!"
        message.style.color = 'green';
    }
    else{
    //if the userChoice is not the same as the correctChoice 
    //you will get penalty of 5 seconds
        scoreCount.innerHTML = "Score: " + score;
        secondsLeft -= 5;
        message.textContent = "X Penalty -5 seconds!"
        message.style.color = 'red';
    }
        setTimeout(function () {
        //this ensures the function will go through the index of the question list in increments
        currentQuestion++;
        if (currentQuestion < questionlist.length) {
            outputQuestion();
            //once the last question is done, the game will end 
        } else {
            finishGame();
        }
    }, //the function will wait 3 seconds when the answer is clicked to go onto the next question 
        3000);    
}
function finishGame(){
// when the game is done the questions, timer and the message for correct or 
// incorrect are not display
   questionList.setAttribute("style", "display: none;");
   time.setAttribute("style", "display: none;");
   message.setAttribute("style", "display: none;");
   finalResult.textContent = "You score " + score + " points";
   //removes the class for the submit button
   playerName.removeAttribute("class");
}
//Player score and name to the local storage
function playerScore(){
    var inputName = yourName.value.trim();
    console.log(inputName);
    // make sure no blank initial to the local storage
    if (inputName !== "") {

        var highscores = JSON.parse(window.localStorage.getItem("score")) || [];
        //user input storage format 
        var inputScore = {
            score: score,
            inputName: inputName
        };

        //adding the new score and the name to the array of high scores
        highscores.push(inputScore);
        //add the high score to the local storage
        window.localStorage.setItem("score", JSON.stringify(highscores));
        //change the url to score.html page
        window.location.href = "score.html";
    }
}
//start button when click will call start, timer, and outputQuestion function 
startButton.addEventListener("click", function (event) {
    start();
    timer();
    outputQuestion();
});

//submit button
submitButton.addEventListener("click" , function(event){
    playerScore();
});

//When you click the choices
function pickChoice(event) {
    var button = event.target;
    userChoice = button.dataset.answer;
    correctAnswer();
};
//event listener for each choice and when click 
//it will call the pickChoice 
answerA.addEventListener("click", pickChoice);
answerB.addEventListener("click", pickChoice);
answerC.addEventListener("click", pickChoice);
answerD.addEventListener("click", pickChoice);