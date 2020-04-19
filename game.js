//Lonx Eisai
var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence (){
  var randomNumber = Math.floor((Math.random() * 4 ));
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(150);
  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();

  console.log(randomNumber);
};


$(".btn").click(function(){
  alert("Handler for .click() called");
});

//https://github.com/StergiosAnastasiadis/SimonGame.git
