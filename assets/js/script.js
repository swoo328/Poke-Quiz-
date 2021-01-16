var scoreCount = document.querySelector("#scoreCount");
//answers
var answerA = document.querySelector("#answer1");
var answerB = document.querySelector("#answer2");
var answerC = document.querySelector("#answer3");
var answerD = document.querySelector("#answer4");
//choices
var choiceA = document.querySelector("#choiceA");
var choiceB = document.getElementById("choiceB");
var choiceC = document.getElementById("choiceC");
var choiceD = document.getElementById("choiceD");

//select each answer to set value of choices 
var startButton = document.querySelector("#start");
var questionAnswer= document.querySelector("#questionTitle");
var qAnswer= document.querySelector("#questionAnswer");
var questionListChoice = document.querySelector("#choices");
var time = document.querySelector("#time");
//seconds
var secondsLeft = 90;
var currentQuestion = 0;
//user choice
var userChoice = "";
//correct choice
var correcChoice = "";
//score
var score = 0; 

//answer
var answer = document.querySelector("#answer");

//To Start
function start() {
    var quizButton = document.querySelector(".startingPoint");
    //takes out the the starting point class when the start button is click
    quizButton.setAttribute("style", "display: none;");
    qAnswer.removeAttribute("class");
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
    questionAnswer.innerHTML = thisQuestion.question;
    choiceA.textContent = thisQuestion.choices.a;
    choiceB.textContent = thisQuestion.choices.b;
    choiceC.textContent = thisQuestion.choices.c;
    choiceD.textContent = thisQuestion.choices.d;
    correctChoice = thisQuestion.correct;
    answer.textContent = ("");
    // endScreen.textContent = ("");
}

function correctAnswer(){
    if(userChoice === correctChoice){
        score+=1;
        scoreCount.innerHTML = "Score: " + score;
        answer.textContent = "You're correct!"
        answer.style.color = 'lightgreen';
    }
    else{
        scoreCount.innerHTML = "Score: " + score;
        secondsLeft -= 5;
        answer.textContent = "Sorry, not that one! Time decreased by 5 seconds!"
        answer.style.color = 'red';
    }
        setTimeout(function () {
        //this ensures the function will go through the index of the question list in increments
        currentQuestion++;
        if (currentQuestion < questionlist.length) {
            outputQuestion();
            //once the last question is done, the game will end 
        } else {
            
        }
    }, //the function will wait 4 seconds when the answer is clicked to go onto the next question 
        4000);
    
}

//function calling 
startButton.addEventListener("click", function (event) {
    start();
    timer();
    outputQuestion();
});

//When you click the choices
function setChoice(event) {
    var button = event.target;
    userChoice = button.dataset.answer;
    correctAnswer();
};
answerA.addEventListener("click", setChoice);
answerB.addEventListener("click", setChoice);
answerC.addEventListener("click", setChoice);
answerD.addEventListener("click", setChoice);