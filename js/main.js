// cards to be flipped

var cards = ["queen", "queen", "king", "king"];

// selected cards

var cardsInPlay = [];


var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
}

// what card is flipped

var flipCard = function (cardId) {
	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
	checkForMatch();
	}

// call function
flipCard(0);
flipCard(2);



