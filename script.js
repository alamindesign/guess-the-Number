'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
const check_btn = document.querySelector('.check');
let input = document.querySelector('.number');
let setScore = document.querySelector('.score');
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //   when there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = 'No Number';
    displayMessage('⛔ No Number');
    // when the player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!!!';
    displayMessage('🎉 Correct Number!!!');
    input.textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    input.style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    // when the guess is high
  } else if (guess !== secretNumber) {
    if (score > 1) {
      let message = guess > secretNumber ? '📈 Too high!' : '📈 Too low!';
      //
      displayMessage(message);
      score--;
      setScore.textContent = score;
    } else {
      // document.querySelector('.message').textContent = '😢 You Lost the game!';
      displayMessage('😢 You Lost the game!');
      setScore.textContent = 0;
    }
  }
});

const again = document.querySelector('.again');
again.addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  input.style.width = '15rem';
  input.textContent = '?';
  setScore.textContent = score;
  document.querySelector('.guess').value = '';
});
