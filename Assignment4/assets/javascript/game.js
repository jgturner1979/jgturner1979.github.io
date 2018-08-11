// this code runs the Harry Potter RPG
$(document).ready(function () {
    console.log("ready");


    var selectedPlayer;
    var opponnents = [];

    // Player stats are defined in Varible Object

    var player = [
        harry = {
            name: "Harry Potter",
            attack: 20,
            health: 100,
        },

        hermione = {
            name: "Hermione Granger",
            attack: 25,
            health: 100,
        },

        ron = {
            name: "Ron Weasley",
            attack: 15,
            health: 100,
        },

        draco = {
            name: "Draco Malfoy",
            attack: 5,
            health: 100,
        }
    ];

    // Need a function to select player and put him on the game board    
    function readyPlayerOne() {
        if ($("#harry").click(function () {
                selectedPlayer.show();

            }))

    }
    // Need to figure out how to add characters to opponents array

    // Need a function to select that selects the first opponent and moves him to the game board

    // Need a function that executes the game play when the attack button is pushed.

    // Need a if else statment to check player and opponents health, play will continue until either player or opponent health equals 0.

    // on click of the attack button, player health is decreased by the attack value of opponent.

    // opponent's health is decreased by the attack value of player.

    // if player defeated game resets

    // if opponent defeated, moved to defeated character div, and next opponent is selected.  this will repeat until all opponents are defeated



});