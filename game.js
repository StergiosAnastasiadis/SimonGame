var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

//______Start the Game by pressing a button______________
$(document).on("keypress", function() {
  if (started == false) {
    nextSequence();
    started = true;
    $("#level-title").html("Level " + level);
  }
});

function nextSequence() {
  level++;
  userClickedPattern = [];
  $("#level-title").html("Level " + level);
  var randomNumber = Math.floor((Math.random() * 4));
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(150);
  playSound(randomChosenColour);
}

$(".btn").click(function() {
  if (started == false) {
    return;
  }

  var userChosenColour = this.id;
  playSound(userChosenColour);
  userClickedPattern.push(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userChosenColour);
});

function playSound(name) {
  audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(function() {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

//Check if the last users input is correct
//if Yes continue to the next level, else (gameover) start again
//______________________________________________________________
function checkAnswer(currentLevel) {
  if (currentLevel == gamePattern[userClickedPattern.length - 1]) {} else {
    $("body").addClass("game-over");
    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200);

    playSound("wrong");
    $("#level-title").html("Game Over, Press Any Key to Restart");
    startOver();
  }

  if (gamePattern.length == userClickedPattern.length) {
    setTimeout(function() {
      nextSequence();
    }, 1000)
  }
}

function startOver() {
  gamePattern = [];
  level = 0;
  started = false;
}
