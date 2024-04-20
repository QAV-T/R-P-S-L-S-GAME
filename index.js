/**
 * Rock Paper Scissors Lizard Spock Game
 * This script handles the game logic and user interactions.
 */

// DOM elements
let playerText = document.querySelector("#playerText");
let computerText = document.querySelector("#computerText");
let resultText = document.querySelector("#resultText");
let choiceBtn = document.querySelectorAll(".choiceBtn");
let scoreDisplay = document.querySelector("#score");
let triesDisplay = document.querySelector("#triesLeft");
let playAgainBtn = document.querySelector("#playAgainBtn");

// Game variables
let player = null;
let computer = null;
let score = 0;
let tries = 5

/**
 * Handles the player's selection and updates the game state.
 * @param {Event} event - The click event object.
 */
function onSelection(event) {
    if (tries === 0) {
        return;
    }
    player = event.target.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();
    updateScore();
    updateTries();
}

/**
 * Resets the game state.
 */
function resetGame() {
    player = null;
    computer = null;
    score = 0;
    tries = 5;
    playerText.textContent = "Player:";
    computerText.textContent = "Computer:";
    resultText.textContent = "Result:";
    scoreDisplay.textContent = "Score: 0";
    triesDisplay.textContent = "Tries left: 5";
}

/**
 * Generates the computer's choice.
 */
function computerTurn() {
    const randNum = Math.floor(Math.random() * 5) + 1;
    switch (randNum) {
        case 1:
            computer = 'ROCK';
            break;
        case 2:
            computer = 'PAPER';
            break;
        case 3:
            computer = 'SCISSOR';
            break;
        case 4:
            computer = 'SPOCK';
            break;
        case 5:
            computer = 'LIZARD';
            break;
    }
}

/**
 * Checks the winner of the game.
 * @returns {string} - The result of the game.
 */
function checkWinner() {
    if (player === computer) {
        return "Draw!";
    } else if (computer === 'ROCK') {
        return (player === 'PAPER' || player === 'SPOCK') ? 'You Win!' : 'You Lost';
    } else if (computer === 'PAPER') {
        return (player === 'SCISSOR' || player === 'LIZARD') ? 'You Win!' : 'You Lost';
    } else if (computer === 'SCISSOR') {
        return (player === 'ROCK' || player === 'SPOCK') ? 'You Win!' : 'You Lost';
    } else if (computer === 'SPOCK') {
        return (player === 'PAPER' || player === 'LIZARD') ? 'You Win!' : 'You Lost';
    } else if (computer === 'LIZARD') {
        return (player === 'ROCK' || player === 'SCISSOR') ? 'You Win!' : 'You Lost';
    }
}

/**
 * Updates the score based on the game result.
 */
function updateScore() {
    if (resultText.textContent.includes('You Win!')) {
        score++;
    }
    scoreDisplay.textContent = `Your Score: ${score}`;
}

/**
 * Updates the number of tries left.
 */
function updateTries() {
    tries--;
    triesDisplay.textContent = `Tries left: ${tries}`;
}

/**
 * Resets the game state.
 */
function resetGame() {
    player = null;
    computer = null;
    score = 0;
    tries = 5;
    playerText.textContent = "Player:";
    computerText.textContent = "Computer:";
    resultText.textContent = "Result:";
    scoreDisplay.textContent = "Your Score: 0";
    triesDisplay.textContent = "Tries left: 5";
}

/**
 * Initializes the game by adding event listeners to choice buttons and play again button.
 */
function initializeGame() {
    choiceBtn.forEach(button => button.addEventListener("click", onSelection));
    playAgainBtn.addEventListener("click", resetGame);
}

// Initialize the game when the DOM content is loaded
document.addEventListener("DOMContentLoaded", initializeGame);