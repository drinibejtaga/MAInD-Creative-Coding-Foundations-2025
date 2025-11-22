// game parameters
const winConditions = [
    [0,1,2],[3,4,5],[6,7,8], // righe
    [0,3,6],[1,4,7],[2,5,8], // colonne
    [0,4,8],[2,4,6]           // diagonali
];

// game assets
const winSound = new Audio('Assets/Audio/Win.mp3')

// game status variables
let currentPlayer = 'X';
let gameActive = true;
let boardState = ["", "", "", "", "", "", "", "", ""];

// DOM elements
const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const board = document.getElementById('board');

const scoreX = document.getElementById('score-x'); // Punteggio X
const scoreO = document.getElementById('score-o'); // Punteggio O
const scoreDraw = document.getElementById('score-draw'); // Punteggio Pareggi
const body = document.getElementById('background'); // colore background body

// event listeners

const symbolButtons = document.querySelectorAll('.symbol-btn');

symbolButtons.forEach(button => { // Event listener per ogni pulsante
    button.addEventListener("click", function() {
        const selectedSymbol = button.getAttribute("data-symbol"); 
        currentPlayer = selectedSymbol;
        startGame();
    });
});

function updateTurnDisplay() {
    const turnDisplay = document.getElementById('turn-display');
    turnDisplay.textContent = `Turn: ${currentPlayer}`; //mostra chi è il giocatore corrente
}

// start game
function startGame() {
    startScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');

    boardState = ["", "", "", "", "", "", "", "", ""];
    gameActive = true;
    
    createBoard(); 
    updateTurnDisplay();
}

// gestisce il click su una cella
// function handleCellClick(event) {
//     // prendi l'indice della cella cliccata
//     const index = event.target.getAttribute('data-index');
// 
//     console.log("Cella cliccata:", index); // verifica in console
// }


// create board
function createBoard() {
    board.innerHTML = ''; // pulisce board
    for (let i = 0; i < 9; i++) { // Ciclo 9 celle
        const cell = document.createElement('div'); // crea div nuovo

        cell.classList.add('cell'); // assegna la classe .cell(stileCSS)
        cell.setAttribute('data-index', i); //Salva l'indice della cella

        cell.addEventListener('click', handleCellClick); // Collega il click ala funzione che gestirà il turno

        board.appendChild(cell); // aggiunge la cella nella pagina
    }
}

// Reset Game
function resetGame () {
    boardState = ["", "", "", "", "", "", "", "", ""]; // celle vuote
    gameActive = true;
    body.classList.remove('winState');

    createBoard(); // ricrea tutte le celle
    updateTurnDisplay(); // aggiorna il display del turno

}

// handleCellClick: gestisce il click su una cella
function handleCellClick(event) {
    const cell = event.target;
    const index = cell.getAttribute('data-index');

    if (boardState[index] !== "" || !gameActive) return;

    boardState[index] = currentPlayer;
    cell.textContent = currentPlayer;

    if (checkWinner()) {
        gameActive = false;
        body.classList.add('winState') //background verde
        winSound.play();
        //alert(`${currentPlayer} wins!`);
        updateScore(currentPlayer);
        setTimeout(resetGame, 2000);
        return;
    }

    if (!boardState.includes("")) {
        gameActive = false;
        //alert("Draw!");
        updateScore("draw");
        setTimeout(resetGame, 2000);
        return;
    }

    // cambia turno
    currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
    updateTurnDisplay();
}

function checkWinner() {
    for (let i = 0; i < winConditions.length; i++) {
        const condition = winConditions[i];
        const a = condition[0];
        const b = condition[1];
        const c = condition[2];

        // se le tre celle sono uguali e non vuote
        if (boardState[a] !== "" && boardState[a] === boardState[b] && boardState[a] === boardState[c]) { // se A non è vuoto(quindi c'è qualcosa), e A è uguale a B, e A è uguale a C, allora hai vinto. A, B e C sono gli indici dentro l'array nelle win conditions.
            return true; // c'è un vincitore
        }
    }
    return false; // nessun vincitore
}

function updateScore(player) {
    if (player === 'X') {
        scoreX.textContent = Number(scoreX.textContent) + 1;
    } else if (player === 'O') {
        scoreO.textContent = Number(scoreO.textContent) + 1;
    } else {
        scoreDraw.textContent = Number(scoreDraw.textContent) + 1;
    }
}