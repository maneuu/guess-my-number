'use strict';

// Variáveis principais
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

// Elementos DOM
const numberElement = document.querySelector('.number');
const messageElement = document.querySelector('.message');
const scoreElement = document.querySelector('.score');
const highscoreElement = document.querySelector('.highscore');
const guessInput = document.querySelector('.guess');
const bodyElement = document.querySelector('body');

// Largura original do número
const originalWidth = getComputedStyle(numberElement).width;
const numericOriginalWidth = parseFloat(originalWidth);

// Função para exibir mensagem
const displayMessage = msg => {
  messageElement.textContent = msg;
};

// Evento: verificar número
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(guessInput.value);

  if (!guess) {
    displayMessage('⛔ No number!');
  } else if (guess === secretNumber) {
    numberElement.textContent = secretNumber;
    displayMessage('🎉 Correct Number!');
    bodyElement.style.backgroundColor = '#60b347';
    numberElement.style.width = numericOriginalWidth * 2 + 'px';

    if (score > highscore) {
      highscore = score;
      highscoreElement.textContent = highscore;
    }
  } else if (score > 1) {
    displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
    score--;
    scoreElement.textContent = score;
  } else {
    displayMessage('💥 You lost the game!');
    scoreElement.textContent = 0;
  }
});

// Evento: resetar jogo
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  scoreElement.textContent = score;
  numberElement.textContent = '?';
  displayMessage('Start guessing...');
  bodyElement.style.backgroundColor = '#222';
  numberElement.style.width = originalWidth;
  guessInput.value = '';
});
