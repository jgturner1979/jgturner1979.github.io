$(document).ready(function () {
// Global Variables
var wins = 0;
var losses = 0;
var goalNumber = 0;
var counter = 0;

var crystals = ["crystal1", "crystal2", "crystal3", "crystal4"];
var imageArray = ["./assets/images/space.jpg", "./assets/images/reality.jpg", "./assets/images/power.jpg", "./assets/images/mind.jpg"];

// resetGame varialbes

    function resetGame() {
        randomNumberFromRange();
        randomCrystalNumbers();
        crystalValue = 0;
        counter = 0;
    }
// Start of the Game Play


    //Show random number between 19 - 120
    function randomNumberFromRange() {
        goalNumber = (Math.floor(Math.random() * 101) + 19);
        console.log(goalNumber);
        $("#goalNumber").html("<h3>Your collection needs to value: " + goalNumber + "</h3>");
    }
    randomNumberFromRange();

    //Assign each crystal hidden value between 1 - 12
    for (var i = 0; i < crystals.length; i++) {
        function randomCrystalNumbers() {
            crystals[i] = (Math.floor(Math.random() * 12) + 1);
            console.log(crystals);
        }
        randomCrystalNumbers();
    };

    // Assign images to each crystal

    for (var j = 0; j < crystals.length; j++) {
        var imageCrystal = $("<img>");

        imageCrystal.addClass("crystal-image");

        imageCrystal.attr("src", imageArray[j]);

        imageCrystal.attr("data-crystalvalue", crystals[j]);

        $("#crystals").append(imageCrystal);
    }


    //Crystal Click adds to playerGuess

// Attach crystal values to each image on the click of that image

    $(".crystal-image").click(function () {
        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);

        counter += crystalValue;
        console.log(counter);

        $("#totalscore").html("<h3>Your collection totals: " +counter + "</h3>");

        if (counter === goalNumber) {
            wins++;
            $("#wins").html("Wins: " + wins);
            // resetGame();
        }

        else if (counter >= goalNumber) {
            losses++;
            $("#losses").html("Losses: " + losses);
            // resetGame();
        }
    });

    $(".btn").click(function() {
        $("#totalscore").html("<h3>Your collection totals: </h3>");
        resetGame();
    })
});