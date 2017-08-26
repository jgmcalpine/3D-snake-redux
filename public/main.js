// Set up store

const store = {
  body: {},
  apple: { top: 0, left: 0 },
  head: { top: 0, left: 0 },
  speed: 300,
  currentDirection: 'down',
  gameOver: false,
  score: 0
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
};

const board = document.querySelector('#board');

const initializeKeys = () => {
  window.addEventListener('keydown', function(e) {
    if (e.keyCode === 40 && store.currentDirection !== 'up') {
      e.preventDefault();
      store.currentDirection = 'down';
    } else if (e.keyCode === 39 && store.currentDirection !== 'left') {
      e.preventDefault();
      store.currentDirection = 'right';
    } else if (e.keyCode === 38 && store.currentDirection !== 'down') {
      e.preventDefault();
      store.currentDirection = 'up';
    } else if (e.keyCode === 37 && store.currentDirection !== 'right') {
      e.preventDefault();
      store.currentDirection = 'left';
    } else if (e.keyCode === 32 && store.gameOver) {
      e.preventDefault();
      resetBoard();
    }
  });
};

function incrementScore() {
  if (store.speed > 150) {
    store.score += 20;
    document.querySelector('#score span').innerHTML = store.score;
  } else {
    store.score += 50;
    document.querySelector('#score span').innerHTML = store.score;
  }
}

function increaseSpeed() {
  if (store.speed > 200) store.speed -= 20;
  else if (store.speed > 100) store.speed -= 10;
  else store.speed -=5;
}

function checkEdges() {
  if (store.head.top > 550 || store.head.top < 0 || store.head.left < 0 || store.head.left > 550) {
    store.gameOver = true;
    playAgainMessage();
  }
}

function playAgainMessage() {
  const playAgain = document.createElement('div');
  playAgain.setAttribute('id', 'play-again');
  playAgain.innerHTML = 'Press spacebar to play again!';
  board.appendChild(playAgain);
}

function resetBoard() {
  store.score = 0;
  store.head = {top: 0, left: 0};
  store.speed = 300;
  store.body = {};
  store.gameOver = false;
  store.currentDirection = 'down';

  while(board.firstChild) {
    document.querySelector('#board').removeChild(board.firstChild)
  }

  document.querySelector('#score').innerHTML = `Score: <span>${store.score} </span>`;

  newGame();
}


document.addEventListener('DOMContentLoaded', () => {
  initializeKeys();
  newGame();
});