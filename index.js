let score = 0;
const holes = document.querySelectorAll('.hole');
const gameArea = document.getElementById('whack-a-mole');
const scoreDisplay = document.getElementById('score');

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

gameArea.addEventListener('click', getHit);
// setInterval(randomPopUp, 300);
