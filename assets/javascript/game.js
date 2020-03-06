$(document).ready(function() {

    //create variables for computer's random number/wins/losses/user score
    var cgNumber = "";
    var wins = 0;
    var losses = 0;
    var userScore = 0;
    
    //display value of variables in html
    $("#wins").text("Wins: " + wins);
    $("#losses").text("Losses: " + losses)
    $("#cgnumber").text(cgNumber);
    $("#userscore").text("Your Score: " + userScore);
    
    
    //Create a random number between 19-120
    //cgNumber = Math.floor(Math.random() * 120) + 19;
    cgNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    console.log(cgNumber);
    $("#cgnumber").html(cgNumber);
    
    //Give each crystal a variable/Create a random number between 1 and 12 for each crystal
    var crystal1 = Math.floor(Math.random() * 12) + 1;
    console.log(crystal1);
    var crystal2 = Math.floor(Math.random() * 12) + 1;
    console.log(crystal2);
    var crystal3 = Math.floor(Math.random() * 12) + 1;
    console.log(crystal3);
    var crystal4 = Math.floor(Math.random() * 12) + 1;
    console.log(crystal4);
    
    //Make a function that resets the game after a win or loss
    function reset() {
        userScore = 0;
        $("#userscore").text("Your Score: " + userScore);
        //cgNumber = Math.floor(Math.random() * 120) + 19;
        cgNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
        console.log(cgNumber);
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
    
    
    //Make an on.click function for each crystal
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


  