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
function startGame() { // Funzione per passare dalla scelta giocatore alla griglia con l'inizio del gioco
    startScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');

    boardState = ["", "", "", "", "", "", "", "", ""]; // board vuoto con le celle libere
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

const API_KEY = "PnhYbLljqIFqZVE7MHcubiNB26aCzzbL";

function showGif(type) {
    const gifContainer = document.getElementById("gif-container");
    gifContainer.innerHTML = ""; // pulisce

    let searchQuery = type === "win" ? "celebration" : "sad"; // Il giocatore vince? Celebra, se no triste

    fetch(`https://api.giphy.com/v1/gifs/search?q=${searchQuery}&api_key=${API_KEY}&limit=20`) // cerca parola chiavi in base alla searchQuery, con un limite di massimo 20 gif
        .then(res => res.json()) // trasforma la risposta in un oggetto .json)
        .then(data => {
            const randomIndex = Math.floor(Math.random() * data.data.length); //  Scelta Gif casuale, tra 0 e la lunghezza dell'array delle gif, Math.floor arrotonda per difetto
            const gifUrl = data.data[randomIndex].images.downsized.url; // Scelta Gif in maniera randomica

            const img = document.createElement("img"); // creo nuovo img
            img.src = gifUrl; // Imposta img con l'url della gif

            gifContainer.appendChild(img); // inserisco nel gifContainer con appendChild
        });
}

// Reset Game

function resetGame () {
    boardState = ["", "", "", "", "", "", "", "", ""]; // celle vuote
    gameActive = true;
    body.classList.remove('winState'); // rimuovi background verde

    createBoard(); // ricrea tutte le celle
    updateTurnDisplay(); // aggiorna il display del turno

}

// handleCellClick: gestisce il click su una cella
function handleCellClick(event) {
    const cell = event.target;
    const index = cell.getAttribute('data-index'); // prendi l'indice della cella cliccata

    if (boardState[index] !== "" || !gameActive) return; // se la cella è già occupata o il gioco è finito, esci

    boardState[index] = currentPlayer; // aggiorna lo stato della board
    cell.textContent = currentPlayer; // mostra il simbolo nella cella

    if (checkWinner()) {
    gameActive = false; // il gioco finisce
    body.classList.add('winState') //background verde
    showGif("win");
    winSound.play();
    updateScore(currentPlayer);
    setTimeout(() => {
        resetGame();
        document.getElementById("gif-container").innerHTML = "";
    }, 3500);  
    return;
    }

    if (!boardState.includes("")) { // se non ci sono celle vuote, è un pareggio
    gameActive = false;
    showGif("draw");
    updateScore("draw");
    setTimeout(() => {
        resetGame();
        document.getElementById("gif-container").innerHTML = "";
    }, 3500);
    return;
    }

    // cambia turno
    currentPlayer = (currentPlayer === 'X') ? 'O' : 'X'; // Current player: 
    updateTurnDisplay();
}

function checkWinner() {
    for (let i = 0; i < winConditions.length; i++) { // ciclo tutte le condizioni di vittoria
        const condition = winConditions[i]; // prendo la condizione di vittoria corrente
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
    if (player === 'X') { // Se il giocatore corrisponde a "X" il numero del suo score si aggiorna di +1
        scoreX.textContent = Number(scoreX.textContent) + 1; // Update score X player
    } else if (player === 'O') { // Se ili giocatore corrisponde a "O" il numero del suo score si aggiorna di +1
        scoreO.textContent = Number(scoreO.textContent) + 1; // Update score O player
    } else {
        scoreDraw.textContent = Number(scoreDraw.textContent) + 1; // Update score draw score
    }
}

//NAV
// --- NAV SCREEN HANDLING ---
const rulesBtn = document.getElementById("rules-btn");
const rulesScreen = document.getElementById("rules-screen");
const backBtn = document.getElementById("back-btn");

rulesBtn.addEventListener("click", () => { // Pressing button rules, from start to rules
    startScreen.classList.add("hidden");
    rulesScreen.classList.remove("hidden");
});

backBtn.addEventListener("click", () => { // Back from Rules screen to Start screen
    rulesScreen.classList.add("hidden");
    startScreen.classList.remove("hidden");
});