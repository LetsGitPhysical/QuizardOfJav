//--------  create elememts global

var completeScoreBoard = document.getElementById('complete-score-board');
var quizButtons = document.getElementById('q-buttons');

// quizButtons.appendChild(UL_List);

var scoreTracker = 0;
var quizBegin = false;

//----------------------  Get Elements global

var score_timer = document.getElementsByClassName('.score-timer');
var viewScore = document.getElementById('viewScore');
var countDown = document.getElementById('counter');
var compScoreSection = document.getElementById('complete-scores');
var compScoreArea = document.getElementById('score-area');

var quizHeader = document.getElementById('quizHdr');
var startButton = document.getElementById('begin-button');
var resultQuiz = document.getElementById('result');
var gamerInits = document.getElementById('set-initials');
var postResults = document.getElementById('.post-results');
var gameYesNo = document.getElementById('game-yes-no');

//---------------------  Selectors global
var qContain = document.querySelector('.container');
// var makeButts = document.querySelector('.q-buttons');


//--------------------- data -------------------------------------------------------------------
var quizIntro = 'Will you be "Out of Touch?" or "Out of Time?" with this Quiz. Let\'s find out!';
quizHeader.textContent = quizIntro;
let quizard = { 
  q1 : {Quest : 'Which box-sizing method includes total width and height?',              Choice : ['bird-box','border-box','boom-bastic','box-it-up'],                     Answer : 'border-box'},
  q2 : {Quest : 'Which of these properties is used to count the elements of an object?', Choice : ['foot','meter','ruler','length'],                                       Answer : 'length'},
  q3 : {Quest : 'Which of these character strings enclose as array in JavaScript?',      Choice : ['[ ]','( )','{ }','+ +'],                                               Answer : '[ ]'},
  q4 : {Quest : 'What would you use to print the result in the console section?',        Choice : ['console.listen()','console.branch()','console.log()','debug.print()'], Answer : 'console.log()'},
  q5 : {Quest : 'In both Movies Top-Gun 1 & 2, Who was the Best Pilot?',                 Choice : ['Goose','Maverick','Viper','Ice-Man'],                                  Answer : 'Ice-Man'},
  q6 : {Quest : 'Which is not a function you can not apply to an array',                 Choice : ['shift','push','smash','pop'],                                          Answer : 'smash'}
}

var scoreBoardDict = {};  // collect from each game played 

//--------------------------------               q1,q2,q3..
// for (let [k,v] of Object.entries(quizard)){ console.log(k)}  
// console.log('Number of keys: ', keyCnt);  // 6
let quiz_count  = Object.keys(quizard).length;
var qNum = 0;
let quizKeys = Object.keys(quizard);
var quizNum = 0;
var qCntr = 0;

// var lstIdx = quizKeys.unshift('other');
// console.log(lstIdx);
// console.log(quizKeys);
// var quiz_remain = Object.keys(quizard).length;
// let quizKeys = Object.keys(quizard); //list of keys

// the scoreboard data   game_# : {player: [name,score,time],rank:  }  

// The  try     statement defines a code block to run (to try).
// The  catch   statement defines a code block to handle any error.
// The  finally statement defines a code block to run regardless of the result.
// The  throw   statement defines a custom error.

// var quizNumber = 0;
// var quizLength = quizSet.length;
var time_start = 5 * quiz_count;    // global- 5 secs per question
// 5 seconds per question, if you want to add more
// Updates count on page
// displayNB('adding-initials');

let scoreDict = {};
var finScore = 0;
var gameCnter = 1;

// if (quizBegin === false){
//   resetQuiz();

// }
// function resetQuiz(){
//   quizBegin = false;
//   quizHeader.textContent = quizIntro;
//   startButton.textContent = 'Begin!';

// }
//------------------------------------------------------------------------------
function takeQuiz(q){
  qNum = q+1;
  console.log('takeQuiz Function',qNum,quiz_count);
  if(qNum <= quiz_count){
    var quizKey = 'q'+ qNum;
    let quizQ = quizard[quizKey]['Quest'];  quizHeader.textContent = quizQ;
    let quizC = quizard[quizKey]['Choice'];
    // maybe make more dynamic if questions vary from more/less than 4 choices here.. 
    for(let i=0; i < quizC.length; i++){
      var qBoxTxt = document.getElementById(qBoxIds[i]);
      qBoxTxt.textContent = quizC[i];
    }
  } else {
    gameOver();
  }
}
//------------------------------------------------------------------------------
// function MakeDelObjects(arg){
//   if (arg === 'make'){
//     for (let i = 0; i < 4; i++){ 
//       var li_1 = document.createElement("li");
//       listElem.appendChild(li_Arr[i]);
//     }
//     makeButts.appendChild(listElem);
//   }else{
//     scoreBoard.remove();
//   }
// }
//------------------------------------------------------------------------------

var timeLeft = 5 * quiz_count;


function startTimer() {
  viewScore.textContent = "View Hi Score";

  timeLeft = 5 * quiz_count;
  var timeInterval = setInterval(function () { //--- setInterval(function() {..if-else,clearInterval()..},1000) 
    if (timeLeft > 1 && qNum > quiz_count) {
      countDown.textContent = "You Finished with "+ timeLeft + " Seconds Left!!";
      clearInterval(timeInterval);            //--- clearInterval()` to stop the timer
      // return gameOver();
    } else if(timeLeft === 0){
      countDown.textContent = "Time Ran Out!!";
      clearInterval(timeInterval);             //--- clearInterval()` to stop the timer 
      
      // return gameOver();
    } else {
     
      countDown.textContent = qNum + 'quiz num &Time Remaining: ' + timeLeft;
      timeLeft--;
    }
  }, 1000);
}

function display(string_id) {  //--------------- works
  var displayElem = document.getElementById(string_id);
  if (displayElem.style.display === "none") {
    displayElem.style.display = "block";
  } else {
    displayElem.style.display = "none";
  }
}
function visible(string_id) {  //--------------- works
  var visibleElem = document.getElementById(string_id);
  if (visibleElem.style.visibility === 'hidden' ) {
    visibleElem.style.visibility = 'visible';
  } else {
    visibleElem.style.visibility = 'hidden';
  }
}

// display('post-results');
// display('complete-scores');

// display('begin-button');
// display('post-results');

// visible('begin-button');
// visible('post-results');


//------------------------------------------------------------------------------
var qky = quizKeys[qCntr];
var qBoxIds = []; // ' qBox_0, qBox_1, qBox_2, qBox_3 '

function beginSetup(){  // begin button
  display('begin-button');
  var UL_List = document.createElement("ul");  
  UL_List.setAttribute('id','ul-choice-boxes');
  quizButtons.appendChild(UL_List);

   // delete this class after test
  qBoxIds = [];    //resets initial global
  qCntr = 0; //resets initial global
  for(let i = 0; i<4; i++){ // fixed at 4 choices each question,  maybe make more dynamic
    var q_li = document.createElement("li");
    var id_tag = 'qBox_'+ i;
    qBoxIds.push(id_tag);
    q_li.setAttribute('id',id_tag);
    UL_List.appendChild(q_li);
  }
  
// then begin taking quiz
startTimer();
takeQuiz(qCntr);

}

// //------------------------------------------------------------------------------

// //------------------------------------------------------------------------------


var qChoiceBox = document.querySelector('.q-buttons');
qChoiceBox.addEventListener("click", function(event) {
  var choiceElem = event.target;
  
  if (choiceElem.matches("li")) {
    qky = quizKeys[qCntr]; // q1,q2,q3,q4,q5,q6
    var choiceTxt = choiceElem.textContent;
    var quizA = quizard[qky]['Answer'];
    var hasKey = Boolean(qky in scoreDict);
    
    if(quizA === choiceTxt)  {
      if (hasKey === false) { scoreDict[qky]=1 }

      qCntr += 1;
      console.log('qCntr in listener',qCntr);
      takeQuiz(qCntr);

    } else {
      
    if (quizA !== choiceTxt){
      if (hasKey === false){ scoreDict[qky]=0 }
              
      }

    }};
});


// function showAllScores(){

// }


function gameOver(){
  // listElem.remove(); // check if exists first 

var qboxesUL = document.getElementById('ul-choice-boxes');
qboxesUL.remove();

quizHeader.textContent = "quiz complete!";

for (var sdVal of Object.values(scoreDict)){
  finScore = finScore + sdVal; // console.log('vals: ',sdV);
}
finScore = 100*(finScore/quiz_count).toFixed(2);

resultQuiz.textContent = 'You Scored: ' + finScore + '%';

// display('post-results');
display('complete-scores');

}


// var scoreBoard = document.createElement("ul"); // make and append scoreboard when u choose

function submitScoreToBoard(){
  var gamerTxt = gamerInits.value;
    if (gamerTxt !== ''){      
        var gmeKey = 'game_'+ gameCnter;
        var scoreRank = finScore + (timeLeft/100); scoreRank.toFixed(2);
        scoreBoardDict[gmeKey] = {'player': gamerTxt, 'score': finScore, 'rank': scoreRank};
        gamerInits.value = '';
        resultQuiz.textContent = '';
        finScore = 0; // reset score.
        gameCnter = gameCnter + 1;
        scoreDict = {};
        makeScoreBoard();
    } else {  
      return null;
    }
  }


// )};
//--------------------------------------------------------------------------


function sortByRank(){
  var sortable = [];
  let checkRecord = Object.keys(scoreBoardDict).length;
  for (var gamePlay of Object.keys(scoreBoardDict)) {
    sortable.push([gamePlay, scoreBoardDict[gamePlay]['rank']]);
    }
  if (checkRecord > 1){
    sortable.sort(function(a, b) {
      return b[1] - a[1];  // sorts descending
    })
  }
  return sortable;
};
//--------------------------------------------------------------------------
function makeScoreBoard(){
  display('post-results');
  display('game-yes-no');
  // hide the prev views


  var UL_Scores = document.createElement('ul');  
  UL_Scores.setAttribute('id','ul-scores-list');


  let theRankings = sortByRank();
  for(var i=0; i<theRankings.length; i++){
    var gm = theRankings[i][0];
    var plyr = scoreBoardDict[gm]['player'];
    var plscr = scoreBoardDict[gm]['score'];
    var plrnk = i+1;

    var li_scores = document.createElement('li');  
    li_scores.setAttribute('class','li-scores-list');
    li_scores.textContent = ' '+ plrnk + ' ' + plyr  + ' ' + plscr + ' ';
    UL_Scores.appendChild(li_scores);
  }
  compScoreArea.appendChild(UL_Scores);
}

function playAgain(t){
  if(t === 'y'){
    // play again
    resetGame();
  }else{
    // end and clear game

  }

}

function resetGame(){
  var elemToShow = [viewScore,countDown,quizHeader,startButton];
  var elemToHide = [gameYesNo,compScoreSection,postResults,compScoreArea];

  for (var eshow of elemToShow){
    // var displayElem = document.getElementById(string_id);
    if (eshow.style.display === "none") {eshow.style.display = "block"}else{eshow.style.display = "block"}
  }

  for (var ehide of elemToHide){
    if (ehide.style.display === "block") {ehide.style.display = "none"}else{ehide.style.display = "none"}
  }
}

resetGame();

//   displayElem.style.display = "block";
//   displayElem.style.display = "none";

//   var completeScoreBoard = document.getElementById('complete-score-board');
//   var quizButtons = document.getElementById('q-buttons');
  
 
//   var score_timer = document.getElementsByClassName('.score-timer');
//   var viewScore = document.getElementById('viewScore');
//   var countDown = document.getElementById('counter');
//   var compScoreSection = document.getElementById('complete-scores');
  
//   var quizHeader = document.getElementById('quizHdr');
//   var startButton = document.getElementById('begin-button');
//   var resultQuiz = document.getElementById('result');
//   var gamerInits = document.getElementById('set-initials');
//   var postResults = document.getElementById('post-results');

//   gamerInits.value = '';



  // var scoreContainer = document.createElement('div');
  // var scoreInitials = document.createElement('textarea');
  // var scoreButton = document.createElement('div');
  // scoreContainer.appendChild(scoreInitials);
  // scoreContainer.appendChild(scoreButton);
  // scoreContainer.setAttribute('id','adding-initials');
  // scoreInitials.setAttribute('id','set-initials');
  // scoreInitials.setAttribute('placeholder','Enter Your Initials');
  // scoreButton.setAttribute('id','initials-button');
  // scoreButton.setAttribute('onclick','submitScoreToBoard');
  // scoreButton.textContent = 'Submit';
  // body.appendChild(scoreContainer);
// }
// for (const [key, value] of Object.entries(object)) {
//   console.log(key, value);
// }
// var hash = {}
// hash[key] = value
// Object.keys(hash).forEach(function (key) { 
//     var value = hash[key]
//     // iteration code
// })
