'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number 🎊';
// document.querySelector('.message').textContent = 'Correct Number';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// TRY AGAIN FUNCTIONALITY
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';

  document.querySelector('.guess').value = '';

  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
});

// GUESSING FUNCTIONALITY
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // when there's no input
  if (!guess) {
    displayMessage('No number!⛔');

    // when player wins
  } else if (guess === secretNumber) {
    displayMessage('🎊 Correct Number');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('😖You lost the game.');
      document.querySelector('.number').textContent = secretNumber;

      document.querySelector('.score').textContent = 0;
    }
  }
});
