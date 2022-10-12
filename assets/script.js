var correct = document.querySelector(".correct")
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var container = document.querySelector("#container");
var highScoreBtn = document.querySelector("#highscore-btn")
var title = document.querySelector("#title");
var rules = document.querySelector("#rules");
var h1El = document.createElement("h1");
var olEl = document.createElement("ol");
var liEl = document.createElement("li");

var initCard = document.querySelector("#init-card");



var userChoice = "";
var timer;
var timerCount;

var question1 = "what is 2+2";
var options1 = ["4","5","6","7"];
var correct1 = "4";

var question2 = "what is 4+2";
var options2 = ["4","5","6","7"];
var correct2 = "6";

var question3 = "what is 4+3";
var options3 = ["4","5","6","7"];
var correct3 = "7";

var question3 = "what is 4+1";
var options3 = ["4","5","6","7"];
var correct3 = "5";




function init() {
    getHighscores()
}

function startQuiz() {
    timerCount = 60;
    startButton.disabled = true;
    startTimer()
    hideInitCard()
}
function startTimer() {
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount === 0) {
        clearInterval(timer);
        highScoreCard()
      } 
    }, 1000)
    
}   
function hideInitCard(){
startButton.setAttribute("style", "display: none"),
title.setAttribute("style", "display: none");
rules.setAttribute("style", "display: none");
} 
function writeQuestion(){
  
}

function highScoreCard(){
  
  
}
startButton.addEventListener("click", startQuiz);

