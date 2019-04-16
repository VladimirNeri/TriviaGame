

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
