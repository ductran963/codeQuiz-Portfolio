var startButtonEl = document.getElementById('start-btn');
var descriptionEl = document.getElementById('description');
var titleEl = document.getElementById('title');
var questionContainerEl = document.getElementById('question-container');
var questionEl = document.getElementById('question');
var answerButtonEl = document.getElementById('answer-buttons');
var answerEl = document.getElementsByClassName('btn');
var answerRevealEl = document.getElementById('answer-reveal');
var timeEl = document.getElementById('time');
var endScreenEl = document.getElementById('endScreen');
var lineBreakEl = document.getElementById('lineBreak');
var userScoreEl = document.getElementById('user-score');
var highScoreScreenEl = document.getElementById('highScore');
var submitButtonEl = document.getElementById('submit');
var tryAgainBtnEl = document.getElementById('tryAgainBtn');

startButtonEl.addEventListener('click', startGame);

var currentQuestionIndex = 0;
var secondsLeft = 76;


function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = 'Time: ' + secondsLeft;

      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        sendMessage();
      }


    }, 1000);
}

function sendMessage() {
    timeEl.textContent = " ";
    alert('You ran out of time. Please refresh the page to try again');
  }


//el.innerHTML("")
//el.empty();
function startGame() {

  startButtonEl.classList.add('hide');
  descriptionEl.classList.add('hide');
  titleEl.classList.add('hide');
  questionContainerEl.classList.remove('hide');
  nextQuestion1(questions[currentQuestionIndex]);
  setTime();


}

function nextQuestion1(questions) {
  
  questionEl.innerText = questions.title;
  for (var i = 0; i < questions.choices.length; i++) {
    answerEl[i].textContent = questions.choices[i];
  }
  //ON THIS PART
  answerButtonEl.addEventListener('click', nextQuestion2);
  


}

//when clicked on answer, write a loop  that prints all the title and a loop to
//remove old stuff
//update question
//update choices
//log answer choice

function nextQuestion2() {
  questionEl.innerText = questions[1].title;
  for (var i = 0; i < questions[1].choices.length; i++) {
    answerEl[i].textContent = questions[1].choices[i];
  }
  answerButtonEl.addEventListener('click', nextQuestion3);
}

function nextQuestion3() {
  questionEl.innerText = questions[2].title;
  for (var i = 0; i < questions[2].choices.length; i++) {
    answerEl[i].textContent = questions[2].choices[i];
  }
  answerButtonEl.addEventListener('click', nextQuestion4);
}

function nextQuestion4() {
  questionEl.innerText = questions[3].title;
  for (var i = 0; i < questions[3].choices.length; i++) {
    answerEl[i].textContent = questions[3].choices[i];
  }
  answerButtonEl.addEventListener('click', nextQuestion5);
}

function nextQuestion5() {
  questionEl.innerText = questions[4].title;
  for (var i = 0; i < questions[4].choices.length; i++) {
    answerEl[i].textContent = questions[4].choices[i];
  }
  answerButtonEl.addEventListener('click', endScreen);

}

function endScreen () {
  endScreenEl.classList.remove('hide');
  questionEl.classList.add('hide');
  answerButtonEl.classList.add('hide');
  
  lineBreakEl.classList.add('hide');
  renderSubmittedScore();
  submitButtonEl.addEventListener('click', submitScore);
  
}

function renderSubmittedScore() {
  var score = localStorage.getItem('score');
  if (score === null) {
    return;
  }
  userScoreEl.textContent = score;
  
}

function submitScore (event) {
  event.preventDefault();
  
  
  var submittedScore = document.querySelector('#textarea').value;
  localStorage.setItem('score', submittedScore);
  renderSubmittedScore();
  
  highScoreScreenEl.classList.remove('hide');
  endScreenEl.classList.add('hide');
}


//select answer choice
//compare to real answer
//output Correct/ Wrong
function selectedAnswer(event) {
  var selectedButton = event.target.value;
  var correctAnswer = questions[0].answer;
  if (selectedButton === correctAnswer) {
      console.log("correct");
  }
  else {
    secondsLeft = secondsLeft - 5;
  }

}






var questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
  },
  {
    title: "Which of the following type of variable is visible only within a function where it is defined?",
    choices: ["global variable", "local variable", "A and B", "None of the Above"],
    answer: "local variable"
  },
  {
    title: "What does console.log('hello world') prints on the web browser console?",
    choices: ["hello world", "john cena", "console.log", "pizza"],
    answer: "hello world"
  },
  {
    title: "What is the HTML tag under which one can write the JavaScript code?",
    choices: ["<javascript>", "<scripted>", "<script>", "<js>"],
    answer: "<script>"
  },

];