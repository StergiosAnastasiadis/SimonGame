//Lonx Eisai
var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];
var started = false;
var level = 0;

function nextSequence() {
  level = level + 1;
  $("#level-title").html("Level " + level);
  var randomNumber = Math.floor((Math.random() * 4));
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(150);
  window.audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  playSound(audio);
}

$(".btn").click(function() {
  var userChosenColour = this.id;
  audio = new Audio("sounds/" + userChosenColour + ".mp3");
  playSound(audio);
  userClickedPattern.push(userChosenColour);
  animatePress(userChosenColour);
});

function playSound(name) {
  audio.play(name);
}

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(function() {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

$(document).on("keypress", function() {
  if (started == false) {
    nextSequence();
  }
  started = true;
  $("#level-title").html("Level " + level);
});

//https://github.com/StergiosAnastasiadis/SimonGame.git
