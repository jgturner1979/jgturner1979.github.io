var gameWords = // Word list
    [
        "yoda",
        "skywalker",
        "vader",
        "lightsaber",
        "emperor",
        "tatooine",
    ];

var guessedLetters = []; // Stores the letters the user guessed correctly
var currentWordArray = []; // Index of the current word in the array
var lettersNotCorrect = []; // Stores the letters correctly guessed
var remainingGuesses = 0; // How many tries the player has left        
var wins = 0; // How many wins has the player racked up


function initialize() {
    const index = Math.floor(Math.random() * gameWords.length);
    currentWordArray = gameWords[index].split("")
    renderWord("");
    console.log(currentWordArray);
};

function renderWord() {

    for (var i = 0; i < currentWordArray.length; i++) {
        print += "_";
    };
};
document.getElementById("currentWord").innerHTML = print;

function fillWord(guessedLetters) {

    if (guessedLetters) {

        for (var j = 0; j < currentWordArray.length; j++) {

            if (guessedLetters === currentWordArray[j]) {
                guessedLetters[j].push();
                console.log(print);

            };
        };
        // document.getElementById("currentWord").innerHTML = guessedLetters;
    };
    window.addEventListener("load", initialize);

    document.onkeyup = function (event) {

        renderWord(event.key);
    }
};