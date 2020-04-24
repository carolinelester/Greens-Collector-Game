// begin game
$(document).ready(function() {

    var wins = 0; //creating scorekeeping variables
    var losses = 0;
    var score = 0;

// random number generator for the Match: (19-120)
var ComputerGuess = parseInt(Math.floor(Math.random() * 120) + 19);
$("randomNumber").html(ComputerGuess);

var strawberry = parseInt(Math.floor(Math.random() * 12) +2);
var blueberry = parseInt(Math.floor(Math.random() * 12) +2);
var carrot = parseInt(Math.floor(Math.random() * 12) +2);
var cucumber = parseInt(Math.floor(Math.random() * 12) +2);


}):