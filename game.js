//Lonx Eisai
var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];

function nextSequence() {
  var randomNumber = Math.floor((Math.random() * 4));
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(150);
  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();
  console.log(randomNumber);
  console.log(randomChosenColour);
}

$(".btn").click(function() {
  var userChosenColour = this.id;
  var audio = new Audio("sounds/" + userChosenColour + ".mp3");
  audio.play();
  userClickedPattern.push(userChosenColour);
  console.log(userChosenColour); //Just Testing
});

function playSound(name) {
  return name;
}
//https://github.com/StergiosAnastasiadis/SimonGame.git
