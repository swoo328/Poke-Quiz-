//high score
var highScore = document.querySelector("#highScore");
//clear button
var clearButton = document.querySelector("#clearButton");

function displayScore() {
    //parse object of arrays in local storage or else if empty will just be empty
    var getscores = JSON.parse(window.localStorage.getItem("score")) || [];
    //sorts scores in numerical order
    getscores.sort(function(a, b) {
        return b.score - a.score;
      });
    
    //takes the name and score to the score.html 
    //every new score a new name and score will be displayed
    getscores.forEach(function (score) {
        var listItem = document.createElement("li");
        listItem.textContent = score.inputName + " : " + score.score;
        highScore.appendChild(listItem);
    });


}
//When click the score will be cleared
function clearScores() {
    window.localStorage.removeItem("score");
    window.location.reload();
}

clearButton.onclick = clearScores

displayScore();