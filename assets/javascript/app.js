// Array of Objects containing questions, answer choices, and correct answers
var questions = [ 
    {
    quest: "What is the name of the main character in 'The Big Lebowski'?",
    choices: ["The Man", "The Boss", "The Dude"],
    answer: "The Dude",
    imgUrl: "assets/images/dude-dance.gif"
    },
    {
    quest: "What is the Dude's favorite beverage?",
    choices: ["White Russian", "Manhattan", "Mint Julep"],
    answer: "White Russian",
    imgUrl: "assets/images/white-russian.gif"
    },
    {
    quest: "Who narrates 'The Big Lebowski?",
    choices: ["Morgan Freeman", "Sam Elliott", "Gary Busey"],
    answer: "Sam Elliott",
    imgUrl: "assets/images/sam-elliott.gif"
    },
    {
    quest: "What really ties the room together?",
    choices: ["Good Lighting", "A Rug", "A Couch"],
    answer: "A Rug",
    imgUrl: "assets/images/rug.gif"
    },
    {
    quest: "What is the name of the Dude and Walter's friend?",
    choices: ["Donny", "Jackie", "Arthur"],
    answer: "Donny",
    imgUrl: "assets/images/donny.gif"
    },
    {
    quest: "What famous musician makes a cameo in the movie?",
    choices: ["Marky Mark", "Dave Grohl", "Flea"],
    answer: "Flea",
    imgUrl: "assets/images/flea.gif"
    },
    {
    quest: "Who do the Dude and Walter accuse of stealing the car?",
    choices: ["Johnny", "Larry", "Harry"],
    answer: "Larry",
    imgUrl: "assets/images/larry.gif"
    },
    {
    quest: "Who do you not mess with?",
    choices: ["Malibu Police", "Smokey", "The Jesus"],
    answer: "The Jesus",
    imgUrl: "assets/images/jesus.gif"
    },
    {
    quest: "What does Walter use for Donny's urn?",
    choices: ["Bucket", "Coffee Can", "Carboard Box"],
    answer: "Coffee Can",
    imgUrl: "assets/images/coffee-can.gif"
    }
]

var counter = 15;
var startButton = $("<button class ='start'>Let's Go Bowling</button>");
var answerChosen;
var correctAnswer;
var correctScore = 0;
var incorrectScore = 0;
var unansweredScore = 0;
var i = 0;
var timeout;

var qOne = questions.indexOf();

$(document).ready(function(){

    $("#start-page").append(startButton);
    $("#question-page").hide();
    $("#answer-page").hide();
    $("#result-page").hide();
    $(".start").on("click", function () {
        // setInterval(countdown, 1000);
        playGame();
    })

})



// STARTS THE GAME
function playGame () {

    console.log(answerChosen);
    console.log(i);

// Remove start page content, add question page content
    $("#start-page").hide();
    $("#answer-page").hide();
    $("#result-page").hide();
    $("#question-page").show();

// TIMER

var timer = setInterval(countdown, 1000);

function countdown () {
    counter--;
    if (counter >= 0) {
        $("#timer").text("Time Remaining: " + counter);
    }
    if (counter === 0) {
        clearInterval(timer);
        showAnswer();
    }
    }

// ask question as long as all questions have not been asked
    if (i >= 9) {
        showResults();
    }
    else {
        $("#question").text(questions[i].quest);
    }

// show answer choices
        $("#answer-option1").append("<button class='answer-btn1'>");
        $("#answer-option2").append("<button class='answer-btn2'>");
        $("#answer-option3").append("<button class='answer-btn3'>");
        $(".answer-btn1").text(questions[i].choices[0]);
        $(".answer-btn2").text(questions[i].choices[1]);
        $(".answer-btn3").text(questions[i].choices[2]);
    
// click event listener
    $(".answer-btn1, .answer-btn2, .answer-btn3").on("click", function(){
        answerChosen = $(this).text();
        clearInterval(timer);
        console.log(answerChosen);
        showAnswer();
        
    })
}

// move to answer page
function showAnswer () {
    $("#question-page").hide();
    $("#answer-page").show();

    correctAnswer = questions[i].answer;
    gifAnswer = questions[i].imgUrl;

    console.log(correctAnswer);
    console.log(answerChosen);

    if (answerChosen === correctAnswer) {
        correctScore++;
        $("#yes-no").text("Correct. The Dude Abides.");
        $("#correct-answer").text("Answer: " + correctAnswer);
        $(".answer-image").attr("src", gifAnswer);
    }
    else if (answerChosen === undefined) {
        unansweredScore++;
        $("#yes-no").text("Are you awake man?");
        $("#correct-answer").text("Answer: " + correctAnswer);
        $(".answer-image").attr("src", gifAnswer);
    }
    else if (answerChosen !== correctAnswer) {
        incorrectScore++;
        $("#yes-no").text("Incorrect. That's just your opinion, man.");
        $("#correct-answer").text("Answer: " + correctAnswer);
        $(".answer-image").attr("src", gifAnswer);
    }

    timeout = setTimeout(resetGame, 1000 * 5);
}

// function to reset game between rounds
function resetGame () {
    $("#question").empty();
    $("#answer-option1").empty();
    $("#answer-option2").empty();
    $("#answer-option3").empty();
    $("#yes-no").empty();
    // correctAnswer;
    answerChosen = undefined;
    clearInterval(timer);
    counter = 15;
    i++;
    playGame();
}

// function to start the game over
function newGame () {
    correctScore = 0;
    incorrectScore = 0;
    unansweredScore = 0;
    i = -1;
    resetGame();
}

// function to display final score
function showResults () {
    $("#answer-page").hide();
    $("#question-page").hide();
    $("#result-page").show();

    counter = 0;
    clearInterval(timer);
    clearInterval(timeout);

    $("#correct").text("Correct Answers: " + correctScore);
    $("#incorrect").text("Incorrect Answers: " + incorrectScore);
    $("#unanswered").text("Unanswered Questions: " + unansweredScore);

    $("#reset").append("<button class='reset-btn'>");
    $(".reset-btn").text("Start Over?").on("click", function() {
        newGame();
    })
}