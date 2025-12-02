## TRISSSSSS

## Brief

Choose a “mini-game” to rebuild with HTML, CSS and JavaScript. The requirements are:

- The webpage should be responsive
- Choose an avatar at the beginning of the game
- Keep track of the score of the player
- Use the keyboard to control the game (indicate what are the controls in the page). You can also use buttons (mouse), but also keyboard.
- Use some multimedia files (audio, video, …)
- Implement an “automatic restart” in the game (that is not done via the refresh of the page)

## Project Description
TTRISSSSSS is a game where the user selects X or O and plays by clicking on the cells. The game checks every move to detect a win or draw. Players can restart at any time. Simple interface showing turns, victory or a draw message.
When there's a win the API calls an animated gif for celebration, when there's a loss calls a delusional gif.

## Flowchart
![Flow chart](DOC/Diagramma%20TRIS%20-%20Drini%20Bejtaga.jpg)

## Functions list

// game parameters
const winConditions = [
    [0,1,2],[3,4,5],[6,7,8], // righe
    [0,3,6],[1,4,7],[2,5,8], // colonne
    [0,4,8],[2,4,6]           // diagonali
];

Description:
winConditions is a two-dimensional array that stores all the possible winning combinations in the Tic-Tac-Toe game.
Each inner array represents the board cell indexes that form a winning line.
Returns an array of arrays of numbers (each sub-array represents a winning condition).

----

function updateTurnDisplay() 

Updates the text inside the HTML element with the ID turn-display to show which player’s turn it currently is.
It uses the global variable currentPlayer to display the active player symbol (e.g., “X” or “O”).

----

// start game
function startGame()

Description:
Initializes and starts a new Tic-Tac-Toe game.
This function hides the start screen and displays the game screen, resets the game board state, enables the game logic, and sets up the game board elements. It also updates the UI to show the current player’s turn.

----

// create board
function createBoard() 

Description:
Creates the 3×3 game board dynamically in the DOM.
It first clears any existing cells inside the board element and then generates 9 new cells (one for each board position).

----

function showGif(type) 

Description:
Displays a random GIF inside the element with ID gif-container.
The function searches GIFs on the Giphy API based on the type parameter "win" shows a celebration GIF,otherwise, a sad GIF is displayed
It fetches up to 20 GIF results, randomly selects one, creates an img element for it, and inserts it into the page

----

function resetGame () 
Description:
Resets the game state to its initial configuration in order to start a new round without going back to the start screen.
It clears the board state, reactivates the game logic, removes any win-related styling from the page, then regenerates the board and updates the turn display.

----

function handleCellClick(event) 

Description:
Handles the game logic when a player clicks on a cell.
The function performs the following operations: 

1 - Retrieves the clicked cell and its board index.

2 - Prevents moves if:

    the cell is already occupied, or

    the game is no longer active.

3 - Updates the visual cell content and the internal board state with the current player symbol (X or O).

4 - hecks if the move caused a win:

    If yes → stops the game, shows a win GIF, plays a sound, updates the score, and resets the game after a delay.

5 - If no winner and the board is full → handles a draw in a similar way, without a winner.

6 - If the game continues → switches turn to the other player and updates the display.

----

function checkWinner()
Description:
Checks the current state of the board to determine if a player has won the game.
It loops through all predefined winning combinations stored in winConditions.
For each combination, it verifies if the three corresponding cells in boardState:

1 - Are not empty

2 - Contain the same player symbol (X or O)

If a match is found, the function concludes that a player has won.

----

function updateScore(player)

Description:
Updates the scoreboard based on the outcome of the game.
The function reads the current score from the respective DOM element (scoreX, scoreO, scoreDraw), converts it to a number, increments it by 1, and updates the displayed value.