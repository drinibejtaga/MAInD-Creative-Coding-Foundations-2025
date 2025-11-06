// elementi documento
const scoreA = document.getElementById('score-a');
const scoreB = document.getElementById('score-b');

const incrementA = document.getElementById('increment-a');
const decrementA = document.getElementById('decrement-a');
const incrementB = document.getElementById('increment-b');
const decrementB = document.getElementById('decrement-b');

const resetButton = document.getElementById('reset-scores');

// variabili per tenere il punteggio attuale
let scoreValueA = 0;
let scoreValueB = 0;


// Quando clicchi su "+" della squadra A
incrementA.addEventListener('click', () => {
  scoreValueA = scoreValueA + 1;          // aumenta il punteggio
  scoreA.textContent = scoreValueA;       // aggiorna il testo nel browser
  console.log("Incremento squadra A:", scoreValueA);
});

// Quando clicchi su "-" della squadra A
decrementA.addEventListener('click', () => {
  if (scoreValueA > 0) {                  // evita punteggi negativi
    scoreValueA = scoreValueA - 1;
    scoreA.textContent = scoreValueA;
  }
  console.log("Decremento squadra A:", scoreValueA);
});

// Quando clicchi su "+" della squadra B
incrementB.addEventListener('click', () => {
  scoreValueB = scoreValueB + 1;
  scoreB.textContent = scoreValueB;
  console.log("Incremento squadra B:", scoreValueB);
});

// Quando clicchi su "-" della squadra B
decrementB.addEventListener('click', () => {
  if (scoreValueB > 0) {
    scoreValueB = scoreValueB - 1;
    scoreB.textContent = scoreValueB;
  }
  console.log("Decremento squadra B:", scoreValueB);
});

// Reset: riporta tutto a 0
resetButton.addEventListener('click', () => {
  scoreValueA = 0;
  scoreValueB = 0;
  scoreA.textContent = scoreValueA;
  scoreB.textContent = scoreValueB;
  console.log("Punteggi resettati!");
});

// SWITCH VIEW
const toggleViewButton = document.getElementById('toggleView');
const scoreboard = document.getElementById('scoreboard');

// Quando clicchi il pulsante "Switch view"
toggleViewButton.addEventListener('click', () => {
  console.log("Switch view clicked!");
  scoreboard.classList.toggle('vertical');
});

// SAVE SCORE
const saveButton = document.getElementById('save-scores');
const resultsList = document.getElementById('results-list');
const clearButton = document.getElementById('clear-saved');

saveButton.addEventListener('click', () => {
  const teamAName = document.getElementById('input-a').value || 'Team A';
  const teamBName = document.getElementById('input-b').value || 'Team B';

  // Crea un nuovo elemento <li>
  const listItem = document.createElement('li');
  listItem.textContent = `${teamAName}: ${scoreValueA} — ${teamBName}: ${scoreValueB}`;

  // Aggiungilo alla lista
  resultsList.appendChild(listItem);

  console.log("Score saved on screen!");
});

// CLEAR SAVED SCORES
clearButton.addEventListener('click', () => {
  resultsList.innerHTML = ''; // svuota la lista
  console.log("All saved scores cleared!");
});
