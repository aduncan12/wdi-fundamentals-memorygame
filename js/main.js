var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];
cardsInPlay.push('cardOne');
console.log("User flipped Queen");
cardsInPlay.push('cardTwo');
console.log("User flipped King");


var cardOne = cards[0];
var cardTwo = cards[2];

if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay [1]) {
	alert("You found a match!");
} else 
	{ alert("Sorry, try again");
}