// Array of Objects containing questions, answer choices, and correct answers
var questions = [ 
    {
    quest: "What is the name of the main character in 'The Big Lebowski'?",
    choices: ["The Man", "The Boss", "The Dude"],
    answer: "The Dude"
    },
    {
    quest: "What is the Dude's favorite beverage?",
    choices: ["White Russian", "Manhattan", "Mint Julep"],
    answer: "White Russian"
    },
    {
    quest: "Who narrates 'The Big Lebowski?",
    choices: ["Morgan Freeman", "Sam Elliott", "Gary Busey"],
    answer: "Sam Elliott"
    },
    {
    quest: "What really ties the room together?",
    choices: ["good lighting", "a rug", "a couch"],
    answer: "a rug"
    },
    {
    quest: "What is the name of the Dude and Walter's friend?",
    choices: ["Donny", "Jackie", "Arthur"],
    answer: "Donny"
    },
    {
    quest: "What famous musician makes a cameo in the movie?",
    choices: ["Marky Mark", "Dave Grohl", "Flea"],
    answer: "Flea"
    },
    {
    quest: "Who do the Dude and Walter accuse of stealing the car?",
    choices: ["Johnny", "Larry", "Harry"],
    answer: "Larry"
    },
    {
    quest: "Who do you not mess with?",
    choices: ["Malibu Police", "Smokey", "The Jesus"],
    answer: "The Jesus"
    }
]
// array of gifs to be display on the answer pages
var images = ["../assets/images/coffee-can.gif", "../assets/images/donny.gif", "../assets/images/dude-dance.gif", "../assets/images/flea.gif", "../assets/images/jesus.gif", "../assets/images/larry.gif", "../assets/images/rug.gif", "../assets/images/sam-elliott.gif", "../assets/images/white-russian.gif"];

// a button to start the game
var startButton = $("<button class ='start'>Let's Go Bowling</button>");



$(document).ready(function(){

    $("#start-page").append(startButton);
    $("#question-page").hide();
    $("#answer-page").hide();
    $("#result-page").hide();
    $(document).on("click", ".start", playGame);

})

// TIMER
// how much time per question 
var counter = 15;

// countdown and display on page
setInterval(function() {
    counter--;
    if (counter >= 0) {
        $("#timer").text("Time Remaining: " + counter)
    }
    if (counter === 0) {
        clearInterval(counter);
    }
    }, 1000);


// STARTS THE GAME
function playGame () {

// Remove start page content, add question page content
    $("#start-page").hide();
    $("#question-page").show();

    // Load question 1
    for (var i = 0; i < questions.length; i++) {
        var currentQuestion = questions[i].quest;
        $("#question").text(currentQuestion);

        // load answer options for q1
        
        for (var x = 0; x < 4; x++) {
            var currentAnswers = questions[i].choices[i];
            $("#answer-options").append("<button class='ans-btn'></button>");
            $(".ans-btn").text(currentAnswers);

        }
    }    

}


// Remove page content, load answer page for q1 with image displayed
$(".ans-btn").on("click", function(){
    $("#question-page").hide();
    $("#answer-page").show();
})


// Remove answer content, load q2








