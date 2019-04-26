

// Variables for timer
var intervalId;
var timeLeft;
var questionCounter = 0;

// Variables for Correct and Incorrect counters //
var correctAnswerCounter = 0;
var incorrectAnswerCounter = 0;
var unansweredCounter = 0;

var arrayOfQuestions = [

  {
      question: 'What is the term for a zero score in tennis?',
      choices: ['Love', 'Let', 'Skunk', 'Ace', 'Let'],
      answer: "Love"
  },

  {
      question: 'How long was the longest singles match in recorded tennis history?',
      choices: ['11 hours, 5 minutes', '6 hours, 33 minutes', '7 hours, 12 minutes', '8 hours, 49 minutes'],
      answer: "11 hours, 5 minutes"
  },

  {
      question: 'Who was the first unseeded player to win Wimbledon?',
      choices: ['Boris Becker', 'Richard Krajicek', 'Bjorn Borg', 'Michael Chang'],
      answer: "Boris Becker"
  },

  {
      question: 'What is the name for the left side of the tennis court for each player?',
      choices: ['ad court', 'od court', 'deuce court', 'base court'],
      answer: "ad court"
  },

  {
      question: 'What year was tennis originally introduced as an Olympic sport?',
      choices: ['1896', '1924', '1968', '1988'],
      answer: "1896"
  },

  {
      question: 'Who holds the men\'s record for most singles Grand Slam Titles?',
      choices: ['Roger Federer', 'Pete Sampras', 'Rafael Nadal', 'Novak Djokovic', 'Bjorn Borg'],
      answer: "Roger Federer"
  },

  {
      question: 'Who is the youngest men\'s singles Grand Slam champion?',
      choices: ['Michael Chang', 'Boris Becker', 'Lleyton Hewitt', 'Rafael Nadal'],
      answer: "Michael Chang"
  },

  {
      question: 'What surface is Wimbledon played on?',
      choices: ['Grass', 'Clay', 'Cement', 'Astroturf'],
      answer: "Grass"
  },

  {
      question: 'What is the nickname of the No. 2 court at Wimbledon?',
      choices: ['Graveyard of Champions', 'Winner\'s Court', 'Court of the Irish', 'No Man\'s Land'],
      answer: "Graveyard of Champions"
  },

  {
      question: 'Who did John McEnroe defeat in the final to win his first Wimbledon singles title?',
      choices: ['Bjorn Borg', 'Jimmy Connors', 'Chris Lewis', 'Kevin Curren'],
      answer: "Bjorn Borg"
  }

];

//Starts Game 
function startGame() {
    stop();
    $('#contentArea').html('');
    var startbutton = $("<div><button id='startbutton'>Start</button></div>");
    $("#contentArea").append(startbutton);
    $(startbutton).on("click", function() {
      question();
  });
}

startGame();

//clears intervalid
function stop() {
  clearInterval(intervalId);
}

//sets the time interval for 15 seconds
function run() {
  timeLeft = 15;
  intervalId = setInterval(decrement, 1000);
  console.log(intervalId);
}

//Decreases number by one and shows the number in timer tag
function decrement() {
    timeLeft--;
    $("#timer").html("<h3>Time Left: " + timeLeft + "</h3>");
    if (timeLeft === 0) {
        stop();
        unansweredScreen(arrayOfQuestions[questionCounter]);
        unansweredCounter++;
        questionCounter++;
    }
};

    $("#contentArea").on("click", ".answer", function() {
        console.log("Incorrect!");
        incorrectAnswerCounter++;
        incorrectScreen(arrayOfQuestions[questionCounter]);
        questionCounter++;
    })

    $("#contentArea").on("click", "#correct", function() {
        console.log("Correct!");
        correctAnswerCounter++;
        correctScreen();
        questionCounter++;
    })

function question() {
    if (questionCounter >= arrayOfQuestions.length) {
        results();
        questionCounter = 0
  } else {
      var newquestion = questionGenerator(arrayOfQuestions[questionCounter]);
      $('#contentArea').html('');
      $('#contentArea').append(newquestion);
      run();
  }
}

function questionGenerator(questionObj) {
    var question = questionObj.question;
    var choices = questionObj.choices;

  // Delete all of the content in the area//

    console.log("Content deleted");
    var questionContainer = $("<div id='q-container'>")

  // Place content for Question One below//

    var questionDiv = $("<div id='question'></div>");

    questionDiv.html("<h4>" + question + "</h4>");
    questionContainer.append(questionDiv);
  
    var sort = [];
    for (var i = 1; i < choices.length; i++) {
       sort.push("<p class='answer'><button>" + choices[i] + "</button></p>")     
    }
    
    sort.push("<p id='correct'><button>" + choices[0] + "</button></p>");
    sort.sort(function() { return 0.5 - Math.random() });
    questionContainer.append(sort);
    console.log(sort);
    return questionContainer;

};

function results() {

  stop();
  $('#contentArea').html('');
    var resultsUnanswered = '<h4 class="results"">Number of unanswered questions: ' + unansweredCounter + '</h4>';
    var resultsCorrect = '<h5 class="results">Number of correct answers: ' + correctAnswerCounter + '</h5>';
    var resultsIncorrect = '<h6 class="results">Number of incorrect answers: ' + incorrectAnswerCounter + '</h6>';
  
      $("#contentArea").append(resultsCorrect);
      $("#contentArea").append(resultsIncorrect);
      $("#contentArea").append(resultsUnanswered);
  
  var restartButton = $("<div><button id='restartButton'>Restart</button></div>");
  
      $("#contentArea").append(restartButton);

  $(restartButton).on("click", function() {
      console.log("hi");
      //Run question 1
      correctAnswerCounter = 0;
      incorrectAnswerCounter = 0;
      unansweredCounter = 0;
      question();
      })
  }

function correctScreen() {
    stop();
    $('#show_timer').html(" ");
    $('#contentArea').html("<p class='screens'>That answer is correct!</p>");
    setTimeout(question, 3000);
}

function incorrectScreen(quesObj) {
    stop();
    $('#show_timer').html(" ");
    $('#contentArea').html("<p class='screens'>That answer is incorrect! The correct answer is: " + quesObj.answer + "</p>");
    setTimeout(question, 3000);
}

function unansweredScreen(questObj) {
    stop();
    $('#show_timer').html(" ");
    $('#contentArea').html("<p class='screens'>No answer chosen! The correct answer is: " + questObj.answer + "</p>");
      setTimeout(question, 3000);
}

