//Get the DOM Elements
//Get all cells on the board
const cells = document.querySelectorAll('.cell');
const userMessage = document.getElementById('user-message');
const newGameButton = document.getElementById('new-game-btn');
const resetBtn = document.getElementById('reset-btn');
const clickSound = document.getElementById('click-sound');

let currentPlayer = 'X';
let activeGame = false; //set to false b/c I don't want the user to start the //game by clicking on a cell; only active when 'new-game-btn' is clicked.


//US-7: As a user, I should be able to play the game again without refreshing the page.
function startNewGame() {


  // Remove cell click event listeners
  cells.forEach(cell => {
    cell.removeEventListener('click', handleCellClick);
  });

  activeGame = true; //The game is active once the newGameButton is clicked
  currentPlayer = 'X'; //initial player is set to 'X'

     // Add cell click event listeners
  //the function resets the game and updates the message for the current player.
  cells.forEach(cell => {
   cell.addEventListener('click', handleCellClick);

  });

    // Disable new game button
    newGameButton.disabled = true;


      // Play click sound
  clickSound.currentTime = 0;
  clickSound.play();

  //activeGame = true; //The game is active once the newGameButton is clicked
  //currentPlayer = 'X'; //initial player is set to 'X'


  //US-3: As a user, I should be shown a message after each turn for if I win, lose, tie or who's turn it is next.
  // Display the user message
  userMessage.textContent = `It's ${currentPlayer}'s turn`;




}

//US-1: As a user, I should be able to start a new tic tac toe game.
//Add an event listener to the new game button
newGameButton.addEventListener('click', startNewGame);





resetBtn.addEventListener('click', resetGame);

function resetGame() {
  activeGame = false;
  cells.forEach(cell => cell.removeEventListener('click', handleCellClick));
  cells.forEach(cell => cell.textContent = '');
  currentPlayer = 'X';
  userMessage.textContent = '';

   // Enable new game button
   newGameButton.disabled = false;

}




//US-1: As a user, I should be able to start a new tic tac toe game.
//US-2: As a user, I should be able to click on a square to add X first and then O, and so on.
//What does this code do? A function to handle cell clicks. When the user clicks on a cell,
//the function is launched b/c it is attached as an event listener to each cell.
function handleCellClick(event) {
    //event.target is used to get the specific cell (target) clicked by the user.
    const cell = event.target;

    //US-4: As a user, I should not be able to click the same square twice.
    //Need a condition to prevent the user from clicking on a cell 
    //that has been clicked -> So, not an empty cell. OR
    //User shouldn't be able to click a cell if the game is not active (!==activeGame)
    if  (!activeGame)     
                {
        //checks if the game is active; can only play game when btn is clicked
          return; 
}   
    if (cell.textContent !== '') {
    return;   //the player ia not allowed to click the same square twice.
}
        //Need to set textContent to 'X' or 'O' when clicked by user.
        cell.textContent = currentPlayer;
        
        //Need function to determine which player has won
        if (checkForWin()) 
        
        {   //Need winning message displayed if true 
            userMessage.textContent = `${currentPlayer} wins!`;
            //US-6: As a user, I should not be able to continue playing once I win, lose, or tie.
            activeGame = false; //set to false to indicate the game is over
            return;
        }

        //Need function to determine if game was a tie
        if (checkForTie()) 
        
        {   //Need to display tied game message
            userMessage.textContent = "It's a tie!";
            //US-6: As a user, I should not be able to continue playing once I win, lose, or tie.
            activeGame = false; //set to false to indicate the game is over
            return;
        }

         //US-5: As a user, I should be shown a message to take it's turn.
        changePlayer(); //call to switch the players from 'X' to 'O' (vice versa)
        userMessage.textContent = `It's ${currentPlayer}'s turn`;
 
           // Play click sound
  clickSound.currentTime = 0;
  clickSound.play();



     //HTML userMessage variable to display the message -> user turn
    //Use textcontent -> to get text of div element (fill in the cell) -> to display if currentPlayer is 'X' or 'O'.
}


//US-2: As a user, I should be able to click on a square to add X first and then O, and so on.
//What does this code do? A function to toggle/change players (take turns during the game).
function changePlayer() {
    //use ternary operator for if/else statement and to toggle between 'X' and 'O' for the currentPlayer
    //When the function is called -> If currentPlayer is 'X', then change other player to 'O', otherwise make player 'X'. 
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
   
}


//What does this code do? A function with a condition that checks for a win in three directions: horizontal, vertical, and diagonal.
//Easiest way is to use an array pattern instead of if statements
//The array stores all possible combinations of winning moves for player X & player O
//IMPORTANT: The array shouldn't be modified -> use some() method to iterate over the combinations
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

     //[a,b,c]
     //[a,b,c]
     //[a,b,c]
     //Need a result that matches all three cells a,b & c (horizontal,vertical & diagnal).
     //The some() method used to iterate over each winning combination -> returns true if any combination are satisfied.
  return winningMoves.some(combination => {
      const [a, b, c] = combination; //MDN: (binding) destructuring assignment used: the first three elements of the
             //array are converted into separate variables a, b & c.

      //Need a condition that checks if the data in cells a, b & c === equal to currentPlayer 'X' or currentPlayer 'O'
      //Use textContent property to compare each cell to the currentPlayer variable 'X' or 'O'
      //All three cells have to matchm-> returns true -> winner
      //False if none of the winning combinations are satisfied
      return cells[a].textContent === currentPlayer && 
             cells[b].textContent === currentPlayer && 
             cells[c].textContent === currentPlayer;
  });
}
//What does this code do? A function that checks for a tied game.
//IMPORTANT: HTML elements are used (X & O) -> not an array (array-like objects)
//IMPORTANT: Array.from method will convert the HTML elements into a new array.
//Next, need to check if every cell has been marked with an 'X' or 'O' -> use every() method
//IMPORTANT: every() method can only be called on an array, so need to use the array.from () method to convert the cells first.
//Then, every() method checks if each cell in the new array has been marked.
//IF the cell is not marked THEN the string is empty -> use textContent property
//IF there are no empty strings THEN every()method -> true -> tied game
//IF there are empty strings left in the game THEN every()method -> false -> game is not over.
function checkForTie() {
      return Array.from(cells).every(cell => cell.textContent !== '');
}

//Clicking on Play Game button clears the board/starts the game
cells.forEach(cell => {
  cell.addEventListener('click', handleCellClick);
});

