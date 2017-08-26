// Set up store

const store = {
  body: {},
  apple: { top: 0, left: 0 },
  head: { top: 0, left: 0 },
  speed: 300,
  currentDirection: 'down',
  gameOver: false,
}

// Set the new game conditions
// Initialize keys to set direction
// Set the reset game conditions
// Increment speed
// Increment score
// update top score
// make play again message
// set game if out of bounds
// set if cannibal

// Add event listener to load up game

const newGame = () => {
  const apple = new Apple();
  const head = new Head();
}


document.addEventListener('DOMContentLoaded', () => {
  newGame();
})