//--------  create elememts global
var completeScoreBoard = document.getElementById('complete-score-board');
var quizButtons = document.getElementById('q-buttons');
var scoreTracker = 0;
var quizBegin = false;
//----------------------  Get Elements global
var score_timer = document.getElementsByClassName('.score-timer');
var viewScore = document.getElementById('viewScore');
var vhiSwitch = viewScore.getAttribute('viewTxt');
var vhiVal = viewScore.getAttribute('viewHi');
var vhiDef = 'View Hi Score';
var countDown = document.getElementById('counter');
var compScoreSection = document.getElementById('complete-scores');
var compScoreArea = document.getElementById('score-area');
var quizHeader = document.getElementById('quizHdr');
var startButton = document.getElementById('begin-button');
var resultQuiz = document.getElementById('result');
var gamerInits = document.getElementById('set-initials');
var postResults = document.getElementById('post-results');
var gameYesNo = document.getElementById('game-yes-no');

//---------------------  Selectors global
var qContain = document.querySelector('.container');

//--------------------- data -------------------------------------------------------------------
var quizIntro = 'Will you be "Out of Touch?" or "Out of Time?" with this Quiz. Let\'s find out!';
quizHeader.textContent = quizIntro;
let quizard = { 
  q1  : {Quest : 'Which box-sizing method includes total width and height?',              Choice : ['bird-box','border-box','boom-bastic','box-it-up'],                       Answer : 'border-box'},
  q2  : {Quest : 'Which of these properties is used to count the elements of an object?', Choice : ['foot','meter','ruler','length'],                                         Answer : 'length'},
  q3  : {Quest : 'Which of these character strings enclose as array in JavaScript?',      Choice : ['[ ]','( )','{ }','+ +'],                                                 Answer : '[ ]'},
  q4  : {Quest : 'What would you use to print the result in the console section?',        Choice : ['console.listen()','console.branch()','console.log()','debug.print()'],   Answer : 'console.log()'},
  q5  : {Quest : 'In both Movies Top-Gun 1 & 2, Who was the Best Pilot?',                 Choice : ['Goose','Maverick','Viper','Ice-Man'],                                    Answer : 'Ice-Man'},
  q6  : {Quest : 'Which is not a function you can not apply to an array',                 Choice : ['shift','push','smash','pop'],                                            Answer : 'smash'},
  q7  : {Quest : 'if var x = 5 and var x = 50 in same scope, what is x?',                 Choice : ['5','50','55','125'],                                                     Answer : '50'},
  q8  : {Quest : 'if let x = 5 and let x = 50 in same scope, what is x?',                 Choice : ['5','50','55','125'],                                                     Answer : '5'},
  q9  : {Quest : 'difference between id and class in HTML?',                              Choice : ['id is unique','class has students','drive w/ drive to','all the above?'],Answer : 'id is unique'},
  q10 : {Quest : 'which these methods in javascript is used for a unique element',        Choice : ['justFindItWillYa','setElegantByMe','getRelevantId','getElementById'],    Answer : 'getElementById'}
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

// var quizNumber = 0;
// var quizLength = quizSet.length;
// 5 seconds per question, if you want to add more
// Updates count on page
// displayNB('adding-initials');

let scoreDict = {};
var finScore = 0;
var gameCnter = 1;


//------------------------------------------------------------------------------
function takeQuiz(q){
  qNum = q+1;
  document.body.style.backgroundImage = "url('./assets/pics/hall-oates-" + qNum +".jpg'),linear-gradient(180deg, rgba(255,255,255,.6) 0%, rgba(255,255,255,.6) 100%)";
  document.body.style.backgroundSize = 'contain';

  resultQuiz.textContent = '';
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

var timeLeft = 5 * quiz_count;

function startTimer() {
  viewScore.textContent = vhiDef;
  timeLeft = 5 * quiz_count;
  var timeInterval = setInterval(function () { //--- setInterval(function() {..if-else,clearInterval()..},1000) 
    timeLeft--;
    if (timeLeft > 1 && qNum > quiz_count) {
      countDown.textContent = "You Finished with "+ timeLeft + " Seconds Left!!";
      clearInterval(timeInterval);            //--- clearInterval()` to stop the timer
    } else if(timeLeft <= 0){
      countDown.textContent = "Time Ran Out!!";
      clearInterval(timeInterval);             //--- clearInterval()` to stop the timer 
      gameOver();
    } else {
      countDown.textContent = 'Time Remaining: ' + timeLeft;
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

//------------------------------------------------------------------------------
var qky = quizKeys[qCntr];
var qBoxIds = []; // ' qBox_0, qBox_1, qBox_2, qBox_3 '
function beginSetup(){  // begin button
  display('begin-button');
  display('q-buttons');
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

//------------------------------------------------------------------------------


var qChoiceBox = document.querySelector('.q-buttons');
qChoiceBox.addEventListener("click", function(event) {
  var choiceElem = event.target;
  if (choiceElem.matches("li")) {
    qky = quizKeys[qCntr]; // q1,q2,q3,q4,q5,q6
    var choiceTxt = choiceElem.textContent;
    var quizA = quizard[qky]['Answer'];
    var hasKey = Boolean(qky in scoreDict);
    if(quizA === choiceTxt)  {
      resultQuiz.textContent = 'Correct!';
      if (hasKey === false) { scoreDict[qky]=1 }
      qCntr += 1;
      console.log('qCntr in listener',qCntr);
      takeQuiz(qCntr);
    } else {
    if (quizA !== choiceTxt){
      resultQuiz.textContent = 'Wrong! Minus 15 secs Penalty!';
      timeLeft -= 15;
      if (hasKey === false){ scoreDict[qky]=0 }
      }

    }};
});
function HallAndOats(){
  var HallOates = document.createElement('img');
  HallOates.setAttribute('id','hall-and-oates');
  quizHeader.appendChild(HallOates);
  if(timeLeft > 0){
    if(finScore >= 90){
      HallOates.src = './assets/pics/hi_score.gif';
    }else if(finScore < 70){
      HallOates.src = './assets/pics/lo_score.gif';
    }else{
      HallOates.src = './assets/pics/could_do_better.jpg';
    }
  }
  if (timeLeft === 0){
    HallOates.src = './assets/pics/out_of_touchtime.gif';
  }
}
function gameOver(){
  var qboxesUL = document.getElementById('ul-choice-boxes');
  qboxesUL.remove();
  quizHeader.textContent = "";
  var ansCorrect = 0;
  for (var sdVal of Object.values(scoreDict)){
    finScore += sdVal; // console.log('vals: ',sdV);
    ansCorrect += sdVal;
  }
  finScore = 100*(finScore/quiz_count).toPrecision(3);
  resultQuiz.textContent = 'You Scored: ' + finScore.toFixed(2) + '%  ('+ ansCorrect + ' correct out of '+ quiz_count +' questions)';
  HallAndOats();
  display('post-results');

}

function submitScoreToBoard(){
  var gamerTxt = gamerInits.value;
    if (gamerTxt !== ''){
        var hallOatesPic = document.getElementById('hall-and-oates');
        hallOatesPic.remove();
        display('quizHdr');
        var gmeKey = 'game_'+ gameCnter;
        var scoreRank = finScore + (timeLeft/100); 
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
  display('complete-scores');
  display('post-results');
  var UL_Scores = document.createElement('ul'); 
  UL_Scores.setAttribute('id','ul-scores-list');
  UL_Scores.textContent = 'Rank  --  Player  --  Score';
  compScoreArea.appendChild(UL_Scores);
  var UL_ScoresExit = document.createElement('div');
  UL_ScoresExit.textContent = 'Close';
  UL_ScoresExit.setAttribute('id','exit-scoreboard-button');
  UL_ScoresExit.setAttribute('onclick','closeScoreboard()');
  compScoreArea.appendChild(UL_ScoresExit);
  let theRankings = sortByRank();
  var hiKey = theRankings[0][0];
  var hiPlyer = scoreBoardDict[hiKey]['player'];
  var hiScr = scoreBoardDict[hiKey]['score'];
  var viewHiText = 'Player ' + hiPlyer + ' scored ' + hiScr.toFixed(3) +'%' ;
  viewScore.setAttribute('viewHi',viewHiText);
  for(var i=0; i<theRankings.length; i++){
    var gm = theRankings[i][0];
    var plyr = scoreBoardDict[gm]['player'];
    var plscr = scoreBoardDict[gm]['score'];
    var plrnk = i+1;
    var li_scores = document.createElement('li');  
    li_scores.setAttribute('class','li-scores-list');
    li_scores.textContent = "  " + plrnk + "  -----  " + plyr  + " -----  " + plscr.toFixed(3) + '% ';
    UL_Scores.appendChild(li_scores);
  }
  display('score-area');
}

function hiScore(){
  var vhiScore = document.getElementById('viewScore');
  var vhiSwitch = vhiScore.getAttribute('viewTxt');
  var vhiVal = vhiScore.getAttribute('viewHi');
  if(vhiSwitch === 'no'){
    vhiScore.textContent = vhiVal;
    vhiScore.setAttribute('viewTxt','yes');
  } else {
    vhiScore.textContent = vhiDef;
    vhiScore.setAttribute('viewTxt','no');
  }
}

function closeScoreboard(){
  var delScoreBoard = document.getElementById('ul-scores-list');
  var delCloseBttn = document.getElementById('exit-scoreboard-button');
  delScoreBoard.remove();
  delCloseBttn.remove();
  display('score-area');
  display('game-yes-no');
}

function playAgain(t){ 
  if(t === 'y'){
    // play again
    resetGame();
    beginSetup();
  }else{
    // end and clear game
    viewScore.setAttribute('viewTxt','no');
    viewScore.setAttribute('viewHi','None..Could be You?');
    scoreBoardDict = {};
    gameCnter = 1;
    resetGame();
  }
}


function resetGame(){
  document.body.style.backgroundImage = "url('./assets/pics/hall-oates-begin.jpg'),linear-gradient(180deg, rgba(255,255,255,.6) 0%, rgba(255,255,255,.6) 100%)";
  document.body.style.backgroundSize = 'contain';
  document.body.style.backgroundColor = 'rgba(185,112,58,.25)';
  viewScore.textContent = '';
  countDown.textContent = '';
  quizHeader.textContent = quizIntro;
  gamerInits.value = '';
  scoreDict = {};
  finScore = 0;
  var elemToShow = [quizHeader,startButton];
  var elemToHide = [quizButtons,gameYesNo,compScoreSection,postResults,compScoreArea];
  for (var eshow of elemToShow){
    // var displayElem = document.getElementById(string_id);
    if (eshow.style.display === "none") {eshow.style.display = "block"}else{eshow.style.display = "block"}
  }
  for (var ehide of elemToHide){
    if (ehide.style.display === "block") {ehide.style.display = "none"}else{ehide.style.display = "none"}
  }
}

resetGame();  // initial load

