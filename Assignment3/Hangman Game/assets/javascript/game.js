var gameWords = // Word list
    [
        "yoda",
        "skywalker",
        "vader",
        "lightsaber",
        "emperor",
        "tatooine",
    ];

const maxTries = 10; // Maximum number of tries player has

var guessedLetters = []; // Stores the letters the user guessed
var currentWordIndex; // Index of the current word in the array
var guessingWord = []; // This will be the word we actually build to match the current word
var remainingGuesses = 0; // How many tries the player has left        
var wins = 0; // How many wins has the player racked up

document.onkeyup = function(event) {

    var guessedLetters = event.key;

        currentWordIndex = Math.floor(Math.random() * gameWords.length);

        for (var i = 0; i < gameWords[currentWordIndex.length]; i++) {
            guessingWord.push("_");
            document.getElementById("currentWord").innerHTML = guessingWord;
        }

    }