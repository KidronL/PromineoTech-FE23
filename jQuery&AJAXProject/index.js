//Grabbing the elements from HTML and declaring variables
const start = $('#start');
const reset = $('#reset');
const cellElements = document.querySelectorAll(".box");
const cells = Array.from(cellElements).map(element => element.id);
console.log(cells);
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = false;

initGame();

// Creating the function for the game. This starts the game and checks for clicks.
function initGame() {
    cellElements.forEach(cellElement => cellElement.addEventListener('click', () => {
        const cellId = cellElement.id

        if(options[cellId] != "" || !running){
            return;
        }
    
        updateCell(cellElement, cellId);
        checkWinner();
    }))
    reset.on('click', restartGame);
    start.on('click', startGame);
    playerTurn.textContent = `${currentPlayer}'s turn`;
    running = true;
}

//when a cell is clicked, arguments are passed into this function where it will update the cell that was clicked
function updateCell(cell, index){
    options[index] = currentPlayer;
    if (currentPlayer == "X"){
        cell.textContent = "X";
    } else cell.textContent = "O";

//Logic to change the player once a cell has been clicked   
}
function changePlayer(){
    currentPlayer = (currentPlayer == "X") ? "O" : "X";
    playerTurn.textContent = `${currentPlayer}'s turn`;
}

//Based on the predefined conditions, this will check for if any of them have been met
function checkWinner(){
    let roundWon = false;

    for(let i = 0; i < winConditions.length; i++){
        const condition = winConditions[i];
        const cellA = options[condition[0]];
        const cellB = options[condition[1]];
        const cellC = options[condition[2]];

        if(cellA == "" || cellB == "" || cellC == ""){
            continue;
        }
        if(cellA == cellB && cellB == cellC){
            roundWon = true;
            break;
        }
    }

    if(roundWon){
        playerTurn.textContent = `${currentPlayer} wins!`;
        running = false;
    }
    else if(!options.includes("")){
        playerTurn.textContent = `Draw!`;
        running = false;
    }
    else{
        changePlayer();
    }
}

//Restarting the game
function restartGame(){
    currentPlayer = "X";
    options = ["", "", "", "", "", "", "", "", ""];
    playerTurn.textContent = `${currentPlayer}'s turn`;
    cells.forEach(cell => cell.textContent = "");
    running = false;
}

//Starting the game
function startGame(){
    running = true;
}



