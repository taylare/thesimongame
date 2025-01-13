
var buttonColours = ["pink", "blue", "green", "yellow"];

var gamePattern = []; 
var userClickedPattern = [];

var started = false;
var level = 0;

//using jQuery to detect when a keyboard key has been pressed to call next sequence:
$(document).keypress(function() {
    if (!started) {

        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
});


$(".btn").click(function() { //detects when any of the buttons are clicked
    
    var userChosenColour = $(this).attr("id"); //stores id of the button that was clicked
    userClickedPattern.push(userChosenColour); 
    playSound(userChosenColour); //plays corresponding sound of button
});

function nextSequence() {

    level++;

    $("level-title").text("Level " + level); //updating title as the level changes

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);
    animatePress(userChosenColour);
}

function playSound(name) {

    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour) {

    $("#" + currentColour).addClass("pressed");

    setTimeout(function () {
        $("#" + currentColour).removeClass("pressed");
    }, 100);

}