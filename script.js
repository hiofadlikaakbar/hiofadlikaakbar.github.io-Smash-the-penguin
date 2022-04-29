const ice = document.querySelectorAll(".ice");
const penguin = document.querySelectorAll(".penguin");
const papanSkor = document.querySelector(".papan-skor");
const bonk = document.querySelector("#bonk");
let iceBefore;
let finish;
let score;

function randomIce(ice) {
  const i = Math.floor(Math.random() * ice.length);
  const iRandom = ice[i];
  if (iRandom == iceBefore) {
    randomIce(ice);
  }
  iceBefore = iRandom;

  return iRandom;
}

function timeRandom(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function spawnPenguin() {
  const iRandom = randomIce(ice);
  const tRandom = timeRandom(300, 1000);
  iRandom.classList.add("spawn");
  setTimeout(() => {
    iRandom.classList.remove("spawn");
    if (!finish) {
      spawnPenguin();
    }
  }, tRandom);
}
// start Easy difficulty
function start() {
  alert("Cetak 12 skor di difficulty Easy");
  finish = false;
  score = 0;
  papanSkor.textContent = 0;
  spawnPenguin();
  setTimeout(() => {
    finish = true;
    papanSkor.textContent = `waktu habis total skor mu adalah ${score} Well done`;
    if (score < 12) {
      papanSkor.textContent = `Ini masih Easy padahal`;
    }
  }, 15000);
}

function hit() {
  score++;
  papanSkor.textContent = score;
  this.parentNode.classList.remove("spawn");
  this.style.transition = "top 0.5s";
  bonk.play();
}

penguin.forEach((p) => {
  p.addEventListener("click", hit);
});

// Medium difficulty
function difficultyMedium() {
  const dRandom = randomIce(ice);
  const tRandom = timeRandom(300, 500);
  dRandom.classList.add("spawn");

  setTimeout(() => {
    dRandom.classList.remove("spawn");
    if (!finish) {
      difficultyMedium();
    }
  }, tRandom);
}
function medium() {
  alert("Cetak 8 skor di difficulty Medium");
  finish = false;
  score = 0;
  papanSkor.textContent = 0;
  difficultyMedium();
  setTimeout(() => {
    finish = true;
    papanSkor.textContent = `waktu habis total skor mu adalah ${score} tangan anda gesit juga`;
    if (score < 8) {
      papanSkor.textContent = `Mulai Susah ya`;
    }
  }, 15000);
}

// Hard difficulty
function difficultyHard() {
  const dRandom = randomIce(ice);
  const tRandom = timeRandom(260, 200);
  dRandom.classList.add("spawn");

  setTimeout(() => {
    dRandom.classList.remove("spawn");
    if (!finish) {
      difficultyHard();
    }
  }, tRandom);
}

function hard() {
  alert("Cetak 6 skor di difficulty Hard");
  finish = false;
  score = 0;
  papanSkor.textContent = 0;
  difficultyHard();
  setTimeout(() => {
    finish = true;
    papanSkor.textContent = `waktu habis total skor mu adalah ${score} Selamat anda resmi menamatkan game ini`;
    if (score < 6) {
      papanSkor.textContent = `Wowkowkwokw`;
    }
  }, 15000);
}
