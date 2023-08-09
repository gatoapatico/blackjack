let player = {
    name: "Alvaro",
    chips: 27
}

let cards = [];
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");

playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
    let number = Math.floor(Math.random() * 13) + 1;
    if(number == 1){
        return 11;
    } else if(number == 11 || number == 12 || number == 13){
        return 10;
    } else {
        return number;
    }
}

function startGame() {
    isAlive = true;
    cards = [];
    sum = 0;
    cards.push(getRandomCard());
    cards.push(getRandomCard());
    sum += cards[0] + cards[1];
    renderGame();
}

function renderGame() {
    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent = "Cards: ";

    for(let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " ";
    }

    if(sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if(sum === 21){
        message = "Wohoo! You've got Blackjack!";
        hasBlackjack = true;
    } else{
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
}

function newCard() {
    if(isAlive && !hasBlackjack){
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }    
}