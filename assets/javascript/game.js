

$(document).ready(function() {

var cgNumber = "";
var userScore = 0;
var wins = 0;
var losses = 0;

cgNumber = Math.floor(Math.random() * 120) + 9;
$("#cgnumber").html(cgNumber);
console.log(cgNumber);

var crystal1 = Math.floor(Math.random() * 12) + 1;
var crystal2 = Math.floor(Math.random() * 12) + 1;
var crystal3 = Math.floor(Math.random() * 12) + 1;
var crystal4 = Math.floor(Math.random() * 12) + 1;

$("#wins").text("Wins: " + wins);
$("#losses").text("Losses: " + losses);

function reset() {
    cgNumber = Math.floor(Math.random() * 120) + 9;
        $("#cgnumber").html(cgNumber);
    userScore = 0;
        $("#userscore").text(userScore);
    crystal1 = Math.floor(Math.random() * 12) + 1;
    crystal2 = Math.floor(Math.random() * 12) + 1;
    crystal3 = Math.floor(Math.random() * 12) + 1;
    crystal4 = Math.floor(Math.random() * 12) + 1;
}

    
});


  