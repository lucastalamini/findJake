// Targeted elements

const btn = document.getElementById("btn");
const container = document.querySelector(".container");
const jake = document.querySelector(".jake-img");
const jakeImg = document.querySelector(".img");
const audio = new Audio("/bells.mp3");
const gameOver = document.querySelector(".game-over");
const btnPlayAgain = document.getElementById("btn-play-again");

// Random Number for positioning

function getRandomTop() {
  randomTop = Math.floor(Math.random() * 86);
  return randomTop;
}

console.log(getRandomTop());

function getRandomLeft() {
  randomLeft = Math.floor(Math.random() * 95);
  return randomLeft;
}

console.log(getRandomLeft());
// console.log(getRandomNumber());

// Add Event Listeners

// Randomize Jake Location

btn.addEventListener("click", function () {
  container.classList = "container-hidden";
  jake.classList = "jake-img-hidden";
  jakeImg.style.top = `${getRandomTop()}%`;
  jakeImg.style.left = `${getRandomLeft()}%`;
});

// Show Jake when he is clicked and exhibit game over page
jakeImg.addEventListener("click", function () {
  jake.classList = "jake-img";
  gameOver.classList.remove("game-over-hidden");
});

// Reload the page to play again
btnPlayAgain.addEventListener("click", refreshPage);

// Refresh page function

function refreshPage() {
  window.location.reload();
}

// Mouse Over Alert

window.ev = false;

document.getElementById("jake-img").onmouseover = function () {
  window.ev = true;
  console.log(window.ev);
  audio.play();
};

document.getElementById("jake-img").onmouseout = function () {
  window.ev = false;
  console.log(window.ev);
};
