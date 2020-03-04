$(document).ready(function() {

    var cgNumber = "";
    var wins = 0;
    var losses = 0;
    var userScore = 0;
    
    
    $("#wins").text("Wins: " + wins);
    $("#losses").text("Losses: " + losses)
    $("#cgnumber").html(cgNumber);
    
    $("#userscore").text("Your Score: " + userScore);
    cgNumber = Math.floor(Math.random() * 120) + 19;
    $("#cgnumber").html(cgNumber);
    
    var crystal1 = Math.floor(Math.random() * 12) + 1;
    console.log(crystal1);
    var crystal2 = Math.floor(Math.random() * 12) + 1;
    console.log(crystal2);
    var crystal3 = Math.floor(Math.random() * 12) + 1;
    console.log(crystal3);
    var crystal4 = Math.floor(Math.random() * 12) + 1;
    console.log(crystal4);
    
    function reset() {
        userScore = 0;
        $("#userscore").text("Your Score: " + userScore);
        cgNumber = Math.floor(Math.random() * 120) + 19;
        $("#cgnumber").html(cgNumber);
        crystal1 = Math.floor(Math.random() * 12) + 1;
        console.log(crystal1);
        crystal2 = Math.floor(Math.random() * 12) + 1;
        console.log(crystal2);
        crystal3 = Math.floor(Math.random() * 12) + 1;
        console.log(crystal3);
        crystal4 = Math.floor(Math.random() * 12) + 1;
        console.log(crystal4);
    
    }
    
    
    
    $("#crystal-1").on("click", function() {
        userScore = userScore + crystal1;
        $("#userscore").text("Your Score: " + userScore);
        if (userScore === cgNumber) {
            wins++;
            $("#wins").text("Wins: " + wins);
            reset();
        } else if (userScore > cgNumber) {
            losses++;
            $("#losses").text("Losses: " + losses)
            reset();
        }
    
    });
    
    $("#crystal-2").on("click", function() {
        userScore = userScore + crystal2;
        $("#userscore").text("Your Score: " + userScore);
        if (userScore === cgNumber) {
            wins++;
            $("#wins").text("Wins: " + wins);
            reset();
        } else if (userScore > cgNumber) {
            losses++;
            $("#losses").text("Losses: " + losses)
            reset();
        }
    
    });
    
    $("#crystal-3").on("click", function() {
        userScore = userScore + crystal3;
        $("#userscore").text("Your Score: " + userScore);
        if (userScore === cgNumber) {
            wins++;
            $("#wins").text("Wins: " + wins);
            reset();
        } else if (userScore > cgNumber) {
            losses++;
            $("#losses").text("Losses: " + losses)
            reset();
        }
    
    });
    
    $("#crystal-4").on("click", function() {
        userScore = userScore + crystal4;
        $("#userscore").text("Your Score: " + userScore);
        if (userScore === cgNumber) {
            wins++;
            $("#wins").text("Wins: " + wins);
            reset();
        } else if (userScore > cgNumber) {
            losses++;
            $("#losses").text("Losses: " + losses)
            reset();
        }
    
    });
    
    });


  