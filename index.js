const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtn = document.querySelectorAll(".choiceBtn");
//const treisLeft = document.querySelectorAll("#triesLeft");
//const score = document.querySelectorAll("#score");

let player;
let computer;
let result;

choiceBtn.forEach(button => button.addEventListener("click", () => {
             
    player = button.textContent
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();


}) );

function computerTurn(){
    const randNum = Math.floor(Math.random() * 5) + 1;
    switch(randNum){
        case 1 :
            computer = 'ROCK';
            break;
        case 2 :
            computer = 'PAPER';
            break;
        case 3 :
            computer = 'SCISSOR';
            break; 
        case 4 :
            computer = 'SPOCK';
                break;            
        
        case 5 :
            computer = 'LIZZARD';
            break;            
    }               
    }

    function checkWinner() {
        if (player === computer) {
            return "Draw!";
        } else if (computer === 'ROCK') {
            return (player === 'PAPER' || player === 'SPOCK') ? 'You Win!' : 'You Lost';
        } else if (computer === 'PAPER') {
            return (player === 'SCISSOR' || player === 'LIZZARD') ? 'You Win!' : 'You Lost';
        } else if (computer === 'SCISSOR') {
            return (player === 'ROCK' || player === 'SPOCK') ? 'You Win!' : 'You Lost';
        } else if (computer === 'SPOCK') {
            return (player === 'PAPER' || player === 'LIZZARD') ? 'You Win!' : 'You Lost';
        } else if (computer === 'LIZZARD') {
            return (player === 'ROCK' || player === 'SCISSOR') ? 'You Win!' : 'You Lost';  
        }
    }