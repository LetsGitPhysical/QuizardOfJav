
var quizSet = ['which box-sizing method includes total width and height?',
                'which of these functions count the elements of an object?',
                'Which of these character strings enclose as array?',
                'What would you use to print the result in the console section?'];
var answerKey = ['border-box','length','[]','console.log()'];
var boxSet1 = ['bird-box',answerKey[0],'box-it-up','brick'];
var boxSet2 = ['foot','meter','ruler',answerKey[1]];
var boxSet3 = [answerKey[2],'()','{}','snakes'];
var boxSet4 = ['listen.()','.itunes()',answerKey[3],'run.print()'];
var boxSet = [boxSet1,boxSet2,boxSet3,boxSet4];
var answers = ['Wrong','Wrong','Correct','Wrong'];

var nextQuiz = document.createElement("h2");

//-------------  testing the quizNum incrementally here, so now to make more dynamic
//-------------  and can complete the function of right answers, calc score..

var quizNum = 1; 

//-------------------------------------------------------------------------

nextQuiz.textContent = quizSet[quizNum];

var listEl = document.createElement("ul");
var nextChoice = boxSet[quizNum];
for (var i = 0; i < nextChoice.length; i++) {
    var li = document.createElement("li");
    li.textContent = nextChoice[i];
    li.setAttribute('data-state',nextChoice[i]);
    listEl.appendChild(li);
}

var generateBtn = document.querySelector('.newButtons');
generateBtn.appendChild(nextQuiz);
generateBtn.appendChild(listEl);

var newAnswer = answerKey[quizNum];
generateBtn.addEventListener("click", function(event) {
  var element = event.target;
  if (element.matches("li")) {
    var boxChoice = element.getAttribute("data-state");
    if (boxChoice === newAnswer){
        console.log('Correct')
    } else {
        console.log('Wrong')
    }
  }
});


