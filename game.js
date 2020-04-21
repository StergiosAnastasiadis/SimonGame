//Lonx Eisai
var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];

function nextSequence() {
  var randomNumber = Math.floor((Math.random() * 4));
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(150);
  window.audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  playSound(audio);
  console.log(randomNumber);
  console.log(randomChosenColour);
}

$(".btn").click(function() {
  var userChosenColour = this.id;
  audio = new Audio("sounds/" + userChosenColour + ".mp3");
  playSound(audio);
  userClickedPattern.push(userChosenColour);
  console.log(userChosenColour);
});

function playSound(name) {
  audio.play(name);
}
//https://github.com/StergiosAnastasiadis/SimonGame.git
