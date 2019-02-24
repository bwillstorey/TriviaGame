var questions = [ 
    {
    q1: "What is the name of the main character in 'The Big Lebowski'?",
    a1: ["The Man", "The Boss", "The Dude"],
    answer1: "The Dude"
    },
    {
    q2: "What is the Dude's favorite beverage?",
    a2: ["White Russian", "Manhattan", "Mint Julep"],
    answer2: "White Russian"
    },
    {
    q3: "Who narrates 'The Big Lebowski?",
    a3: ["Morgan Freeman", "Sam Elliott", "Gary Busey"],
    answer3: "Sam Elliott"
    },
    {
    q4: "What really ties the room together?",
    a4: ["good lighting", "a rug", "a couch"],
    answer4: "a rug"
    },
    {
    q5: "What is the name of the Dude and Walter's friend?",
    a5: ["Donny", "Jackie", "Arthur"],
    answer5: "Donny"
    },
    {
    q6: "What famous musician makes a cameo in the movie?",
    a6: ["Marky Mark", "Dave Grohl", "Flea"],
    answer6: "Flea"
    },
    {
    q7: "Who do the Dude and Walter accuse of stealing the car?",
    a7: ["Johnny", "Larry", "Harry"],
    answer7: "Larry"
    },
    {
    q8: "Who do you not mess with?",
    a8: ["Malibu Police", "Smokey", "The Jesus"],
    answer8: "The Jesus"
    }
]
console.log(questions[0]);

var images = ["../assets/images/coffee-can.gif", "../assets/images/donny.gif", "../assets/images/dude-dance.gif", "../assets/images/flea.gif", "../assets/images/jesus.gif", "../assets/images/larry.gif", "../assets/images/rug.gif", "../assets/images/sam-elliott.gif", "../assets/images/white-russian.gif"];

var startButton = $("<button class ='start'>Let's Go Bowling</button>");

$(document).ready(function(){

    $("#start-page").append(startButton);
    $("#question-page").hide();
    $("#answer-page").hide();
    $("#result-page").hide();
    $(document).on("click", ".start", playGame);

})

// Starts the game
function playGame () {

// Remove start page content, add question page content
    $("#start-page").hide();
    $("#question-page").show();

    // start timer
    $("#timer").text()

    // Load question 1
    for (var i = 0; i < questions.length; i++) {
        // var currentQuestion = questions.q1;
        $("#question").text(questions.q[i]);

        // load answer options for q1
        var currentAnswers = questions.a[i];
        $("#answer-options").append(currentAnswers);
    }

    
    // answer options for q1 
    



    

}



// Remove page content, load answer page for q1 with image displayed

// Remove answer content, load q2








