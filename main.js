var sortedCards = [
    {value: 2, suit: "c"},  {value: 2, suit: "d"},  {value: 2, suit: "h"}, {value: 2, suit: "s"},
    {value: 3, suit: "c"},  {value: 3, suit: "d"},  {value: 3, suit: "h"}, {value: 3, suit: "s"},
    {value: 4, suit: "c"},  {value: 4, suit: "d"},  {value: 4, suit: "h"}, {value: 4, suit: "s"},
    {value: 5, suit: "c"},  {value: 5, suit: "d"},  {value: 5, suit: "h"}, {value: 5, suit: "s"},
    {value: 6, suit: "c"},  {value: 6, suit: "d"},  {value: 6, suit: "h"}, {value: 6, suit: "s"},
    {value: 7, suit: "c"},  {value: 7, suit: "d"},  {value: 7, suit: "h"}, {value: 7, suit: "s"},
    {value: 8, suit: "c"},  {value: 8, suit: "d"},  {value: 8, suit: "h"}, {value: 8, suit: "s"},
    {value: 9, suit: "c"},  {value: 9, suit: "d"},  {value: 9, suit: "h"}, {value: 9, suit: "s"},
    {value: 10, suit: "c"},  {value: 10, suit: "d"},  {value: 10, suit: "h"}, {value: 10, suit: "s"},
    {value: 11, suit: "c"},  {value: 11, suit: "d"},  {value: 11, suit: "h"}, {value: 11, suit: "s"},
    {value: 12, suit: "c"},  {value: 12, suit: "d"},  {value: 12, suit: "h"}, {value: 12, suit: "s"},
    {value: 13, suit: "c"},  {value: 13, suit: "d"},  {value: 13, suit: "h"}, {value: 13, suit: "s"},
];

var cards = [
    {value: 2, suit: "c"},  {value: 2, suit: "d"},  {value: 2, suit: "h"}, {value: 2, suit: "s"},
    {value: 3, suit: "c"},  {value: 3, suit: "d"},  {value: 3, suit: "h"}, {value: 3, suit: "s"},
    {value: 4, suit: "c"},  {value: 4, suit: "d"},  {value: 4, suit: "h"}, {value: 4, suit: "s"},
    {value: 5, suit: "c"},  {value: 5, suit: "d"},  {value: 5, suit: "h"}, {value: 5, suit: "s"},
    {value: 6, suit: "c"},  {value: 6, suit: "d"},  {value: 6, suit: "h"}, {value: 6, suit: "s"},
    {value: 7, suit: "c"},  {value: 7, suit: "d"},  {value: 7, suit: "h"}, {value: 7, suit: "s"},
    {value: 8, suit: "c"},  {value: 8, suit: "d"},  {value: 8, suit: "h"}, {value: 8, suit: "s"},
    {value: 9, suit: "c"},  {value: 9, suit: "d"},  {value: 9, suit: "h"}, {value: 9, suit: "s"},
    {value: 10, suit: "c"},  {value: 10, suit: "d"},  {value: 10, suit: "h"}, {value: 10, suit: "s"},
    {value: 11, suit: "c"},  {value: 11, suit: "d"},  {value: 11, suit: "h"}, {value: 11, suit: "s"},
    {value: 12, suit: "c"},  {value: 12, suit: "d"},  {value: 12, suit: "h"}, {value: 12, suit: "s"},
    {value: 13, suit: "c"},  {value: 13, suit: "d"},  {value: 13, suit: "h"}, {value: 13, suit: "s"},
];;
    
function randomIndex(arr){
  return Math.floor(Math.random() * arr.length);
}

function cardToString(card) {
    var name = card.value;
    if(card.value == 10) {
        name = "J"
    } else if(card.value == 11) {
        name = "Q"
    } else if(card.value == 12) {
        name = "K"
    } else if(card.value == 13) {
        name = "A"
    }
    return name + card.suit;
}

function printCards(c) {
  var str = "";
  for(var i = 0; i < c.length; i++) {
      str += cardToString(c[i]);
      if(i != c.length - 1) {
        str += ", ";
      }
  }
  console.log(str);
}

function shuffle() {
  var shuffledCards = [];
  var originalLength = cards.length;
  for(var i = 0; i < originalLength; i++) {
      var rIndex = randomIndex(cards);
      var card = cards[rIndex];
      cards.splice(rIndex, 1);
      shuffledCards.push(card);
  }
  cards = shuffledCards
}

/*
* Exercise 1.
* Return true if firstCard and secondCard are equal in suit and value
*/
function cardsEqual(firstCard, secondCard) {
}

/*
* Exercise 2.
* Return the index in the array of cards with the given value and suit.
* i.e. if var cards = [{value: 1, suit: "s"}, {value: 7, suit: "h"}, {value: 4, suit: "s"}]
* findCardIndex(cards, 4, "h") would return 2, findCardIndex(cards, 1, "s") would return 0.
*/
function findCardIndex(cards, value, suit) {
}

/*
* Exercise 3.
* Take sizeToDraw number of cards from the beginning of the array of cards,
* removing them from the original array cards.
* i.e. if you had an array of var cards = [c1,c2,c3,c4,c5,c6] and you called
* drawCards(cards, 2) it would return [c1, c2] and cards would now have
* [c3, c4, c5, c6].
*
*/
function drawCards(cards, sizeToDraw) {
}

/*
* Exercise 4.
* Push the array cardsToReturn to the end of the array of cards.
* i.e. if cardsToReturn = [c1, c2] and cards = [c3,c4,c5,c6] then calling
* returnCards(cards, cardsToReturn) would result in cards = [c3,c4,c5,c6,c1,c2]
*/
function returnCards(cards, cardsToReturn) {
}

/*
 * Exercise 5.
 * Count the number of cards with given suit in the array cards.
 */
function countSuit(cards, suit) {
}


function cardArraysEqual(firstCards, secondCards) {
    if(firstCards.length === secondCards.length) {
        for(var i = 0; i < firstCards.length; i++){
            if(!cardsEqual(firstCards[i], secondCards[i])) {
                return false;
            }
        }
        return true;
    } else {
        return false;
    }
}

var suitRanking = {
  "c": 0, "d": 1, "h": 2, "s": 3
};

function cardGreaterThan(firstCard, secondCard) {
  if(firstCard.value === secondCard.value) {
    return suitRanking[firstCard.suit] > suitRanking[secondCard.suit];
  } else {
    return firstCard.value > secondCard.value;
  }
}

/*
 * Exercise 6.
 * Using cardGreaterThan, provided above, sort the cards from lowest to highest.
 */
function sortCards(cards) {
}


/**
 * The Code below will test your functions, *DONT* change.
 */

shuffle();
console.log("Shuffled: ");
printCards(cards);
if(cardsEqual({value: 10, suit: "d"}, {value: 10, suit: "d"})) {
    console.log("First exercised passed!");
} else {
    console.log("First exercise needs work.");
}
var index = findCardIndex(cards, 7, "h");
if(index && cards[index].value === 7 && cards[index].suit === "h") {
  console.log("Second excercised passed!");
} else {
  console.log("Second excercise needs work.");
}
var firstCard = cards[0];
var secondCard = cards[1];
var thirdCard = cards[2];
var fourthCard = cards[3];
var drawnCards = drawCards(cards, 3);
if(drawnCards && drawnCards.length === 3 &&
   drawnCards[0] === firstCard &&
   drawnCards[1] === secondCard &&
   drawnCards[2] === thirdCard &&
   cards[0] === fourthCard
) {
    console.log("Third exercise passed!");
} else {
    console.log("Third exercise needs work.");
}
returnCards(cards, drawnCards);
if(cards[cards.length - 1] === thirdCard &&
cards[cards.length - 2] === secondCard &&
cards[cards.length - 3] === firstCard) {
    console.log("Fourth exercise passed!");
} else {
    console.log("Fourth exercise needs work.");
}
if(countSuit(cards, "h") === 12 &&
countSuit(cards, "s") === 12 &&
countSuit(cards, "d") === 12 &&
countSuit(cards, "c") === 12) {
    console.log("Fifth exercise passed!");
} else {
    console.log("Fifth exercise needs work.");
}
sortCards(cards);
console.log("Sorted: ");
printCards(cards);
if(cardArraysEqual(cards, sortedCards)) {
    console.log("Sixth Exercise passed!");
} else {
    console.log("Sixth exerise needs work.");
}
