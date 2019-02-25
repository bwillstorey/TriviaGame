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

    }
    }

setInterval(countdown, 1000);


// STARTS THE GAME
function playGame () {

// Remove start page content, add question page content
    $("#start-page").hide();
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
    $("button").on("click", function(){
        
    })
}
    // // Load question
    // for (var i = 0; i < questions.length; i++) {
    //     var currentQuestion = questions[i].quest;
    //     $("#question").text(currentQuestion);
    //     console.log(currentQuestion);
    //     console.log (questions.length);


    //     // load answer options
    //     for (var x = 0; x < 3; x++) {
    //         var currentAnswers = questions[i].choices[x];
    //         $("#answer-options").append("<button class='ans-btn'></button>");
    //         $(".ans-btn").text(currentAnswers);
    //     }
    //     if (counter >= 0) {
            
    //     }
        

    //     // click listener for user answer
    //     function checkAnswer() {
    //         $("button").on("click", function(){
    //             var correctAnswer = questions[i].answer
    //             var gifAnswer = questions[i].imgUrl;
    //             answerChosen = $(this).text(questions[i].answer);
    
    //             if (answerChosen === correctAnswer) {
    //                 showAnswer()
    //                 $("#yes-no").text("The Dude Abides");
    //                 $("#correct-answer").text(correctAnswer);
    //                 $(".answer-image").attr("src", gifAnswer);
    //             }
    //             else if (answerChosen !== correctAnswer) {
    
    //             }
    //         })
    //     }
        
        
    // }    


// move to answer page
function showAnswer () {
    $("#question-page").hide();
    $("#answer-page").show();

    setTimeout(1000 * 8);
    i++;
    playGame()
}

function showResults () {
    $("#answer-page").hide();
    $("#result-page").show();
}
// Remove answer content, load q2








