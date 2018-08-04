// Creates an array that lists out all of the options.
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessSoFar = [];
var computerGuess = null;

var reset = function() {
    guessesLeft = 10;
    guessSoFar = [];
    computerGuess = computerChoices[Math.floor(Math.random) * computerChoices.length];
    updateguessesLeft()
    updateguessSoFar()
    updatewins()
    updatelosses()

}

var updatewins = function() {
    document.getElementById("wins").innerHTML = "Wins: " + wins
}

var updatelosses = function() {
    document.getElementById("losses").innerHTML = "Losses: " + losses
}

var updateguessesLeft = function() {
    document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + guessesLeft
}

var updateguessSoFar = function() {
    document.getElementById("guessSoFar").innerHTML = "Guesses So Far: " + guessSoFar.join(", ")
}
 // This function is run whenever the user presses a key.
    document.onkeyup = function (event) {

        // Determines which key was pressed.
        var userGuess = event.key
        guessSoFar.push(userGuess)
        guessesLeft--
        updateguessesLeft()
        updateguessSoFar()

        // Randomly chooses a choice from the options array. This is the Computer's guess.
        // var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

        // for (var userGuess = i, i < (((userGuess === "a") || (userGuess === "b")) {

        if (userGuess === computerGuess) {
            wins++;
            updatewins();
        } else if (userGuess !== computerGuess) {
            updateguessesLeft();
        }

        if (guessesLeft < 0) {
            losses++;
            updatelosses();
            alert("You are not pyschic!") + reset()
        } else {
            updateguessesLeft();
        }
    }
reset()      

