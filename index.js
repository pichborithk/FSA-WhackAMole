let score = 0;
const holes = document.querySelectorAll('.hole');
const gameArea = document.getElementById('whack-a-mole');
const scoreDisplay = document.getElementById('score');
const startBtn = document.querySelector('#start');
let isStart = false;

function getRandomHole() {
  return Math.floor(Math.random() * holes.length);
}

function randomPopUp() {
  const index = getRandomHole();
  //   console.log(index);
  holes[index].classList.toggle('mole');
}

function getHit(event) {
  //   console.log(event.target);
  if (event.target.matches('.mole')) {
    score++;
    event.target.classList.remove('mole');
    scoreDisplay.innerText = score;
  }
}

function startGame() {
  if (!isStart) {
    isStart = setInterval(randomPopUp, 300);
    startBtn.innerText = 'STOP';
  } else {
    clearInterval(isStart);
    isStart = false;
    startBtn.innerText = 'START';
  }
}

gameArea.addEventListener('click', getHit);

startBtn.addEventListener('click', startGame);

document.body.addEventListener('keyup', (event) => {
  if (event.code === 'Space') {
    startGame();
  }
});
