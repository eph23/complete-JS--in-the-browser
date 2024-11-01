'use strict';

let score = 20;
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

const displayMessage = function () {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // Not a number
  if (!guess) {
    // document.querySelector('.message').textContent = 'No Number...';
    displayMessage('No Number...');
  }

  // The guess is equal to the secret number/Guess is correct
  else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'CORRECT NUMBER!';
    displayMessage('CORRECT NUMBER!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  // If the guess is greater then the secret number
  else if (guess !== secretNumber) {
    if (score > 1) {
      /* document.querySelector('.message').textContent =
      guess > secretNumber ? 'Too high!' : 'Too low!'; */
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'You LOST the game...!';
      displayMessage('You LOST the game...!');
      document.querySelector('.score').textContent = 0;
    }
  }

  /*
  // If the guess is greater then the secret number
  else if (guess > secretNumber) {
    // And score is not less than 1
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You LOST the game...!';
      document.querySelector('.score').textContent = 0;
    }
  }

  // If the guess is less then the secret number
  else if (guess < secretNumber) {
    // And score is not less than 1
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You LOST the game...!';
      document.querySelector('.score').textContent = 0;
    }
  }
  */
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
