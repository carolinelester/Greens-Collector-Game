// begin game
$(document).ready(function() {

    var wins = 0; //creating scorekeeping variables
    var losses = 0;
    var score = 0;

// random number generator for the Match: (19-120)
var computerGuess = parseInt(Math.floor(Math.random() * 102) + 19);
$("#randomNumber").html(computerGuess);

// change to integer
var strawberry = parseInt(Math.floor(Math.random() * 11) +2);
var blueberry = parseInt(Math.floor(Math.random() * 11) +2);
var carrot = parseInt(Math.floor(Math.random() * 11) +2);
var cucumber = parseInt(Math.floor(Math.random() * 11) +2);

// test before continuing
console.log("Match: " + computerGuess);
console.log("strawberries: " + strawberry);
console.log("blueberries: " + blueberry);
console.log("carrots: " + carrot);
console.log("cucumbers: " + cucumber);

function reset () { //trigger to reset game 

    score = 0;
    $("#score").html(score);
    computerGuess = parseInt(Math.floor(Math.random() * 102) + 19);
    $("#randomNumber").html(computerGuess);
    console.log("Match: " + computerGuess);
    

    strawberry = parseInt(Math.floor(Math.random() * 11) +2);
    blueberry = parseInt(Math.floor(Math.random() * 11) +2);
    carrot = parseInt(Math.floor(Math.random() * 11) +2);
    cucumber = parseInt(Math.floor(Math.random() * 11) +2);

    console.log("Match: " + computerGuess);
    console.log("strawberries: " + strawberry);
    console.log("blueberries: " + blueberry);
    console.log("carrots: " + carrot);
    console.log("cucumbers: " + cucumber);
};

$("#strawberries").on("click", function() {
    score = score + strawberry;
    $("#score").html(score);
    console.log("score1: " + score);

    if (score === computerGuess) {
        checkifWon();
    }
    else if (score > computerGuess) {
        checkifWon();
    }
    
});

$("#blueberries").on("click", function() {
    score = score + blueberry;
    $("#score").html(score);
    console.log("score2: " + score);

    if (score === computerGuess) {
        checkifWon();
    }

    else if (score >= computerGuess) {
        checkifWon();
    }
});

$("#carrots").on("click", function() {
    score = score + carrot;
    $("#score").html(score);
    console.log("score3: " + score);
    if (score === computerGuess) {
        checkifWon();
    }
    else if (score >= computerGuess) {
        checkifWon();
    }
});

$("#cucumbers").on("click", function() {
    score = score + cucumber;
    $("#score").html(score);
    console.log("score4: " + score);
    if (score === computerGuess) {
        checkifWon();
    }
    else if (score >= computerGuess) {
        checkifWon();
    }
});

function checkifWon() {
    if (score === computerGuess) {
        wins++
        console.log("Wins: " + wins);
        $("#wins").html(wins);
        alert("You've Won! Congrats!");
        reset ();
    }
    else if (score > computerGuess) {
        losses++
        console.log("Losses: " + losses);
        $("#losses").html(losses);
        alert("You've lost! Try Again!");
        reset();
    }
}

});