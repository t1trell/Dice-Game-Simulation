
// Player 1 Dice

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImageSource1 = "images/dice" + randomNumber1 + ".png";
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randomImageSource1);

// Player 2 Dice

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", randomImageSource2);


// Change h1 based on the Dice Result

if(randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "P1 IS THE WINNER!";
}
else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "P2 IS THE WINNER!";
}
else {
  document.querySelector("h1").innerHTML = "IT'S A DRAW!";
}
