// Array of Objects containing questions, answer choices, and correct answers
var questions = [ 
    {
    quest: "What is the name of the main character in 'The Big Lebowski'?",
    choices: ["The Man", "The Boss", "The Dude"],
    answer: "The Dude",
    imgUrl: "../images/dude-dance.gif"
    },
    {
    quest: "What is the Dude's favorite beverage?",
    choices: ["White Russian", "Manhattan", "Mint Julep"],
    answer: "White Russian",
    imgUrl: "../images/white-russian.gif"
    },
    {
    quest: "Who narrates 'The Big Lebowski?",
    choices: ["Morgan Freeman", "Sam Elliott", "Gary Busey"],
    answer: "Sam Elliott",
    imgUrl: "../images/sam-elliott.gif"
    },
    {
    quest: "What really ties the room together?",
    choices: ["good lighting", "a rug", "a couch"],
    answer: "a rug",
    imgUrl: "../images/rug.gif"
    },
    {
    quest: "What is the name of the Dude and Walter's friend?",
    choices: ["Donny", "Jackie", "Arthur"],
    answer: "Donny",
    imgUrl: "../images/donny.gif"
    },
    {
    quest: "What famous musician makes a cameo in the movie?",
    choices: ["Marky Mark", "Dave Grohl", "Flea"],
    answer: "Flea",
    imgUrl: "../images/flea.gif"
    },
    {
    quest: "Who do the Dude and Walter accuse of stealing the car?",
    choices: ["Johnny", "Larry", "Harry"],
    answer: "Larry",
    imgUrl: "../images/larry.gif"
    },
    {
    quest: "Who do you not mess with?",
    choices: ["Malibu Police", "Smokey", "The Jesus"],
    answer: "The Jesus",
    imgUrl: "../images/jesus.gif"
    },
    {
    quest: "What does Walter use for Donny's urn?",
    choices: ["bucket", "coffee can", "carboard box"],
    answer: "coffee can",
    imgUrl: "../images/coffee-can.gif"
    }
]

var counter = 20;
var startButton = $("<button class ='start'>Let's Go Bowling</button>");
var answerChosen;
var correctScore
var incorrectScore
var unansweredScore

$(document).ready(function(){

    $("#start-page").append(startButton);
    $("#question-page").hide();
    $("#answer-page").hide();
    $("#result-page").hide();
    $(document).on("click", ".start", playGame);

})

// TIMER
function countdown () {
    counter--;
    if (counter >= 0) {
        $("#timer").text("Time Remaining: " + counter)
    }
    if (counter === 0) {
        clearInterval(counter);
        showAnswer();
    }
    }

    setInterval(countdown, 1000);


// STARTS THE GAME
function playGame () {

// Remove start page content, add question page content
    $("#start-page").hide();
    $("#answer-page").hide();
    $("#result-page").hide();
    $("#question-page").show();

// ask question
    $("#question").text(questions[0].quest);
    
// show answer choices
        $("#answer-option1").append("<button class='answer-btn1'>");
        $("#answer-option2").append("<button class='answer-btn2'>");
        $("#answer-option3").append("<button class='answer-btn3'>");
        $(".answer-btn1").text(questions[0].choices[0]);
        $(".answer-btn2").text(questions[0].choices[1]);
        $(".answer-btn3").text(questions[0].choices[2]);

// click event listener
    $(".answer-btn1, .answer-btn2, .answer-btn3").on("click", function(){
        showAnswer();
    })
}
    

    //                 $(".answer-image").attr("src", gifAnswer);

    


// move to answer page
function showAnswer () {
    $("#question-page").hide();
    $("#answer-page").show();

    var correctAnswer = questions[0].answer;
    answerChosen = $(this).text(questions[0].choices[0]);
    console.log(this);

    if (answerChosen == correctAnswer) {
        correctScore++;
        $("#yes-no").text("Correct. The Dude Abides.");
    }
    if (answerChosen != correctAnswer) {
        incorrectScore++;
        $("#yes-no").text("Incorrect. That's just your opinion, man.");
    }
    else {
        unansweredScore++;
        $("#yes-no").text("Are you awake man?");
    }

    function resetGame () {
        $("#question").empty();
        $("#answer-option1").empty();
        $("#answer-option2").empty();
        $("#answer-option3").empty();
        clearInterval(counter);
        counter = 20;
        playGame();
    }

    setTimeout(resetGame, 1000 * 5);
    
}

// function to display final score
function showResults () {
    $("#answer-page").hide();
    $("#result-page").show();

    $("#correct").text("Correct Answers: " + correctScore);
    $("#incorrect").text("Incorrect Answers: " + incorrectScore);
    $("#unanswered").text("Unanswered Questions: " + unansweredScore);

    $("#reset").append("<button class='reset-btn'>")
    $(".reset-btn").text("Start Over?");

    $(".reset-btn").on("click", function() {
        playGame();
    })
}








