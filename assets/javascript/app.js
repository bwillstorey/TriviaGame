var questions = [ 
    {
    q1: "What is the name of the main character in 'The Big Lebowski'?",
        a1: {
            a: "The Man",
            b: "The Boss",
            c: "The Dude"
         },
    answer1: "The Dude"
    },
    {
    q2: "What is the Dude's favorite beverage?",
        a2: {
            a: "White Russian",
            b: "Manhattan",
            c: "Mint Julep"
        },
    answer2: "White Russian"
    },
    {
    q3: "Who narrates 'The Big Lebowski?",
        a3: {
            a: "Morgan Freeman",
            b: "Sam Elliott",
            c: "Gary Busey"
        },
    answer3: "Sam Elliott"
    },
    {
    q4: "What really ties the room together?",
        a4: {
            a: "good lighting",
            b: "a rug",
            c: "a couch"
        },
    answer4: "a rug"
    },
    {
    q5: "What is the name of the Dude and Walter's friend?",
        a5: {
            a: "Donny",
            b: "Jackie",
            c: "Arthur"
        },
    answer5: "Donny"
    },
    {
    q6: "What famous musician makes a cameo in the movie?",
        a6: {
            a: "Marky Mark",
            b: "Dave Grohl",
            c: "Flea"
        },
    answer6: "Flea"
    },
    {
    q7: "Who do the Dude and Walter accuse of stealing the car?",
        a7: {
            a: "Johnny",
            b: "Larry",
            c: "Harry"
        },
    answer7: "Larry"
    },
    {
    q8: "Who do you not mess with?",
        a8: {
            a: "Malibu Police",
            b: "Smokey",
            c: "The Jesus"
        },
    }
]

var images = ["../assets/images/coffee-can.gif", "../assets/images/donny.gif", "../assets/images/dude-dance.gif", "../assets/images/flea.gif", "../assets/images/jesus.gif", "../assets/images/larry.gif", "../assets/images/rug.gif", "../assets/images/sam-elliott.gif", "../assets/images/white-russian.gif"];

var startButton = $("<button class ='start'>Let's Go Bowling</button>");

$(document).ready(function(){

    $("#start-page").append(startButton);

    $(document).on("click", ".start", playGame);






})

// Starts the game
function playGame () {

// Remove start page content
    $("#start-page").hide();

    // Load question 1
    for (var i = 0; i < questions.length; i++) {
        var currentQuestion = questions[i];
        $("#question").text(currentQuestion);

        // load answer options for q1


    }

    
    // answer options for q1 
    
    // start timer


    

}



// Remove page content, load answer page for q1 with image displayed

// Remove answer content, load q2








