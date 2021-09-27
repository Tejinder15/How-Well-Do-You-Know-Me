var readlineSync = require('readline-sync');
var chalk = require('chalk');

var score = 0; //variable storing score

console.log(chalk.green("Let's see how well you know Tajinder"));

var userName = readlineSync.question('Please enter your name: ');

//function to run questions
function play(question) {

  console.log(`\n` + question.question);
  console.log("Your options are:- ");

  //loop to loop through options of questions
  for (var i = 0; i < 4; i++) {
    console.log(`[${i + 1}].`, question.options[i])
  }

  var userAns = readlineSync.question(`Enter correct option: `);

  if (userAns < 5) {//to check valid option

    if (userAns === question.answer) {
      score = score + 1;
      console.log(chalk.green("Correct!"))
    }

    else {
      console.log(chalk.red("Wrong!"))
    }

  }
  else {
    console.log(chalk.red("Please enter valid options no!"))
  }
  console.log("Your score: " + chalk.green(score));
}

var questions = [
  {
    question: "whats Tajinder's birthday month?",
    options: ["february", "August", "april", "november"],
    answer: "2"
  },
  {
    question: "Who is Tajinder's Favorite Music Producer?",
    options: ["Dr Dre", "Scott Storch", "Byg Byrd", "TheKidd"],
    answer: "1"
  },
  {
    question: "Which mobie phone does Tajinder uses?",
    options: ["asus", "apple", "samsung", "oppo"],
    answer: "1"
  },
  {
    question: "What's Tajinder favorite mobile game?",
    options: ["Pubg", "Cod", "Walk master", "Clash of Clans"],
    answer: "2"
  },
  {
    question: "Birth Date of Tajinder?",
    options: ["16", "19", "17", "18"],
    answer: "4"
  }
]

var otherPlayers = [
  {
    name: "daring bhai",
    score: 3
  },
]

for (var i = 0; i < questions.length; i++) {
  play(questions[i]);
}

otherPlayers.push({ name: userName, score: score });

console.log("\n********** SCORES OF OTHER PLAYERS **********")
for (var i = 0; i < otherPlayers.length; i++) {
  console.log('\nname:', otherPlayers[i].name);
  console.log('score:', chalk.green(otherPlayers[i].score));
}
