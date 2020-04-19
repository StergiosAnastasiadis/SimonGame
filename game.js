//alert("Hallo"); //Test
//Lonx Eisai
var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
function nextSequence (){
  var randomNumber = Math.floor((Math.random() * 3 ));
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  //$(randomChosenColour);
  console.log(randomNumber);
};
