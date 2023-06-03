const countDead = document.getElementById('dead');
const countLost = document.getElementById('lost');
const getHole = index => document.getElementById(`hole${index}`);

function clearGame() {
  countDead.textContent = 0;
  countLost.textContent = 0;
}

for (let i = 1; i < 9; i++) {
  getHole(i).onclick = function() {

    if (getHole(i).classList.contains('hole_has-mole')) {
      countDead.textContent++;
    } else {
      countLost.textContent++;
    }

    if (countDead.textContent == 10) {
      alert('Победа!');
      clearGame();
    } else if (countLost.textContent == 5) {
      alert('Вы проиграли!');
      clearGame();
    }
  }
}