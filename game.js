//alert("Hallo"); //Test
//Lonx Eisai
var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
function nextSequence (){
  var randomNumber = Math.floor((Math.random() * 3 ));
  var randomChoseColour = buttonColours[randomNumber];
  gamePattern.push(randomChoseColour);

  console.log(randomNumber);
};
