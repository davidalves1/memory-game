const newGame = document.querySelector('#newGame');
const startBtn = document.querySelector('#startBtn');
const gameStart = document.querySelector('#gameStart');
const gameScreen = document.querySelector('#gameScreen');
const players = document.querySelector('#players');

newGame.addEventListener('click', (event) => {
  const isConfirmed = confirm('Deseja finalizar o jogo atual e iniciar um novo jogo?');

  if (isConfirmed) {
    players.classList.remove('hide');
    gameStart.classList.remove('hide');
    gameScreen.classList.add('hide');
  }
});

startBtn.addEventListener('click', (event) => {
  players.classList.toggle('hide');
  gameStart.classList.toggle('hide');
  gameScreen.classList.toggle('hide');
});
