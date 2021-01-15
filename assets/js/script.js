//
var answerA = document.querySelector("#answer1");
var answerB = document.querySelector("#answer2");
var answerC = document.querySelector("#answer3");
var answerD = document.querySelector("#answer4");
//
var choiceA = document.querySelector("#choiceA");
var choiceB = document.querySelector("#choiceB");
var choiceC = document.querySelector("#choiceC");
var choiceD = document.querySelector("#choiceD");

var startButton = document.querySelector("#start");
var options = document.querySelector("#options");
var questionaire = document.querySelector("#questionaire");
var questionAnswer = document.querySelector("#questionAnswer");
//time
var time = document.querySelector("#time");
//seconds
var secondsLeft = 90;

//To Start
function start() {
    var quizButton = document.querySelector(".startingPoint");
   
    quizButton.setAttribute("style", "display: none;");
}

//Timer 
function timer() {
    var timerInterval = setInterval(function(){
        secondsLeft--;
        time.textContent = "Timing remaining: " + secondsLeft + " seconds";
        if(secondsLeft === 0){
            clearInterval(timerInterval);
            alert("No more time left");
        }
    }, 1000);
}

startButton.addEventListener("click", function (event) {
    start();
    timer();
   
});