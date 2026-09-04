let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

let prevGuess = [];
let count = 0;
let playGame = true;

const p = document.createElement('p');

submit.addEventListener('click', (e) => {
  e.preventDefault();
  const guess = userInput.value;
  // console.log(guess);
  validateGuess(guess);
});

const validateGuess = (guess) => {
  if (isNaN(guess) || guess > 100 || guess < 1) {
    alert('Please enter a valid number..');
  } else {
    prevGuess.push(guess);
    if (count == 10) {
      displayGuess(guess);
      displayMessage(`Game Over... Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
};

const checkGuess = (guess) => {
  if (guess == randomNumber) {
    displayMessage(`Congratulations!!! YOU WIN`);
    endGame();
  } else if (guess > randomNumber) {
    displayMessage(`Too High`);
  } else {
    displayMessage(`Too low`);
  }
};

const displayGuess = (guess) => {
  userInput.value = '';
  remaining.innerHTML = `${10 - count}`;
  guessSlot.innerHTML += `${guess} `;
  count++;
};

const displayMessage = (message) => {
  lowOrHigh.innerHTML = `<h3>${message}</h3>`;
};

const endGame = () => {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id = "newButton">Start a New Game</h2>`;
  startOver.appendChild(p);
  newGame();
};

const newGame = () => {
  const newGameButton = document.querySelector('#newButton');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    count = 0;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${10 - count} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
};
