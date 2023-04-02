/*Get the DOM Elements: select the cells of the game board, the message
element to the player, and the reset (restart) game button.
*/
const cells = document.querySelectorAll('.cell');
const userMessage = document.getElementById('user-message');
const resetBtn = document.getElementById('reset-btn');

/*Sounds: cosnt used to store the audio elements to be played -> retrieved from
the DOM -> better for performance and readability.*/
const clickSound = document.getElementById('click-sound');
const playerXWins = document.getElementById('player-x-wins');
const playerOWins = document.getElementById('player-o-wins');
const tiedGame = document.getElementById('tied-game');
const xBeep = document.getElementById('x-beep');
const oBeep = document.getElementById('o-beep');
const resetSound = document.getElementById('reset-sound');

/*The game is stored in these two variables: currentPlayer -> keeps track of
the player's turn; activeGame -> indicates whether the game is still going on.
**IMPORTANT: satisfies US-1 -> values are initialized to start a new game.*/
let currentPlayer = '👽';
let activeGame = false;

/*This function is an extra feature that plays audio depending on which 
player won. If the current player is '👽' ('X'), it plays the sound for 
player X, otherwise for player O (play method).*/
function playWinSound() {
      if (currentPlayer === '👽') {
          playerXWins.currentTime = 0;
          playerXWins.play();
    } else {
          playerOWins.currentTime = 0;
          playerOWins.play();
    }
  }

/*This function is importantant because there are specific tasks attached:
1) First, the previously attached click event listeners are removed from the
cells by using the forEach method (loops through the array elements -> each 
element represents the cell -> the function handleCellClick is passed in as 
the event handler), 2) the currentPlayer and activeGame variables are updated, 
3) the event listeners are added back to handle the new game logic, 4) the 
clickSound audio is played to indicate the start of the game when the page loads,
and 5) message is displayed for each players turn.**IMPORTANT: satisfies US-3 -> 
message to show player's turn.*/
function startNewGame() {
      cells.forEach(cell => {
      cell.removeEventListener('click', handleCellClick);
    });
            activeGame = true; 
            currentPlayer = '👽';

      cells.forEach(cell => {
      cell.addEventListener('click', handleCellClick);
     });
            clickSound.currentTime = 0;
            clickSound.play();
            userMessage.textContent = `Player ${currentPlayer}`;
}

resetBtn.addEventListener('click', resetGame);
function resetGame() {
/*This function is important because the game is reset back to it's initial
state after a game is played. There are specific tasks attached:
1) First, activeGame = false to show the game is no longer in play, 2) the
previously attached click event listeners are removed from the cells
(forEach method), 3) the text content of each cell is set to an empty string using 
the forEach method to clear 'X' or 'O' previously in each cell, 4) currentPlayer
variable is set to '👽' to indicate the next player to move is the alien ('X')
player, 5) the message text content is cleared by setting it to an empty string,
6) currentTime property of the resetSound object reset to 0 (the sound will start 
from the beginning), and 7) the resetSound (play method). **IMPORTANT: satisfies
US-3 & US-7 (the user can play the game w/o refreshing the page).*/
            activeGame = false;
       cells.forEach(cell => cell.removeEventListener('click', handleCellClick));
       cells.forEach(cell => cell.textContent = '');
  
            currentPlayer = '👽';
            userMessage.textContent = '';
            resetSound.currentTime = 0;
            resetSound.play();
} 

/*This function is important because it handles user clicks and displays the player's
statuses (won or game tied) -> the specific cell clicked by the user is retrieved
(event.target; the user is not be able to click the same square twice). 1) If the 
game is not active OR the cell is not empty, the function does nothing, 2) the text
content of the clicked cell is set to the current player's symbol ('👽' or '👾'),
3) the checkForWin condition displays a win message if the currentPlayer has won
(winning sound is played) - the game ends, 4) IF the game is not won, the
checkForTie condition displays the game tied message (tied game sound is played)
and ends the game, 5) IF the game is neither won or tied, the function switches the
current player and updates the message to indicate the player's turn, sound is
played based on the current player's symbol, 6) event listeners added to the reset
button, 7) the DOMContentLoaded event added to start a new game when the page loads
or when the reset button is clicked. **IMPORTANT: satisfies US-2, US-4, US-5, US-6.*/
function handleCellClick(event) {
        const cell = event.target;
        if (!activeGame || cell.textContent !== ''){
            return; 
}   
        cell.textContent = currentPlayer;
        if (checkForWin())  
      {  
        userMessage.textContent = `${currentPlayer} wins!`;
            playWinSound();
            activeGame = false; 
            return;
}
        if (checkForTie())  
     {   
        userMessage.textContent = "It's a tie!";
            tiedGame.currentTime = 0;
            tiedGame.play();
            activeGame = false;
            return;
     }
        currentPlayer = currentPlayer === '👽' ? '👾': '👽';
        userMessage.textContent = `Player ${currentPlayer}`;
        currentPlayer === '👽' ? xBeep.play() : oBeep.play();
}
resetBtn.addEventListener('click', startNewGame);
document.addEventListener('DOMContentLoaded', startNewGame);

/*This function determines if the currentPlayer has won -> the some method (doesn't
modify the array) is used to iterate over each of the eight possible winning
combinations -> combinations stored in winningMoves array -> Destructuring 
assignment (binding) is used to assign the values of the combination to variables
[a, b, c] -> THEN checks if the current player's symbol appears in all three
corresponding cells using the textContent property. **IMPORTANT LOGIC FUNCTION:
checks for a win in three directions: horizontal, vertical, and diagonal by using
an array pattern instead of multiple IF statements (more functional); the condition
checks if the data in cells a, b & c === equal to currentPlayer 'X' or currentPlayer 'O'.
FALSE if none of the winning combinations are satisfied.*/
function checkForWin() {
           const winningMoves = [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6]   
           ];
    return winningMoves.some(combination => {
           const [a, b, c] = combination; 
    return cells[a].textContent === currentPlayer && 
           cells[b].textContent === currentPlayer && 
           cells[c].textContent === currentPlayer;
  });
}

/*This function returns a boolean to indicate whether the game has reached a tie or not.
**IMPORTANT: Array.from() method is used to convert the HTML elements into a new array ->
every() method used to check if every cell has been marked with an 'X' or 'O' (US-2) ->
the textContent property is not an empty string. If every cell is not empty, the
function returns true indicating that the game has reached a tie. If any cell is still
empty, the function returns false. */
function checkForTie() {
    return Array.from(cells).every(cell => cell.textContent !== '');
}

