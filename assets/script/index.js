/**
 * Rock Paper Scissors Lizard Spock Game
 */

// DOM elements
const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtn = document.querySelectorAll(".choiceBtn");
const scoreDisplay = document.querySelector("#score");
const triesDisplay = document.querySelector("#triesLeft");
const playAgainBtn = document.querySelector("#playAgainBtn");
const usernameForm = document.querySelector("#username-form");
const usernameInput = document.querySelector("#username");
const gameDiv = document.querySelector("#gameDiv");

// game variables
let player = null;
let computer = null;
let score = 0;
let tries = 5;
let username = "Player";


usernameForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = usernameInput.value.trim();

    if (username !== "") { 
        usernameForm.style.display = "none";
        gameDiv.style.display = "block";
        initializeGame(username);
    } else {
        alert("Please enter your name to play the game.");
    }
});


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
    playerText.textContent = `${username}: ${player}`; // Update to use username
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();
    updateScore();
    updateTries();
}

/**
 * computer's choice.
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
 * updates the score based on the game result.
 */
function updateScore() {
    if (resultText.textContent.includes('You Win!')) {
        score++;
    }
    scoreDisplay.textContent = `Score: ${score}`;
}

/**
 * updates the number of tries left.
 */
function updateTries() {
    tries--;
    triesDisplay.textContent = `Tries left: ${tries}`;
}

/**
 * resets the game state.
 */
function resetGame() {
    player = null;
    computer = null;
    score = 0;
    tries = 5;
    playerText.textContent = `${username}:`; // Reset to default username
    computerText.textContent = "Computer:";
    resultText.textContent = "Result:";
    scoreDisplay.textContent = "Score: 0";
    triesDisplay.textContent = "Tries left: 5";
}

/**
 * Handles the submission of the username form.
 * @param {Event} event - The submit event object.
 */
function userName(event) {
    event.preventDefault();
    username = usernameInput.value || "Player";
    playerText.textContent = `${username}:`;
    usernameForm.reset();
}

/**
 * Initializes the game.
 */
function initializeGame() {
    choiceBtn.forEach(button => button.addEventListener("click", onSelection));
    playAgainBtn.addEventListener("click", resetGame);
    usernameForm.addEventListener("submit", userName);
    triesDisplay.textContent = "Tries left: 5";
}

// Initialize the game when the DOM content is loaded.
document.addEventListener("DOMContentLoaded", initializeGame);
