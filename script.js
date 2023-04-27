const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const currenscoreEl0 = document.getElementById("current--0");
const currenscoreEl1 = document.getElementById("current--1");
const diceEl = document.querySelector(".dice");
const btnRoll = document.querySelector(".roll");
const btnhold = document.querySelector(".hold");
const btnnew = document.querySelector(".new");

let score, currentScore, activeplayer, playing;

const init = function () {
  score = [0, 0];
  currentScore = 0;
  activeplayer = 0;
  playing = true;
  score0El.textContent = 0;
  score1El.textContent = 0;
  currenscoreEl0.textContent = 0;
  currenscoreEl1.textContent = 0;
  diceEl.classList.add("hidden");
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player0El.classList.add("active--winner");
  player1El.classList.remove("active--winner");
};

init();

const switchplayer = function () {
  document.getElementById(`current--${activeplayer}`).textContent = 0;
  currentScore = 0;
  activeplayer = activeplayer == 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

btnRoll.addEventListener("click", function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activeplayer}`).textContent =
        currentScore;
      // currenscoreEl0.textContent=currentScore;
    } else {
      switchplayer();
    }
  }
});

btnhold.addEventListener("click", function () {
  if (playing) {
    score[activeplayer] += currentScore;
    document.getElementById(`score--${activeplayer}`).textContent =
      score[activeplayer];

    if (score[activeplayer] >= 20) {
      playing = false;
      diceEl.classList.add("hidden");
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.remove("player--active");
    } else {
      switchplayer();
    }
  }
});

btnnew.addEventListener("click", init);

l;
