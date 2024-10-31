'use strict';

let score = 20;
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // Not a number
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number..';
  }

  // The guess is equal to the secret number
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'CORRECT NUMBER!';
  }

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
});
