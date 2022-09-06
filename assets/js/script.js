
var scoreTracker = 0;
var quizBegin = false;
//----------------------  Get Elements
var container = document.querySelector(".container");
var countDown = document.getElementById('counter');
var viewScore = document.getElementById('viewScore');
var quizHeader = document.getElementById('quizHdr');
var startButton = document.getElementById('start');
var resultQuiz = document.getElementById('result');

var quizIntro = 'This is a quiz to see whether you are "Out of Touch or Out of Time." Would You like to Begin?';
var quizSet = ['Which box-sizing method includes total width and height?',
                'Which of these properties is used to count the elements of an object?',
                'Which of these character strings enclose as array in JavaScript?',
                'What would you use to print the result in the console section?'];
var answerKey = ['border-box','length','[ ]','console.log()'];
var boxSet1 = ['bird-box',answerKey[0],'boom-bastic','box-it-up'];
var boxSet2 = ['foot','meter','ruler',answerKey[1]];
var boxSet3 = [answerKey[2],'( )','{ }','+ +'];
var boxSet4 = ['console.listen()','console.branch()',answerKey[3],'debug.print()'];
var boxSet = [boxSet1,boxSet2,boxSet3,boxSet4];

var generateBtn = document.querySelector('.newButtons');
var listElem = document.createElement("ul");
var scoreBoard = document.createElement("ul");
var nextQuest = quizSet[quizNumber];
var nextChoice = boxSet[quizNumber];


var li_1 = document.createElement("li");
var li_2 = document.createElement("li");
var li_3 = document.createElement("li");
var li_4 = document.createElement("li");
var li_Arr = [li_1,li_2,li_3,li_4];
var quizNumber = 0;

var quizLength = quizSet.length;
var timeLeft = 5 * quizLength;    // 5 seconds per question, if you want to add more
// Updates count on page

// Attach event listener to increment button element


if (quizBegin === false){
  resetQuiz();
}

function resetQuiz(){
  quizBegin = false;
  quizHeader.textContent = quizIntro;
  startButton.textContent = 'Begin!';

}

var guess = 0;
var numCorrect = 0;



function startTimer() {
  viewScore.textContent = "View Hi Score";
  //----------  setInterval(function() {..if-else,clearInterval()..},1000)  -------------  //
  //----------  clearInterval()` to stop the timer
  var timeInterval = setInterval(function () {
    if (timeLeft > 1 && quizNumber === quizLength) {
      countDown.textContent = "You Finished with "+ timeLeft + " Seconds Left!!";
      timeLeft--;
      clearInterval(timeInterval);
    } else if (timeLeft > 1) {
      countDown.textContent = 'Time Remaining:  ' + timeLeft;
      timeLeft--;
    } else {
      countDown.textContent = "Time Ran Out!!";
      timeLeft--;
      clearInterval(timeInterval); //clearInterval()` to stop the timer 

      gameOver();
    }
  }, 1000);
}

function createQuiz(){
  quizHeader.textContent = quizSet[quizNumber];
  var multChoice = boxSet[quizNumber];
    for (var i = 0; i < multChoice.length; i++){ 
      li_Arr[i].textContent = multChoice[i];
      listElem.appendChild(li_Arr[i]);
    }
    generateBtn.appendChild(listElem);
}
function nextQuiz(){
  var quizLength = quizSet.length;
  quizNumber = quizNumber + 1;
  console.log(quizNumber, quizLength);
  if (quizNumber < quizLength) {
    quizHeader.textContent = quizSet[quizNumber];
    var multChoice = boxSet[quizNumber];
    for (var i = 0; i < multChoice.length; i++){ 
      li_Arr[i].textContent = multChoice[i];
    }
  } else {
    gameOver();
    console.log('You Reached the end with ', guess, ' number of Guesses');
  }
}
  container.addEventListener("click", function(event) {
    var element = event.target;
    if (element.matches("#start")) {
      quizBegin = true;
      createQuiz();
      startTimer('start');
      startButton.setAttribute('style','display:none;');
    } 
});

// container.addEventListener("click", function(event) { guess++ })

container.addEventListener("click", function(event) {
  newAnswer = answerKey[quizNumber];
  var element = event.target;
  if (element.matches("li")) {
    guess++;
    var boxChoice = element.textContent;
    if (boxChoice === newAnswer){
      numCorrect++;
        // console.log('Correct');
        nextQuiz();
    } else {
        // console.log('Wrong');
    }
  }
});


function gameOver(){
  listElem.remove();
  var gradeCalc2 = numCorrect/quizLength;
  console.log(numCorrect,guess,quizLength);
  var gradeCalc1 = 100*numCorrect/guess;
  var gradeCalc2 = 100*numCorrect/quizLength;
  if(gradeCalc1 > .8 && gradeCalc2 > .8) {
    quizHeader.textContent = "Great Job: correct/guesses : " + gradeCalc1 + "% , correct/questions : " +gradeCalc2 + "%" } 
  else if (timeLeft > 0 && gradeCalc1 < .8 && gradeCalc2 < .8) {
    quizHeader.textContent = "Just a little out of Touch: correct/guesses : " + gradeCalc1 + "% , correct/questions : " + gradeCalc2 + "%" }
  else if (gradeCalc1 < .7 && gradeCalc2 < .7) {
    quizHeader.textContent = "You're out of Touch & Out of Time: correct/guesses : " + gradeCalc1 + "% , correct/questions : " + gradeCalc2 + "%"  }
  else { quizHeader.textContent = "You were Out of Time: correct/guesses : " + gradeCalc1 + "% , correct/questions : "+ gradeCalc2 + "%"  };
}

function appendToScoreBoard(){
  

}