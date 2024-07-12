'use strict';

const number = document.querySelector('.number');
const checkButton = document.querySelector('.check');
const message = document.querySelector('.message');
const scoreDisplay = document.querySelector('.score');
const highScoreDisplay = document.querySelector('.highscore');
const body = document.querySelector('body');
const againBtn = document.querySelector('.again');
const guessInput = document.querySelector('.guess');

let randomNumber = Math.trunc(Math.random() * 20) + 1;
console.log(randomNumber);
let score = 20;
let highScore = 0;
let gameIsFinished = false;

checkButton.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!gameIsFinished) {
    if (guess) {
      if (guess === randomNumber) {
        message.textContent = 'Congrats';
        gameIsFinished = true;
        number.textContent = randomNumber;
        body.style.backgroundColor = 'green';
        if (highScore < score) {
          highScore = score;
          highScoreDisplay.textContent = highScore;
        } else {
          highScore = highScore;
        }
      } else if (guess >= 20 || guess <= 0) {
        message.textContent = 'Enter a number between 0 - 20';
      } else if (guess !== randomNumber) {
        if (score > 1) {
          message.textContent = 'Wrong Answer, try again!';
          score--;
          scoreDisplay.textContent = score;
        } else {
          message.textContent = 'You lost the game.';
          score = 0;
          scoreDisplay.textContent = score;
        }
      }
    } else {
      message.textContent = 'Enter a value';
    }
  }
});

againBtn.addEventListener('click', () => {
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  body.style.backgroundColor = '#222';
  gameIsFinished = false;
  message.textContent = 'Start Guessing...';
  number.textContent = '?';
  scoreDisplay.textContent = score;
  guessInput.value = '';
});
